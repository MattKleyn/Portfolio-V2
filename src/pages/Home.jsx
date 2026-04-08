import HeroSection from "../sections/HeroSection";
import SectionTagline from "../sections/SectionTagline";
import SectionValueProposition from "../sections/SectionValueProposition";
import SectionWorks from "../sections/SectionWorks";
import SectionBuild from "../sections/SectionBuild";
import SectionAbout from "../sections/SectionAbout";
import Footer from "../sections/SectionFooter";
import Nav from "../sections/Nav";
import ReadMoreModal from "../sections/ReadMoreModal";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import useModalController from "../utils/useModalController";
import ContactMeModal from "../sections/ContactMeModal";
import useContactController from "../sections/useContactController";

function HomePage() {
    const location = useLocation();
    const {isModalOpen, toggleModal} = useModalController();
    const {isOpen, toggleContactModal} = useContactController();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                element.scrollIntoView({behavior: "smooth"});
            }
        }
    }, [location]);

    return (
        <div className="home_page">
            <ContactMeModal isOpen={isOpen} toggleContactModal={toggleContactModal}/>
            <Nav isOpen={isOpen} toggleContactModal={toggleContactModal}/>
            <HeroSection />
            <SectionTagline />
            <SectionValueProposition isOpen={isOpen} toggleContactModal={toggleContactModal} />
            <SectionWorks />
            <SectionBuild />
            <SectionAbout isModalOpen={isModalOpen} toggleModal={toggleModal} />
            <ReadMoreModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
            <Footer isOpen={isOpen} toggleContactModal={toggleContactModal} />
        </div>
    )
}

export default HomePage;