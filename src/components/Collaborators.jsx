import { Heading, Paragraph, Link, Container } from 'mattkleyn-component-library';

function Collaborators({collaborator}) {
    return (
        <Container as='div' direction='column' gap='sm'maxWidth='half'>
            <Heading level='h6' >{collaborator.name}</Heading>
            <Link href={collaborator.contact_url}>{collaborator.contact_type}</Link>
            <Link href={collaborator.website_url}>{collaborator.domain_name}</Link>
        </Container>
    )
}

export default Collaborators;