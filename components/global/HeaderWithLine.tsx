import { playfair } from '@/app/fonts'
import React from 'react'

interface HeaderWithLineProps {
    title: string
}

const HeaderWithLine: React.FC<HeaderWithLineProps> = ({ title }) => {
    return (
        <div className="flex items-center justify-center w-full">
            {/* Left line */}
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>

            {/* Text */}
            <p
                className={`${playfair?.className} text-tertiary-foreground italic text-xl font-medium px-4`}
            >
                {title}
            </p>

            {/* Right line */}
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-500 to-transparent rotate-180"></div>
        </div>
    )
}

export default HeaderWithLine
