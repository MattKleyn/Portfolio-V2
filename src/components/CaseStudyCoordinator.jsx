import { Pill, Container, Image, ImageWrapper, Link, Paragraph, Heading} from 'mattkleyn-component-library';
import im from '../assets/images/placeholder_project_image.png';

function CaseStudyCoordinator({project}) {
    return (
        <div>
            <Container as='div' direction='column' gap='4xl' maxWidth='full' className='case_study_container'>
                <Container as='div' direction='row' gap='lg' maxWidth='full'>
                    <ImageWrapper className='case_study_image_wrapper'>
                        <Image src={project.media.images[0]["url"]} alt={project.media.images[0]["alt_text"]} className='case_study_hero_image'/>
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
        </div>
    )
}

export default CaseStudyCoordinator;