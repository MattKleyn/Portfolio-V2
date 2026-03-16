import { Heading } from 'mattkleyn-component-library';
import me from '../data/me.json';

function HeroSection() {
    return <div className="hero-section">
        <Heading level="h1">{`${me[0].fname} ${me[0].lname}`}</Heading>
        <Heading level="h2">{`${me[0].job}`}</Heading>
    </div>
}

export default HeroSection;