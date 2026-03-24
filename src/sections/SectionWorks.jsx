import { Section, GridContainer, GridItem, Container, Heading, Paragraph, Image, Link, BackgroundOverlay } from 'mattkleyn-component-library';
import me from '../data/me.json';
import projects from '../data/projects.json';
import im from '../assets/images/placeholder_project_image.png'

function SectionWorks() {
    const layouts = [
            {column: '1 / span 8', row: '2 / span 3'},
            {column: '9 / span 4', row: '2 / span 3'},
            {column: '1 / span 4', row: '5 / span 3'},
            {column: '5 / span 8', row: '5 / span 3'}
            ];

    return (
        <div>
            <Section as='section' id='section_works' maxWidth='full' className='section_works'>
                <GridContainer as='div' columns='repeat(12, 1fr)' rows='repeat(7, 1fr)' gap='lg' className='works_grid'>
                    <GridItem as='div' col='10 / span 2' row='1 / span 1'>
                        <Container as='div' direction='inline'>
                            <Heading level='h2' >{`${me[3].heading}`}</Heading>
                        </Container>
                    </GridItem>
                    {/* Need to dynamically import images/vids for cards, dont forget project href */}
                    {projects.map((project, index) => {
                        const layout = layouts[index];
                        return (
                            <GridItem as='div' col={layout.column} row={layout.row}>
                                <Link href=''>
                                    <GridContainer as='div' columns='repeat(1, 1fr)' rows='repeat(1, 1fr)'  className='project_card'>
                                        <GridItem as='div' col='1 / span 1' row='1 / span 1'>
                                            <div className='project_card_image-wrapper'>
                                                <Image src={im} alt='project card image' variant='cover' className='project_card_image'/>
                                            </div>
                                        </GridItem>
                                        <GridItem as='div' col='1 / span 1' row='1 / span 1'>
                                            <BackgroundOverlay overlayColor='var(--color-overlay)'/>
                                        </GridItem>
                                        <GridItem as='div' col='1 / span 1' row='1 / span 1' className='project_card_heading_container'>
                                            <Heading level='h5' className='project_card_heading'>{project.project_title}</Heading>
                                        </GridItem>
                                        <GridItem as='div' col='1 / span 1' row='1 / span 1' className='project_card_text_container'>
                                            <Paragraph level='md' className='project_card_text'>{project.project_description}</Paragraph>
                                        </GridItem>
                                    </GridContainer>
                                </Link>
                            </GridItem>
                        )
                    })}
                </GridContainer>
            </Section>
        </div>
    )
}

export default SectionWorks;