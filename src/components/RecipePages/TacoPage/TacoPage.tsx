import { FC } from 'react';
import { PageBackground } from '../../common/common.styles';
import NavBar from '../../NavBar/NavBar';
import NavBarBackgroundImage from "../../../images/tacoBanner.jpg"

const TacoPage: FC<{}> = ({}) => {
    return (
        <PageBackground background_colour='#8B9E88' border_colour={'#586754'}>
            <NavBar image_src={NavBarBackgroundImage} border_colour= {'#586754'}/>
        </PageBackground>
    )

}
export default TacoPage;
