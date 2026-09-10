import { AriaRole, FC, type SVGProps, } from 'react'
import { Icon, } from '../Icon'
import { Button, } from '../Button'
import { FootnoteItem } from '@/entities/Footnote/types';
import { Footnote } from '../Footnote';

type IconCardProps = {
    icon: FC<SVGProps<SVGSVGElement>>;
    iconType?: 'stroke' | 'fill';
    iconColor?: 'light-blue' | 'blue';
    bgType?: 'solid' | 'semiTransparent';
    bgColor?: 'light' | 'light-secondary';
    titleText: string | React.ReactNode;
    paragraphText: string;
    badges?: string[];
    button?: {
        text: string;
        onClick: () => void;
        theme?: 'white' | 'light-blue' | 'blue' | 'white-blue';
        size?: 'large' | 'regular' | 'small';
        icon?: FC<SVGProps<SVGSVGElement>>;
        iconType?: 'stroke' | 'fill' | 'both';
        disabled?: boolean;
    };
    role?: AriaRole;
    cardSize?: 'small' | 'regular' | 'large';
    cardDirection?: 'row' | 'column';
    textDirection?: 'normal' | 'reversed';
    className?: string;
    footnotes?: FootnoteItem[]
}

const ICON_CLASSES = {
    'fill-light-blue': 'fill-primary bg-primary-light',
    'fill-blue': 'fill-primary-light bg-primary',
    'stroke-light-blue': 'stroke-primary bg-primary-light',
    'stroke-blue': 'stroke-primary-light bg-primary',
} as const;

const BG_CLASSES = {
    background: {
        solid: {
            light: 'bg-background border-border',
            'light-secondary': 'bg-background-secondary border-border',
        },
        semiTransparent: {
            light: 'bg-background/5 border-border/10',
            'light-secondary': 'bg-background-secondary/5 border-border/10',
        },
    },
    text: {
        title: {
            solid: 'text-text-main',
            semiTransparent: 'text-text-light',
        },
        paragraph: {
            solid: 'text-text-secondary',
            semiTransparent: 'text-text-light-secondary',
        },
    },
} as const;

const GAP_CLASSES = {
    card: {
        small: 'gap-4 max-md:gap-2.5',
        regular: 'gap-6 max-md:gap-4',
        large: 'gap-6 max-md:gap-4',
    },
    text: {
        small: 'gap-1',
        regular: 'gap-4 max-md:gap-2.5',
        large: 'gap-2.5 max-md:gap-1',
    },
} as const;

const SIZE_CLASSES = {
    card: {
        small: 'p-[25px]',
        regular: 'p-[25px]',
        large: 'p-10 max-md:p-[25px]',
    },
    text: {
        title: {
            small: 'font-p-md',
            regular: 'font-p-xl',
            large: 'font-p-xl',
        },
        paragraph: {
            small: 'font-p-sm',
            regular: 'font-p-md',
            large: 'font-p-md',
        },
    },
} as const;

const DIRECTION_CLASSES = {
    card: {
        row: 'flex-row',
        column: 'flex-col',
    },
    text: {
        normal: 'flex-col',
        reversed: 'flex-col-reverse',
    },
} as const;

export const IconCard = (props: IconCardProps) => {
    const {
        icon,
        iconType = 'stroke',
        iconColor = 'light-blue',
        bgType = 'solid',
        bgColor = 'light',
        titleText,
        paragraphText,
        badges,
        button,
        cardSize = 'small',
        cardDirection = 'row',
        textDirection = 'normal',
        className,
        footnotes,
    } = props;

    const iconClass = ICON_CLASSES[`${iconType}-${iconColor}` as keyof typeof ICON_CLASSES] || '';
    const bgClass = BG_CLASSES.background[bgType][bgColor];
    const titleColorClass = BG_CLASSES.text.title[bgType];
    const paragraphColorClass = BG_CLASSES.text.paragraph[bgType];
    const cardSizeClass = SIZE_CLASSES.card[cardSize];
    const cardGapClass = GAP_CLASSES.card[cardSize];
    const textGapClass = GAP_CLASSES.text[cardSize];
    const cardDirectionClass = DIRECTION_CLASSES.card[cardDirection];
    const textDirectionClass = DIRECTION_CLASSES.text[textDirection];
    const titleSizeClass = SIZE_CLASSES.text.title[cardSize];
    const paragraphSizeClass = SIZE_CLASSES.text.paragraph[cardSize];

    return (
        <div
            className={`flex ${cardDirectionClass} ${cardGapClass} items-start border ${bgClass} rounded-xl ${cardSizeClass} w-full ${className}`}
        >
            <div className={`${iconClass} p-3 rounded-lg`}>
                <Icon
                    Svg={icon}
                    width={24}
                    height={24}
                    className={iconClass}
                />
            </div>
            <div className={`flex flex-col w-full ${textGapClass}`}>
                <div className={`flex ${textDirectionClass} ${textGapClass}`}>
                    <p className={`${titleSizeClass} ${titleColorClass} font-bold`}>{titleText}</p>
                    <p className={`${paragraphSizeClass} ${paragraphColorClass} leading-relaxed`}>{paragraphText}</p>
                </div>
                {badges && badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                        {badges.map((badge, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center px-3 py-1 rounded-full text-sm border border-border bg-background-secondary text-text-secondary"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                )}
                {button && (
                    <Button
                        text={button.text}
                        onClick={button.onClick}
                        theme={button.theme ?? 'light-blue'}
                        size={button.size ?? 'small'}
                        icon={button.icon}
                        iconType={button.iconType}
                        disabled={button.disabled}
                        className="mt-3 self-start"
                    />
                )}
                {footnotes && footnotes.length > 0 && (
                    <Footnote items={footnotes} variant={bgType === 'semiTransparent' ? 'light' : 'dark'} />
                )}
            </div>
        </div>
    )
}