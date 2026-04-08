import { Heading, Paragraph, Link, ImageWrapper, Image, Section, Container, GridContainer, GridItem } from 'mattkleyn-component-library';
import me from '../data/me.json';
import heroImage from '../assets/images/placeholder_hero_image.png';
import linkedinIcon from '../assets/icons/icon_linkedin.svg';
import githubIcon from '../assets/icons/icon_github.svg';
import fiverrIcon from '../assets/icons/icon_fivrr.svg';

function HeroSection() {
    return <div className='section_hero_wrapper'>
        <Section as='section' id='section_hero' className='section_hero'>
            <GridContainer as='div' columns='repeat(12, 1fr)' rows='repeat(6, 1fr)' className='hero_grid'>
                <GridItem as='div' col="3 / span 3" row="2 / span 3" className='hero_gridwrap_img'>
                <ImageWrapper className='hero_image_container'>
                    <Image src={heroImage} alt='a headshot of myself' width="275" variant='cover' className='hero_image'/>
                </ImageWrapper>
                </GridItem>
                <GridItem as='div' col="7 /span 3" row="2 / span 3" className='hero_gridwrap_job'>
                    <Container as='div' direction='column' gap='xl' className='hero_content'>
                        <Container as='div' direction='column' gap='lg' className='hero_text'>
                            <Heading level="h3" className='job_title'>{`${me[0].job}`}</Heading>
                            <Paragraph level="md" className='hero_value_statement'>{`${me[0].description}`}</Paragraph>
                        </Container>
                        <Container as='div' direction='row' gap='md' className='hero_socials'>
                            <Link href="www.google.com" target="_blank"><Image src={linkedinIcon} alt='open tab to LinkedIn profile' className='hero_social_icon' variant='icon'/></Link>
                            <Link href="www.google.com" target="_blank"><Image src={githubIcon} alt='open tab to Github profile' className='hero_social_icon' variant='icon'/></Link>
                            <Link href="www.google.com" target="_blank"><Image src={fiverrIcon} alt='open tab to Fiverr profile' className='hero_social_icon' variant='icon'/></Link>
                        </Container>
                    </Container>
                </GridItem>
                <GridItem as='div' col="1 / span 12" row="5 / span 2" className='hero_gridwrap_fullname'>
                    <Heading level="h1" className='full_name'>{`${me[0].fname} ${me[0].lname}`}</Heading>
                </GridItem>
            </GridContainer>
        </Section>
    </div>
}

export default HeroSection;