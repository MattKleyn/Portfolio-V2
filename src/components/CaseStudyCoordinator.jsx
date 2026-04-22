import { Pill, Container, Image, ImageWrapper, Link, Paragraph, Heading, List, PullQuote, QuoteBlock, InlineQuote, Callout, Media} from '@mattkleyn/component-library';
import Collaborators from './Collaborators';
import im from '../assets/images/placeholder_project_image.png';

function CaseStudyCoordinator({project}) {

        const COMPONENT_MAP = {
            pill: (item) => (
                <Container as='div' direction='row' gap='md' className='pill_container'>
                    {item.content.map((pill, index) => (
                        <Pill as='p' key={index} className='case_study_pill'>{pill}</Pill>
                    ))}
                </Container>
            ),
            heading: (item) => <Heading level={item.level || 'h4'} className='case_study_heading'>{item.content}</Heading>,
            paragraph: (item) => <Paragraph level='md' className='case_study_paragraph'>{item.content}</Paragraph>,
            list: (item) => <List as={item.ordered ? "ol" : "ul"} items={item.content} className='case_study_list'/>,
            pullquote: (item) => <PullQuote className='case_study_pullquote bleed'>{item.content}</PullQuote>, 
            quoteblock: (item) => <QuoteBlock cite={item.cite} className='case_study_quoteblock'>{item.content}</QuoteBlock>, 
            inlinequote: (item) => <InlineQuote className='case_study_inlinequote'>{item.content}</InlineQuote>, 
            callout: (item) => <Callout variant={item.variant} className='case_study_callout'>{item.content}</Callout>,
            image: (item) => (
                <ImageWrapper className='case_study_content_image_wrapper'>
                    <Image src={item.src} alt={item.alt} variant='contain' className='case_study_content_image'/>
                </ImageWrapper>
            ),
            figure: (item) => (
                <Media as={item.type} caption={item.caption} className={`case_study_media_container ${item.classname}`}>
                    <Image src={item.src} alt={item.alt} variant='contain' className='case_study_media_image'/>
                </Media>
            ),
            collaborators: (item) => (
                <Container as='div' direction='row' gap='4xl' className='case_study_collaborator_wrapper'>
                    {item.content.map((collaborator, index) => (
                        <Collaborators key={index} collaborator={collaborator} />
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
            <Container as='div' direction='column' gap='none' maxWidth='full' className='case_study_container'>
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