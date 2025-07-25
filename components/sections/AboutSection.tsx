'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import { MagneticButton } from '../ui/magnetic-button'
import HeaderWithLine from '../global/HeaderWithLine'
import { playfair } from '@/app/fonts'

const tags = [
    "Design systems",
    "UI/UX",
    "No Code",
    "Web Design",
    "Prototyping",
    "Strategy",
];

// const headingText = `I help startups launch products, release my own products, and teach others to design and launch`
// const headingText = `I help startups and businesses build scalable web applications with clean code and great user experience. I also release my own projects and share knowledge with the dev community.`;
// const headingText = `I build clean, scalable web apps and share what I learn along the way.`;
// const headingText = `I build clean, scalable web apps with a focus on UX, and share insights to help others grow as developers.`;
const headingText = `I build clean, scalable web apps with a strong focus on UX, and share insights to help others grow as developers.`;

export const AboutSection = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.5', 'end 0.2'], // triggers when top hits 70% of viewport
    })

    const words = headingText.split(' ')

    return (
        <section
            ref={ref}
            className="relative w-full max-w-7xl mx-auto flex flex-col justify-center items-center px-4 py-24 lg:py-10 text-center gap-12 lg:gap-16"
        >
            <HeaderWithLine title="Hello" />

            {/* Tags - Left Side (Mirrored like Right Side) */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-end gap-10">
                {tags?.slice(0, 3).map((tag, i) => (
                    <MagneticButton key={`start-${i}`}>
                        <button className="bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium -rotate-[2deg]">
                            {tag}
                        </button>
                    </MagneticButton>
                ))}
            </div>

            {/* Tags - Right Side (Unchanged) */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-start gap-10">
                {tags?.slice(-3).map((tag, i) => (
                    <MagneticButton key={`end-${i}`}>
                        <button className="bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium rotate-[2deg]">
                            {tag}
                        </button>
                    </MagneticButton>
                ))}
            </div>

            {/* Animated Heading */}
            <div className="max-w-4xl z-10">
                <h2
                    className={cn(
                        `${playfair?.className} text-4xl md:text-5xl italic lg:text-6xl font-medium leading-snug flex flex-wrap justify-center text-center`
                    )}
                >
                    {words.map((word, idx) => {
                        // create slight offset for each word (e.g., word 0 starts at 0.0, word 1 at 0.02, etc.)
                        const start = 0 + idx * 0.02
                        const end = start + 0.1
                        const color = useTransform(
                            scrollYProgress,
                            [start, end],
                            ['#9ca3af', '#000000']
                        )
                        const y = useTransform(scrollYProgress, [start, end], [10, 0])

                        return (
                            <motion.span
                                key={idx}
                                style={{ color, y }}
                                className="inline-block mr-2 transition-colors duration-300"
                            >
                                {word}
                            </motion.span>
                        )
                    })}
                </h2>
            </div>
        </section>
    )
}

export default AboutSection














// 'use client'

// import { useEffect, useRef } from 'react'
// import { motion, useAnimation, useInView } from 'framer-motion'
// import { cn } from '@/lib/utils'

// const tags = [
//     'Design systems',
//     'UI/UX',
//     'No Code',
//     'Web Design',
//     'Prototyping',
//     'Strategy',
// ]

// const headingText = `I help startups launch products, release my own products, and teach others to design and launch`

// export const AboutSection = () => {
//     const ref = useRef(null)
//     const inView = useInView(ref, { once: true, margin: '-100px' })
//     const controls = useAnimation()

//     useEffect(() => {
//         if (inView) {
//             controls.start('visible')
//         }
//     }, [inView, controls])

//     const containerVariants = {
//         hidden: {},
//         visible: {
//             transition: {
//                 staggerChildren: 0.07,
//                 delayChildren: 0.2,
//             },
//         },
//     }

//     const wordVariants = {
//         hidden: { color: '#9ca3af', y: 10 },
//         visible: {
//             color: '#000',
//             y: 0,
//             transition: {
//                 duration: 0.4,
//                 ease: 'easeOut',
//             },
//         },
//     }

//     const renderAnimatedText = () => {
//         return headingText.split(' ').map((word, idx) => (
//             <motion.span
//                 key={idx}
//                 className="inline-block mr-2"
//                 variants={wordVariants}
//             >
//                 {word}
//             </motion.span>
//         ))
//     }

//     return (
//         <section
//             ref={ref}
//             className="relative w-full min-h-screen bg-gradient-to-b from-[#e5e7eb] to-white flex flex-col justify-center items-center px-4 py-24 text-center"
//         >
//             {/* Tags left side */}
//             <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
//                 {tags.slice(0, 3).map((tag, i) => (
//                     <span
//                         key={i}
//                         className="bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium rotate-[5deg]"
//                     >
//                         {tag}
//                     </span>
//                 ))}
//             </div>

//             {/* Tags right side */}
//             <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
//                 {tags.slice(3).map((tag, i) => (
//                     <span
//                         key={i}
//                         className="bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium -rotate-[5deg]"
//                     >
//                         {tag}
//                     </span>
//                 ))}
//             </div>

//             {/* Animated Text */}
//             <motion.div
//                 className="max-w-4xl z-10"
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate={controls}
//             >
//                 <motion.h2
//                     className={cn(
//                         'text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-snug flex flex-wrap justify-center'
//                     )}
//                 >
//                     {renderAnimatedText()}
//                 </motion.h2>
//             </motion.div>
//         </section>
//     )
// }

// export default AboutSection









// 'use client';

// import { useEffect, useRef } from 'react';
// import { motion, useAnimation, useInView } from 'framer-motion';
// import { cn } from '@/lib/utils';

// const tags = [
//     'Design systems',
//     'UI/UX',
//     'No Code',
//     'Web Design',
//     'Prototyping',
//     'Strategy',
// ];

// export const AboutSection = () => {
//     const ref = useRef(null);
//     const inView = useInView(ref, { once: true, margin: '-100px' });
//     const controls = useAnimation();

//     useEffect(() => {
//         if (inView) {
//             controls.start('visible');
//         }
//     }, [inView, controls]);

//     const headingVariants = {
//         hidden: { color: '#9ca3af' }, // Tailwind gray-400
//         visible: {
//             color: '#000000',
//             transition: {
//                 duration: 1,
//                 ease: 'easeInOut',
//             },
//         },
//     };

//     return (
//         <section
//             ref={ref}
//             className="relative w-full min-h-screen bg-gradient-to-b from-[#e5e7eb] to-white flex flex-col justify-center items-center px-4 py-24 text-center"
//         >
//             {/* Tags left side */}
//             <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
//                 {tags.slice(0, 3).map((tag, i) => (
//                     <span
//                         key={i}
//                         className="bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium rotate-[5deg]"
//                     >
//                         {tag}
//                     </span>
//                 ))}
//             </div>

//             {/* Tags right side */}
//             <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
//                 {tags.slice(3).map((tag, i) => (
//                     <span
//                         key={i}
//                         className="bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium -rotate-[5deg]"
//                     >
//                         {tag}
//                     </span>
//                 ))}
//             </div>

//             {/* Text */}
//             <div className="max-w-4xl z-10">
//                 <motion.h2
//                     initial="hidden"
//                     animate={controls}
//                     variants={headingVariants}
//                     className={cn(
//                         'text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-snug transition-colors duration-1000'
//                     )}
//                 >
//                     I help startups launch products,
//                     <br />
//                     release my own products, and
//                     <br />
//                     teach others to design and <span className="opacity-50">launch</span>
//                 </motion.h2>
//             </div>
//         </section>
//     );
// };

// export default AboutSection;