import { FC } from 'react';
import { HomePageBackground } from './HomePage.styles';
import { Banner } from '../Banner/Banner';
import bannerImage from '../../images/homeBanner.jpg'

const HomePage: FC<{}> = ({}) => {
    return (
        <HomePageBackground>
        <Banner imageSrc={bannerImage}/>
        </HomePageBackground>
    );
};
export default HomePage;
