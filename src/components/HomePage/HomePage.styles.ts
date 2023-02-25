import styled from 'styled-components';

export const IntroText = styled.div`
    font-family: Bubble World;
    font-size: max(2.5vw, 25px);
    max-font-size:100px;
    text-align: center;
    top: 30%;
    padding-top: 25px;
    padding-bottom: 10px;
    padding-left: 100px;
    padding-right: 100px;

`;

export const RecipeGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 30%);
    column-gap; 20px;
    row-gap: 40px;
    justify-content: space-evenly;
    padding-top 40px;
    @media (max-width 640px) {
        grid-template-columns: repeat(1, 95%);
    }
    @media (max-width 1000px) {
        grid-template-columns: repeat(3, 15%);
    }
    padding-bottom:40px;
`;

export const RecipeContainer = styled.div`
    text-align: center;
    background-color: #D9A392;
    border-radius: 12%;
    padding-top: 25px;
    padding-bottom: 25px;

`;

export const RecipeTitle = styled.div`
    position:flex;
    font-family: Superfats;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 30px;
    padding-right: 30px;
;
`;

export const RecipeImage = styled.img`
    position:flex;
    width: 70%;
    border-radius: 12%

`;
