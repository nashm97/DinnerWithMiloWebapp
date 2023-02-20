import styled from 'styled-components';

export const PageBackground = styled.div<{ background_colour: string }>(
    ({background_colour}) =>`
    background-color: ${ background_colour };
    height:100%;
    display: block;
    width: 100hh;
    min-height: 100vh;
`);