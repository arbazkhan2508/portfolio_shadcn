'use client'

import { useTheme } from 'next-themes'
import { Switch } from '@/components/ui/switch'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    const isDark = theme === 'dark'

    return (
        <div className="flex items-center gap-2">
            <span className="text-sm">🌞</span>
            <Switch
                checked={isDark}
                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
            />
            <span className="text-sm">🌙</span>
        </div>
    )
}