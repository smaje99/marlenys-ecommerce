import Store from './Store';

import styles from './Catalog.module.scss';

const Catalog = () => {
    return (
        <main className={styles.catalog}>
            <h2 className={styles.title}>
                Descubre nuestra lencería
            </h2>
            <Store />
        </main>
    )
}

export default Catalog;