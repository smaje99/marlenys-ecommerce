'use client';

import { useCallback, useMemo } from 'react';
import {
    BsFillCartFill, BsHouseFill, BsFillSuitHeartFill, BsPersonFill
} from "react-icons/bs";
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
        { route: Routes.HOME, Icon: BsHouseFill },
        { route: Routes.WISH_LIST, Icon: BsFillSuitHeartFill },
        { route: Routes.SHOPPING_CART, Icon: BsFillCartFill },
        { route: Routes.PROFILE, Icon: BsPersonFill },
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