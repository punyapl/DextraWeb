import { FootnoteItem } from "@/entities/Footnote/types";

export interface Project {
    id: number;
    title: string;
    description: string;
    bulletList: string[];
    link: string;
    image: { url: string } | null;
    footnotes?: FootnoteItem[];
    order: number;
}