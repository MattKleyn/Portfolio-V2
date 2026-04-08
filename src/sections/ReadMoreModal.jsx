import {ModalRoot,GridContainer, GridItem, Button, Container, Paragraph, Heading, ImageWrapper, Image} from 'mattkleyn-component-library';
import me from '../data/me.json';
import jam from '../assets/images/placeholder_about.jpg';

function ReadMoreModal({isModalOpen, toggleModal}) {

    return isModalOpen && (
        <ModalRoot isOpen={isModalOpen} onClose={toggleModal} className='about_modal'>
            <GridContainer as='aside' columns='repeat(12, 1fr)' rows='repeat(9, 1fr)' gap='lg'className='about_me_modal_grid_container'>
                <GridItem as='div' col='10 / span 2' row='1 / span 1' className='about_me_modal_button_wrapper'>
                    <Button as='button' onClick={toggleModal} className='about_me_modal_button button_primary_container'>
                        <Paragraph level='lg' className='button_primary_text'>Close</Paragraph>
                    </Button>
                </GridItem>
                <GridItem as='div' col='4 / span 6' row='2 / span 3'>
                    <ImageWrapper className='about_me_modal_image_wrapper'>
                        <Image src={jam} alt='placehoder image' variant='cover'/>
                    </ImageWrapper>
                </GridItem>
                <GridItem as='div' col='4 / span 6' row='5 / span 5'>
                    <Container as='div' direction='column' gap='lg' maxWidth='full'>
                        {me[5].bio.map((item, index ) => (
                            <Container as='div' direction='column' gap='md' maxWidth='full' key={index}>
                                <Heading level='h4'>{item.bodyHeading}</Heading>
                                <Paragraph level='md'>{item.paragraph}</Paragraph>
                            </Container>
                        ))}
                    </Container>
                </GridItem>
            </GridContainer>
        </ModalRoot>
    )
}

export default ReadMoreModal;