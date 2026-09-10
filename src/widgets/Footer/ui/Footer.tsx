import { navItems, } from '@/shared/const/navItems'
import { Icon, } from '@/shared/ui/Icon'
import { Section, } from '@/shared/ui/Section'
import Letter from '@/shared/assets/icons/Letter.svg'
import Logo from '@/shared/assets/icons/Logo.svg'
import Phone from '@/shared/assets/icons/Phone.svg'
import PrivacyPolicy from '@/shared/assets/documents/privacyPolicy.pdf'
import { scrollToSectionFromLink } from '@/shared/lib/scrollToSection'
import { InlineLink } from '@/shared/ui/InlineLink'

export const Footer = () => {

    return (
        <Section
            SectionClassName="self-end bg-primary-darker to-primary"
            ContainerClassName='w-full max-w-[1440px]'
        >
            <footer
                role="contentinfo"
                aria-label="Подвал сайта"
                className="flex flex-col max-w-[1440px] 
                    px-36 max-md:px-8.5 py-14.5 max-xl:py-10 
                    gap-10 max-xl:gap-8 max-md:gap-5"
            >
                <div className="flex justify-between max-xl:flex-wrap max-md:flex-col max-md:gap-4" role="region" aria-label="Контактная информация">
                    {/* Информация о компании */}
                    <div className="flex flex-col gap-1 w-[300px] max-md:w-[260px]">
                        <a href="/" aria-label="Перейти на главную страницу">
                            <Icon
                                Svg={Logo}
                                width={130}
                                height={40}
                                aria-hidden="true"
                            />
                        </a>
                        <p className="font-p-sm text-text-light-secondary leading-normal">
                            Создаём сайты, которые работают на результат.
                        </p>
                    </div>

                    {/* Навигация */}
                    <nav
                        className="flex flex-col gap-4 w-[300px] max-md:w-[260px]"
                        aria-label="Дополнительная навигация"
                    >
                        <h3 className="font-p-lg font-bold leading-normal text-text-light">Навигация</h3>
                        <div className='flex flex-col gap-3'>
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    onClick={(e) => scrollToSectionFromLink(e, item.path)}
                                    className="font-p-sm text-text-light-secondary leading-tight cursor-pointer hover:underline! underline-offset-4"
                                    aria-label={item.label}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* Контакты */}
                    <address className="flex flex-col gap-4 w-[300px] max-md:w-[260px] not-italic">
                        <h3 className="font-p-lg font-bold leading-normal text-text-light">Контакты</h3>
                        <div className='flex flex-col gap-3'>
                            <div className="flex gap-3 items-center">
                                <Icon
                                    Svg={Phone}
                                    width={16}
                                    height={16}
                                    className="stroke-primary"
                                    aria-hidden="true"
                                />
                                <a
                                    href="tel:+73833885832"
                                    className="font-p-sm text-text-light-secondary leading-tight"
                                    aria-label="Позвонить по номеру +7 (383) 388-58-32"
                                >
                                    +7 (383) 388-58-32
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Icon
                                    Svg={Phone}
                                    width={16}
                                    height={16}
                                    className="stroke-primary"
                                    aria-hidden="true"
                                />
                                <a
                                    href="tel:+79951296332"
                                    className="font-p-sm text-text-light-secondary leading-tight"
                                    aria-label="Позвонить по номеру +7 (995) 129-63-32"
                                >
                                    +7 (995) 129-63-32
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Icon
                                    Svg={Letter}
                                    width={16}
                                    height={16}
                                    className="stroke-primary"
                                    aria-hidden="true"
                                />
                                <a
                                    href="mailto:webs@d-extra.ru"
                                    className="font-p-sm text-text-light-secondary leading-tight"
                                    aria-label="Написать письмо на webs@d-extra.ru"
                                >
                                    webs@d-extra.ru
                                </a>
                            </div>
                        </div>
                    </address>
                </div>

                {/* Нижняя часть футера */}
                <div
                    className="flex max-md:flex-col-reverse py-4 max-md:gap-5 md:justify-between border-t border-text-secondary"
                    role="region"
                    aria-label="Юридическая информация"
                >
                    <p className="font-p-sm text-text-light-secondary leading-tight">
                        © {new Date().getFullYear()} Декстра Веб. Все права защищены.
                    </p>
                    <div className="flex gap-6">
                        <a
                            href='/Политика конфиденциальности.pdf'
                            rel="noopener noreferrer" target="_blank"
                            className="font-p-sm text-text-light-secondary leading-tight cursor-pointer"
                            aria-label="Политика конфиденциальности"
                        >
                            Политика конфиденциальности
                        </a>
                    </div>
                </div>

            </footer>
        </Section>
    )
}