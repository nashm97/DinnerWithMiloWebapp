import { FC } from 'react';
import { PageBackground } from '../../common/common.styles';
import NavBar from '../../NavBar/NavBar';
import { BodyText, HeaderContainer, HeaderText, HeaderText2, ImageIngidientsGrid, IngridientsDiv, IngridientsText, MethodDiv, MethodGrid, MethodText, RecipeImage, RecipeImageContainer, TextDiv } from './PokeBowlsPage.styles';
import NavBarBackgroundImage from "../../../images/tacoBanner.jpg"
import pokeBowl from '../../../images/pokebowl.jpg'

const PokeBowlsPage: FC<{}> = ({}) => {
    return (
        <PageBackground background_colour='#F38977' border_colour={'#B34434'}>
        <NavBar image_src={NavBarBackgroundImage} border_colour= {'#B34434'}/>
        <HeaderContainer>
            <HeaderText>poke bowl</HeaderText>
            <HeaderText2> with Chicken Teriyaki and miso pumpkin </HeaderText2>
        </HeaderContainer>
        <TextDiv><BodyText>This was originally another creation by Lucy that I slowly took over the making of. She would eat it on warm summer nights when something hotter and more substantial would be too heavy. I eventually added my own Chicken Teriyaki recipe to it and I think it works just great. 
This meal is so easy to vary by substituting out one or two ingredients and it feels like a whole new recipe. Miso eggplant is always a winner! 
The creation of traditions and habits over a extended period of time, through repetition and collaboration is a great example of how the small and mundane things we do in life can be the most rewarding.
</BodyText></TextDiv>
        <ImageIngidientsGrid>
            <IngridientsDiv>
                <IngridientsText>
                Chicken Teriyaki: <br/>
- 600g chicken breast or thighs<br/>
- Corn flour<br/>
- Peanut oil<br/>
- 60ml mirin<br/>
- 60ml chinese rice wine<br/>
- 120ml soy sauce<br/>
- 2 tbsp castor sugar<br/>

Miso Pumpkin:<br/>
- ¼  of a Kent Pumpkin<br/>
- 4 tbsp miso paste<br/>
- 4 tbsp sesame oil<br/>
- 2 tsp soy sauce<br/>
- 2 pinches chilli powder<br/>
- 2 tbsp rice wine vinegar<br/>
The rest: <br/>
- 2 cups brown rice<br/>
- Crispy shallots<br/>
- Sushi rice seasoning<br/>
- 1 avocado <br/>
- Spinach leaves to serve<br/>
- Pickled ginger<br/>
- Handful of Edamame (not in shell)<br/>

</IngridientsText>
            </IngridientsDiv>
            <RecipeImageContainer>
                <RecipeImage src={pokeBowl}/>
                
            </RecipeImageContainer>
        </ImageIngidientsGrid>
        <MethodGrid>
            <MethodDiv>
                <MethodText>
                Cut the chicken into medallions and coat in corn flour. Place a pan with some peanut oil in it on a medium heat flame. Cook the chicken in the pan until it is golden on all sides. Place aside to cool down. <br/><br/>

Put the mirin and rice wine in a saucepan and let it simmer, until lots of bubbles form and then add the 120ml soy sauce and the castor sugar. Let it simmer on low heat until it thickens. <br/><br/>

Remove the seeds and cut the pumpkin into 1cm thick slices. Add the miso, sesame oil, rice wine vinegar, rest of the soy sauce and the chilli powder into a jar and shaker to combine. Place the pumpkin on a tray and coat it in the well miso mix. Put in the oven on 180ºC for 40 mins, flip at the 20 mins mark and cook until tender. <br/><br/>
                </MethodText>
            </MethodDiv>
            <MethodDiv>
                <MethodText>
                Fill a pot with water and add the brown rice, put it on medium-high heat for 30 min or until the grains turn al dente. <br/><br/>

Cut the chicken into 2cm chunks and place in a pan on high heat with the teriyaki sauce, cook for a further 5 mins or until the sauce has thickened and the chicken is well coated.  <br/><br/>
Put the edamame in a bowl and put in the microwave for 1 minute. Then  <br/><br/>
Put the rice in the bowl, along with the pumpkin and chicken. Slice the avocado lengthways and arrange it in the bowl. Place a handful of the spinach leaves in the bowl and add the shallots, sushi seasoning and pickled ginger on top. <br/><br/>

Serves 4-5. <br/><br/>
                </MethodText>
            </MethodDiv>
        </MethodGrid>
    </PageBackground>
        )

    }
    export default PokeBowlsPage;