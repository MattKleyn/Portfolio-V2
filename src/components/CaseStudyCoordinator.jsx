import { Pill, Container, Image, ImageWrapper, Link, Paragraph, Heading, List, PullQuote, QuoteBlock, InlineQuote, Callout} from 'mattkleyn-component-library';
import Collaborators from './Collaborators';
import im from '../assets/images/placeholder_project_image.png';

function CaseStudyCoordinator({project}) {

        const COMPONENT_MAP = {
            pill: (item) => (
                <Container as='div' direction='row' gap='md'>
                    {item.content.map((pill, index) => (
                        <Pill as='p' key={index}>{pill}</Pill>
                    ))}
                </Container>
            ),
            heading: (item) => <Heading level={item.level || 'h4'}>{item.content}</Heading>,
            paragraph: (item) => <Paragraph level='md'>{item.content}</Paragraph>,
            list: (item) => <List as={item.ordered ? "ol" : "ul"} items={item.content} />,
            pullquote: (item) => <PullQuote>{item.content}</PullQuote>, 
            quoteblock: (item) => <QuoteBlock cite={item.cite}>{item.content}</QuoteBlock>, 
            inlinequote: (item) => <InlineQuote>{item.content}</InlineQuote>, 
            callout: (item) => <Callout variant={item.variant}>{item.content}</Callout>,
            collaborators: (item) => (
                <Container as='div' direction='row' gap='none' className='case_study_collaborator wrapper'>
                    {item.content.map((collaborator, index) => (
                        <Collaborators key={index} collaborator={collaborator}/>
                    ))}
                </Container>
            ),
        }

    const renderComponentType = (item) => {
        const Component = COMPONENT_MAP[item.type];
        return Component ? Component(item) : null;
    }

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

                {project.case_study.map((item, index) => {
                    return (
                        <Container key={index} as='div' direction='column' gap='md' maxWidth='full' className='case_study_content_container'>
                            {renderComponentType(item)}
                        </Container>
                    )
                })}
            </Container>
        </div>
    )
}

export default CaseStudyCoordinator;