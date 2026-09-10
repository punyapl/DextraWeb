import { useEffect, useState } from 'react';
import { getLatestArticles } from '../../api/article';
import { Article } from '../../model/types/article';
import { ArticleCard } from '../ArticleCard/ArticleCard';

interface SuggestedArticlesProps {
    excludeSlug?: string;
}

export const SuggestedArticles = ({ excludeSlug }: SuggestedArticlesProps) => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getLatestArticles(3, excludeSlug)
            .then(setArticles)
            .catch(console.error)
            .finally(() => setIsLoading(false));
    }, [excludeSlug]);

    if (isLoading || !articles.length) return null;

    return (
        <div className="flex flex-col gap-8">
            <h2 className="font-h2 text-primary-dark">Читайте также</h2>
            <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-6">
                {articles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </div>
    );
};