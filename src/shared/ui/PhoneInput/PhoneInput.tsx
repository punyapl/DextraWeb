import { FocusEventHandler } from 'react';
import MaskedInput from 'react-text-mask';

type PhoneInputProps = {
    label: string;
    required?: boolean;
    disabled?: boolean;
    name?: string;
    id?: string;
    value?: string;
    onChange?: (value: string) => void;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    error?: string;
    className?: string;
}

export const PhoneInput = (props: PhoneInputProps) => {
    const {
        label,
        required,
        disabled,
        name,
        id,
        value,
        onChange,
        onBlur,
        error,
        className,
    } = props;

    const prefixClasses = `
        flex rounded-l-md border w-[42px] h-[42px] items-center justify-center font-p-md transition-colors
        ${error 
            ? 'border-red-500 bg-red-50 text-red-900 border-r-0' 
            : 'border-border text-text-secondary'
        }
    `;

    const inputClasses = `
        min-h-[40px] grow min-w-0 px-3 text-base border rounded-r-[10px] 
        placeholder:text-text-secondary transition-colors
        ${error 
            ? 'border-red-500 bg-red-50 text-red-900 focus:border-red-500' 
            : 'border-border bg-background'
        }
    `;

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const raw = e.target.value.replace(/\D/g, '');
        if (raw.length === 0) {
            onChange?.('');
        } else {
            onChange?.('7' + raw);
        }
    };

    const displayValue = value && value.startsWith('7') ? value.slice(1) : value || '';

    return (
        <div className={`flex flex-col gap-2.5 ${className}`}>
            <label htmlFor={id}>
                {label}{required && ' *'}
            </label>
            <div className="flex grow">
                <div className={prefixClasses}>
                    +7
                </div>
                <MaskedInput
                    disabled={disabled}
                    name={name}
                    mask={["(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/,]}
                    placeholder="(___) ___-__-__"
                    value={displayValue}
                    onChange={handleChange}
                    onBlur={onBlur}
                    className={inputClasses}
                    inputMode='numeric'
                />
            </div>
            {error && <span className="font-p-sm text-red-500">{error}</span>}
        </div>
    )
}