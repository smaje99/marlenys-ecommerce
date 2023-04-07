import { BsSearch } from 'react-icons/bs';

import { Routes } from '@/models/settings/routes.model';

import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <a
                href={Routes.HOME.path}
                className={styles.brand}
                aria-label={Routes.HOME.name}
            >
                Marlenys
            </a>
            <div className={styles.search} role='button'>
                <BsSearch aria-hidden />
            </div>
        </nav>
    )
}

export default Navigation;