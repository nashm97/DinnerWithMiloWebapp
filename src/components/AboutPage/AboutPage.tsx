import { FC } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { PageBackground } from '../common/common.styles';
import NavBarBackgroundImage from '../../images/AboutBanner.jpg'


const AboutPage: FC<{}> = ({}) => {
    return (
        <PageBackground background_colour='#ECA99E' border_colour={'#9D6064'}>
            <NavBar image_src={NavBarBackgroundImage} border_colour= {'#9D6064'}/>
        </PageBackground>
    );
};
export default AboutPage;