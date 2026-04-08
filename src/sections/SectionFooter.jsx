import { Section, GridContainer, GridItem, Container, Heading, Paragraph, ImageWrapper, Image, Link } from 'mattkleyn-component-library';
import me from '../data/me.json';
import im from'../assets/images/placeholder_hero_image.png';

function Footer() {
    return (
        <footer>
            <Section as='section' maxWidth='full' className='section_footer'>
                <GridContainer as='div' columns='repeat(12, 1fr)' rows='repeat(6, 1fr)' gap='lg'>
                    <GridItem as='div' col='4 / span 6' row='2 / span 1' >
                        <Container as='div' direction='inline' maxWidth='full' className='footer_cta_container'>
                            <Heading level='h3' className='footer_cta_text'>{`${me[6].cta}`}</Heading>
                        </Container>
                    </GridItem>
                    <GridItem as='div' col='9 / span 2' row='3 / span 1'>
                        <Container as='div' direction='inline' className='button_primary_container'>
                            <Paragraph level='lg' id='button_primary_text'>Read more</Paragraph>
                        </Container>
                    </GridItem>
                    <GridItem as='div' col='2 / span 4' row='4 / span 2' className='footer_content_wrapper'>
                        <Container as='div' direction='row' gap='xl' maxWidth='full'>
                            <ImageWrapper className='footer_portrait_wrapper'>
                                <Image src={im} alt='a more serious headshot' variant='cover' width='240'/>
                            </ImageWrapper>
                            <Paragraph level='sm' id='kern-md' className='footer_main_text'>{`${me[6].bio}`}</Paragraph>
                        </Container>
                    </GridItem>
                    <GridItem as='div' col='9 / span 4' row='5 / span 1' className='footer_tagline'>
                        <Container as='div' direction='row' gap='sm' maxWidth='full' className='tagline_container'>
                            <Paragraph level='lg' className='tagline_text'>{`${me[1].statement[0]}`}</Paragraph>
                            <Paragraph level='lg' className='tagline_text'>{`${me[1].statement[1]}`}</Paragraph>
                        </Container>
                    </GridItem>
                    <GridItem as='div' col='4 / span 6' row='6 / span 1' className='footer_links_wrapper'>
                        <Container as='div' direction='row' maxWidth='full' className='footer_links_container'>
                            {Object.entries(me[6].links).map(([name, link]) => (
                                <Link href={link} target='_blank' className='footer_link'>{name}</Link>
                            ))}
                        </Container>
                    </GridItem>
                </GridContainer>
            </Section>
        </footer>
    )
}

export default Footer;