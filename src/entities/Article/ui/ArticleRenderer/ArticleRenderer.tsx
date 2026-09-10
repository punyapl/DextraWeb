import { JSX, ReactNode } from 'react';
import { getArticleImageUrl } from '../../model/selectors/getArticleImageUrl';
import { ArticleBlock, InlineNode } from '../../model/types/article';

const headingClass: Record<number, string> = {
    1: 'font-h1',
    2: 'font-h2',
    3: 'font-h3',
    4: 'font-h4',
    5: 'font-h4',
    6: 'font-h4',
};

const renderInlineNode = (node: InlineNode, key: string): ReactNode => {
    if (node.type === 'text') {
        let className = '';
        if (node.bold) className += ' font-bold';
        if (node.italic) className += ' italic';
        if (node.strikethrough) className += ' line-through';
        if (node.underline) className += ' underline';
        return <span key={key} className={className.trim()}>{node.text}</span>;
    }
    return (
        <a
            key={key}
            href={node.url}
            target={node.target?.trim() || undefined}
            rel={node.rel?.trim() || 'noopener noreferrer'}
            className="text-primary underline hover:opacity-70 transition-opacity"
        >
            {node.children.map((child, i) => renderInlineNode(child, `${key}-${i}`))}
        </a>
    );
};

const renderInlineNodes = (nodes: InlineNode[], prefix: string): ReactNode =>
    nodes.map((node, i) => renderInlineNode(node, `${prefix}-${i}`));

interface ArticleRendererProps {
    body: ArticleBlock[];
}

export const ArticleRenderer = ({ body }: ArticleRendererProps) => {
    return (
        <div className="flex flex-col gap-4">
            {body.map((block, index) => {
                switch (block.type) {
                    case 'paragraph':
                        return (
                            <p key={index} className="font-p-lg text-text-secondary">
                                {renderInlineNodes(block.children, `p-${index}`)}
                            </p>
                        );
                    case 'heading':
                        const Tag = `h${block.level}` as keyof JSX.IntrinsicElements;
                        return (
                            <Tag key={index} className={`${headingClass[block.level]} text-primary-dark`}>
                                {renderInlineNodes(block.children, `h-${index}`)}
                            </Tag>
                        );
                    case 'list':
                        const items = block.children.map((child, li) => (
                            <li key={li} className="font-p-md text-text-secondary">
                                {renderInlineNodes(child.children, `li-${index}-${li}`)}
                            </li>
                        ));
                        return block.format === 'ordered'
                            ? <ol key={index} className="list-decimal list-inside flex flex-col gap-1">{items}</ol>
                            : <ul key={index} className="list-disc list-inside flex flex-col gap-1">{items}</ul>;
                    case 'image':
                        return (
                            <img
                                key={index}
                                src={getArticleImageUrl(block.image)}
                                alt={block.image.alternativeText ?? block.image.name}
                                className="w-full rounded-2xl object-cover"
                            />
                        );
                    case 'quote':
                        return (
                            <blockquote
                                key={index}
                                className="border-l-4 border-primary pl-4 py-1 text-text-secondary font-p-lg italic"
                            >
                                {renderInlineNodes(block.children, `q-${index}`)}
                            </blockquote>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};