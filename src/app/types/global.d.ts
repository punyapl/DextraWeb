declare module '*.scss' {
    type IClassNames = Record<string, string>

    const classNames: IClassNames
    export = classNames
}
declare module '*.css'

declare module '*.svg' {
    import { type ReactElement, type SVGProps, } from 'react'

    const content: (props: SVGProps<SVGElement>) => ReactElement
    export default content
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.gif';

declare module '*.pdf';

// declared is development flag
declare const __IS_DEV__: boolean
declare const __YMAPKEY__: string
declare const __EMAILJS_SERVICE_ID__: string
declare const __EMAILJS_TEMPLATE_ID__: string
declare const __EMAILJS_PUBLIC_KEY__: string
declare const __STRAPI_URL__: string
// declare const __PROJECT__: 'storybook' | 'jest' | 'main';
