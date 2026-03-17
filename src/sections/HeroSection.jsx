import { Heading, Paragraph, Link, Image, Section, Container, GridContainer, GridItem } from 'mattkleyn-component-library';
import me from '../data/me.json';
import heroImage from '../assets/images/placeholder_hero_image.png';
import linkedinIcon from '../assets/icons/icon_linkedin.svg';
import githubIcon from '../assets/icons/icon_github.svg';
import fiverrIcon from '../assets/icons/icon_fivrr.svg';

function HeroSection() {
    return <div>
        <Section as='section' className='section_hero'>
            <GridContainer as='div' columns='repeat(12, 1fr)' rows='repeat(6, 1fr)' className='hero_grid'>
                <GridItem as='div' col={`3 / span 3`} row={`2 / span 3`}>
                    <Container as='div' maxWidth='full' className='hero_image'>
                        <Image src={heroImage} alt='a headshot of myself' width="200" />
                    </Container>
                </GridItem>
                <GridItem as='div' col={`7 / span 3`} row={`2 / span 3`}>
                    <Container as='div' direction='column' gap='md' className='hero_content'>
                        <Container as='div' direction='column' gap='md' className='hero_text'>
                            <Heading level="h2" className='job_title'>{`${me[0].job}`}</Heading>
                            <Paragraph level="md">{`${me[0].description}`}</Paragraph>
                        </Container>
                        <Container as='div' direction='row' gap='sm' className='hero_socials'>
                            <Link href="www.google.com" target="_blank"><Image src={linkedinIcon} alt='open tab to LinkedIn profile' className='hero_social_icon' variant='icon'/></Link>
                            <Link href="www.google.com" target="_blank"><Image src={githubIcon} alt='open tab to Github profile' className='hero_social_icon' variant='icon'/></Link>
                            <Link href="www.google.com" target="_blank"><Image src={fiverrIcon} alt='open tab to Fiverr profile' className='hero_social_icon' variant='icon'/></Link>
                        </Container>
                    </Container>
                </GridItem>
                <GridItem as='div' col={`1 / span 11`} row={`5 / span 2`}>
                    <Heading level="h1" className='full_name'>{`${me[0].fname} ${me[0].lname}`}</Heading>
                </GridItem>
            </GridContainer>
        </Section>
    </div>
}

export default HeroSection;