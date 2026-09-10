import { type RouteObject } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '@/pages/MainPage'
import { BlogPage } from '@/pages/BlogPage'
import { BlogArticlePage } from '@/pages/BlogArticlePage'
import {
    AppRoutes,
    getRouteMain,
    getRouteBlog,
    getRouteBlogArticle,
} from '@/shared/const/router'
import { RouteErrorBoundary } from '../ui/RouteErrorBoundary'

export const routeConfig: Record<AppRoutes, RouteObject> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
        errorElement: <RouteErrorBoundary />,
    },
    [AppRoutes.BLOG]: {
        path: getRouteBlog(),
        element: <BlogPage />,
        errorElement: <RouteErrorBoundary />,
    },
    [AppRoutes.BLOG_ARTICLE]: {
        path: getRouteBlogArticle(':slug'),
        element: <BlogArticlePage />,
        errorElement: <RouteErrorBoundary />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        errorElement: <RouteErrorBoundary />,
    },
}

export const router = createBrowserRouter(Object.values(routeConfig))