import styled from 'styled-components';

export const PageBackground = styled.div<{ background_colour: string, border_colour: string }>(
    ({background_colour, border_colour}) =>`
    background-color: ${ background_colour };
    height:100%;
    width: 100hh;
    min-height: 100vh;
    border-style: solid;
    border-bottom-width: 30px;
    border-color: ${border_colour};
    `);