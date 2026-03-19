import { Section, GridContainer, GridItem, Container, Heading, Paragraph } from 'mattkleyn-component-library';
import me from '../data/me.json';

function SectionValueProposition () {
    return (
        <div>
            <Section as='div' className='section_value_proposition' maxWidth='full'>
                <GridContainer as='div' col='repeat(12, 1fr)' rows='repeat(9, 1fr)' gap='lg'>
                    <GridItem as='div' col='5 / span 6' row='1 / span 2'>
                        <Container as='div' direction='row' gap='lg' maxWidth='full'>
                            <Paragraph level='md' className='problem_statement max-width-half'>{`${me[2].problem}`}</Paragraph>
                            <Paragraph level='md' className='solution_statement max-width-half'>{`${me[2].solution}`}</Paragraph>
                        </Container>
                    </GridItem>
                    <GridItem as='div' col='3 / span 4' row='4 / span 2'>
                        <Container as='div' direction='column' gap='lg' maxWidth='full'>
                            <Heading level='h2' >{`${me[2].heading[0]}`}<span class='heading_sm'>{`${me[2].heading[1]}`}</span></Heading>
                            <Paragraph level='md' className='why_me' >{`${me[2].why_me}`}</Paragraph>
                        </Container>
                    </GridItem>
                    <GridItem as='div' col='5 / span 7' row='6 / span 3' className='values'>
                        <Container as='div' direction='row' gap='lg' maxWidth='full' className='values_container'>
                            {Object.entries(me[2].work_values).map(([title,text]) => (
                            <Container as='div' direction='column' gap='md' maxWidth='xs' className='values_card'>
                                <Heading level='h5'>{title}</Heading>
                                <Paragraph level='md'>{text}</Paragraph>
                            </Container>
                            ))}
                        </Container>
                    </GridItem>
                    <GridItem as='div' col='9 / span 2' row='9 / span 1' className='button_wrapper' >
                            <Container as='div' direction='inline' className='button_primary_container'>
                                <Paragraph level='lg' id='button_primary_text'>Get in touch</Paragraph>
                            </Container>
                    </GridItem>
                </GridContainer>
            </Section>
        </div>
    )
}

export default SectionValueProposition;