import { FC } from 'react';
import { PageBackground } from '../common/common.styles';
import { NavBar } from '../NavBar/NavBar';
import NavBarBackgroundImage from '../../images/homeBanner.jpg'

const HomePage: FC<{}> = ({}) => {
    return (
        <PageBackground background_colour='#F2BE8C'>
        <NavBar image_src={NavBarBackgroundImage} border_colour= {'#89717B'}/>
        </PageBackground>
    );
};
export default HomePage;
