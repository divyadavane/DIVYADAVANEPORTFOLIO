"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type TabItem = {
  id: string;
  icon: LucideIcon;
  label: string;
  color: string;
};

export type ExpandableTabsProps = {
  tabs: TabItem[];
  defaultTabId?: string;
  className?: string;
  activeColor?: string;
};

export const ExpandableTabs = ({
  tabs,
  defaultTabId,
  className,
  activeColor = "bg-white/10",
}: ExpandableTabsProps) => {
  const [activeTabId, setActiveTabId] = useState(defaultTabId);

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 p-2 rounded-2xl bg-transparent transition-all",
        className,
      )}
    >
      {tabs.map((tab) => {
        const isActive = activeTabId === tab.id;
        const Icon = tab.icon;

        return (
          <motion.div
            key={tab.id}
            layout
            className={cn(
              "flex items-center justify-start rounded-xl cursor-pointer overflow-hidden h-[50px] transition-colors relative",
              isActive ? cn(activeColor, "w-[160px]") : "w-[50px] hover:bg-white/5",
            )}
            onClick={() => setActiveTabId(tab.id)}
            initial={false}
            animate={{
              width: isActive ? 160 : 50,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
          >
            <div className="flex items-center justify-center h-[50px] w-[50px] flex-shrink-0">
              <Icon size={22} strokeWidth={1.5} className={cn("transition-colors", isActive ? "text-white" : "text-white/40")} />
            </div>
            
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.span
                  className="ml-0 text-white font-black uppercase text-[10px] tracking-[0.2em] whitespace-nowrap overflow-hidden pr-6"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {tab.label}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};
