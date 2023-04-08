import Card from './Card';
import styles from './Catalog.module.scss';

const Store = () => {
    return (
        <section className={styles['catalog-store']}>
            <Card />
            <Card />
            <Card />
        </section>
    )
}

export default Store;