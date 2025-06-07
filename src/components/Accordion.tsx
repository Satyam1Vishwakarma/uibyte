"use client"

import type React from "react"
import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type AccordionProps = {
  name: string
  children?: React.ReactNode
}

export default function Accordion(props: AccordionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full py-4 px-2 justify-between items-center text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900">{props.name}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex-shrink-0 ml-2"
        >
          <ChevronRight className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-2 pb-4 text-gray-700">{props.children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
