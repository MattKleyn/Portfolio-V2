import { NavRoot, NavBar, NavMenu, Image, Container, Paragraph, Button } from 'mattkleyn-component-library';
import Logo from '../assets/images/placeholder_logo.svg';
import { useNavigate } from "react-router-dom";

function Nav() {
    const navigate = useNavigate();

    function goToSection(sectionId) {
        navigate("/", {state: {scrollTo: sectionId}});
    }

    return(
        <NavRoot position='fixed' offsetTop='0rem' className='nav_root'>
            <NavBar direction='row' dock='none' padding='md' maxWidth='md' className='nav_bar'>
                <Image src={Logo} alt='placeholder brand logo'variant='cover' className='logo'/>
                <NavMenu direction='row' padding='sm' className='nav_menu'>
                    <Button as="button" onClick={() => goToSection("section_hero")} className='nav_link'>Home</Button>
                    <Button as="button" onClick={() => goToSection("section_works")} className='nav_link'>Works</Button>
                    <Button as="button" onClick={() => goToSection("section_build")} className='nav_link'>Capabilities</Button>
                    <Button as="button" onClick={() => goToSection("section_about")} className='nav_link'>About</Button>
                    <Container as='div' direction='inline' className='button_secondary_container'>
                        <Paragraph level='md' id='button_secondary_text'>Contact Me</Paragraph>
                    </Container>
                </NavMenu>
            </NavBar>
        </NavRoot>
    )
}

export default Nav;