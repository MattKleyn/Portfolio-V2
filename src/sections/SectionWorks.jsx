import { Section, GridContainer, GridItem, Container, Heading, Paragraph, Image, ImageWrapper, BackgroundOverlay } from '@mattkleyn/component-library';
import { Link as RouterLink } from 'react-router-dom';
import me from '../data/me.json';
import projectsArray from '../data/projects.json';
import useBreakpoint from '../utils/useBreakpoint';
import worksLayouts from '../data/WorksLayouts';
import useRevealOnScroll from '../motion/useRevealOnScroll';

function SectionWorks() {
    useRevealOnScroll(".l2-reveal-heading", 0.5, {rootMargin:"0px 0px -25% 0px"});
    useRevealOnScroll(".l2-reveal-image", 1, {rootMargin:"0px 0px -25% 0px"});

    const { isTablet, isMobile } = useBreakpoint();

    const layoutMap = isMobile ? worksLayouts.mobile : isTablet ? worksLayouts.tablet : worksLayouts.desktop;
    console.log("layoutmap: ", layoutMap);

    const featuredProjects = projectsArray.filter(project => project.is_featured);
        
    return (
        <div>
            <Section as='section' id='section_works' maxWidth='full' className='section_works'>
                <GridContainer as='div' columns='repeat(12, 1fr)' rows='repeat(6, 1fr)' gap='lg' className='works_grid'>
                    <GridItem as='div' col='6 / span 7' row='1 / span 1' className='works_heading_wrapper'>
                        <Container as='div' direction='inline'>
                            <Heading level='h2' className='l2-reveal-heading'>{`${me[3].heading[0]}`}<span className='heading_sm'>{me[3].heading[1]}</span></Heading>
                        </Container>
                    </GridItem>
            
                    {featuredProjects.map((project, index) => {
                        const layout = layoutMap[index];

                        if (!layout) {
                            return null;
                        }
                        
                        return (
                            <GridItem as='div' col={layout.col} row={layout.row}>
                                <RouterLink to={`/project/${project.key}`}>
                                    <GridContainer as='div' columns='repeat(1, 1fr)' rows='repeat(1, 1fr)'  className='project_card'>
                                        <GridItem as='div' col='1 / span 1' row='1 / span 1' className='project_card_image_wrapper'>
                                            <ImageWrapper className='project_card_image_container'>
                                                <Image src={project.media.images[0]["url"]} alt={project.media.images[0]["alt_text"]} variant='cover' className='project_card_image l2-reveal-image l2-reveal-image--blur'/>
                                            </ImageWrapper>   
                                        </GridItem>
                                        <GridItem as='div' col='1 / span 1' row='1 / span 1' className='project_card_overlay_wrapper'>
                                            <BackgroundOverlay overlayColor='var(--project-card-overlay-color)' className='project_card_overlay'/>
                                        </GridItem>
                                        <GridItem as='div' col='1 / span 1' row='1 / span 1' className='project_card_heading_wrapper'>
                                            <Heading level='h5' className='project_card_heading'>{project.project_title}</Heading>
                                        </GridItem>
                                        <GridItem as='div' col='1 / span 1' row='1 / span 1' className='project_card_text_wrapper'>
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