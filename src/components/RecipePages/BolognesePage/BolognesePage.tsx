import { FC } from 'react';
import { PageBackground } from '../../common/common.styles';
import NavBar from '../../NavBar/NavBar';
import { BodyText, HeaderContainer, HeaderText, HeaderText2, ImageIngidientsGrid, IngridientsDiv, IngridientsText, MethodDiv, MethodGrid, MethodText, RecipeImage, RecipeImageContainer, TextDiv } from './BolognesePage.styles';
import NavBarBackgroundImage from "../../../images/tacoBanner.jpg"
import lemonTart from '../../../images/lemontart.jpg'

const BolognesePage: FC<{}> = ({}) => {
    return (
        <PageBackground background_colour='#947A7B' border_colour={'#3F2D33'}>
        <NavBar image_src={NavBarBackgroundImage} border_colour= {'#3F2D33'}/>
        <HeaderContainer>
            <HeaderText>Spagetti Bolognese</HeaderText>
        </HeaderContainer>
        <TextDiv><BodyText>My Mother was born in Canberra in 1964 and moved to the Melbourne suburb of Springvale at the age of 5, so that my Grandfather could attend the local military base. Springvale was a hot spot for migrant families from Europe. My Grandmother was a fairly classic Australian cook, sticking to roasts, soups and stews for the most part. But while living in Springvale she made friends with an Italian woman who had migrated from Italy in the 1940s, some 30 years earlier. They formed a friendship and this woman eventually taught my grandmother how to make bolognese, how she did back home in italy. This recipe was passed down to my mother and then to me. Making it my (almost) authentic family bolognese recipe. </BodyText></TextDiv>
        <ImageIngidientsGrid>
            <IngridientsDiv>
                <IngridientsText>
                - 400g beef mince<br/>
- 400 g pork mince<br/>
- 2 brown onion<br/>
- 3 large garlic cloves<br/>
- 1 sprig of rosemary<br/>
- 3 bay leaves <br/>
- 3 carrots<br/>
- 5 celery stalks<br/>
- 2 stock cubes (any type)<br/>
- 100 ml of red wine<br/>
- 4-5 tins of diced tomatoes<br/>
- Salt <br/>
- Pepper<br/>
- 150 ml of milk<br/>
- Olive oil<br/>
- 600-700g pasta <br/>
</IngridientsText>
            </IngridientsDiv>
            <RecipeImageContainer>
                <RecipeImage src={lemonTart}/>
                
            </RecipeImageContainer>
        </ImageIngidientsGrid>
        <MethodGrid>
            <MethodDiv>
                <MethodText>
                Put a large casserole dish on medium heat with 2 tbsp of olive oil in it. Place the Rosemary and bay leaves in the oil and let them cook for 5 minutes. Stir regularly, making sure not to let them burn. <br/><br/>
In the meantime dice the two brown onions and crush the garlic in a garlic crusher. Once the herbs are nice and fragrant, add the onion and garlic. Cook on medium heat until the onion has gone translucent. Dice the carrot and celery and add to the casserole dish, cook for a further 5-10 minutes. <br/><br/>
Once this is done, increase the heat to medium-high heat and add the beef and pork mince, stir this through until all the meat has gone brown and liquid has begun to form at the bottom of the casserole dish. <br/><br/>
Next, add the diced tomatoes, wine and stock cubes.  
                </MethodText>
            </MethodDiv>
            <MethodDiv>
                <MethodText>
                Bring this to a simmer and decrease the heat to low so that it is just lightly simmering.<br/><br/>
                Add the salt and pepper and leave this to as is for 1-2 hours with the lid off until it has reached a desired thickness (nice and thick).<br/><br/>
Once this is ready, put a large saucepan full of water on high heat and bring to a boil add a few pinches of salt. Once this is boiling add the pasta and stir well. The past is ready when it is ‘al denta’ which literally translates as ‘to the tooth’ or in about 10-15 minutes. Test the pasta regularly to get the desired texture( it should be soft but with a little bit of resistance so it is not mushy).<br/><br/>

My mum always served this in a big bowl, with all the pasta and sauce mixed together. Accompany with a simple leafy salad. <br/><br/>
Serves 5-7.<br/><br/>
                </MethodText>
            </MethodDiv>
        </MethodGrid>
    </PageBackground>
        )

    }
    export default BolognesePage;