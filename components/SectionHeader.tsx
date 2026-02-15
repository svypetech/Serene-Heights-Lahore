"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  heading: string;
  subheading: string;
}

export default function SectionHeader({ heading, subheading }: SectionHeaderProps) {
  return (
    <div className="relative w-full min-h-[55vh] bg-[#003C54] flex flex-col pb-16 md:pb-0 md:justify-end">
      <div className="flex-1 flex flex-col items-start justify-end px-8 md:px-16 lg:px-32 xl:px-58 pb-0 md:pb-12 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl w-full"
        >
          <h1
            className="text-white mb-3 md:mb-5 lg:mb-6 text-left"
            style={{
              fontFamily: "Proforma, sans-serif",
              fontSize: "clamp(14px, 2.5vw, 40px)",
              fontWeight: 400,
              lineHeight: "120%",
              letterSpacing: "0.6em",
              textTransform: "uppercase",
            }}
          >
            {heading}
          </h1>
          <h2
            className="text-white text-left mb-1"
            style={{
              fontFamily: "Celine Sans Regular, sans-serif",
              fontSize: "clamp(32px, 8vw, 120px)",
              fontWeight: 400,
              lineHeight: "105%",
              // letterSpacing: "0.04em",
              textTransform: "uppercase",
              marginBottom: "2px",
            }}
          >
            {subheading}
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
