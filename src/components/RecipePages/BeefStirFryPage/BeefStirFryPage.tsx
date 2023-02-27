import { FC } from 'react';
import { PageBackground } from '../../common/common.styles';
import NavBar from '../../NavBar/NavBar';
import { BodyText, HeaderContainer, HeaderText, HeaderText2, ImageIngidientsGrid, IngridientsDiv, IngridientsText, MethodDiv, MethodGrid, MethodText, RecipeImage, RecipeImageContainer, TextDiv } from './BeefStirFryPage.styles';
import NavBarBackgroundImage from "../../../images/tacoBanner.jpg"
import beefstirfryImage from '../../../images/beefstirfry.jpg'

const BeefStirFryPage: FC<{}> = ({}) => {
    return (
        <PageBackground background_colour='#FFD19F' border_colour={'#CE7F55'}>
        <NavBar image_src={NavBarBackgroundImage} border_colour= {'#CE7F55'}/>
        <HeaderContainer>
            <HeaderText>Beef and veggie stir-fry</HeaderText>
        </HeaderContainer>
        <TextDiv><BodyText>Hello DWM fans, this is a guest appearance from Lucy. This is a fast and flavoursome weeknight dinner recipe that is on rotation at our house.<br/><br/>

We don’t cook with a lot of red meat at home but this recipe satisfies a mid week craving. It’s quick and most of the ingredients we have on hand in the pantry. This recipe can be made in the time that it takes the brown rice to cook - there’s something satisfying about that.
</BodyText></TextDiv>
        <ImageIngidientsGrid>
            <IngridientsDiv>
                <IngridientsText>
                Marinade<br/>
- 2 crushed garlic cloves<br/>
- 1tbsp grated ginger <br/>
- - 4tbsp oyster sauce<br/>
- 2 tbsp soy sauce<br/>
- 2 tbsp Chinese cooking wine<br/>
Stir Fry Ingredients <br/>
- 500g stir fry quality beef<br/>
- Peanut oil<br/>
- 1 red onion<br/>
- 1 tsp red chilli flakes<br/>
- 2 Capsicums. Colour of your choice, sliced thin and long<br/>
- Roasted cashews (optional)<br/>
- Brown rice<br/>




</IngridientsText>
            </IngridientsDiv>
            <RecipeImageContainer>
                <RecipeImage src={beefstirfryImage}/>
                
            </RecipeImageContainer>
        </ImageIngidientsGrid>
        <MethodGrid>
            <MethodDiv>
                <MethodText>
                Put rice on. Cook per packet instructions.<br/><br/>



Mix marinade ingredients in a bowl. Add beef and stir to coat. <br/><br/>



If you have time, you can leave the beef to marinate in the fridge for 30 minutes. I often make this recipe as a quick mid week dinner so just allow the beef to marinade while I prep the vegetables. <br/><br/>



Add the peanut oil to the wok. Slice the red onions into medium strips and add to the wok for 2-3 minutes. <br/><br/>



Add the beef to the hot wok, shaking off an excess marinade as you transfer from the bowl to the wok.  <br/><br/>


                </MethodText>
            </MethodDiv>
            <MethodDiv>
                <MethodText>
                  Stir fry for about 5 minutes, flipping the beef every couple of minutes. Cook the beef until slightly golden brown and sealed. <br/><br/>



Add the capsicum to the wok and cook for 3-4 minutes. I like the capsicums to be crunchy when served so make sure to not overcook them if you want the same.<br/><br/>



Pour the leftover marinade over the stir fry and to coat.<br/><br/>



Throw in chilli flakes and cashews if you are using them and toss the wok a few more times. <br/><br/>



Serve stir fry on brown rice and enjoy!<br/><br/>
serves 4
                </MethodText>
            </MethodDiv>
        </MethodGrid>
    </PageBackground>
        )

    }
    export default BeefStirFryPage;