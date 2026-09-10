import Code from '@/shared/assets/icons/Code.svg'
import Shield from '@/shared/assets/icons/Shield.svg'
import UserGroup from '@/shared/assets/icons/UserGroup.svg'
import { IconCard, } from "@/shared/ui/IconCard";
import { InlineLink } from '@/shared/ui/InlineLink';
import { Section, } from "@/shared/ui/Section";
import { TextBanner, } from "@/shared/ui/TextBanner";

export const About = () => {
    return (
        <Section
            SectionClassName="py-22.5 max-xl:p-[34px] max-md:py-6 max-md:px-2.5"
            ContainerClassName="flex flex-col gap-16 max-md:gap-5 items-center"
            id="about"
        >
            <TextBanner
                type="h2"
                variant="light"
                headerText="О Декстра Веб"
            />
            <div className="flex max-xl:flex-col gap-12.5 items-center">
                <div className="flex flex-col gap-[33px]">
                    <p className="font-p-lg text-text-secondary leading-relaxed">
                        <span className="text-text-primary font-bold">
                            Декстра Веб
                        </span> — направление {' '}
                        <InlineLink
                            to='https://d-extra.ru/?utm_source=dx-webs'
                            title='Открыть сайт Декстра Групп ↗'
                            text='Декстра Групп'
                            className='font-bold'
                        />
                        , специализирующееся на разработке сайтов под ключ.
                    </p>
                    <p className="font-p-lg text-text-secondary leading-relaxed">
                        Мы объединили многолетний опыт в области ИТ-систем с экспертизой в веб-разработке, чтобы создавать сайты, которые не просто красивы, но и по-настоящему работают.
                    </p>
                    <p className="font-p-lg text-text-secondary leading-relaxed">
                        Наши стандарты качества, надёжности и безопасности сформированы работой с медицинской отраслью — одной из самых требовательных в цифровой среде.
                    </p>
                </div>
                <div className="flex flex-col gap-5 max-w-[528px] w-full">
                    <IconCard icon={Shield} textDirection="normal" titleText="Надежность" paragraphText="Гарантия стабильной работы и защита данных клиентов" />
                    <IconCard icon={Code} titleText="Чистый код" paragraphText="Чистый, стабильный и поддерживаемый код" />
                    <IconCard icon={UserGroup} titleText="Поддержка" paragraphText="Команда экспертов всегда готова помочь" />
                </div>
            </div>
        </Section>
    );
};
