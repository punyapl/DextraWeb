import { InputHTMLAttributes, forwardRef, } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ label, className = '', error, required, ...props }, ref) => {
        return (
            <label className={`inline-flex gap-2.5 items-center cursor-pointer ${className}`}>
                <input
                    ref={ref}
                    type="checkbox"
                    className="sr-only"
                    {...props}
                />

                <div className={`
                    w-5 h-5 flex shrink-0 items-center justify-center
                    border-2 rounded-[5px]
                    transition-colors duration-200 ease-in-out
                    
                    ${error
                        ? 'border-red-500'
                        : (props.checked ? 'border-primary' : 'border-border')
                    }

                    ${props.checked
                        ? (error ? 'bg-red-500' : 'bg-primary')
                        : 'bg-white'
                    }

                    ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}
                `}>
                </div>

                {label && (
                    <span className={`font-p-lg ${props.disabled
                            ? 'text-text-secondary'
                            : (error ? 'text-red-500' : 'text-text-main')
                        }`}>
                        {label}{required && ' *'}
                    </span>
                )}
            </label>
        );
    }
);

Checkbox.displayName = 'Checkbox';