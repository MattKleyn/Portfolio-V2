import { Heading, Paragraph, Link, Image } from 'mattkleyn-component-library';
import me from '../data/me.json';
import linkedinIcon from '../assets/icons/icon_linkedin.svg';
import githubIcon from '../assets/icons/icon_github.svg';
import fiverrIcon from '../assets/icons/icon_fivrr.svg';

function HeroSection() {
    return <div className="hero-section">
        <Heading level="h1">{`${me[0].fname} ${me[0].lname}`}</Heading>
        <Heading level="h2">{`${me[0].job}`}</Heading>
        <Paragraph level="md">{`${me[0].description}`}</Paragraph>
        <Link href="www.google.com" target="_blank"><Image src={linkedinIcon} alt='open tab to LinkedIn profile' variant='hero_social_icon'/></Link>
        <Link href="www.google.com" target="_blank"><Image src={githubIcon} alt='open tab to Github profile' variant='hero_social_icon'/></Link>
        <Link href="www.google.com" target="_blank"><Image src={fiverrIcon} alt='open tab to Fiverr profile' variant='hero_social_icon'/></Link>
    </div>
}

export default HeroSection;