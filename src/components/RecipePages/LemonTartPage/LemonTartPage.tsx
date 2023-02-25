import { FC } from 'react';
import { PageBackground } from '../../common/common.styles';
import NavBar from '../../NavBar/NavBar';
import { BodyText, HeaderContainer, HeaderText, HeaderText2, ImageIngidientsGrid, IngridientsDiv, IngridientsText, MethodDiv, MethodGrid, MethodText, RecipeImage, RecipeImageContainer, TextDiv } from './LemonTartPage.styles';
import NavBarBackgroundImage from "../../../images/tacoBanner.jpg"
import lemonTart from '../../../images/lemontart.jpg'

const LemonTartPage: FC<{}> = ({}) => {
    return (
        <PageBackground background_colour='#FFD19F' border_colour={'#CE7F55'}>
        <NavBar image_src={NavBarBackgroundImage} border_colour= {'#CE7F55'}/>
        <HeaderContainer>
            <HeaderText>Tangy<br/> Lemon Tart</HeaderText>
        </HeaderContainer>
        <TextDiv><BodyText>My love for cooking formed as a child, helping my mum cook dinner for the family on weeknights after school. But my passion for it sprung out of my love of dough. The satisfying tactile sense of kneading dough as it forms into a light and springy pastry, the repetitive processes of working the mixture into something more, brings a sense of meditation. The way a sculptor feels when they are shaping clay into their next work, this is how I feel when making dough.</BodyText></TextDiv>
        <ImageIngidientsGrid>
            <IngridientsDiv>
                <IngridientsText>
                - 150g unsalted butter <br/>
- 250g bakers flour<br/>
- pinch of salt<br/>
- 1/4 cup water<br/>
- 50g castor sugar<br/>
- 1 egg<br/>
- Lemon Tart Mixture:<br/>
- 6 eggs<br/>
- 240g caster sugar<br/>
- Finely grated zest and juice of 4-5 lemons<br/>
- 250ml thickened cream<br/>
</IngridientsText>
            </IngridientsDiv>
            <RecipeImageContainer>
                <RecipeImage src={lemonTart}/>
                
            </RecipeImageContainer>
        </ImageIngidientsGrid>
        <MethodGrid>
            <MethodDiv>
                <MethodText>
                Form a mound of the bakers flour on a bench, add the salt and softened butter. Rub the butter and flour between your fingers until it begins to form a coarse bread crumb like mixture. Then add the ¼ cup of water and begin to knead your pastry. We are aiming for a texture which is slightly doughy but still soft and smooth like pastry. This should take around 10 minutes of kneading. After this put it into the fridge for 30 mins <br/><br/>
                Take the pastry out of the fridge to soften. Preheat the oven to 180ºC. Line an approximately 25cm tart tin with butter. Begin to roll out the pastry until it is 0.75 cm thick, be patient and try not to let any splits form (don't worry if they do). Once you have rolled it out to the desired thickness, using your rolling pin to assist, roll the pastry onto your rolling pin and place it over the tart tin. Cut the pastry to fit and ensure all splits in it are filled with the extra pastry and then brush over them with egg wash( beat an egg and use to seal the pastry).<br/><br/>
                </MethodText>
            </MethodDiv>
            <MethodDiv>
                <MethodText>
                Blind bake the pastry for 10 minutes ensuring to poke a small hole in the middle to stop the pastry from forming air bubbles. Turn the oven down to 150ºC.<br/><br/>

                Zest and juice the lemons into a bowl and then mix in the sugar and eggs until well amalgamated. Once this is done you can add the cream and stir well. <br/><br/>
                Pour the mixture into the pastry, then place it into the oven for 40 minutes or until small bubbles have started to form on the top surface of the tart.<br/><br/>

                Take the pastry out of the oven and let it cool to room temperature. Place the pastry in its tin on top of a can top free it from the tin then you can store it in the fridge for up to 3 days.<br/><br/>

                Serves 8-10 easily<br/><br/>
                </MethodText>
            </MethodDiv>
        </MethodGrid>
    </PageBackground>
        )

    }
    export default LemonTartPage;