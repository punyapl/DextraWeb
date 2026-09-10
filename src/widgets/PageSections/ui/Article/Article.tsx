import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleBySlug, Article as ArticleType, ArticleContent, SuggestedArticles } from '@/entities/Article';
import { Section } from "@/shared/ui/Section";

export const Article = () => {
    const { slug } = useParams<{ slug: string }>();
    const [article, setArticle] = useState<ArticleType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;
        getArticleBySlug(slug)
            .then(setArticle)
            .catch(console.error)
            .finally(() => setIsLoading(false));
    }, [slug]);

    return (
        <Section
            SectionClassName="py-22.5 max-xl:p-[34px] max-md:py-6 max-md:px-2.5 bg-background"
            ContainerClassName="flex flex-col gap-16 max-md:gap-5 items-center"
            id="article"
        >
            {isLoading ? (
                <p className="font-p-md text-text-secondary">Загрузка...</p>
            ) : !article ? (
                <p className="font-p-md text-text-secondary">Статья не найдена</p>
            ) : (
                <>
                    <ArticleContent article={article} />
                    <SuggestedArticles excludeSlug={slug} />
                </>
            )}
        </Section>
    );
};