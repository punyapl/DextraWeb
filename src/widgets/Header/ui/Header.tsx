import { useEffect, useState, } from 'react'
import Burger from '@/shared/assets/icons/Burger.svg'
import Logo from '@/shared/assets/icons/Logo.svg'
import { getRouteMain, } from '@/shared/const/router'
import { useDevice, } from '@/shared/hooks/useDevice'
import { Button, } from '@/shared/ui/Button'
import { Icon, } from '@/shared/ui/Icon'
import { NavBar, } from '@/shared/ui/NavBar'
import { Section, } from '@/shared/ui/Section'
import { useScrollToSection } from '@/shared/hooks/useScrollToSection/useScrollToSection'

export const Header = () => {
    const { isMobile, } = useDevice()
    const scrollToSection = useScrollToSection();

    const [sidebarOpen, setSidebarOpen,] = useState(false);

    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [sidebarOpen,]);

    return (
        <Section SectionClassName="fixed left-0 right-0 w-screen bg-background border-b-1 border-border z-50">
            <header className='py-4 px-[34px] xl:px-0 flex items-center justify-between'>
                <a href={getRouteMain()} aria-label="Перейти на главную страницу">
                    <Icon
                        Svg={Logo}
                        width={isMobile ? 116 : 134}
                        height={40}
                        aria-hidden="true"
                    />
                </a>
                <NavBar
                    className="hidden xl:flex"
                    role="navigation"
                    aria-label="Основное меню"
                />
                <div className="hidden xl:flex gap-6 items-center">
                    <Button
                        theme="blue"
                        text="Оставить заявку"
                        size="small"
                        aria-label="Оставить заявку"
                        className='!text-base'
                        onClick={() => scrollToSection('#form')}
                    />
                </div>
                <button
                    className="xl:hidden"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-label="Открыть меню"
                    aria-expanded={sidebarOpen}
                    aria-controls="mobile-menu"
                    aria-haspopup="true"
                >
                    <Icon
                        Svg={Burger}
                        width={32}
                        height={32}
                        aria-hidden="true"
                        className='stroke-primary'
                    />
                </button>
                <div
                    id="mobile-menu"
                    className={`
                            fixed inset-y-0 right-0 z-50 bg-white ${isMobile ? 'w-screen' : 'max-w-[360px]'} top-[72px]
                            transform transition-transform duration-300 ease-in-out
                            ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}
                        `}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Мобильное меню"
                    aria-hidden={!sidebarOpen}
                >
                    <nav
                        className="flex flex-col h-full justify-between px-[38px] py-[34px]"
                        aria-label="Мобильная навигация"
                    >
                        <NavBar
                            className="flex-col items-start gap-[30px]"
                            role="navigation"
                            onLinkClick={() => setSidebarOpen(false)}
                        />
                        <div className="flex flex-col gap-[30px]">
                            <Button
                                theme="blue"
                                text="Оставить заявку"
                                size="small"
                                aria-label="Оставить заявку"
                                className='!text-base'
                                onClick={() => {
                                    scrollToSection('#form');
                                    setSidebarOpen(false)
                                }}
                            />
                        </div>
                    </nav>
                </div>
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/30 z-40 top-[72px]"
                        onClick={() => setSidebarOpen(false)}
                        aria-hidden="true"
                        role="presentation"
                    />
                )}
            </header>
        </Section>
    )
}