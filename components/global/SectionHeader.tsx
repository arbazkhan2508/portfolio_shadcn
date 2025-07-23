'use client'
import { playfair } from '@/app/fonts'
import { ArrowRight, FolderGit2 } from 'lucide-react'
import Link from 'next/link'

interface SectionHeaderProps {
    title: string
    link?: string
    linkText?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    link,
    linkText,
}) => {
    return (
        <div className="flex justify-between items-center mb-10">
            <h2 className={`${playfair?.className} text-center text-2xl md:text-3xl italic text-tertiary-foreground mb-12 pb-2 w-fit mx-auto`}>
                {title}
            </h2>

            {link && linkText ? (
                <Link
                    href={link}
                    className="text-sm text-gray-500 hover:text-gray-700 transition flex items-center gap-1"
                >
                    {linkText} <ArrowRight className="w-4 h-4" />
                </Link>
            ) : null}
        </div>
    )
}

export default SectionHeader