import { FootnoteItem } from "@/entities/Footnote/types"

const MARKERS = ['*', '**', '***', '****', '*****']

type FootnoteVariant = 'light' | 'dark'

interface FootnoteProps {
    items: FootnoteItem[]
    variant?: FootnoteVariant
    className?: string
}

const VARIANT_CLASS: Record<FootnoteVariant, string> = {
    light: 'text-text-light-secondary',
    dark: 'text-text-secondary',
}

export const Footnote = ({ items, variant = 'light', className }: FootnoteProps) => {
    if (!items || items.length === 0) return null

    const textClass = VARIANT_CLASS[variant]

    return (
        <div className={`border-t border-border pt-1 flex flex-col gap-1 ${className ?? ''}`}>
            {items.map((item, index) => (
                <p key={index} className={`font-p-xs ${textClass} leading-snug`}>
                    <span className={`${textClass} font-light`}>
                        {MARKERS[index] ?? `[${index + 1}]`}
                    </span>{' '}
                    {item.term} — {item.definition}
                </p>
            ))}
        </div>
    )
}