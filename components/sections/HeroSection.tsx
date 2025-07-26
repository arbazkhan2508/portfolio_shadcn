"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { playfair } from "@/app/fonts";
import ThemeToggleButton from "../ui/theme-toggle-button";
import WrapButton from "../ui/wrap-button";
import React from "react";

// Hero section data
const heroData = {
    name: "Arbaz",
    role: "Developer",
    focus: "clean code & UX",
    tagline: "I'm Arbaz, a Developer with a focus on clean code & UX.",
    description:
        "Full-stack developer with 3 years of experience building scalable web applications using clean code and thoughtful design.",
    avatarUrl: "/Arbaz_Circle_img.png",
    avatarFallback: "AK",
    resumeLink: "#",
    buttonText: "View Resume",
};

// Animation variants
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

export function HeroSection() {
    return (
        <div className="min-h-screen flex items-center justify-center text-center transition-colors duration-500 bg-[radial-gradient(circle,_#FFF6EB_0%,_#DAEDFF_100%)] dark:bg-[radial-gradient(circle,_#1e293b_0%,_#0f172a_100%)]">
            <motion.div
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-8 items-center justify-center px-4"
            >
                {/* Theme toggle */}
                <ThemeToggleButton position="top-right" variant="circle-blur" />

                {/* Avatar */}
                <motion.div variants={fadeUp} custom={0}>
                    <Avatar className="h-24 w-24 shadow-xl">
                        <AvatarImage
                            src={heroData.avatarUrl}
                            alt={`${heroData.name} avatar`}
                        />
                        <AvatarFallback>{heroData.avatarFallback}</AvatarFallback>
                    </Avatar>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    variants={fadeUp}
                    custom={0.2}
                    className={`${playfair?.className} italic text-3xl md:text-7xl font-light leading-tight`}
                >
                    I'm{" "}
                    <span className="text-tertiary-foreground">{heroData.name}</span>{" "}
                    a <span className="text-tertiary-foreground">{heroData.role}</span>
                    <br />
                    <span className="font-normal">with a focus on </span>
                    {heroData.focus.split("&").map((part, idx, arr) => (
                        <React.Fragment key={idx}>
                            <span className="text-tertiary-foreground">{part.trim()}</span>
                            {idx < arr.length - 1 && <span className="mx-1">&</span>}
                        </React.Fragment>
                    ))}
                    .
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={fadeUp}
                    custom={0.4}
                    className="text-sm md:text-base text-secondary-foreground max-w-xl"
                >
                    {heroData.description}
                </motion.p>

                {/* Resume Button */}
                <motion.div variants={fadeUp} custom={0.6}>
                    <WrapButton href={heroData.resumeLink}>
                        <Globe className="animate-spin" />
                        {heroData.buttonText}
                    </WrapButton>
                </motion.div>
            </motion.div>
        </div>
    );
}












// // components/sections/HeroSection.tsx
// import { Globe, MoveRight, MoveUpRight } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { playfair } from "@/app/fonts";
// import React from "react";
// import ThemeToggleButton from "../ui/theme-toggle-button";
// import WrapButton from "../ui/wrap-button";

// // Easily editable hero section content
// const heroData = {
//     name: "Arbaz",
//     role: "Developer",
//     focus: "clean code & UX",
//     tagline: "I'm Arbaz, a Developer with a focus on clean code & UX.",
//     description:
//         "Full-stack developer with 3 years of experience building scalable web applications using clean code and thoughtful design.",
//     avatarUrl: "/Arbaz_Circle_img.png",
//     avatarFallback: "AK",
//     resumeLink: "#",
//     buttonText: "View Resume",
// };

// export function HeroSection() {
//     return (
//         <div className="min-h-screen flex flex-col gap-6 md:gap-8 items-center justify-center text-center transition-colors duration-500 bg-[radial-gradient(circle,_#FFF6EB_0%,_#DAEDFF_100%)] dark:bg-[radial-gradient(circle,_#1e293b_0%,_#0f172a_100%)]">
//             <div className="min-h-screen max-w-7xl mx-auto flex flex-col gap-6 md:gap-8 items-center justify-center text-center transition-colors duration-500">
//                 {/* <ThemeToggle /> */}
//                 {/* <ThemeToggleButton /> */}
//                 <ThemeToggleButton position="top-right" variant="circle-blur" />

//                 <Avatar className="h-24 w-24">
//                     <AvatarImage src={heroData.avatarUrl} alt={`${heroData.name} avatar`} />
//                     <AvatarFallback>{heroData.avatarFallback}</AvatarFallback>
//                 </Avatar>

//                 {/* Heading */}
//                 {/* <h1 className={`${instrument_serif?.className} text-3xl md:text-7xl font-light`}> */}
//                 <h1 className={`${playfair?.className}  italic text-3xl md:text-7xl font-light`}>
//                     I'm{" "}
//                     <span className="text-tertiary-foreground ">{heroData?.name}</span>{" "}
//                     a <span className="text-tertiary-foreground">{heroData?.role}</span>
//                     <br />
//                     <span className="font-normal">with a focus on </span>
//                     {heroData?.focus?.split("&").map((part, idx, arr) => (
//                         <React.Fragment key={idx}>
//                             <span className="text-tertiary-foreground">{part?.trim()}</span>
//                             {idx < arr.length - 1 && (
//                                 <span className="mx-1">&</span>
//                             )}
//                         </React.Fragment>
//                     ))}
//                     .
//                 </h1>

//                 {/* Description */}
//                 <p className="text-sm md:text-base text-secondary-foreground max-w-xl">
//                     {heroData?.description}
//                 </p>

//                 {/* Button */}
//                 {/* <a href={heroData?.resumeLink} target="_blank" rel="noopener noreferrer">
//                     <Button className="!px-6 py-4 cursor-pointer rounded-full shadow-md">
//                         {heroData?.buttonText} <MoveRight className="ml-2 w-4 h-4" />
//                     </Button>
//                 </a> */}
//                 <WrapButton href="/docs/components/card-carousel" >
//                     <Globe className="animate-spin " />
//                     {heroData?.buttonText}
//                 </WrapButton>
//             </div>
//         </div>
//     );
// }