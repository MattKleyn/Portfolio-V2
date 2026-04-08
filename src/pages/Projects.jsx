import Footer from "../sections/SectionFooter";
import Nav from "../sections/Nav";
import SectionCaseStudy from "../sections/SectionCaseStudy";
import { useParams } from "react-router-dom";
import projectArray from "../data/projects.json";
import { useEffect } from "react";
import ContactMeModal from "../sections/ContactMeModal";
import useContactController from "../sections/useContactController";

function ProjectsPage() {
    const {isOpen, toggleContactModal} = useContactController();
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    const {id} = useParams();
    const project = projectArray.find( p => p.key == id);

    return (
        <div className="projects_page">
            <ContactMeModal isOpen={isOpen} toggleContactModal={toggleContactModal}/>
            <Nav isOpen={isOpen} toggleContactModal={toggleContactModal}/>
            <SectionCaseStudy project={project}/>
            <Footer isOpen={isOpen} toggleContactModal={toggleContactModal}/>
        </div>
    )
}

export default ProjectsPage;