export enum AppRoutes {
    MAIN = 'main',
    BLOG = 'blog',
    BLOG_ARTICLE = 'blog_article',
    // last
    NOT_FOUND = 'not_found'
}

export const getRouteMain = () => '/'
export const getRouteBlog = () => '/blog'
export const getRouteBlogArticle = (slug: string) => `/blog/${slug}`

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteBlog()]: AppRoutes.BLOG,
    [getRouteBlogArticle(':slug')]: AppRoutes.BLOG_ARTICLE,
}