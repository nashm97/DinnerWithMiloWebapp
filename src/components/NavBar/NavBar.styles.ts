import styled from 'styled-components';

export const NavBarBackground = styled.div<{ image_src: string }>(
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
    border-style: solid;
    border-color: ${border_colour};
    border-width: 30px;
    border-left-width:0px;
    border-right-width:0px;
    border-top-width:0px;  
    `
);

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 20%);
    justify-content: space-evenly;
    column-gap: 5%;
    row-gap: 5%;
`;
export const DWMLogo = styled.img`
    margin-left:min(-10%, -60px);
    margin-right:auto;
    margin-top: max(5%,20px);
    margin-bottom:auto;
    display: block;
    mix-blend-mode: multiply;
    width: max(160%, 200px);
    max-width: 500px;
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
    top: 60px;
    left: 77%;
    min-width: 150px;
    margin-left: max(10%, 25px);
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;

`;

export const HomeButton = styled.div`
    top: 60px;
    left: 10%;
    min-width: 50px;
    margin: auto;

`;

export const ConnectButton = styled.div`
    top: 183px;
    left: max(40%, 130px);
    min-width: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
`;
export const ButtonDiv = styled.div`
    top: 60px;
    left: 10%;
    min-width: 50px;
    margin: auto;

`;
