import { getRouteBlog } from "./router";

export const navItems = [
    { 
        path: '#about', 
        label: 'О компании', 
    },
    {
        path: '#directions',
        label: 'Направления',
    },
    { 
        path: '#advantages', 
        label: 'Преимущества', 
    },
    { 
        path: '#projects', 
        label: 'Проекты', 
    },
    { 
        path: '#integration', 
        label: 'Медицина', 
    },
    { 
        path: '#prices', 
        label: 'Цены', 
    },
    { 
        path: getRouteBlog(), 
        label: 'Блог', 
    },
];