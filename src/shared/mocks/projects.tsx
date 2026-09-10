import HoroshiyDoctor from '@/shared/assets/images/HoroshiyDoctor.png'
import Nefrolog from '@/shared/assets/images/Nefrolog.png'
import Zhemchug from '@/shared/assets/images/Zhemchug.png'
import { InlineLink } from '../ui/InlineLink';
import { FootnoteItem } from '@/entities/Footnote/types';

type project = {
    title: string;
    description: string | React.ReactNode;
    bulletList: string[] | React.ReactNode[];
    link: string;
    image: string;
    footnotes?: FootnoteItem[];
}

export const projects: project[] = [
    {
        title: 'Сеть диализных центров «Спасение»',
        description: 'Многостраничный сайт сети диализных центров «Спасение» с максимальной заполненностью контента',
        bulletList: [
            'Индивидуальный дизайн',
            'Наполненность',
            'SEO*-оптимизация',
        ],
        link: 'https://nefrologdv.ru/',
        image: Nefrolog,
        footnotes: [
            { term: 'SEO', definition: 'поисковая оптимизация' }
        ]
    },
    {
        title: 'Медицинский центр «Хороший доктор»',
        description: (<>
            Многостраничный сайт медицинского центра «Хороший Доктор» с упором на индивидуальный дизайн и интеграцию с {' '}
            <InlineLink
                to='https://d-extra.ru/?utm_source=dx-webs'
                title='Открыть сайт МИС ↗'
                text='МИС DEXTRA'
            />
        </>),
        bulletList: [
            'Индивидуальный дизайн',
            'Онлайн-запись',
            <>
                Интеграция с {' '}
                <InlineLink
                    to='https://d-extra.ru/?utm_source=dx-webs'
                    title='Открыть сайт МИС ↗'
                    text='МИС DEXTRA'
                />
            </>,
        ],
        link: 'https://horoshiydoctor-nsk.ru/',
        image: HoroshiyDoctor,
    },
    {
        title: 'Медицинский центр «Жемчуг»',
        description: 'Многостраничный сайт медицинского центра «Жемчуг» со всей необходимой информацией для удобства пользователей',
        bulletList: [
            'Индивидуальный дизайн',
            'Удобство',
            'SEO*-оптимизация',
        ],
        link: 'https://zhemchug-nsk.ru/',
        image: Zhemchug,
        footnotes: [
            { term: 'SEO', definition: 'поисковая оптимизация' }
        ]
    },
]