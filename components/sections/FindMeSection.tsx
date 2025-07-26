'use client'

import { playfair } from "@/app/fonts"
import HeaderWithLine from "../global/HeaderWithLine"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const links = [
    {
        title: 'Newsletter',
        count: '20K+',
        action: 'Subscribe',
        url: '#newsletter',
    },
    {
        title: 'YouTube',
        count: '400K+',
        action: 'Subscribe',
        url: '#youtube',
    },
    {
        title: 'Design Champs',
        count: '4K+',
        action: 'Become a Champ',
        url: '#champs',
    },
]

export const FindMeSection = () => {
    const controls = useAnimation()
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1,
            },
        },
    }

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={sectionVariants}
            className="w-full max-w-7xl mx-auto py-16 px-6 flex flex-col items-start gap-12 lg:gap-16"
        >
            <HeaderWithLine title="Find me here" />

            <div className="mx-auto w-full divide-y">
                {links.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.url}
                        variants={sectionVariants}
                        className="grid grid-cols-3 items-center px-4 py-8 transition-all duration-300 ease-in-out transform hover:px-8 group"
                    >
                        <span className="text-lg transition-colors duration-300 text-tertiary-foreground">
                            {item.title}
                        </span>
                        <span className="text-lg font-medium text-center transition-all duration-300">
                            {item.count}
                        </span>
                        <span className="text-sm text-right transition-colors duration-300 text-tertiary-foreground">
                            {item.action}
                        </span>
                    </motion.a>
                ))}
            </div>
        </motion.section>
    )
}


















// 'use client'

// import { playfair } from "@/app/fonts"
// import HeaderWithLine from "../global/HeaderWithLine"

// const links = [
//     {
//         title: 'Newsletter',
//         count: '20K+',
//         action: 'Subscribe',
//         url: '#newsletter',
//     },
//     {
//         title: 'YouTube',
//         count: '400K+',
//         action: 'Subscribe',
//         url: '#youtube',
//     },
//     {
//         title: 'Design Champs',
//         count: '4K+',
//         action: 'Become a Champ',
//         url: '#champs',
//     },
// ]

// export const FindMeSection = () => {
//     return (
//         <section className="w-full max-w-7xl mx-auto py-16 px-6 flex flex-col items-start gap-12 lg:gap-16">
//             <HeaderWithLine title="Find me here" />

//             {/* Links List */}
//             <div className="mx-auto w-full divide-y">
//                 {links?.map((item, index) => (
//                     <a
//                         key={index}
//                         href={item?.url}
//                         className="grid grid-cols-3 items-center px-4 py-8 transition-all duration-300 ease-in-out transform hover:px-8 group"
//                     >
//                         <span className="text-lg transition-colors duration-300 text-tertiary-foreground">
//                             {item?.title}
//                         </span>
//                         <span className="text-lg font-medium text-center transition-all duration-300">
//                             {item?.count}
//                         </span>
//                         <span className="text-sm text-right transition-colors duration-300 text-tertiary-foreground ">
//                             {item?.action}
//                         </span>
//                     </a>
//                 ))}
//             </div>
//         </section>
//     )
// }