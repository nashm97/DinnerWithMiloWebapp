import { FC } from 'react';
import { HomePageBackground } from './HomePage.styles';
import { NavBar } from '../NavBar/NavBar';
import bannerImage from '../../images/homeBanner.jpg'

const HomePage: FC<{}> = ({}) => {
    return (
        <HomePageBackground>
        <NavBar imageSrc={bannerImage}/>
        </HomePageBackground>
    );
};
export default HomePage;
