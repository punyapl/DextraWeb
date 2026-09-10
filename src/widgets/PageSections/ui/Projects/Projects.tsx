import { useEffect, useState } from "react";
import { Section, } from "@/shared/ui/Section"
import { TextBanner, } from "@/shared/ui/TextBanner"
import { ProjectSlider } from "@/entities/Project";

export const Projects = () => {
    return (
        <Section
            SectionClassName="py-22.5 max-xl:p-[34px] max-md:py-6 max-md:px-2.5 bg-background"
            ContainerClassName="flex flex-col gap-16 max-md:gap-5 items-center"
            id="projects"
        >
            <TextBanner
                type="h2"
                variant="light"
                headerText="Наши проекты"
                subheaderText="Каждый проект — это решение конкретной бизнес-задачи клиента"
            />
            <ProjectSlider />
        </Section>
    );
};
