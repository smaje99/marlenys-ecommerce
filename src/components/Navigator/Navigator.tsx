'use client';

import { useCallback, useMemo } from 'react';
import { BsCart2, BsHouse, BsHandbag } from "react-icons/bs";
import { RxPerson } from 'react-icons/rx';
import { IconType } from 'react-icons';

import { NavLink } from '@/components/NavLink';
import { type Route, Routes } from '@/models/settings/routes.model';

import styles from './Navigator.module.scss';

type Props = {}

type Navigation = {
    route: Route;
    Icon: IconType;
}

const Navigator: React.FC<Props> = () => {
    const navigations = useMemo<Navigation[]>(() => [
        { route: Routes.HOME, Icon: BsHouse },
        { route: Routes.CATALOG, Icon: BsHandbag },
        { route: Routes.SHOPPING_CART, Icon: BsCart2 },
        { route: Routes.PROFILE, Icon: RxPerson },
    ], []);

    const classNameActive = useCallback<(active: boolean) => string>((active) => (
        `${styles.link} ${active ? styles.active : ''}`
    ), [])

    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                {navigations.map(({ route, Icon }) => (
                    <li key={route.name} className={styles.item} title={route.name}>
                        <NavLink
                            href={route.path}
                            className={classNameActive}
                            prefetch={false}
                            aria-label={route.name}
                        >
                            <Icon aria-hidden />
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigator;