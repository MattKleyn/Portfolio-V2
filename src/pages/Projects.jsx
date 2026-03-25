import Footer from "../sections/SectionFooter";
import Nav from "../sections/Nav";
import SectionCaseStudy from "../sections/SectionCaseStudy";
import { useParams } from "react-router-dom";
import projectArray from "../data/projects.json";

function ProjectsPage() {
    const {id} = useParams();
    const project = projectArray.find( p => p.key == id);

    return (
        <div className="projects_page">
            <Nav />
            <SectionCaseStudy project={project}/>
            <Footer />
        </div>
    )
}

export default ProjectsPage;