import { Section, GridContainer, GridItem, Container, Heading, Paragraph } from '@mattkleyn/component-library';
import me from '../data/me.json';
import useRevealOnScroll from '../motion/useRevealOnScroll';

function SectionBuild() {
    useRevealOnScroll(".l2-reveal-heading", 0.5, {rootMargin:"0px 0px -25% 0px"});

    return (
        <div>
            <Section as='section' id='section_build' maxWidth='full' className='section_build'>
                <GridContainer as='div' columns='repeat(12, 1fr)' rows='repeat(6, 1fr)' gap='lg' className='build_grid'>
                    <GridItem as='div' col='2 / span 4' row='2 / span 1' className='build_heading_wrapper'>
                        <Container as='div' direction='flex' className='build_heading text-right'>
                            <Heading level='h2' className='l2-reveal-heading'>{`${me[4].heading[0]}`} <span class='heading_sm'>{`${me[4].heading[1]}`}</span></Heading>
                        </Container>
                    </GridItem>
                    <GridItem as='div' col='2 / span 10' row='3 / span 4' className='build_wrapper'>
                        <Container as='div' direction='column' gap='2xl' className='gap-md pad-xl'>
                            {Object.entries(me[4].items).map(([title, capability]) => (
                                <Container as='div' direction='row' gap='md' className='build_card'>
                                    <Heading level='h6' className='build_title l2-reveal-heading'>{title}</Heading>
                                    <Paragraph level='md'>{capability}</Paragraph>
                                </Container>
                            ))}
                        </Container>
                    </GridItem>
                </GridContainer>
            </Section>
        </div>
    )
}

export default SectionBuild;