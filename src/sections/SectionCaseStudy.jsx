import { Section, Container, GridContainer, GridItem, Heading, Paragraph, Image, ImageWrapper, Link, Button } from 'mattkleyn-component-library';
import CaseStudyCoordinator from '../components/CaseStudyCoordinator';
import { Link as RouterLink, useParams, useNavigate } from "react-router-dom";
import me from '../data/me.json';
import projectArray from '../data/projects.json';

function SectionCaseStudy({project}) {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <Section as='section' maxWidth='full' className='section_case_study'>
                <GridContainer as='div' columns='repeat(12,1fr)' rows='repeat(2,auto)' gap='lg'>
                    <GridItem as='div' col='5 / span 6' row='1 / span 1'>
                        <Container as='div' direction='row' gap='md' maxWidth='full' className='case_study_heading_container'>
                            <Heading level='h2' >{`${me[3].heading[0]}`} <span class='heading_sm'>{`${me[3].heading[1]}`}</span></Heading>
                        </Container>
                    </GridItem>


                    <GridItem as='div' col='2 / span 3' row='2 / span 1' className='sidebar_wrapper'>
                        <Container as='div' direction='column' maxWidth='full' className='sidebar_container'>
                            <Container as='div' direction='column' gap='xl' maxWidth='full' className='project_links_container' >
                                {projectArray.map((project) => {
                                    return (<RouterLink to={`/project/${project.key}`}>
                                        <Heading level='h6' id={project.project_title} className={project.key == id ? 'project_title--active' : 'project_title'}>
                                            {project.project_title}
                                        </Heading>
                                    </RouterLink>)
                                })}
                            </Container>

                            <Container as='div' direction='column' maxWidth='full' className='return_container button_secondary_container'>
                                <Button as='button' onClick={() => {navigate('/', {state: {scrollTo: "section_works"}})}} className='return_button' ><Paragraph level="md" className='button_secondary_text'>Go Back</Paragraph></Button>                       </Container>
                        </Container>
                    </GridItem>


                    <GridItem as='div' col='5 / span 5' row='2 / span 1' >
                        <CaseStudyCoordinator project={project}></CaseStudyCoordinator>
                    </GridItem>
                </GridContainer>
            </Section>
        </div>
    )
}

export default SectionCaseStudy;