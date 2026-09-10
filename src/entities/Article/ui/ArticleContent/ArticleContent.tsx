import { Article } from '../../model/types/article';
import { getArticleImageUrl } from '../../model/selectors/getArticleImageUrl';
import { ArticleRenderer } from '../ArticleRenderer/ArticleRenderer';

interface ArticleContentProps {
    article: Article;
}

const formatDate = (dateStr: string): string =>
    new Date(dateStr).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

export const ArticleContent = ({ article }: ArticleContentProps) => {
    return (
        <div className="flex flex-col gap-8 max-w-[800px] mx-auto w-full">
            <img
                src={getArticleImageUrl(article.cover)}
                alt={article.title}
                className="w-full rounded-3xl object-cover max-h-[480px]"
            />
            <div className="flex flex-col gap-4">
                <p className="font-p-sm text-text-secondary">
                    Дата публикации: {formatDate(article.publishDate)}
                </p>
                <h1 className="font-h2 text-primary-dark">{article.title}</h1>
                {article.description && (
                    <p className="font-p-lg text-text-secondary">{article.description}</p>
                )}
            </div>
            <div className="flex flex-col gap-4">
                {article.content
                    ? <ArticleRenderer body={article.content} />
                    : <p className="font-p-md text-text-secondary">В статье нет контента</p>
                }
            </div>
        </div>
    );
};