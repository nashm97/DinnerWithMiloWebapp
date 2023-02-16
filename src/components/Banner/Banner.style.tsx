import styled from 'styled-components';

export const BannerBackground = styled.div<{ imageSrc: string }>(
    ({imageSrc}) =>
    `background-image: url(${imageSrc}); 
    display: flex;
    height: 250px;
    width: 100%;   
    object-fit: fit;     
`
);