import { FC } from 'react';
import { PageBackground } from '../../common/common.styles';
import NavBar from '../../NavBar/NavBar';
import NavBarBackgroundImage from "../../../images/tacoBanner.jpg"
import { BodyText, HeaderContainer, HeaderText, HeaderText2, ImageIngidientsGrid, IngridientsDiv, TextDiv, IngridientsText, RecipeImage, RecipeImageContainer, MethodGrid, MethodDiv, MethodText } from './TacoPage.styles';
import tacoImage from '../../../images/tacoImage.jpg'


const TacoPage: FC<{}> = ({}) => {
    return (
        <PageBackground background_colour='#8B9E88' border_colour={'#4B5350'}>
            <NavBar image_src={NavBarBackgroundImage} border_colour= {'#4B5350'}/>
            <HeaderContainer>
                <HeaderText>chicken Tacos</HeaderText>
                <HeaderText2>with capsicum, Guac and corn</HeaderText2>
            </HeaderContainer>
            <TextDiv><BodyText>My mum always cooked chilli con carne tacos when I was a child, eventually she passed this task onto me. As I got older I started to play around with the ingredients and condiments that go with it. This included a few experiments of slow cooked pork/beef, which were highly successful, but too complex and time consuming for this site. I eventually landed on  chicken as it is the quickest, easiest and healthiest of my iterations.</BodyText></TextDiv>
            <ImageIngidientsGrid>
                <IngridientsDiv>
                    <IngridientsText>
                    - 700-800g chicken breast <br/>
                    - 3 capsicums<br/>
                    - 1 red onion<br/>
                    - 4 garlic cloves<br/>
                    - Salad leaves<br/>
                    - salsa<br/>
                    - 2 avocados<br/>
                    - 1 lime<br/>
                    - 1-2 corn cobs<br/>
                    - 3 tsp smoked paprika<br/>
                    - 3 tsp cumin powder<br/>
                    - ½ tsp cayenne pepper<br/>
                    - 10-15 tortillas <br/>
                    - Salt<br/>
                    - Pepper<br/>
                    - Peanut oil or any other vegetable oil.</IngridientsText>
                </IngridientsDiv>
                <RecipeImageContainer>
                    <RecipeImage src={tacoImage}/>
                    
                </RecipeImageContainer>
            </ImageIngidientsGrid>
            <MethodGrid>
                <MethodDiv>
                    <MethodText>
                    Preheat the oven to 280ºC. Remove the core of the capsicum and any seeds, then chop it up into 3 cm chunks. Place the chopped capsicum on a large tray and pour 3 tbsp of peanut oil and mix well. Place the capsicum in the oven for 30-40 mins or until slightly crispy, then put it in a bowl once cooked.<br/><br/>
                    Mix the spices together in a small bowl and add 2 pinches of salt and pepper.<br/><br/>
                    Cut the chicken breast into 3cm cubes. Mince the Garlic and add it to a bowl, mixing in the chicken then the spices.<br/><br/>
                    Cut the corn cobs in half and then cut down the cob to remove the kernels, repeating this all the way around the cob to remove all the kernels. Pour one tbsp of oil in a small fry pan and put it on medium heat,add the corn. Cook until slightly brown and present it in a small bowl.<br/><br/>
                    </MethodText>
                </MethodDiv>
                <MethodDiv>
                    <MethodText>
                    Add the other half of the Garlic to a bowl and then smash the avocado into it, season with salt and pepper and then squeeze in the lime, taste it for preference and adjust it.<br/><br/>
                    Heat a large pan to high heat, add the chicken, slowly stir it but allow it to get a bit burnt. Cook for a further 15 mins or until the chicken is cooked through.<br/><br/>
                    In the meantime, using the pan that the corn was cooked on, heat up 10-15 tortillas on medium high heat, or you can wrap them in foil and place them in the oven for 5-10 minutes at 180ºC.<br/><br/>
                    Dice the red onion and put it in a bowl.<br/><br/>
                    Place all the cooked ingredients including the salsa, onion and salad on a table and let people make their own tacos/tortillas. This lets everyone choose their own adventure and get a little creative<br/><br/>
                    </MethodText>
                </MethodDiv>
            </MethodGrid>
        </PageBackground>
    )

}
export default TacoPage;
