import { getProjects, } from '../../api/projects';
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { useState, useEffect } from "react";
import { Project } from '../../model/types/project';
import { Carousel } from '@/shared/ui/Carousel';

export const ProjectSlider = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProjects()
            .then(setProjects)
            .finally(() => setLoading(false));
    }, []);

    const renderList = projects.map((project, index) => (
        <ProjectCard
            key={project.id ?? index}
            title={project.title}
            description={project.description}
            bulletList={project.bulletList}
            link={project.link}
            image={project.image?.url ? `${__STRAPI_URL__}${project.image.url}` : ''}
            footnotes={project.footnotes}
        />
    ));

    return (
        <div className="flex flex-col gap-6 w-full">
            {loading ? (
                <p className="text-center text-text-secondary">Загрузка...</p>
            ) : (
                <Carousel
                    items={renderList}
                    desktopPageSize={1}
                    tabletPageSize={1}
                    mobilePageSize={1}
                    aria-label="Список проектов"
                    role="region"
                    className='max-w-[1280px] w-full'
                    slideShow
                />
            )}
        </div>
    );
};
