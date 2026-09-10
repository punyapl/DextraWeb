import { PAGE_SIZE } from '../model/const/article';
import { Article } from '../model/types/article';

interface ArticleListResponse {
    data: Article[];
    meta: {
        pagination: {
            start: number;
            limit: number;
            total: number;
            hasMore: boolean;
        };
    };
}

const buildUrl = (path: string, params?: Record<string, string | number | undefined>) => {
    const url = new URL(path, __STRAPI_URL__);
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value === undefined || value === null) return;
            url.searchParams.set(key, String(value));
        });
    }
    return url.toString();
};

export const getArticles = async (limit = PAGE_SIZE, offset = 0): Promise<ArticleListResponse> => {
    const res = await fetch(
        buildUrl('/api/articles', {
            populate: 'cover',
            sort: 'publishDate:desc',
            'pagination[limit]': limit,
            'pagination[start]': offset,
        })
    );
    const json = await res.json();
    return {
        data: json.data,
        meta: {
            pagination: {
                start: offset,
                limit,
                total: json.meta.pagination.total,
                hasMore: offset + limit < json.meta.pagination.total,
            },
        },
    };
};

export const getArticleBySlug = async (slug: string): Promise<Article | null> => {
    const res = await fetch(
        buildUrl('/api/articles', {
            'filters[slug][$eq]': slug,
            populate: '*',
        })
    );
    const json = await res.json();
    return json.data?.length > 0 ? json.data[0] : null;
};

export const getLatestArticles = async (count = 3, excludeSlug?: string): Promise<Article[]> => {
    const res = await fetch(
        buildUrl('/api/articles', {
            populate: 'cover',
            sort: 'publishDate:desc',
            'pagination[limit]': count + (excludeSlug ? 1 : 0),
            'pagination[start]': 0,
        })
    );
    const json = await res.json();
    const data: Article[] = json.data ?? [];
    return data.filter(a => a.slug !== excludeSlug).slice(0, count);
};