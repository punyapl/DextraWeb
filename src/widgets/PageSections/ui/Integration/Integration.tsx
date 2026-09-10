import Code from '@/shared/assets/icons/Code.svg'
import FileText from '@/shared/assets/icons/FileText.svg'
import Rocket from '@/shared/assets/icons/Rocket.svg'
import Heart from '@/shared/assets/icons/Heart.svg'
import { useDevice, } from "@/shared/hooks/useDevice";
import { scrollToSection, } from "@/shared/lib/scrollToSection";
import { Button, } from "@/shared/ui/Button";
import { IconCard, } from "@/shared/ui/IconCard";
import { Section, } from "@/shared/ui/Section"

export const Integration = () => {
    const { isMobile, } = useDevice();

    return (
        <Section
            SectionClassName="py-22.5 max-xl:p-[34px] max-md:py-6 max-md:px-2.5 
            bg-linear-to-br from-grad-dark-from-to via-grad-dark-via to-grad-dark-from-to relative overflow-hidden"
            ContainerClassName="flex flex-col gap-16 max-md:gap-5 items-center"
            id="integration"
        >
            <div className="absolute inset-0 overflow-hidden z-0">
                <span className="absolute -top-[10%] left-[18%] -translate-x-1/2 w-[380px] h-[380px] 
                bg-primary/20 rounded-full block blur-[72px] animate-float-2"></span>
                <span className="absolute top-[35%] right-[17%] translate-x-1/2 w-[380px] h-[380px] 
                bg-circle-cyan/10 rounded-full block blur-[72px] animate-float-1"></span>
            </div>
            <div className='flex flex-row gap-16 max-md:gap-5 max-xl:flex-col w-full z-10'>
                <div className="flex flex-col gap-8 items-start max-xl:items-center w-full">
                    <div className="px-4 py-2.5 bg-primary/20 border-1 border-primary-secondary/30 
                        rounded-full text-primary-secondary font-p-sm leading-none"
                    >
                        Наш стандарт
                    </div>
                    <h2 className='font-h2 text-text-light text-left max-xl:text-center'> Медицина — самая требовательная отрасль.<br />Мы прошли эту проверку.</h2>
                    <p className='font-p-lg text-text-light-secondary text-left max-xl:text-center'>Сайты для медицинских центров — это особая история: строгие требования к защите данных, высокие ожидания пользователей, интеграция со сложными ИТ-системами. Если мы справляемся с этим — ваш бизнес в надёжных руках.</p>
                    <div className="flex flex-col gap-10 max-md:gap-5 p-[25px]
                            bg-background-secondary/5 border border-border/10 border-l-primary-secondary border-l-4 rounded-xl w-full max-w-[680px]"
                    >
                        <p className='font-p-lg text-text-light-secondary text-left italic'>«Опыт в медицинской веб-разработке — это не просто портфолио. Это подтверждение, что мы умеем работать там, где ошибки недопустимы.»</p>
                    </div>
                </div>
                <div className="flex flex-col gap-8 items-end max-xl:items-center w-full">
                    <div className="flex flex-col gap-8">
                        <IconCard
                            icon={Heart}
                            iconColor="blue"
                            iconType='fill'
                            bgType="semiTransparent"
                            cardSize="small"
                            cardDirection="row"
                            titleText="Защита данных и безопасность"
                            paragraphText="Работаем с персональными данными пациентов — знаем все требования 152-ФЗ. Для любого бизнеса это означает высший уровень защиты."
                            className='max-w-[680px]'
                        />
                        <IconCard
                            icon={Code}
                            iconColor="blue"
                            bgType="semiTransparent"
                            cardSize="small"
                            cardDirection="row"
                            titleText="Интеграция МИС DEXTRA"
                            paragraphText="Ваш сайт становится частью экосистемы медицинского учреждения. Интеграция позволяет сократить административную нагрузку и повысить качество обслуживания пациентов."
                            className='max-w-[680px]'
                        />
                        <IconCard
                            icon={FileText}
                            iconColor="blue"
                            iconType='fill'
                            bgType="semiTransparent"
                            cardSize="small"
                            cardDirection="row"
                            titleText="Соответствие стандартам"
                            paragraphText="Наши сайты соответствуют требованиям Роскомнадзора, стандартам доступности и SEO*-оптимизации — с первого релиза."
                            className='max-w-[680px]'
                            footnotes={[
                                { term: 'SEO', definition: 'поисковая оптимизация' }
                            ]}
                        />
                        <IconCard
                            icon={Rocket}
                            iconType='fill'
                            iconColor="blue"
                            bgType="semiTransparent"
                            cardSize="small"
                            cardDirection="row"
                            titleText="Производительность в любых условиях"
                            paragraphText="Медицинские сайты работают круглосуточно без сбоев. Ваш сайт получает тот же стандарт доступности — время работы 24/7"
                            className='max-w-[680px]'
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
};
