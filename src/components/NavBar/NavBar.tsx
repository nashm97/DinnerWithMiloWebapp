import { FC } from 'react';
import { scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils';
import { NavBarBackground, NavBarContainer, ImageContainer, AboutButton, Header, HomeButton, ConnectButton } from './NavBar.styles';
import { DWMLogo } from './NavBar.styles';
import DWMLogoImage from '../../images/DWMLogo.jpg';

interface NavBarProps {
    image_src: string
    border_colour: string
}

export const NavBar: FC<NavBarProps> = ({image_src, border_colour}: NavBarProps) => {

    function NavigateToHomePage() {
        window.location.assign("/dinner_with_milo_webapp")
    }
    function NavigateToAboutPage() {
        window.location.assign("/dinner_with_milo_webapp/About")
    }
    return (
        <NavBarContainer border_colour= {border_colour}>
            <ImageContainer>
                <NavBarBackground image_src ={image_src}/>
                <DWMLogo src = {DWMLogoImage} onClick = {NavigateToHomePage}/> 
            </ImageContainer>
            <AboutButton onClick = {NavigateToAboutPage}>
                <Header>About</Header>
            </AboutButton>
            <HomeButton onClick = {NavigateToHomePage}>
                <Header> Home </Header>
            </HomeButton>
            <ConnectButton>
                <Header> Connect</Header>
            </ConnectButton>
        </NavBarContainer>
    )
} 
export default NavBar;
