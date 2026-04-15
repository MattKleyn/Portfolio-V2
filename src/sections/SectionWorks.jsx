import { Section, GridContainer, GridItem, Container, Heading, Paragraph, Image, ImageWrapper, BackgroundOverlay } from 'mattkleyn-component-library';
import { Link as RouterLink } from 'react-router-dom';
import me from '../data/me.json';
import projectsArray from '../data/projects.json';
import im from '../assets/images/placeholder_project_image.png'

function SectionWorks() {
    const layouts = [
            {column: '1 / span 3', row: '2 / span 5'},
            {column: '4 / span 3', row: '2 / span 3'},
            {column: '7 / span 3', row: '2 / span 5'},
            {column: '10 / span 3', row: '2 / span 3'}
            ];

    return (
        <div>
            <Section as='section' id='section_works' maxWidth='full' className='section_works'>
                <GridContainer as='div' columns='repeat(12, 1fr)' rows='repeat(6, 1fr)' gap='lg' className='works_grid'>
                    <GridItem as='div' col='7 / span 6' row='1 / span 1'>
                        <Container as='div' direction='inline'>
                            <Heading level='h2' >{`${me[3].heading[0]}`}<span class='heading_sm'>{me[3].heading[1]}</span></Heading>
                        </Container>
                    </GridItem>
            
                    {projectsArray.map((project, index) => {
                        const layout = layouts[index];
                        return (
                            <GridItem as='div' col={layout.column} row={layout.row}>
                                <RouterLink to={`/project/${project.key}`}>
                                    <GridContainer as='div' columns='repeat(1, 1fr)' rows='repeat(1, 1fr)'  className='project_card'>
                                        <GridItem as='div' col='1 / span 1' row='1 / span 1'>
                                            <ImageWrapper className='project_card_image-wrapper'>
                                                <Image src={project.media.images[0]["url"]} alt={project.media.images[0]["alt_text"]} variant='cover' className='project_card_image'/>
                                            </ImageWrapper>   
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
                                </RouterLink>
                            </GridItem>
                        )
                    })}
                </GridContainer>
            </Section>
        </div>
    )
}

export default SectionWorks;