import { NavRoot, NavBar, NavMenu, Image, Container, Paragraph, Button, NavToggle, NavOverlay, GridContainer, GridItem, Link, Portal } from 'mattkleyn-component-library';
import Logo from '../assets/images/placeholder_logo.svg';
import { useNavigate } from "react-router-dom";
import useNavController from "../utils/useNavController";
import me from '../data/me.json';

function Nav() {
    const navigate = useNavigate();

    const {
        scrollDirection,
        isAtTop,
        isPastThreshold,
        isMenuOpen,
        openMenu,
        closeMenu,
        toggleMenu,
    } = useNavController();

    function goToSection(sectionId) {
        navigate("/", {state: {scrollTo: sectionId}});
    }

    return(
        <NavRoot position='fixed' offsetTop='0rem' className='nav_root'>
            <NavBar direction='row' dock={`${isPastThreshold ? "left" : "none"}`} padding='md' maxWidth='md' className='nav_bar'>
                <Image src={Logo} alt='placeholder brand logo'variant='cover' 
                className={`logo 
                ${isPastThreshold ? "nav_logo--hidden-on-scroll" : ""}`}/>
                <NavMenu direction='row' padding='sm' 
                className={`nav_menu 
                ${isPastThreshold ? "nav_menu--hidden-on-scroll" : ""}`}>
                    <Button as="button" onClick={() => goToSection("section_hero")} className='nav_link'>Home</Button>
                    <Button as="button" onClick={() => goToSection("section_works")} className='nav_link'>Works</Button>
                    <Button as="button" onClick={() => goToSection("section_build")} className='nav_link'>Capabilities</Button>
                    <Button as="button" onClick={() => goToSection("section_about")} className='nav_link'>About</Button>
                    <Container as='div' direction='inline' className='button_secondary_container'>
                        <Paragraph level='md' id='button_secondary_text'>Contact Me</Paragraph>
                    </Container>
                </NavMenu>
                <NavToggle onClick={toggleMenu} className={`${isPastThreshold ? "nav_toggle--visible" : "nav_toggle--hidden"}`}>
                    {!isMenuOpen && (<Paragraph level='md'>Open</Paragraph>)}
                </NavToggle>
                {isMenuOpen && (
                    <Portal>
                        <NavOverlay onClick={closeMenu} className='nav_overlay'>
                            <GridContainer as='div' columns='repeat(12, 1fr)' rows='repeat(6, 1fr)' gap='lg'>
                                <GridItem onClick={toggleMenu} as='div' col='11 / span 1' row='1 / span 1' className='nav_overlay_close_container'>
                                    {isMenuOpen && (<Paragraph level='md' className='nav_close_toggle'>Close</Paragraph>)}
                                </GridItem>
                                <GridItem as='div' col='3 / span 3' row='3 / span 4' className='nav_menu_overlay_container' >
                                    <NavMenu direction='column' padding='sm' className='nav_menu_overlay'>
                                        <Button as="button" onClick={() => goToSection("section_hero")} className='nav_link_overlay'>Home</Button>
                                        <Button as="button" onClick={() => goToSection("section_works")} className='nav_link_overlay'>Works</Button>
                                        <Button as="button" onClick={() => goToSection("section_build")} className='nav_link_overlay'>Capabilities</Button>
                                        <Button as="button" onClick={() => goToSection("section_about")} className='nav_link_overlay'>About</Button>
                                        <Container as='div' direction='inline' className='contact_overlay button_secondary_container'>
                                            <Paragraph level='md' id='button_secondary_text' className='contact_overlay'>Contact Me</Paragraph>
                                        </Container>
                                    </NavMenu>
                                </GridItem>
                                <GridItem as='div' col='3 / span 1' row='1 / span 1' >
                                    <Image src={Logo} alt='Brand Logo inverted' className='nav_menu_overlay_logo'/>
                                </GridItem>
                                <GridItem as='div' col='11 / span 1' row='4 / span 2' className='nav_links_overlay_container'>
                                    <Container as='div' direction='column' maxWidth='full' className='nav_links_container'>
                                        {Object.entries(me[6].links).map(([name, link]) => (
                                            <Link href={link} target='_blank' className='nav_link'>{name}</Link>
                                        ))}
                                    </Container>
                                </GridItem>
                            </GridContainer>
                        </NavOverlay>
                    </Portal>
                )}
            </NavBar>
        </NavRoot>
    )
}

export default Nav;