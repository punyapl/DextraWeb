import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Page, } from '@/widgets/Page'
import { About, Advantages, Banner, Directions, Feedback, Integration, Prices, Projects, } from '@/widgets/PageSections'

const MainPage = () => {
    const { state } = useLocation();

    useEffect(() => {
        if (state?.scrollTo) {
            setTimeout(() => {
                document.getElementById(state.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, []);

    return (
        <Page>
            <Banner />
            <About />
            <Directions />
            <Advantages />
            <Projects />
            <Integration />
            <Prices />
            <Feedback />
        </Page>
    )
}

export default MainPage