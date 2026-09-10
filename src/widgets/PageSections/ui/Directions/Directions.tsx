import { Section, } from "@/shared/ui/Section"
import { TextBanner } from "@/shared/ui/TextBanner"
import { IconCard, } from "@/shared/ui/IconCard";
import Lips from '@/shared/assets/icons/Lips.svg'
import Education from '@/shared/assets/icons/Education.svg'
import Wrench from '@/shared/assets/icons/Wrench.svg'
import Food from '@/shared/assets/icons/Food.svg'
import Sparkle from '@/shared/assets/icons/Sparkle.svg'
import Stethoscope from '@/shared/assets/icons/Stethoscope.svg'
import { scrollToSection, } from '@/shared/lib/scrollToSection'

export const Directions = () => {
    return (
        <Section
            SectionClassName="py-22.5 max-xl:p-[34px] max-md:py-6 max-md:px-2.5 bg-background-secondary"
            ContainerClassName="flex flex-col gap-16 max-md:gap-5 items-center"
            id="directions"
        >
            <TextBanner
                type="h2"
                variant="light"
                headerText="Направления"
                subheaderText="Мы создаём сайты для бизнеса в разных отраслях, адаптируя решения под специфику каждой из них"
            />
            <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-4">
                <IconCard
                    icon={Stethoscope}
                    titleText="Медицина и здоровье"
                    paragraphText="Клиники, медицинские центры, стоматологии, диагностические лаборатории. Полная интеграция с МИС DEXTRA, онлайн-запись"
                    iconType='fill'
                    bgType="solid"
                    bgColor="light"
                    cardSize="large"
                    cardDirection="column"
                    badges={['Клиники', 'Стоматологии', 'Диагностика', 'МИС DEXTRA']}
                />
                <IconCard
                    icon={Lips}
                    titleText="Красота"
                    paragraphText="Салоны красоты, спа, фитнес-клубы, косметологические центры. Онлайн-запись, акции и абонементы."
                    iconType='stroke'
                    bgType="solid"
                    bgColor="light"
                    cardSize="large"
                    cardDirection="column"
                    badges={['Салоны красоты', 'Спа', 'Фитнес']}
                />
                <IconCard
                    icon={Education}
                    titleText="Образование"
                    paragraphText="Школы, курсы, языковые центры, онлайн-платформы. Расписание, онлайн-запись, блог и материалы."
                    iconType='stroke'
                    bgType="solid"
                    bgColor="light"
                    cardSize="large"
                    cardDirection="column"
                    badges={['Школы', 'Курсы', 'Тренинги']}
                />
                <IconCard
                    icon={Wrench}
                    titleText="Услуги для бизнеса"
                    paragraphText="Юридические, бухгалтерские, консалтинговые компании. Чёткое позиционирование, форма заявки, блог-экспертиза, кейсы."
                    iconType='fill'
                    bgType="solid"
                    bgColor="light"
                    cardSize="large"
                    cardDirection="column"
                    badges={['Юридические', 'Бухгалтерские', 'Консалтинг']}
                />
                <IconCard
                    icon={Food}
                    titleText="Рестораны и кафе"
                    paragraphText="Рестораны, кофейни, доставка еды. Меню, бронирование столиков, акции, интеграция с агрегаторами доставки."
                    iconType='fill'
                    bgType="solid"
                    bgColor="light"
                    cardSize="large"
                    cardDirection="column"
                    badges={['Рестораны', 'Кафе', 'Доставка еды']}
                />
                <IconCard
                    icon={Sparkle}
                    titleText="Ваша отрасль"
                    paragraphText="Не нашли свою нишу? Мы работаем с любым бизнесом. Расскажите о своём проекте — предложим подходящее решение."
                    iconType='fill'
                    bgType="solid"
                    bgColor="light"
                    cardSize="large"
                    cardDirection="column"
                    button={{
                        text: 'Обсудить проект →',
                        onClick: () => scrollToSection('#form'),
                        theme: 'blue',
                    }}
                />
            </div>
        </Section>
    )
}