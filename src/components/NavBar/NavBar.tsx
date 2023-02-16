import { FC } from 'react';
import { NavBarBackground, NavBarContainer } from './NavBar.style';
interface NavBarProps {
    imageSrc: string
}

export const NavBar: FC<NavBarProps> = ({imageSrc}: NavBarProps) => {

    return (
        <NavBarContainer>
            <NavBarBackground imageSrc ={imageSrc}>
                {/* <DWCLogo/>
                HomeButton/>
                <AboutButton/>
            <   ConnectButton/> */}
            </NavBarBackground>
        </NavBarContainer>
    )
}