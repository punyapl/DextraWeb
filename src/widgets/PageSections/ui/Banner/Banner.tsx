import { useDevice, } from "@/shared/hooks/useDevice";
import { scrollToSection, } from "@/shared/lib/scrollToSection";
import { Button, } from "@/shared/ui/Button";
import { InlineLink } from "@/shared/ui/InlineLink";
import { Section, } from "@/shared/ui/Section";

export const Banner = () => {
    const { isMobile, } = useDevice()

    return (
        <Section
            SectionClassName="py-22.5 max-xl:p-[34px] max-md:py-6 max-md:px-2.5 bg-background-secondary relative overflow-hidden"
            ContainerClassName="flex flex-col gap-8 max-md:gap-5 items-center w-full"
            id="banner"
        >
            <div className="absolute inset-0 overflow-hidden z-0">
                <span className="absolute top-[35%] left-[18%] -translate-x-1/2 w-[380px] h-[380px] 
                bg-circle-cyan rounded-full block blur-[72px] animate-float-1"></span>
                <span className="absolute -top-[10%] right-[17%] translate-x-1/2 w-[380px] h-[380px] 
                bg-circle-lightblue rounded-full block blur-[72px] animate-float-2"></span>
            </div>
            <div className="w-full flex flex-col gap-20.5 items-center z-20">
                <div className="flex flex-col gap-10.5 items-center">
                    <div className="flex flex-col gap-[25px] items-center">
                        <div className="px-15 py-2.5 bg-primary-lighter 
                            border-1 border-primary-light rounded-full
                            text-text-primary font-p-sm leading-none">
                            Декстра Групп
                        </div>
                        <h1 className="font-h1 text-text-main text-center font-bold">Сайты для бизнеса,<br />которые <span className="text-text-primary">работают на результат</span></h1>
                        <p className="font-sub text-text-secondary text-center">Чистый код. Современный дизайн. Запуск под ключ.
                        </p>
                    </div>
                    <div className="flex max-md:flex-col gap-5 justify-center items-center">
                        <Button
                            text="Оставить заявку"
                            theme="blue"
                            size={isMobile ? 'small' : 'regular'}
                            className="!leading-normal w-65"
                            onClick={() => scrollToSection('#form')}
                        />
                        <Button
                            text="Посмотреть проекты"
                            size={isMobile ? 'small' : 'regular'}
                            theme="white-blue"
                            className="!leading-normal w-65"
                            onClick={() => scrollToSection('#projects')}
                        />
                    </div>
                </div>
                <div className="flex gap-25 max-md:gap-5 items-center justify-center">
                    <div className="flex flex-col gap-2 items-center">
                        <h5 className="font-h5 text-[30px] leading-tight text-text-primary text-center">50+</h5>
                        <p className="font-p-sm leading-normal text-text-secondary text-center">Реализованных проектов</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <h5 className="font-h5 text-[30px] leading-tight text-text-primary text-center">100%</h5>
                        <p className="font-p-sm leading-normal text-text-secondary text-center">Соответствие стандартам</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <h5 className="font-h5 text-[30px] leading-tight text-text-primary text-center">24/7</h5>
                        <p className="font-p-sm leading-normal text-text-secondary text-center">Техническая поддержка</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};
