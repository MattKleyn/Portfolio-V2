import { Section, GridContainer, GridItem, Container, Heading, Paragraph } from 'mattkleyn-component-library';
import me from '../data/me.json';

function SectionBuild() {
    return (
        <div>
            <Section as='section' id='section_build' maxWidth='full' className='section_build'>
                <GridContainer as='div' columns='repeat(12, 1fr)' rows='repeat(6, 1fr)' gap='lg' className='works_grid'>
                    <GridItem as='div' col='1 / span 4' row='2 / span 1'>
                        <Container as='div' direction='flex' className='heading_build text-right'>
                            <Heading level='h2' ><span class='heading_sm'>{`${me[4].heading[0]}`}</span> {`${me[4].heading[1]}`}</Heading>
                        </Container>/ 
                    </GridItem>
                    <GridItem as='div' col='2 / span 10' row='3 / span 4' >
                        <Container as='div' direction='column' gap='xl' className='gap-md pad-xl'>
                            {Object.entries(me[4].items).map(([title, capability]) => (
                                <Container as='div' direction='row' gap='lg' className='build_card'>
                                    <Heading level='h6' className='build_title'>{title}</Heading>
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