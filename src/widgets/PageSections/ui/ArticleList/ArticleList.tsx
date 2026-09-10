import { useState, useEffect } from 'react';
import { getArticles, ArticleList as ArticleListWidget, Article, PAGE_SIZE } from '@/entities/Article';
import { Section } from "@/shared/ui/Section";
import { TextBanner } from "@/shared/ui/TextBanner";

export const ArticleList = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        getArticles(PAGE_SIZE, 0)
            .then(({ data, meta }) => {
                setArticles(data);
                setHasMore(meta.pagination.hasMore);
            })
            .catch(console.error)
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <Section
            SectionClassName="py-22.5 max-xl:p-[34px] max-md:py-6 max-md:px-2.5 bg-background"
            ContainerClassName="flex flex-col gap-16 max-md:gap-5 items-center"
            id="articles"
        >
            <TextBanner
                type="h2"
                variant="light"
                headerText="Блог"
                subheaderText="Полезные статьи о веб-разработке, дизайне и цифровой трансформации бизнеса"
            />

            {isLoading ? (
                <p className="font-p-md text-text-secondary">Загрузка...</p>
            ) : (
                <ArticleListWidget
                    initialArticles={articles}
                    hasMoreArticles={hasMore}
                />
            )}
        </Section>
    );
};