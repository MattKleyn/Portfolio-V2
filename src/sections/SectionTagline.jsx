import { Section, Container, Heading } from 'mattkleyn-component-library';
import me from '../data/me.json';

function SectionTagline() {
    return (
        <div>
            <Section as='section' className='section_tagline' maxWidth='full' padding='xl'>
                <Container as='div' direction='column' gap='md' maxWidth='md' className='tagline_container'>
                    <Heading level='h3' className='tagline_text tagline--lg'>{`${me[1].statement[0]}`}</Heading>
                    <Heading level='h3' className='tagline_text tagline--lg'>{`${me[1].statement[1]}`}</Heading>
                </Container>
            </Section>
        </div>
    )
}

export default SectionTagline;