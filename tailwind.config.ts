// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-poppins)', 'sans-serif'],
                playfair: ['var(--font-playfair)', 'serif'],
            }
        },
    },
    plugins: [],
}
export default config

// import type { Config } from 'tailwindcss'

// const config: Config = {
//     content: [
//         "./app/**/*.{js,ts,jsx,tsx,mdx}",
//         "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//         "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     ],
//     darkMode: "class",
//     theme: {
//         extend: {
//             backgroundImage: {
//                 "gradient-radial-light": "radial-gradient(circle, #FFF6EB 0%, #DAEDFF 100%)",
//                 "gradient-radial-dark": "radial-gradient(circle, #1e293b 0%, #0f172a 100%)",
//             },
//             fontFamily: {
//                 sans: ['var(--font-poppins)', 'sans-serif'], // default
//                 playfair: ['var(--font-playfair)', 'serif'], // for special use
//             },
//             colors: {
//                 success: 'oklch(var(--success) / <alpha-value>)',
//                 error: 'oklch(var(--error) / <alpha-value>)',
//             },
//         },
//     },
//     plugins: [],
// }

// export default config



// // tailwind.config.ts
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//         "./app/**/*.{js,ts,jsx,tsx,mdx}",
//         "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//         "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     ],
//     darkMode: "class", // for next-themes
//     theme: {
//         extend: {
//             // You can add your custom colors here later
//             backgroundImage: {
//                 // Light mode gradient
//                 "gradient-radial-light": "radial-gradient(circle, #FFF6EB 0%, #DAEDFF 100%)",
//                 // Dark mode gradient
//                 "gradient-radial-dark": "radial-gradient(circle, #1e293b 0%, #0f172a 100%)",
//             },
//             colors: {
//                 success: 'oklch(var(--success) / <alpha-value>)',
//                 error: 'oklch(var(--error) / <alpha-value>)',
//             },
//         },
//     },
//     plugins: [],
// };