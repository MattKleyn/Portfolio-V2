import { Section, GridContainer, GridItem, Container, Heading, Paragraph } from 'mattkleyn-component-library';
import me from '../data/me.json';

function SectionWorks() {
    return (
        <div>
            <Section as='section' maxWidth='full' className='section_works'>
                <GridContainer as='div' columns='repeat(12, 1fr)' rows='repeat(6, 1fr)' gap='lg' className='works_grid'>
                    <GridItem as='div' col='10 / span 2' row='1 / span 1'>
                        <Container as='div' direction='inline'>
                            <Heading level='h2' >{`${me[3].heading}`}</Heading>
                        </Container>
                    </GridItem>
                </GridContainer>
            </Section>
        </div>
    )
}

export default SectionWorks;