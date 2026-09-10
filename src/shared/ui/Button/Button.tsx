import { ButtonHTMLAttributes, FC, type SVGProps, } from 'react'
import { Icon, } from '../Icon'

interface ButtonPropsI extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    icon?: FC<SVGProps<SVGSVGElement>>;
    iconType?: 'stroke' | 'fill' | 'both';
    theme: 'white' | 'light-blue' | 'blue' | 'white-blue';
    size?: 'large' | 'regular' | 'small';
}

export const Button = (props: ButtonPropsI) => {
    const {
        text,
        icon,
        iconType = 'stroke',
        theme,
        size = 'regular',
    } = props;

    const themeClass = () => {
        let result
        switch (theme) {
            case 'white':
                result = 'bg-white border-1 border-border text-text-main stroke-primary hover:shadow-white'
                break
            case 'light-blue':
                result = 'bg-primary-lighter border-1 border-primary-light text-text-primary stroke-primary hover:shadow-button-hvr hover:bg-button-hvr hover:text-text-light'
                break
            case 'blue':
                result = 'bg-primary text-text-light stroke-white hover:shadow-button-hvr hover:bg-button-hvr hover:text-text-light'
                break
            case 'white-blue':
                result = 'bg-white border-1 border-border text-text-main stroke-primary hover:shadow-button-hvr hover:border-primary hover:bg-button-hvr hover:text-text-light'
                break
            default:
                break
        }
        return result
    }

    const sizeClass = () => {
        const iconOnly = icon && !text
        let result
        switch (size) {
            case 'large':
                result = (iconOnly ? 'p-4.5' : 'py-4.5 px-12') + ' text-base'
                break
            case 'regular':
                result = (iconOnly ? 'p-4' : 'py-4 px-12') + ' text-base'
                break
            case 'small':
                result = (iconOnly ? 'p-2.5' : 'py-2.5 px-5') + ' text-sm'
                break
            default:
                break
        }
        return result
    }

    const IconClass = () => {
        let sizeResult
        let themeResult
        switch (theme) {
            case 'white':
                themeResult = iconType === 'stroke' ?
                    'stroke-primary' :
                    iconType === 'fill' ?
                        'fill-primary' :
                        'stroke-primary fill-primary'
                break
            case 'light-blue':
                themeResult = iconType === 'stroke' ?
                    'stroke-primary group-hover:stroke-text-white' :
                    iconType === 'fill' ?
                        'fill-primary group-hover:fill-text-white' :
                        'stroke-primary group-hover:stroke-text-white fill-primary group-hover:fill-text-white'
                break
            case 'blue':
                themeResult = iconType === 'stroke' ?
                    'stroke-white' :
                    iconType === 'fill' ?
                        'fill-white' :
                        'stroke-white fill-white'
                break
            case 'white-blue':
                themeResult = iconType === 'stroke' ?
                    'stroke-primary group-hover:stroke-text-white' :
                    iconType === 'fill' ?
                        'fill-primary group-hover:fill-text-white' :
                        'stroke-primary group-hover:stroke-text-white fill-primary group-hover:fill-text-white'
                break
            default:
                break
        }
        switch (size) {
            case 'large':
                sizeResult = iconType === 'stroke' || 'both' ? 'stroke-[2.5]' : null
                break
            case 'regular':
                sizeResult = iconType === 'stroke' || 'both' ? 'stroke-2' : null
                break
            case 'small':
                sizeResult = iconType === 'stroke' || 'both' ? 'stroke-[1.5]' : null
                break
            default:
                break
        }
        return `${themeResult} ${sizeResult}`
    }

    return (
        <button
            className={`
                flex items-center justify-center gap-2.5 font-medium leading-none cursor-pointer group shadow-sm transition duration-300 rounded-full
                ${themeClass()} ${sizeClass()} ${props.className} ${props.disabled && 'opacity-30 cursor-not-allowed'}
            `}
            onClick={props.onClick}
            disabled={props.disabled}
            role={props.role}
        >
            {
                icon &&
                <Icon Svg={icon} className={IconClass()} />
            }
            {text}
        </button>
    )
}