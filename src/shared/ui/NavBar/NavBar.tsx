import { AriaRole } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navItems } from '@/shared/const/navItems';
import { useActiveSection } from '@/shared/hooks/useActiveSection';
import { useScrollToSection } from '@/shared/hooks/useScrollToSection/useScrollToSection';

type NavBarProps = {
    className?: string;
    role?: AriaRole;
    onLinkClick?: () => void;
}

export const NavBar = (props: NavBarProps) => {
    const { className, role, onLinkClick } = props;
    const { pathname } = useLocation();
    const scrollToSection = useScrollToSection();

    const anchorItems = navItems.filter(item => item.path.startsWith('#'));
    const sectionIds = anchorItems.map(item => item.path.replace('#', ''));
    const activeSection = useActiveSection(sectionIds);

    return (
        <div className={`flex gap-10 items-center ${className}`} role={role}>
            {navItems.map((item) => {
                const isRoute = item.path.startsWith('/');
                const isActive = isRoute
                    ? pathname === item.path
                    : `#${activeSection}` === item.path;

                const linkClass = `text-nowrap font-p-md hover:underline! underline-offset-4 ${isActive ? 'text-text-primary underline!' : 'text-text-secondary'
                    }`;

                if (isRoute) {
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={onLinkClick}
                            className={linkClass}
                        >
                            {item.label}
                        </Link>
                    );
                }

                return (
                    <a
                        key={item.path}
                        href={item.path}
                        onClick={(e) => {
                            e.preventDefault();
                            onLinkClick?.();
                            scrollToSection(item.path);
                        }}
                        className={linkClass}
                    >
                        {item.label}
                    </a>
                );
            })}
        </div>
    );
};