export const formValidations = {
    name: {
        required: "Введите ваше имя",
        minLength: {
            value: 2,
            message: "Имя должно содержать минимум 2 символа"
        },
        maxLength: {
            value: 50,
            message: "Имя не должно превышать 50 символов"
        },
        pattern: {
            value: /^[а-яёА-ЯЁa-zA-Z\s\-]+$/,
            message: "Имя может содержать только буквы, пробелы и дефисы"
        },
        validate: {
            noOnlySpaces: (value: string) =>
                value.trim().length >= 2 || "Имя не может состоять только из пробелов"
        }
    },

    email: {
        maxLength: {
            value: 254,
            message: "Эл. Почта слишком длинная"
        },
        pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            message: "Введите корректную Эл. Почту"
        },
        validate: {
            noSpaces: (value: string | undefined) =>{
                if (!value) return true;
                return !/\s/.test(value) || "Эл. Почта не должна содержать пробелы";
            },
            validDomain: (value: string | undefined) => {
                if (!value) return true;
                const domain = value.split('@')[1];
                return (domain?.includes('.') && domain.split('.').pop()!.length >= 2)
                    || "Введите корректный домен";
            },
            noDots: (value: string | undefined) =>{
                if (!value) return true;
                return !value.includes('..') || "Эл. Почта не должна содержать две точки подряд"
            }
        }
    },

    phone: {
        required: "Введите ваш номер телефона",
        validate: {
            validFormat: (value: string) => {
                if (!value) return "Введите номер телефона";
                const digits = value.replace(/\D/g, '');

                if (digits.length < 11) return "Номер слишком короткий (минимум 11 цифр)";
                if (digits.length > 11) return "Номер слишком длинный (максимум 11 цифр)";

                const firstDigit = digits[0];
                if (firstDigit !== '7' && firstDigit !== '8') {
                    return "Номер должен начинаться с +7 или 8";
                }

                const operatorCode = digits.substring(1, 4);
                if (operatorCode === '000') {
                    return "Некорректный код оператора";
                }

                return true;
            }
        }
    },

    message: {
        minLength: {
            value: 10,
            message: "Комментарий должен содержать минимум 10 символов"
        },
        maxLength: {
            value: 500,
            message: "Комментарий не должен превышать 500 символов"
        },
        validate: {
            noOnlySpaces: (value: string | undefined) => {
                if (!value) return true;
                return value.trim().length >= 10 || "Комментарий должен содержать минимум 10 значимых символов";
            },
            noExcessiveSymbols: (value: string | undefined) => {
                if (!value) return true;
                const specialCharsCount = (value.match(/[^а-яёА-ЯЁa-zA-Z0-9\s,.!?;:\-()]/g) || []).length;
                return specialCharsCount < value.length * 0.3 || "Слишком много специальных символов";
            }
        }
    },

    agree: {
        required: "Необходимо согласие с политикой конфиденциальности",
        validate: (value: boolean) =>
            value === true || "Необходимо согласие с политикой конфиденциальности"
    }
} as const;