import { FC } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { PageBackground } from '../common/common.styles';
import NavBarBackgroundImage from '../../images/AboutBanner.jpg'
import { BodyText, HeaderContainer, HeaderText, TextDiv } from './AboutPage.styles';


const AboutPage: FC<{}> = ({}) => {
    return (
        <PageBackground background_colour='#ECA99E' border_colour={'#9D6064'}>
            <NavBar image_src={NavBarBackgroundImage} border_colour= {'#9D6064'}/>
            <HeaderContainer>
                <HeaderText>About Me</HeaderText>
            </HeaderContainer>
            <TextDiv><BodyText>I spent a lot of my life thinking I was not a creative person, always being more analytically inclined than artistically. This led me down the path of studying Science and Mathematics and eventually becoming a Software Engineer. </BodyText></TextDiv>
            <TextDiv><BodyText>This way of thinking changed, when at the age of 20 I suddenly 'woke-up' and started to finally see all the ways that I have been creative my whole life. Out of nowhere it was as if my perception of the world had changed, I started to see and embrace my 'creative' side.</BodyText></TextDiv>
            <TextDiv><BodyText>This is where cooking came into the picture, I had always loved to cook and my mum had always given me the bandwidth to express this in the family home. I had gained invaluable skills and this sparked a real interest in me. I began experimenting with food and how I could create different flavours and textures. It was all about the process of making something for the people around you and being able to share the joy of eating it with them. </BodyText></TextDiv>
            <TextDiv><BodyText>Cooking is inherently creative, but this wasn't the only creative activity I was doing. I began to realise that in all aspects of my life I was being creative, whether it was the way I designed and implemented software solutions, the way I worked as part of a team in basketball or the way I would function in social situations. All of these were an expression of my creative self. </BodyText></TextDiv>
            <TextDiv><BodyText>This is when I started to realise something that would be transformative for me, rather than the activity being creative, it is the person that is inherently creative. Creativity is what makes us human, our ability to think outside the box, to stretch and bend reality in order to come up with a solution to a problem that is novel and creative.</BodyText></TextDiv>
        </PageBackground>
    );
};
export default AboutPage;