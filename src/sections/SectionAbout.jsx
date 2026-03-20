import { Section, GridContainer, GridItem, Container, Heading, Paragraph, Image } from 'mattkleyn-component-library';
import me from '../data/me.json';
import im from'../assets/images/placeholder_about.jpg';

function SectionAbout() {
    return (
        <div>
            <Section as='section' id='about' maxWidth='full' className='section_about'>
                <GridContainer as='div' columns='repeat(12, 1fr)' rows='repeat(6, 1fr)' gap='lg'>
                    <GridItem as='div' col='7 / span 3' row='2 / span 1'>
                        <Container as='div' direction='inline' gap='md' className='about_heading_container'>
                            <Heading level='h2' className='about_heading'>{`${me[5].heading}`}</Heading>
                        </Container>
                    </GridItem>
                    <GridItem as='div' col='1 / span 4' row='3 / span 4'> 
                        <Container as='div' direction='inline' gap='md' className='about_image_container'>
                            <Image src={im} alt='a placeholder image of me' height='600' variant='cover' className='about_image'/>
                        </Container>
                    </GridItem>
                    <GridItem as='div' col='7 / span 4' row='3 / span 3'>
                        <Container as='div' direction='column' gap='lg' className='about_text_container'>
                            <Heading level='h6'>{`${me[5].subHeading}`}</Heading>
                            <Paragraph level='md'>{`${me[5].summary}`}</Paragraph>
                            <Container as='div' direction='inline' className='button_secondary_container'>
                                <Paragraph level='lg' id='button_secondary_text'>Read more</Paragraph>
                            </Container>
                        </Container>
                    </GridItem>
                </GridContainer>
            </Section>
        </div>
    )
}

export default SectionAbout;