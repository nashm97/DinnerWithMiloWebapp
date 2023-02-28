import { FC } from 'react';
import { PageBackground } from '../common/common.styles';
import { NavBar } from '../NavBar/NavBar';
import { IntroText, RecipeGrid, RecipeContainer, RecipeTitle, RecipeImage } from './HomePage.styles'
import NavBarBackgroundImage from '../../images/homeBanner.jpg'
import lemonTart from '../../images/lemontart.jpg'
import tacoImage from '../../images/tacoImage.jpg'
import pokebowlImage from '../../images/pokebowl.jpg'
import beefstirfryImage from '../../images/beefstirfry.jpg'
import whiskeysourimage from '../../images/whiskeysour.jpg'


const HomePage: FC<{}> = ({}) => {
    function NavigateToTacoPage() {
        window.location.assign("/tacos")
    }
    function NavigateToLemonTartPage() {
        window.location.assign("/lemontart")
    }
    function NavigateToBeefStirFryPage() {
        window.location.assign("/beefstirfry")
    }
    function NavigateToBolognesePage() {
        window.location.assign("/bolognese")
    }
    function NavigateToPokebowlPage() {
        window.location.assign("/pokebowl")
    }
    function NavigateToWhiskeySourPage() {
        window.location.assign("/whiskeysour")
    }
    return (
        <PageBackground background_colour= {'#F2BE8C'} border_colour={'#89717B'}>
            <NavBar image_src={NavBarBackgroundImage} border_colour= {'#89717B'}/>
            <IntroText> A collection of food, recipes and thoughts so that others can enjoy them the way that I have. </IntroText>
            <RecipeGrid>
                <RecipeContainer>
                    <RecipeTitle onClick = {NavigateToTacoPage}> Chicken tacos with capsicum, Guac and corn</RecipeTitle>
                    <RecipeImage src={tacoImage} onClick = {NavigateToTacoPage}/>
                </RecipeContainer>
                <RecipeContainer>
                    <RecipeImage src={lemonTart} onClick = {NavigateToLemonTartPage}/>
                    <RecipeTitle onClick = {NavigateToLemonTartPage}> Tangy Lemon Tart</RecipeTitle>
                </RecipeContainer>
                <RecipeContainer>
                    <RecipeTitle onClick = {NavigateToPokebowlPage}> Poke Bowls with Chicken Teriyaki and miso pumpkin</RecipeTitle>
                    <RecipeImage src={pokebowlImage} onClick = {NavigateToPokebowlPage}/>
                </RecipeContainer>
                <RecipeContainer>
                    <RecipeImage src={beefstirfryImage} onClick = {NavigateToBeefStirFryPage}/>
                    <RecipeTitle onClick = {NavigateToBeefStirFryPage}> Beef and veggie stir-fry</RecipeTitle>
                </RecipeContainer>
                <RecipeContainer>
                    <RecipeImage src={tacoImage} onClick = {NavigateToBolognesePage}/>
                    <RecipeTitle onClick = {NavigateToBolognesePage}> Spaghetti Bolognese </RecipeTitle>
                </RecipeContainer>
                <RecipeContainer>
                    <RecipeTitle onClick = {NavigateToWhiskeySourPage}> whiskey sour </RecipeTitle>
                    <RecipeImage src={whiskeysourimage} onClick = {NavigateToWhiskeySourPage}/>
                </RecipeContainer>
            </RecipeGrid>
        </PageBackground>
    );
};
export default HomePage;
