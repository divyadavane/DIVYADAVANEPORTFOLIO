import { GlowCard } from "@/components/ui/spotlight-card";

export default function SpotlightDemo() {
  return (
    <div className="w-screen h-screen flex flex-row items-center justify-center gap-10 bg-black custom-cursor overflow-hidden">
      <GlowCard glowColor="blue">
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h3 className="text-xl font-bold">Blue Glow</h3>
          <p className="text-white/60">Hover to see effect</p>
        </div>
      </GlowCard>
      <GlowCard glowColor="purple">
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h3 className="text-xl font-bold">Purple Glow</h3>
          <p className="text-white/60">Hover to see effect</p>
        </div>
      </GlowCard>
      <GlowCard glowColor="green">
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h3 className="text-xl font-bold">Green Glow</h3>
          <p className="text-white/60">Hover to see effect</p>
        </div>
      </GlowCard>
    </div>
  );
}
