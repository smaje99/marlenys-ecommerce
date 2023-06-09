import Balancer from 'react-wrap-balancer'

import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.brand}>
                Marlenys
            </h1>
            <span className={styles.slogan}>
                <Balancer>
                    Descubre la nueva forma de experimentar tu sensualidad,
                    diseñada para mujeres como tú y como yo.
                </Balancer>
            </span>
        </header>
    )
}

export default Header;