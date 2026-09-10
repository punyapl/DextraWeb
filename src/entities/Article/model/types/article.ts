export type ArticleBlock = Paragraph | Heading | Image | OrderedList | UnorderedList | Quote;

export interface InlineTextNode {
    type: 'text';
    text: string;
    italic?: boolean;
    bold?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
}

export interface InlineLinkNode {
    type: 'link';
    url: string;
    target?: string;
    rel?: string;
    children: InlineNode[];
}

export type InlineNode = InlineTextNode | InlineLinkNode;

interface ListItem {
    type: string;
    children: InlineNode[];
}

interface Paragraph {
    type: 'paragraph';
    children: InlineNode[];
}

interface Heading {
    type: 'heading';
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: InlineNode[];
}

export interface ImageItem {
    url: string;
    name: string;
    alternativeText?: string;
}

interface Image {
    type: 'image';
    image: ImageItem;
}

interface OrderedList {
    type: 'list';
    format: 'ordered';
    children: ListItem[];
}

interface UnorderedList {
    type: 'list';
    format: 'unordered';
    children: ListItem[];
}

interface Quote {
    type: 'quote';
    children: InlineNode[];
}

export interface Article {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    description: string;
    cover: ImageItem;
    content: ArticleBlock[] | null;
    order: number;
    publishDate: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}