import { ModalRoot, GridContainer, GridItem, Heading, Paragraph, Link, Button, Container } from "mattkleyn-component-library";
import me from '../data/me.json';

function ContactMeModal({isOpen, toggleContactModal}) {
    return isOpen && (
        <ModalRoot isOpen={isOpen} onClose={toggleContactModal} className="contact_modal_wrapper">
            <GridContainer as='div' columns="repeat(6, 1fr)" rows="repeat(8, 1fr)" gap="md" className="contact_modal_grid">
                <GridItem as='div' col='2 / span 5' row='2 / span 1'>
                    <Container as='div' className="contact_modal_heading_container">
                        <Heading level='h3' className="contact_me_modal_heading">Get in touch</Heading>
                    </Container>
                </GridItem>
                <GridItem as='div' col='2 / span 4' row='3 / span 2'>
                    <Container as='div' direction='column' gap='lg'>
                        <Paragraph level='lg' className="contact_me_modal_text">OOPS!</Paragraph>
                        <Paragraph level='lg' className="contact_me_modal_text">This modal is currently under maintainance, you can contact me using the link below. Apologies for any inconvenience this may have caused.</Paragraph>
                        <Link href={me[6].links['linkedin']} className="contact_me_modal_link">LinkedIn</Link>
                    </Container>
                </GridItem>
                <GridItem as='div' col='2 / span 2' row='6 / span 1'>
                    <Button onClick={toggleContactModal} className="button_container--ghost--dark">Cancel</Button>
                </GridItem>
            </GridContainer>
        </ModalRoot>
    )
}

export default ContactMeModal;