type InlineLinkProps = {
    to: string;
    title?: string;
    text: string;
    className?: string;
};

export const InlineLink = (props: InlineLinkProps) => {
    const { to, title, text, className } = props

    return (
        <a href={to} rel="noopener noreferrer" target="_blank" className='group' title={title}>
            <span className={`group-hover:text-text-primary group-hover:underline transition ${className}`}>
                {text}
            </span>
        </a>
    );
};
