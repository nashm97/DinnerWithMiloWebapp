import styled from 'styled-components';

export const NavBarBackground = styled.img<{ imageSrc: string }>(
    ({imageSrc}) =>`
    background-image: url(${imageSrc}); 
    min-height: 256px;
    position:flex;
    width: 100%;
    height: 100%;
    background-size: cover;
    `
);

export const NavBarContainer = styled.div`
    width: 100%;;
    height: 100px;
    text-align: center;
    `;