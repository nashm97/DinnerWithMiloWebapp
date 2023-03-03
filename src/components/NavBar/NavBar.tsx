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
    function NavigateToInsta() {
        window.location.href = 'https://www.instagram.com/goandgowithmilo/?hl=en';
    }
    function NavigateToHomePage() {
        window.location.assign("/")
    }
    function NavigateToAboutPage() {
        window.location.assign("/about")
    }
    return (
        <NavBarContainer border_colour= {border_colour}>
            <NavBarBackground image_src ={image_src}>
                <DWMLogo src = {DWMLogoImage} onClick = {NavigateToHomePage}/> 

                <AboutButton onClick = {NavigateToAboutPage}>
                    <Header>About</Header>
                </AboutButton>
                <HomeButton onClick = {NavigateToHomePage}>
                    <Header> Home </Header>
                </HomeButton>
                <ConnectButton onClick= {NavigateToInsta}>
                    <Header> Connect</Header>
                </ConnectButton>
            </NavBarBackground>
        </NavBarContainer>
    )
} 
export default NavBar;
