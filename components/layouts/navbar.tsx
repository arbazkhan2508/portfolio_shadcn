'use client'
// components/NavBar.tsx
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ThemeToggle } from '../theme/theme-toggle'
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playfair } from "@/app/fonts";
import { NAV_LINKS } from "@/constants/navLinks";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export const Navbar1 = () => {
    return (
        <header className="fixed top-0 z-50 dark:border-zinc-700 w-full px-6 py-4">
            <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="font-bold text-xl">Arbaz</Link>
                <nav className="flex items-center gap-4">
                    {NAV_LINKS?.map((link) => (
                        <Link key={link.href} href={link.href} className="text-sm font-medium hover:underline">
                            {link.label}
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}

export const Navbar = () => {
    return (
        <header className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full bg-header-bg border border-header-border backdrop-blur-md px-6 py-3 shadow-md flex items-center justify-between">
            {/* Left: Avatar */}
            <Link href="/" className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                    <AvatarImage src="/Arbaz_Circle_img.png" alt="Arbaz" />
                    <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <span className="font-semibold text-sm text-header-text">Arbaz</span>
            </Link>

            {/* Center: Nav Links */}
            <nav className="hidden md:flex items-center gap-6">
                {navItems?.map((item) => (
                    <a
                        key={item?.href}
                        href={item?.href}
                        className="text-sm font-medium text-header-text hover:text-header-hover-text transition-colors"
                    >
                        {item?.label}
                    </a>
                ))}
            </nav>

            {/* Right: Button */}
            <Button variant="outline" className="rounded-full px-4 py-2 text-sm">
                Get in Touch
            </Button>
        </header>
    );
}

const Path = (props: any) => (
    <motion.path
        fill="transparent"
        strokeWidth="2.5"
        stroke="black"
        strokeLinecap="round"
        {...props}
    />
);


const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // delay each child
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        x: -30, // slide in from left
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.4,
        },
    },
};

function MenuToggle({ toggle, isOpen }: { toggle: (e: React.MouseEvent<HTMLButtonElement>) => void; isOpen: boolean }) {
    return (
        <button
            onClick={toggle}
            className="p-3 flex items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-md hover:bg-white transition"
        >
            {/* <svg width="24" height="24" viewBox="0 0 23 23">
                <Path
                    animate={isOpen ? "open" : "closed"}
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    animate={isOpen ? "open" : "closed"}
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                <Path
                    animate={isOpen ? "open" : "closed"}
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />
            </svg> */}
            <svg width="24" height="24" viewBox="0 0 24 24">
                <Path
                    animate={isOpen ? "open" : "closed"}
                    variants={{
                        closed: { d: "M 3 5 L 21 5" },
                        open: { d: "M 4 18 L 20 4" },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                <Path
                    d="M 3 12 L 21 12"
                    animate={isOpen ? "open" : "closed"}
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                <Path
                    animate={isOpen ? "open" : "closed"}
                    variants={{
                        closed: { d: "M 3 19 L 21 19" },
                        open: { d: "M 4 4 L 20 18" },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />
            </svg>
        </button>
    );
}


export default function NavMenu() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // ✅ Close menu on outside click
    useEffect(() => {
        let frameId: number;

        const handleClickOutside = (e: MouseEvent) => {
            frameId = requestAnimationFrame(() => {
                if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                    setOpen(false);
                }
            });
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            cancelAnimationFrame(frameId);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <header className="fixed top-0 z-50 w-full py-4 dark:border-zinc-700">
            <div className="w-full relative max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className={`${playfair?.className} p-1 px-6 rounded-full cursor-pointer bg-white/80 backdrop-blur hover:bg-white transition text-lg`}>
                    <Link href="/">Arbaz</Link>
                </div>

                {/* <ThemeToggle /> */}

                <MenuToggle
                    toggle={(e) => {
                        e?.stopPropagation(); // 🔐 Prevent document click listener
                        setOpen((prev) => !prev); // toggle menu
                    }}
                    isOpen={open}
                />

                <AnimatePresence>
                    {open && (
                        <motion.div
                            onClick={(e) => e?.stopPropagation()}
                            ref={menuRef}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={containerVariants}
                            className="absolute right-0 top-[60px] w-64  overflow-hidden p-10 bg-white dark:bg-zinc-900 shadow-xl rounded-3xl rounded-tr-lg flex flex-col gap-4 md:gap-6 text-left"
                        >
                            {["Projects", "About", "Blog", "Contact"].map((label) => (
                                <motion.a
                                    layout
                                    key={label}
                                    variants={itemVariants}
                                    className="hover:text-blue-500 transition"
                                >
                                    {label}
                                </motion.a>
                            ))}

                            <motion.div variants={itemVariants} className="mt-4 flex justify-start gap-3">
                                {["youtube", "twitter", "instagram"].map((icon) => (
                                    <button
                                        key={icon}
                                        className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
                                    >
                                        <i className={`ri-${icon}-line`} />
                                    </button>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}