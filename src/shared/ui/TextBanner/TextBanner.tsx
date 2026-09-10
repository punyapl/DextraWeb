interface VariantMap {
    h1: 'dark' | 'light';
    h2: 'dark' | 'light';
}

type TextBannerProps = {
    [T in keyof VariantMap]: {
        type: T;
        variant: VariantMap[T];
        headerText: string | React.ReactNode;
        subheaderText?: string;
        id?: string;
    }
}[keyof VariantMap];

const headerSizes: Record<keyof VariantMap, string> = {
    h1: 'font-h1',
    h2: 'font-h2',
};

const paragraphSizes: Record<keyof VariantMap, string> = {
    h1: 'font-sub max-w-[810px] max-md:w-[300px]',
    h2: 'font-p-lg max-w-[810px] max-md:w-[300px]',
};

type Variant = VariantMap[keyof VariantMap];

const variantClasses: { [V in Variant]: { header: string; subheader: string; divider: string } } = {
    'dark': { header: 'text-text-light', subheader: 'text-text-light-secondary', divider: 'bg-primary-secondary', },
    'light': { header: 'text-text-main', subheader: 'text-text-secondary', divider: 'bg-primary', },
    // 'white': { header: 'text-text-main', subheader: 'text-text-secondary', },
    // 'blue': { header: 'text-text-light', subheader: 'text-text-light-secondary', },
    // 'light-blue': { header: 'text-text-main', subheader: 'text-text-main', },
};

export const TextBanner = (props: TextBannerProps) => {
    const {
        type,
        variant,
        headerText,
        subheaderText,
        id,
    } = props;

    const Tag = type;
    const headerSizeClass = headerSizes[type];
    const subSizeClass = paragraphSizes[type]

    const { header: headerClass, subheader: subClass, divider: dividerClass, } = variantClasses[variant];

    return (
        <div className="flex flex-col items-center gap-4">
            <Tag id={id} className={`text-center ${headerSizeClass} ${headerClass}`}>
                {headerText}
            </Tag>
            <span className={`block h-1 w-20 ${dividerClass}`}/>
            {
                subheaderText &&
                <p className={`text-center ${subSizeClass} ${subClass}`}>
                    {subheaderText}
                </p>
            }
        </div>
    );
};
