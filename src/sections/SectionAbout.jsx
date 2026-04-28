import { Section, GridContainer, GridItem, Container, Heading, Paragraph, Image, Button, ImageWrapper } from '@mattkleyn/component-library';
import me from '../data/me.json';
import useRevealOnScroll from '../motion/useRevealOnScroll';

function SectionAbout({isModalOpen, toggleModal}) {
    useRevealOnScroll(".l2-reveal-heading", 0.5, {rootMargin:"0px 0px -25% 0px"});
    useRevealOnScroll(".l2-reveal-image", 0.35, {rootMargin:"0px 0px -25% 0px"});

    return (
        <div>
            <Section as='section' id='section_about' maxWidth='full' className='section_about'>
                <GridContainer as='div' columns='repeat(12, 1fr)' rows='repeat(6, 1fr)' gap='lg' className='about_grid'>
                    <GridItem as='div' col='7 / span 3' row='2 / span 1'>
                        <Container as='div' direction='inline' gap='md' className='about_heading_container'>
                            <Heading level='h2' className='about_heading l2-reveal-heading'>{`${me[5].heading}`}</Heading>
                        </Container>
                    </GridItem>
                    <GridItem as='div' col='1 / span 4' row='3 / span 4' className='about_image_wrapper'> 
                        <ImageWrapper className='about_image_container'>
                            <Image src={`${me[5].media.images[0].url}`} alt={`${me[5].media.images[0].alt_text}`} height='600' variant='cover' className='about_image l2-reveal-image'/>
                        </ImageWrapper>
                    </GridItem>
                    <GridItem as='div' col='7 / span 4' row='3 / span 3'>
                        <Container as='div' direction='column' gap='lg' className='about_text_container'>
                            <Heading level='h6' className='l2-reveal-heading'>{`${me[5].subHeading}`}</Heading>
                            <Paragraph level='md'>{`${me[5].summary}`}</Paragraph>
                            <Container as='div'direction='row' maxWidth='full' className='about_button_wrapper'>
                                <Button className='button_secondary_container' onClick={toggleModal}>
                                    <Paragraph level='lg' className='button_secondary_text'>Read more</Paragraph>
                                </Button>
                            </Container>
                        </Container>
                    </GridItem>
                </GridContainer>
            </Section>
        </div>
    )
}

export default SectionAbout;