'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';

// Types for the component
interface DockApp {
  id: string;
  name: string;
  icon: string | React.ReactNode;
}

interface MacOSDockProps {
  apps: DockApp[];
  onAppClick: (appId: string) => void;
  openApps?: string[];
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

const MacOSDock: React.FC<MacOSDockProps> = ({ 
  apps, 
  onAppClick, 
  openApps = [],
  className = '',
  orientation = 'vertical' // Default to vertical as requested
}) => {
  const isVertical = orientation === 'vertical';
  const [mousePos, setMousePos] = useState<number | null>(null);
  const [currentScales, setCurrentScales] = useState<number[]>(apps.map(() => 1));
  const [currentPositions, setCurrentPositions] = useState<number[]>([]);
  const dockRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const lastMouseMoveTime = useRef<number>(0);

  // Responsive size calculations based on viewport
  const getResponsiveConfig = useCallback(() => {
    if (typeof window === 'undefined') {
      return { baseIconSize: 64, maxScale: 1.6, effectWidth: 240 };
    }

    const smallerDimension = Math.min(window.innerWidth, window.innerHeight);
    
    // Scale icon size based on screen size
    if (smallerDimension < 480) {
      // Mobile phones
      return {
        baseIconSize: Math.max(32, smallerDimension * 0.06),
        maxScale: 1.3,
        effectWidth: smallerDimension * 0.3
      };
    } else if (smallerDimension < 768) {
      // Tablets
      return {
        baseIconSize: Math.max(40, smallerDimension * 0.05),
        maxScale: 1.4,
        effectWidth: smallerDimension * 0.25
      };
    } else if (smallerDimension < 1024) {
      // Small laptops
      return {
        baseIconSize: Math.max(48, smallerDimension * 0.045),
        maxScale: 1.45,
        effectWidth: smallerDimension * 0.2
      };
    } else {
      // Desktop and large screens - Monumental Icons
      return {
        baseIconSize: 80, // Even bigger for a premium, bold presence
        maxScale: 1.6, // Significant magnification to match the reference look
        effectWidth: 250
      };
    }
  }, []);

  const [config, setConfig] = useState(getResponsiveConfig);
  const { baseIconSize, maxScale, effectWidth } = config;
  const minScale = 1.0;
  const baseSpacing = Math.max(4, baseIconSize * 0.7); // Significantly elongated for 'long' feel

  useEffect(() => {
    const handleResize = () => setConfig(getResponsiveConfig());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getResponsiveConfig]);

  const calculateTargetMagnification = useCallback((mousePosition: number | null) => {
    if (mousePosition === null) {
      return apps.map(() => minScale);
    }

    return apps.map((_, index) => {
      const normalIconCenter = (index * (baseIconSize + baseSpacing)) + (baseIconSize / 2);
      const minP = mousePosition - (effectWidth / 2);
      const maxP = mousePosition + (effectWidth / 2);
      
      if (normalIconCenter < minP || normalIconCenter > maxP) {
        return minScale;
      }
      
      const theta = ((normalIconCenter - minP) / effectWidth) * 2 * Math.PI;
      const cappedTheta = Math.min(Math.max(theta, 0), 2 * Math.PI);
      const scaleFactor = (1 - Math.cos(cappedTheta)) / 2;
      
      return minScale + (scaleFactor * (maxScale - minScale));
    });
  }, [apps, baseIconSize, baseSpacing, effectWidth, maxScale, minScale]);

  const calculatePositions = useCallback((scales: number[]) => {
    let currentP = 0;
    
    return scales.map((scale) => {
      const scaledSize = baseIconSize * scale;
      const centerP = currentP + (scaledSize / 2);
      currentP += scaledSize + baseSpacing;
      return centerP;
    });
  }, [baseIconSize, baseSpacing]);

  useEffect(() => {
    const initialScales = apps.map(() => minScale);
    const initialPositions = calculatePositions(initialScales);
    setCurrentScales(initialScales);
    setCurrentPositions(initialPositions);
  }, [apps, calculatePositions, minScale, config]);

  const animateToTarget = useCallback(() => {
    const targetScales = calculateTargetMagnification(mousePos);
    const targetPositions = calculatePositions(targetScales);
    const lerpFactor = mousePos !== null ? 0.2 : 0.12;

    setCurrentScales(prevScales => {
      return prevScales.map((currentScale, index) => {
        const diff = targetScales[index] - currentScale;
        return currentScale + (diff * lerpFactor);
      });
    });

    setCurrentPositions(prevPositions => {
      return prevPositions.map((currentPos, index) => {
        const diff = targetPositions[index] - currentPos;
        return currentPos + (diff * lerpFactor);
      });
    });

    const scalesNeedUpdate = currentScales.some((scale, index) => 
      Math.abs(scale - targetScales[index]) > 0.002
    );
    const positionsNeedUpdate = currentPositions.some((pos, index) => 
      Math.abs(pos - targetPositions[index]) > 0.1
    );
    
    if (scalesNeedUpdate || positionsNeedUpdate || mousePos !== null) {
      animationFrameRef.current = requestAnimationFrame(animateToTarget);
    }
  }, [mousePos, calculateTargetMagnification, calculatePositions, currentScales, currentPositions]);

  useEffect(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(animateToTarget);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animateToTarget]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const now = performance.now();
    if (now - lastMouseMoveTime.current < 16) return;
    lastMouseMoveTime.current = now;
    
    if (dockRef.current) {
      const rect = dockRef.current.getBoundingClientRect();
      const padding = Math.max(8, baseIconSize * 0.12);
      const pos = isVertical ? (e.clientY - rect.top - padding) : (e.clientX - rect.left - padding);
      setMousePos(pos);
    }
  }, [baseIconSize, isVertical]);

  const handleMouseLeave = useCallback(() => {
    setMousePos(null);
  }, []);

  const handleAppClick = (appId: string, index: number) => {
    const element = iconRefs.current[index];
    if (element) {
      // Much larger scale pulse for a more dramatic 'enlarge' effect
      element.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      element.style.transform = 'scale(1.8) rotate(5deg)';
      
      setTimeout(() => {
        element.style.transform = 'scale(1) rotate(0deg)';
      }, 400);
    }
    onAppClick(appId);
  };

  const totalDimension = currentPositions.length > 0 
    ? Math.max(...currentPositions.map((pos, index) => 
        pos + (baseIconSize * currentScales[index]) / 2
      ))
    : (apps.length * (baseIconSize + baseSpacing)) - baseSpacing;

  const padding = Math.max(8, baseIconSize * 0.12);

  return (
    <div 
      ref={dockRef}
      className={`${className}`}
      style={{
        // Give the dock container enough width/height to hold the largest possible scaled icon
        width: isVertical ? `${baseIconSize * maxScale + padding * 2}px` : `${totalDimension + padding * 2}px`,
        height: isVertical ? `${totalDimension + padding * 2}px` : `${baseIconSize * maxScale + padding * 2}px`,
        // Removed hardcoded background, border, and shadow to allow parent styling
        padding: `${padding}px`,
        display: 'flex',
        flexDirection: isVertical ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="relative"
        style={{
          // Inner relative container should also match the max possible width/height for children
          width: isVertical ? `${baseIconSize * maxScale}px` : `${totalDimension}px`,
          height: isVertical ? `${totalDimension}px` : `${baseIconSize * maxScale}px`,
        }}
      >
        {apps.map((app, index) => {
          const scale = currentScales[index];
          const position = currentPositions[index] || 0;
          const scaledSize = baseIconSize * scale;
          
          return (
            <div
              key={app.id}
              ref={(el) => { iconRefs.current[index] = el; }}
              className="absolute cursor-pointer flex items-center justify-center transition-opacity"
              onClick={() => handleAppClick(app.id, index)}
              style={{
                top: isVertical ? `${position - scaledSize / 2}px` : '50%',
                left: isVertical ? '50%' : `${position - scaledSize / 2}px`,
                transform: `translate(-50%, ${isVertical ? '0' : '-50%'})`,
                width: `${scaledSize}px`,
                height: `${scaledSize}px`,
                zIndex: Math.round(scale * 10)
              }}
            >
              <div className="relative group w-full h-full flex items-center justify-center">
                {typeof app.icon === 'string' ? (
                  <img
                    src={app.icon}
                    alt={app.name}
                    className="object-contain w-full h-full transition-all duration-300"
                    style={{
                      filter: `drop-shadow(0 ${scale > 1.2 ? 10 : 4}px 10px rgba(0,0,0,0.3))`
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/60 group-hover:text-white transition-colors">
                    {app.icon}
                  </div>
                )}

                {/* Name Tooltip (Only visible on hover) */}
                <div className="absolute left-full ml-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-md px-3 py-1 rounded text-[10px] uppercase tracking-widest text-white border border-white/10 pointer-events-none whitespace-nowrap">
                  {app.name}
                </div>
              </div>
              
              {/* App Indicator Dot */}
              {openApps.includes(app.id) && (
                <div 
                  className="absolute"
                  style={{
                    bottom: isVertical ? '50%' : '-4px',
                    right: isVertical ? '-8px' : '50%',
                    transform: isVertical ? 'translateY(50%)' : 'translateX(-50%)',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MacOSDock;
