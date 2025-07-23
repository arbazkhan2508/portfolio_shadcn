// components/sections/HeroSection.tsx
import { MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { playfair } from "@/app/fonts";

const heroData = {
    name: "Arbaz",
    roleTitles: ["Developer", "Designer", "Engineer"],
    description:
        "Full-stack developer with 3+ years of experience building scalable web applications using clean code and thoughtful design.",
    avatarUrl: "/Arbaz_Circle_img.png",
    avatarFallback: "AK",
    buttonText: "Partnership Inquiries",
    resumeLink: "#",
};

export function HeroSection1() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center transition-colors duration-500 bg-[radial-gradient(circle,_#FFF6EB_0%,_#DAEDFF_100%)] dark:bg-[radial-gradient(circle,_#1e293b_0%,_#0f172a_100%)]">
        {/* // <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gradient-to-br from-[#f9f9f9] to-[#e6e6e6] dark:from-slate-900 dark:to-slate-800"> */}
                {/* Avatar */}
                <Avatar className="h-24 w-24 shadow-lg mb-8">
                    <AvatarImage src={heroData.avatarUrl} alt={`${heroData.name} avatar`} />
                    <AvatarFallback>{heroData.avatarFallback}</AvatarFallback>
                </Avatar>

                {/* Heading */}
                <h1
                    className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl font-light leading-tight max-w-3xl`}
                >
                    I'm{" "}
                    <span className="italic font-medium">{heroData.name}</span>{" "}
                    a{" "}
                    {heroData.roleTitles.map((title, i) => (
                        <span key={i} className={i % 2 === 0 ? "font-normal" : "font-semibold"}>
                            {title}
                            {i < heroData.roleTitles.length - 1 ? ", " : ""}
                        </span>
                    ))}
                </h1>

                {/* Subtext */}
                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-xl mt-6">
                    {heroData.description}
                </p>

                {/* CTA Button */}
                <a href={heroData.resumeLink} target="_blank" rel="noopener noreferrer">
                    <Button className="mt-10 px-6 py-4 rounded-full shadow-md text-base font-semibold">
                        {heroData.buttonText} <MoveUpRight className="ml-2 w-4 h-4" />
                    </Button>
                </a>
            </div>
            );
}