import styled from 'styled-components';

export const NavBarBackground = styled.img<{ image_src: string }>(
    ({image_src}) =>`
    background-image: url(${image_src}); 
    min-height: 256px;
    position:flex;
    width: 100%;
    height: 100%;
    background-size: cover;
    border-radius: 5px;
    `
);

export const NavBarContainer = styled.div<{ border_colour: string }>(
    ({border_colour}) =>`
    width: 100hh;
    height: 256px;
    text-align: center;
    border-style: solid;
    border-bottom-width: 30px;
    border-color: ${border_colour};
  
    `
);


export const DWMLogo = styled.img`
    mix-blend-mode: multiply;
    width: 50%;
    max-width: 500px;
    position: absolute;
    top: 10px;
    left: max(30%, 120px);
    z-index: 1;
`;

export const ImageContainer = styled.div`
    align-items: centre;
`;

export const Header = styled.div`
    font-family: Foo;
    font-size: min(5vw, 70px);
    max-font-size:100px;
 
`;

export const AboutButton = styled.div`
    position: absolute;
    top: 60px;
    left: 77%;
    min-width: 150px;
`;

export const HomeButton = styled.div`
    position: absolute;
    top: 60px;
    left: 10%;
    min-width: 50px;
`;

export const ConnectButton = styled.div`
    position: absolute;
    top: 183px;
    left: max(40%, 130px);
    min-width: 50px;
`;