import { Section, Container, GridContainer, GridItem, Heading, Paragraph, Image, ImageWrapper, Link, Button } from 'mattkleyn-component-library';
import { Link as RouterLink, useParams, useNavigate } from "react-router-dom";
import me from '../data/me.json';
import projectArray from '../data/projects.json';
import im from '../assets/images/placeholder_project_image.png';

function SectionCaseStudy({project}) {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <Section as='section' maxWidth='full' className='section_case_study'>
                <GridContainer as='div' columns='repeat(12,1fr)' rows='repeat(2,auto)' gap='lg'>
                    <GridItem as='div' col='8 / span 5' row='1 / span 1'>
                        <Container as='div' direction='inline' gap='md' maxWidth='full' className='case_study_heading_container'>
                            <Heading level='h2' ><span class='heading_sm'>{`${me[3].heading[0]}`}</span> {`${me[3].heading[1]}`}</Heading>
                        </Container>
                    </GridItem>


                    <GridItem as='div' col='2 / span 3' row='2 / span 1' className='sidebar_wrapper'>
                        <Container as='div' direction='column' maxWidth='full' className='sidebar_container'>
                            <Container as='div' direction='column' gap='xl' maxWidth='full' className='project_links_container' >
                                {projectArray.map((project) => {
                                    return (<RouterLink to={`/project/${project.key}`}>
                                        <Heading level='h5' id={project.project_title} className={project.key == id ? 'project_title--active' : 'project_title'}>
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
                        <Container as='div' direction='column' gap='4xl' maxWidth='full' className='case_study_container'>
                            <Container as='div' direction='row' gap='lg' maxWidth='full'>
                                <ImageWrapper className='case_study_image_wrapper'>
                                    <Image src={im} alt='hero image of the project' className='case_study_hero_image'/>
                                </ImageWrapper>
                                <Container as='div' direction='column' gap='md' maxWidth='full' className='case_study_links_container'>
                                    {project.project_links.map((link, index) => {
                                        return (
                                        <Link key={index} href={link.url}>
                                            <Paragraph level='md'>
                                                {link.type}
                                            </Paragraph>
                                        </Link>)
                                    })}
                                </Container>
                            </Container>

                            {project.case_study.map((section, index) => {
                                return (
                                    <Container key={index} as='div' direction='column' gap='md' maxWidth='full' className='case_study_content_container'>
                                        <Heading level='h4'>{section.heading}</Heading>
                                        <Paragraph level='md'>{section.body}</Paragraph>
                                    </Container>
                                )
                            })}
                        </Container>
                    </GridItem>
                </GridContainer>
            </Section>
        </div>
    )
}

export default SectionCaseStudy;