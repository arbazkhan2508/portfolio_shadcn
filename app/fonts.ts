import { Instrument_Serif, Inter, Playfair_Display, Poppins, Roboto_Mono } from 'next/font/google'

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
    display: 'swap',
})

export const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-playfair',
    display: 'swap',
    style: ['normal', 'italic'],
})

export const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
})


export const instrument_serif = Instrument_Serif({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-instrument-serif',
    display: 'swap',
})