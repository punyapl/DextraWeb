import { useState } from 'react';
import { getArticles } from '../../api/article';
import { PAGE_SIZE } from '../../model/const/article';
import { Article } from '../../model/types/article';
import { ArticleCard } from '../ArticleCard/ArticleCard';

interface ArticleListProps {
    initialArticles: Article[];
    hasMoreArticles?: boolean;
}

export const ArticleList = ({ initialArticles, hasMoreArticles = false }: ArticleListProps) => {
    const [articles, setArticles] = useState<Article[]>(initialArticles);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(hasMoreArticles);

    const handleLoadMore = async () => {
        if (isLoading) return;
        setIsLoading(true);
        try {
            const { data: newArticles, meta } = await getArticles(PAGE_SIZE, articles.length);
            setArticles(prev => [...prev, ...newArticles]);
            setHasMore(meta.pagination.hasMore);
        } catch (e) {
            console.error('Error loading articles:', e);
            setHasMore(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-10 items-center">
            <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-6 w-full">
                {articles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
            {hasMore && (
                <button
                    onClick={handleLoadMore}
                    disabled={isLoading}
                    className="px-8 py-3 rounded-xl border border-border text-text-secondary font-p-md hover:border-primary hover:text-primary-dark transition-colors disabled:opacity-50"
                >
                    {isLoading ? 'Загружаем...' : 'Показать ещё'}
                </button>
            )}
        </div>
    );
};