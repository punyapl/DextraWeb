import { Project } from "../model/types/project";

export async function getProjects(): Promise<Project[]> {
    const res = await fetch(
        `${__STRAPI_URL__}/api/projects?populate=image&sort=order`
    );
    const { data } = await res.json();

    return data.map((item: any) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        bulletList: item.bulletList,
        link: item.link,
        footnotes: item.footnotes ?? [],
        image: item.image ?? null,
    }));
}