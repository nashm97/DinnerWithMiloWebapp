import styled from 'styled-components';

export const HeaderContainer = styled.div`
    text-align:center;
    background-color: #8A6066;
    border-radius: 25px;
    padding-top: 10px;
    padding-bottom: 20px;
    width: max(40%, 370px);
    height: 100px;
    margin: auto;
    margin-top:50px;
`;

export const HeaderText = styled.div`
    position:flex;
    font-family: Superfats;
    font-size: 250%;
    padding-top: 15px;
    padding-bottom: 5px;
    padding-left: 30px;
    padding-right: 30px;
`;

export const HeaderText2 = styled.div`
    position:flex;
    font-family: Superfats;
    font-size: 130%;
    padding-top: 5px;
    padding-bottom: 15px;
    padding-left: 30px;
    padding-right: 30px;
`;

export const TextDiv = styled.div`
    text-align: center;
    margin-left: 10%;
    margin-right:10%;
    padding-bottom: max(2.5%, 20px);
    padding-top:max(2.5%, 20px);

`;

export const BodyText = styled.text`
    font-family: Baskerville;
    font-size:240%;
    font-weight: bold;
`;

export const ImageIngidientsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 43%);
    column-gap; 20px;
    row-gap: 40px;
    justify-content: space-evenly;
    padding-top 40px;
    padding-bottom:40px;
`;

export const IngridientsDiv = styled.div`
    margin-left: 10%;
    margin-right:10%;
    padding-bottom: max(2.5%, 20px);
    padding-top:max(2.5%, 20px);

`;

export const IngridientsText = styled.text`
    font-family: Baskerville;
    font-size:240%;
    font-weight: bold;
`;

export const RecipeImageContainer = styled.div`
    text-align: center;
    background-color: #8A6066;
    border-radius: 12%;
    padding-top: 25px;
    padding-bottom: 25px;
    margin:auto;
`;

export const RecipeImage = styled.img`
    position:flex;
    width: 82%;
    border-radius: 12%
`;

export const MethodGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 43%);
    column-gap; 20px;
    row-gap: 40px;
    justify-content: space-evenly;
    padding-top 40px;
    padding-bottom:40px;
`;

export const MethodDiv = styled.div`
    margin-left: 10%;
    margin-right:10%;
    padding-bottom: max(2.5%, 20px);
    padding-top:max(2.5%, 20px);

`;

export const MethodText = styled.text`
    font-family: Baskerville;
    font-size:240%;
    font-weight: regular;
`;