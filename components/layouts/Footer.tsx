'use client';

import { playfair } from '@/app/fonts';
import {
    Youtube,
    Twitter,
    Instagram,
    Music2,
    ArrowUpRight,
} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full h-screen bg-[radial-gradient(ellipse_at_bottom_left,_#1c1c1c,_#000000)] text-white py-24 px-4 text-center overflow-hidden flex flex-col items-center justify-center gap-12">
            {/* /// <footer className="w-full h-screen bg-[radial-gradient(ellipse_at_top_left,_#2e2e2e,_#000000)] text-white py-24 px-4 text-center overflow-hidden flex flex-col items-center justify-center gap-12"> */}

            {/* "I'm available" line */}
            <div className="flex items-center justify-center w-full">
                {/* Left line */}
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>

                {/* Text */}
                <p className={`${playfair?.className} text-tertiary-foreground italic text-xl font-medium`}>I'm available</p>

                {/* Right line */}
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-500 to-transparent rotate-180"></div>
            </div>

            <div className='w-full flex flex-col items-center justify-center gap-4 lg:gap-7'>
                {/* Heading */}
                <h2 className={`${playfair?.className} text-3xl md:text-7xl font-light relative z-10`}>
                    Let<span className="text-gray-300 italic">'s</span>{' '}
                    <span className="italic text-tertiary-foreground">Connect</span>
                </h2>

                {/* Subtext */}
                <p className="max-w-lg mx-auto text-base md:text-lg text-tertiary-foreground">
                    Feel free to contact me. I'm available for new projects or brand partnerships.
                </p>

                {/* Contact button */}
                <button className="bg-black text-white px-6 py-3 rounded-full border-4 border-gray-500 hover:border-white transition flex items-center gap-2 mx-auto">
                    <span className="font-semibold">Contact Me</span>
                    <ArrowUpRight className="w-4 h-4 text-tertiary-foreground" />
                </button>
            </div>

            {/* Social Icons */}
            <div className="flex w-full mt-10 items-center justify-between max-w-7xl mx-auto gap-8  relative z-10">
                {/* Name badge */}
                <div className="left-6 z-10">
                    <p className="text-black bg-white px-6 py-2 rounded-full font-serif text-lg">
                        Jesse Showalter
                    </p>
                </div>
                <IconButton icon={<Youtube className='w-5 h-5' />} />
                <IconButton icon={<Twitter className='w-5 h-5' />} />
                <IconButton icon={<Instagram className='w-5 h-5' />} />
                <IconButton icon={<Music2 className='w-5 h-5' />} />
            </div>
        </footer>
    );
}

function IconButton({ icon }: { icon: React.ReactNode }) {
    return (
        <div className="border border-white/30 hover:border-white transition flex items-center justify-center p-3 px-6 rounded-full cursor-pointer">
            {icon}
        </div>
    );
}






// 'use client';

// import {
//     Youtube,
//     Twitter,
//     Instagram,
//     Music2,
//     ArrowUpRight,
// } from 'lucide-react';

// export default function Footer() {
//     return (
//         <footer className="relative bg-black text-white py-24 px-4 text-center overflow-hidden">
//             {/* Custom Light Overlay */}
//             <div className="absolute inset-0 pointer-events-none z-0">
//                 <div className="w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent blur-2xl opacity-10" />
//             </div>

//             {/* I'm available text */}
//             <p className="text-gray-400 italic text-lg mb-4 relative z-10">I'm available</p>

//             {/* Heading */}
//             <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-4 relative z-10">
//                 Let<span className="text-gray-300 italic">'s</span>{' '}
//                 <span className="italic text-gray-300">Connect</span>
//             </h2>

//             {/* Subtext */}
//             <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg mb-10 relative z-10">
//                 Feel free to contact me. I'm available for new projects or brand partnerships.
//             </p>

//             {/* Contact Me button */}
//             <button className="relative z-10 bg-black text-white px-6 py-3 rounded-full border-4 border-gray-500 hover:border-white transition mb-12 flex items-center gap-2 mx-auto">
//                 <span className="font-semibold">Contact Me</span>
//                 <ArrowUpRight className="w-4 h-4" />
//             </button>

//             {/* Social Icons */}
//             <div className="flex items-center justify-center gap-8 mb-10 relative z-10">
//                 <IconButton icon={<Youtube />} />
//                 <IconButton icon={<Twitter />} />
//                 <IconButton icon={<Instagram />} />
//                 <IconButton icon={<Music2 />} />
//             </div>

//             {/* Name label */}
//             <div className="absolute bottom-6 left-6 z-10">
//                 <p className="text-black bg-white px-6 py-2 rounded-full font-serif text-lg">
//                     Jesse Showalter
//                 </p>
//             </div>
//         </footer>
//     );
// }

// function IconButton({ icon }: { icon: React.ReactNode }) {
//     return (
//         <div className="border border-white/30 hover:border-white transition p-3 rounded-full cursor-pointer">
//             <div className="text-white w-5 h-5">{icon}</div>
//         </div>
//     );
// }


// 'use client';
// import {
//     Youtube,
//     Twitter,
//     Instagram,
//     Music2,
//     ArrowUpRight,
// } from 'lucide-react';

// export default function Footer() {
//     return (
//         <footer className="relative bg-black text-white py-24 px-4 text-center overflow-hidden">
//             {/* Background gradient overlay (optional lighting effect) */}
//             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

//             <div className="absolute inset-0 bg-light-rays pointer-events-none" />

//             {/* Tagline */}
//             <p className="text-gray-400 italic text-lg mb-4 relative z-10">I'm available</p>

//             {/* Heading */}
//             <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-4 relative z-10">
//                 Let<span className="text-gray-300 italic">'s</span>{' '}
//                 <span className="italic text-gray-300">Connect</span>
//             </h2>

//             {/* Subtext */}
//             <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg mb-10 relative z-10">
//                 Feel free to contact me. I'm available for new projects or brand partnerships.
//             </p>

//             {/* Contact Button */}
//             <button className="relative z-10 bg-black text-white px-6 py-3 rounded-full border-4 border-gray-500 hover:border-white transition mb-12 flex items-center gap-2 mx-auto">
//                 <span className="font-semibold">Contact Me</span>
//                 <ArrowUpRight className="w-4 h-4" />
//             </button>

//             {/* Social Icons */}
//             <div className="flex items-center justify-center gap-8 mb-10 relative z-10">
//                 <IconButton icon={<Youtube />} />
//                 <IconButton icon={<Twitter />} />
//                 <IconButton icon={<Instagram />} />
//                 <IconButton icon={<Music2 />} />
//             </div>

//             {/* Name badge at bottom left */}
//             <div className="absolute bottom-6 left-6 z-10">
//                 <p className="text-black bg-white px-6 py-2 rounded-full font-serif text-lg">
//                     Jesse Showalter
//                 </p>
//             </div>
//         </footer>
//     );
// }

// function IconButton({ icon }: { icon: React.ReactNode }) {
//     return (
//         <div className="border border-white/30 hover:border-white transition p-3 rounded-full cursor-pointer">
//             <div className="text-white w-5 h-5">{icon}</div>
//         </div>
//     );
// }




// 'use client';

// import React from 'react';
// import {
//     Youtube,
//     Twitter,
//     Instagram,
//     Music2,
// } from 'lucide-react';

// const Footer = () => {
//     return (
//         <footer className="bg-black text-white py-16 px-4 text-center">
//             {/* Availability Heading */}
//             <p className="text-gray-400 italic text-lg mb-4">I'm available</p>

//             {/* Main Heading */}
//             <h2 className="text-4xl md:text-6xl font-serif font-semibold mb-4">
//                 Let<span className="text-gray-400 italic">'s</span>{' '}
//                 <span className="italic">Connect</span>
//             </h2>

//             {/* Subtext */}
//             <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg mb-8">
//                 Feel free to contact me. I'm available for new projects or brand partnerships.
//             </p>

//             {/* Contact Button */}
//             <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition mb-12 flex items-center justify-center mx-auto gap-2">
//                 Contact Me
//                 <span>↗</span>
//             </button>

//             {/* Social Icons */}
//             <div className="flex items-center justify-center gap-6 text-gray-400 text-xl">
//                 <a href="#" aria-label="YouTube" className="hover:text-white">
//                     <Youtube className="w-6 h-6" />
//                 </a>
//                 <a href="#" aria-label="Twitter" className="hover:text-white">
//                     <Twitter className="w-6 h-6" />
//                 </a>
//                 <a href="#" aria-label="Instagram" className="hover:text-white">
//                     <Instagram className="w-6 h-6" />
//                 </a>
//                 <a href="#" aria-label="TikTok" className="hover:text-white">
//                     <Music2 className="w-6 h-6" />
//                 </a>
//             </div>

//             {/* Name Tag */}
//             <div className="mt-10">
//                 <p className="text-sm bg-white text-black px-4 py-2 rounded-full inline-block font-serif">
//                     Jesse Showalter
//                 </p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;


// import { Mail, Github, Linkedin, Phone } from 'lucide-react'
// import { Button } from '@/components/ui/button'

// export default function Footer() {
//     return (
//         <footer className="bg-black text-white py-10 text-center">
//             <h2 className="text-3xl font-light">
//                 Let’s <span className="italic font-semibold">Connect</span>
//             </h2>
//             <p className="mt-2 text-gray-400 text-sm">
//                 Feel free to contact me. I'm available for new projects or brand partnerships.
//             </p>

//             <div className="flex justify-center gap-4 mt-6">
//                 <Button variant="outline" size="icon" className="bg-transparent border-gray-700 text-white hover:bg-gray-800">
//                     <Mail className="h-5 w-5" />
//                 </Button>
//                 <Button variant="outline" size="icon" className="bg-transparent border-gray-700 text-white hover:bg-gray-800">
//                     <Github className="h-5 w-5" />
//                 </Button>
//                 <Button variant="outline" size="icon" className="bg-transparent border-gray-700 text-white hover:bg-gray-800">
//                     <Linkedin className="h-5 w-5" />
//                 </Button>
//             </div>

//             <div className="mt-4 flex justify-center items-center text-gray-400 text-sm">
//                 <Phone className="h-4 w-4 mr-2" />
//                 +91 89628 34895
//             </div>
//         </footer>
//     )
// }