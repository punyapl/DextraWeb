import { ImageItem } from '../types/article';

export const getArticleImageUrl = (image?: ImageItem): string => {
    if (image?.url) {
        return `${__STRAPI_URL__}${image.url}`;
    }
    return '/images/placeholder.png';
};