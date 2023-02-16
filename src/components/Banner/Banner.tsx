import { FC } from 'react';
import { BannerBackground } from './Banner.style';
interface BannerProps {
    imageSrc: string
}

export const Banner: FC<BannerProps> = ({imageSrc}: BannerProps) => {

    return (
        <BannerBackground imageSrc ={imageSrc}>
            {/* <DWCLogo/>
            <HomeButton/>
            <AboutButton/>
            <ConnectButton/> */}
        </BannerBackground>
    )
}