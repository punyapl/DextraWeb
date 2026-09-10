import { forwardRef, } from "react";

type TextareaInputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    error?: string;
};

export const TextareaInput = forwardRef<HTMLTextAreaElement, TextareaInputProps>(
    ({ label, error, className, required, ...props }, ref) => {

        return (
            <div className={`flex flex-col gap-2.5 ${className}`}>
                <label htmlFor={props.id}>
                    {label}{required && ' *'}
                </label>
                <textarea
                    className={`resize-y py-2.5 min-h-[104px] grow min-w-0 px-5 text-base border
                    placeholder:text-text-light-secondary rounded-[10px] transition-colors 
                        ${error
                            ? 'border-red-500 bg-red-50 text-red-900 focus:border-red-500 focus:ring-red-500'
                            : 'border-border bg-background focus:border-primary'
                        }`}
                    ref={ref}
                    {...props}
                />
                {error && <span className="font-p-sm text-red-500">{error}</span>}
            </div>
        )
    }
)