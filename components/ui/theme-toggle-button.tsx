"use client"

import React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

import {
  AnimationStart,
  AnimationVariant,
  createAnimation,
} from "./theme-animations"

interface ThemeToggleAnimationProps {
  variant?: AnimationVariant
  start?: AnimationStart
  showLabel?: boolean
  url?: string
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left"
}

export default function ThemeToggleButton({
  variant = "circle-blur",
  start = "top-left",
  showLabel = false,
  url = "",
  position = "bottom-right",
}: ThemeToggleAnimationProps) {
  const { theme, setTheme } = useTheme()
  const styleId = "theme-transition-styles"

  const updateStyles = React.useCallback((css: string, name: string) => {
    if (typeof window === "undefined") return

    let styleElement = document.getElementById(styleId) as HTMLStyleElement

    if (!styleElement) {
      styleElement = document.createElement("style")
      styleElement.id = styleId
      document.head.appendChild(styleElement)
    }

    styleElement.textContent = css
  }, [])

  const toggleTheme = React.useCallback(() => {
    const animation = createAnimation(variant, start, url)
    updateStyles(animation.css, animation.name)

    if (typeof window === "undefined") return

    const switchTheme = () => {
      setTheme(theme === "light" ? "dark" : "light")
    }

    if (!document.startViewTransition) {
      switchTheme()
      return
    }

    document.startViewTransition(switchTheme)
  }, [theme, setTheme])

  // Position class logic
  const positionClass = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
  }[position]

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className={`fixed z-50 ${positionClass} w-12 h-12 rounded-full shadow-md bg-background/90 backdrop-blur border hover:scale-105 transition-all`}
      name="Theme Toggle Button"
    >
      <SunIcon className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle Theme</span>

      {showLabel && (
        <>
          <span className="hidden group-hover:block border rounded-full px-2 absolute -top-10">
            variant = {variant}
          </span>
          <span className="hidden group-hover:block border rounded-full px-2 absolute -bottom-10">
            start = {start}
          </span>
        </>
      )}
    </Button>
  )
}