import { FootnoteItem } from "@/entities/Footnote/types";
import { Footnote } from "@/shared/ui/Footnote";
import { Icon } from "@/shared/ui/Icon";
import { Link } from "react-router-dom";
import LinkIco from '@/shared/assets/icons/Link.svg'

type ProjectCardProps = {
    title: string;
    description: string;
    bulletList: string[];
    link: string;
    image: string;
    footnotes?: FootnoteItem[];
}

export const ProjectCard = (props: ProjectCardProps) => {
    const { title, description, bulletList, link, image, footnotes } = props

    return (
        <div className="flex flex-col p-7.5 max-md:p-[25px] justify-between relative 
            w-full min-h-[352px] max-md:min-h-[345px] overflow-hidden
            bg-background-secondary border border-border rounded-3xl"
        >
            <div className="flex flex-col gap-6 max-w-[487px]">
                <h4 className="font-h4 text-primary-dark text-left">{title}</h4>
                <p className="font-p-lg text-text-secondary text-left">{description}</p>
                <ul className="flex flex-col gap-2.5 list-disc list-inside marker:text-text-primary">
                    {(bulletList ?? []).map((element, index) => (
                        <li key={index} className="font-p-md text-text-secondary">{element}</li>
                    ))}
                </ul>
            </div>
            <Link
                to={link}
                className="flex gap-2 items-center font-p-sm text-text-primary"
                rel="noopener noreferrer"
                target="_blank"
            >
                Посмотреть проект
                <Icon
                    Svg={LinkIco}
                    width={16}
                    height={16}
                    className="stroke-primary"
                />
            </Link>
            {footnotes && footnotes.length > 0 && (
                <Footnote items={footnotes} variant="dark" />
            )}
            <img src={image} alt={title} className="max-md:hidden max-xl:w-1/2 absolute bottom-0 right-0" />
        </div>
    )
}