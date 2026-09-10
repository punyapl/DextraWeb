import { useState, } from 'react'
import ChevronDown from '@/shared/assets/icons/ChevronDown.svg'
import { Icon, } from '../Icon'

type AccordionData = {
    title: string;
    paragraph: string;
}

type AccordionProps = {
    data: AccordionData[];
    className?: string;
}

export const Accordion = (props: AccordionProps) => {
    const { data, className, } = props

    const [openIndex, setOpenIndex,] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className={`flex flex-col gap-2.5 max-md:gap-1 w-full max-w-[730px] ${className}`}>
            {data.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div key={index} className="border-t-2 border-border">
                        <button
                            onClick={() => toggleIndex(index)}
                            className="w-full cursor-pointer flex justify-between items-center 
                            px-3 max-md:px-2.5 py-6 max-md:py-4 text-left focus:outline-none"
                        >
                            <span className="text-text-main font-p-lg">{item.title}</span>
                            <Icon
                                Svg={ChevronDown}
                                width={24}
                                height={24}
                                className={`
                                    stroke-[1.5] stroke-primary transform 
                                    transition-transform duration-300 
                                    ${isOpen ? 'rotate-180' : ''}
                                `}
                            />
                        </button>
                        <div
                            className={`
                                bg-primary-light rounded-b-[10px] overflow-hidden transition-max-height 
                                duration-300 ease-in-out px-4 ${isOpen ? 'max-h-96 p-3' : 'max-h-0'} 
                            `}
                        >
                            <p className="text-text-main font-p-md whitespace-normal break-words">
                                {item.paragraph}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}