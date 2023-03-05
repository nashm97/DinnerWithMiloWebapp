import { FC } from 'react';
import { PageBackground } from '../../common/common.styles';
import NavBar from '../../NavBar/NavBar';
import NavBarBackgroundImage from "../../../images/tacoBanner.jpg"
import { BodyText, HeaderContainer, HeaderText, HeaderText2, ImageIngidientsGrid, IngridientsDiv, TextDiv, IngridientsText, RecipeImage, RecipeImageContainer, MethodGrid, MethodDiv, MethodText } from './WhiskeySourPage.styles';
import whiskeysour from '../../../images/whiskeysour.jpg'


const TacoPage: FC<{}> = ({}) => {
    return (
        <PageBackground background_colour='#C4C5BE' border_colour={'#26323B'}>
            <NavBar image_src={NavBarBackgroundImage} border_colour= {'#26323B'}/>
            <HeaderContainer>
                <HeaderText>Whiskey Sour</HeaderText>
            </HeaderContainer>
            <TextDiv><BodyText>This one is a winner folks! <br/>
This was the drink that won over my partner Lucy. It was in the middle of the second Melbourne lockdown in 2020 and I was on my way to have a very ‘covid style’ date with a woman that I had been conversing with over the internet for a few months. We had decided to make each other cocktails and just hangout. I went with this classic drink and the rest is history. <br/>
This is a crowd pleaser for almost any occasion and my favourite cocktail. The key to this drink is good quality eggs, it makes all the difference.<br/>
</BodyText></TextDiv>
            <ImageIngidientsGrid>
                <IngridientsDiv>
                    <IngridientsText>
                    - 50ml Whiskey (american whickey)<br/>
- 30 ml sugar syrup<br/>
- 30ml lemon juice <br/>
- 1 egg white<br/>
- Ice<br/>
</IngridientsText>
                </IngridientsDiv>
                <RecipeImageContainer>
                    <RecipeImage src={whiskeysour}/>
                    
                </RecipeImageContainer>
            </ImageIngidientsGrid>
            <MethodGrid>
                <MethodDiv>
                    <MethodText>
                    At least 1 hour before wanting to drink the whiskey sour, boil the kettle and pour 20ml of water into a bowl and add 20ml equivalent of castor sugar to the bowl, stir well until the sugar granules dissolve. Let the sugar syrup cool. <br/><br/>

Juice 1 or 2 lemons and sieve the juice to remove any pulp.<br/><br/>
Separate 1 egg and depose of the yolk.  <br/><br/>

                    </MethodText>
                </MethodDiv>
                <MethodDiv>
                    <MethodText>


Add the 50ml whiskey, 30ml of sugar syrup, 30 ml of lemon juice and 1 egg white to a cocktail shaker. Shake well to form for a thick froth. Add the ice and shake again. Serve in cocktail glasses without the ice. Add a dash of bitters.<br/><br/>

You can make up to 3 at a time in a large cocktail shaker. <br/><br/>

                    </MethodText>
                </MethodDiv>
            </MethodGrid>
        </PageBackground>
    )

}
export default TacoPage;
