import type { NextPage } from 'next';

import { Header, Navigation, Catalog } from './Home/components';

const Home: NextPage = () => {
    return (
        <>
            <Navigation />
            <Header />
            <Catalog />
        </>
    )
}

export default Home;