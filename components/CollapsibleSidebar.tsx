"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Home, Settings, Users, HelpCircle } from "lucide-react"

const menuItems = [
  { icon: Home, label: "ホーム", href: "/" },
  { icon: Users, label: "ユーザー", href: "/users" },
  //{ icon: Settings, label: "設定", href: "/settings" },
  //{ icon: HelpCircle, label: "ヘルプ", href: "/help" },
]

export function CollapsibleSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="fixed left-0 top-0 z-40 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-lg"
      initial={{ width: "4rem", x: "-2.5rem" }}
      animate={{
        width: isOpen ? "16rem" : "4rem",
        x: isOpen ? 0 : "-2.5rem",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.div
        className="absolute -right-3 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-800 shadow-md cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <ChevronRight
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </motion.div>
      <nav className="flex h-full flex-col p-4">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="flex items-center space-x-4 rounded-lg p-2 transition-colors hover:bg-gray-700"
              >
                <item.icon className="h-6 w-6" />
                <motion.span
                  className="text-sm font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  )
}

