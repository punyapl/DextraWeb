import Chain from '@/shared/assets/icons/Chain.svg'
import Code from '@/shared/assets/icons/Code.svg'
import Lightning from '@/shared/assets/icons/Lightning.svg'
import Stack from '@/shared/assets/icons/Stack.svg'
import { IconCard, } from "@/shared/ui/IconCard";
import { InlineLink } from '@/shared/ui/InlineLink';
import { Section, } from "@/shared/ui/Section"
import { TextBanner, } from "@/shared/ui/TextBanner"

export const Advantages = () => {
    return (
        <Section
            SectionClassName="py-22.5 max-xl:p-[34px] max-md:py-6 max-md:px-2.5 bg-background"
            ContainerClassName="flex flex-col gap-16 max-md:gap-5 items-center"
            id="advantages"
        >
            <TextBanner
                type="h2"
                variant="light"
                headerText="Преимущества"
                subheaderText="Всё, что нужно бизнесу для эффективной работы в цифровой среде"
            />

            <div className="flex flex-col gap-8 items-center">
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 max-md:gap-4">
                    <IconCard
                        icon={Code}
                        iconColor="blue"
                        cardSize="regular"
                        titleText="Продуманный дизайн и UX*"
                        paragraphText="Проектируем интерфейсы с учётом поведения пользователей и специфики вашей отрасли. Дизайн работает на конверсию, а не просто выглядит красиво"
                        footnotes={[
                            { term: 'UX', definition: 'пользовательский опыт' }
                        ]}
                    />
                    <IconCard
                        icon={Lightning}
                        iconColor="blue"
                        cardSize="regular"
                        titleText="Оптимизация под SEO* и скорость"
                        paragraphText="Быстрая загрузка страниц и высокие позиции в поисковых системах. Ваши клиенты находят вас раньше конкурентов"
                        footnotes={[
                            { term: 'SEO', definition: 'поисковая оптимизация' }
                        ]}
                    />
                    <IconCard
                        icon={Chain}
                        iconColor="blue"
                        cardSize="regular"
                        titleText={<>
                            Интеграция с {' '}
                            <InlineLink
                                to='https://d-extra.ru/?utm_source=dx-webs'
                                title='Открыть сайт МИС ↗'
                                text='МИС DEXTRA'
                            />
                        </>}
                        paragraphText="Бесшовная синхронизация с медицинской информационной системой — онлайн-запись, расписание врачей, синхронизация данных"
                    />
                    <IconCard
                        icon={Stack}
                        iconColor="blue"
                        cardSize="regular"
                        titleText="Полный цикл разработки"
                        paragraphText="От концепции и дизайна до внедрения, тестирования и технической поддержки 24/7. Мы сопровождаем проект на каждом этапе"
                    />
                </div>
                <div className="flex max-md:flex-col max-md:gap-6 justify-evenly items-center bg-primary rounded-2xl w-full py-10">
                    <div className="flex flex-col gap-2 items-center">
                        <h5 className="font-h5 text-[30px] leading-tight text-text-light text-center">24/7</h5>
                        <p className="font-p-md leading-normal text-primary-light text-center">Время работы</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <h5 className="font-h5 text-[30px] leading-tight text-text-light text-center">{`<1 сек`}</h5>
                        <p className="font-p-md leading-normal text-primary-light text-center">Загрузка страницы</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <h5 className="font-h5 text-[30px] leading-tight text-text-light text-center">10/10</h5>
                        <p className="font-p-md leading-normal text-primary-light text-center">Оценка безопасности</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};
