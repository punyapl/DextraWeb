import { AriaRole, ReactNode, } from 'react';

type SliderProps = {
    items: ReactNode[];
    role?: AriaRole;
    className?: string;
}

export const Slider = (props: SliderProps) => {
    const { items, role, className = '', } = props

    return (
        <div role={role} className={`flex gap-5 overflow-x-scroll p-2 pb-7 scrollbar-primary ${className}`}>
            {items.map((item, index) => (
                <div key={index}>
                    {item}
                </div>
            ))}
        </div>
    )
}