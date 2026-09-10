import emailjs from '@emailjs/browser';
import { Controller, useForm, } from "react-hook-form";
import Letter from '@/shared/assets/icons/Letter.svg'
import Paperplane from '@/shared/assets/icons/Paperplane.svg'
import Phone from '@/shared/assets/icons/Phone.svg'
import { useDevice, } from "@/shared/hooks/useDevice";
import { useModal, } from "@/shared/hooks/useModal";
import { Button, } from "@/shared/ui/Button";
import { Checkbox, } from "@/shared/ui/Checkbox";
import { IconCard, } from "@/shared/ui/IconCard";
import { Modal, ModalProps, } from "@/shared/ui/Modal";
import { PhoneInput, } from "@/shared/ui/PhoneInput";
import { TextareaInput, } from "@/shared/ui/TextareaInput";
import { TextInput, } from "@/shared/ui/TextInput";
import { formValidations } from '../model';
import { sanitizeEmail, sanitizeString } from '@/shared/lib/formSanitizer';
import { useState } from 'react';

type ResponseModalProps = Omit<ModalProps, 'children'>

const SuccessModal = (props: ResponseModalProps) => {
    const { isMobile, } = useDevice()

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} size={isMobile ? 'sm' : 'xl'} closeOnOutsideClick>
            <div className="flex flex-col gap-2.5">
                <p className="font-p-lg text-text-main text-center">Сообщение успешно отправлено!<br /> Мы свяжемся с вами в ближайшее время</p>
                <Button theme="blue" text="Закрыть" onClick={props.onClose} />
            </div>
        </Modal>
    )
}

const FailureModal = (props: ResponseModalProps) => {
    const { isMobile, } = useDevice()

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} size={isMobile ? 'sm' : 'xl'} closeOnOutsideClick>
            <div className="flex flex-col gap-2.5">
                <p className="font-p-lg text-text-main text-center">Не получилось отправить сообщение<br /> Повторите попытку позже, пожалуйста</p>
                <Button theme="blue" text="Закрыть" onClick={props.onClose} />
            </div>
        </Modal>
    )
}

type FormValues = {
    name: string;
    phone: string;
    email?: string;
    message?: string;
    agree: boolean;
};

const checkboxLabel =
    "Нажимая «Отправить», я соглашаюсь с Политикой конфиденциальности и даю согласие на обработку моих данных в соответствии с ФЗ №152-ФЗ и Положением о защите и обработке персональных данных.";

export const FeedbackForm = () => {
    const { isMobile } = useDevice();

    const methods = useForm<FormValues>({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        shouldFocusError: true
    });

    const {
        register,
        handleSubmit,
        control,
        reset,
        clearErrors,
        formState,
    } = methods;

    const { errors, isSubmitting, touchedFields } = formState;

    const [isSending, setIsSending] = useState(false);

    const onSubmit = async (data: FormValues) => {
        if (isSending) return;

        setIsSending(true);
        try {
            const sanitizedData = {
                name: sanitizeString(data.name),
                email: sanitizeEmail(data.email || ''),
                phone: data.phone,
                message: sanitizeString(data.message || '')
            };

            await emailjs.send(
                __EMAILJS_SERVICE_ID__!,
                __EMAILJS_TEMPLATE_ID__!,
                sanitizedData,
                __EMAILJS_PUBLIC_KEY__!
            );

            reset();
            successModal.open();
        } catch (err) {
            console.error("Ошибка отправки:", err);
            failureModal.open();
        } finally {
            setIsSending(false);
        }
    };

    const handleModalClose = () => {
        successModal.close();

        setTimeout(() => {
            reset({
                name: '',
                phone: '',
                email: '',
                message: '',
                agree: false
            });
            clearErrors();
        }, 100);
    };

    const successModal = useModal();
    const failureModal = useModal();

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col py-7.5 px-10 max-md:p-4 gap-6 max-md:gap-4 bg-white border border-border shadow-md max-w-[845px] rounded-3xl"
        >
            <div className="flex flex-col gap-6 max-md:gap-4">
                <div className="flex max-md:flex-col gap-6 max-md:gap-4 w-full items-start">
                    <TextInput
                        label="Ваше имя"
                        required
                        {...register("name", formValidations.name)}
                        error={errors.name?.message}
                        className="w-full"
                        placeholder="Иван Петров"
                        autoComplete="name"
                    />
                    <Controller
                        name="phone"
                        control={control}
                        rules={formValidations.phone}
                        render={({ field }) => (
                            <PhoneInput
                                label="Телефон"
                                required
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                error={errors.phone?.message}
                                className="w-full"
                            />
                        )}
                    />
                </div>

                <TextInput
                    label="Ваша Эл. Почта"
                    type="email"
                    {...register("email", formValidations.email)}
                    error={errors.email?.message}
                    placeholder="example@clinic.ru"
                    autoComplete="email"
                />

                <TextareaInput
                    label="Комментарий"
                    {...register("message", formValidations.message)}
                    error={errors.message?.message}
                    placeholder="Расскажите о вашем проекте..."
                />

                <Controller
                    name="agree"
                    control={control}
                    rules={formValidations.agree}
                    render={({ field }) => (
                        <Checkbox
                            label={checkboxLabel}
                            required
                            className="items-start"
                            checked={field.value}
                            error={errors.agree?.message}
                            onChange={(e) => field.onChange(e.target.checked)}
                        />
                    )}
                />
                {errors.agree && (
                    <p className="font-p-sm text-red-500">
                        {errors.agree.message}
                    </p>
                )}
            </div>

            <Button
                icon={Paperplane}
                size={isMobile ? 'regular' : 'large'}
                theme="blue"
                text={isSubmitting ? "Отправка..." : "Отправить"}
                type="submit"
                disabled={isSubmitting}
            />

            <div className="flex max-md:flex-col max-md:gap-5 justify-between pt-10 border-t border-border">
                <a
                    href="tel:+73833885832"
                    aria-label="Позвонить по номеру +7 (383) 388-58-32"
                >
                    <IconCard
                        icon={Phone}
                        titleText="+7 (383) 388-58-32"
                        paragraphText="Телефон"
                        textDirection="reversed"
                        className="!p-0 !bg-transparent !border-0"
                    />
                </a>
                <a
                    href="tel:+79951296332"
                    aria-label="Позвонить по номеру +7 (995) 129-63-32"
                >
                    <IconCard
                        icon={Phone}
                        titleText="+7 (995) 129-63-32"
                        paragraphText="Телефон"
                        textDirection="reversed"
                        className="!p-0 !bg-transparent !border-0"
                    />
                </a>
                <a
                    href="mailto:webs@d-extra.ru"
                    aria-label="Написать письмо на webs@d-extra.ru"
                >
                    <IconCard
                        icon={Letter}
                        titleText="webs@d-extra.ru"
                        paragraphText="Эл. Почта"
                        textDirection="reversed"
                        className="!p-0 !bg-transparent !border-0"
                    />
                </a>
            </div>

            <SuccessModal isOpen={successModal.show} onClose={handleModalClose} />
            <FailureModal isOpen={failureModal.show} onClose={failureModal.close} />
        </form>
    );
};
