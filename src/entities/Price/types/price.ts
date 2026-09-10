import { FootnoteItem } from "@/entities/Footnote/types/footnote";
import { FC, SVGProps, } from "react";

export type PriceItem = {
    category: string;
    title: string;
    description: string;
    price: string;
    footnotes?: FootnoteItem[];
    tabs: {
        id: string;
        label: string;
        content: {
            features?: {
                icon: FC<SVGProps<SVGSVGElement>>;
                iconType: 'stroke' | 'fill';
                text: string;
            }[];
            sections?: {
                title: string;
                items: string[];
            }[];
            cards?: {
                icon: FC<SVGProps<SVGSVGElement>>;
                iconType: 'stroke' | 'fill';
                title: string;
                items: string[];
            }[];
        };
    }[];
};