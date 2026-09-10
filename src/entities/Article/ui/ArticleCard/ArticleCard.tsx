import { Link } from 'react-router-dom';
import { getArticleImageUrl } from '../../model/selectors/getArticleImageUrl';
import { Article } from '../../model/types/article';

interface ArticleCardProps {
    article: Article;
}

const formatDate = (dateStr: string): string =>
    new Date(dateStr).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

export const ArticleCard = ({ article }: ArticleCardProps) => {
    return (
        <Link
            to={`/blog/${article.slug}`}
            className="flex flex-col rounded-3xl border border-border bg-background-secondary overflow-hidden hover:border-primary transition-colors"
        >
            <img
                src={getArticleImageUrl(article.cover)}
                alt={article.title}
                className="w-full h-[200px] object-cover"
            />
            <div className="flex flex-col gap-3 p-6 flex-1">
                <p className="font-p-sm text-text-secondary">
                    {formatDate(article.publishDate)}
                </p>
                <h3 className="font-h4 text-primary-dark line-clamp-2">
                    {article.title}
                </h3>
                {article.description && (
                    <p className="font-p-md text-text-secondary line-clamp-3">
                        {article.description}
                    </p>
                )}
            </div>
        </Link>
    );
};