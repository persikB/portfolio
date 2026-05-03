import {ProjectSection, ProjectsGrid, ProjectsTitle} from "./Projects.styles.ts";
import {Container} from "../Shared/Container.ts";
import {FlexWrapper} from "../Shared/FlexWrapper.ts";
import { Card } from "../Shared/Card/Card.tsx";
import Image from "../../assets/images/CardImage.webp"
import { Fade } from "react-awesome-reveal";

const projects = [
    {
        image: Image,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        liveUrl: "#",
        codeUrl: "#"
    },
    {
        image: Image,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        liveUrl: "#",
        codeUrl: "#"
    },
    {
        image: Image,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        liveUrl: "#",
        codeUrl: "#"
    },
    {
        image: Image,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        liveUrl: "#",
        codeUrl: "#"
    },
    {
        image: Image,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        liveUrl: "#",
        codeUrl: "#"
    },
    {
        image: Image,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        liveUrl: "#",
        codeUrl: "#"
    }

];



export default function Projects(): JSX.Element {
    return (
        <ProjectSection id = "projects">
            <Container>
                <FlexWrapper $direction="column">
                    <ProjectsTitle>Projects</ProjectsTitle>
                    <ProjectsGrid>
                        <Fade cascade
                              damping={0.2}
                              duration={700}
                              triggerOnce>
                        {projects.map((project, i) => (
                            <Card key={i} {...project} />
                        ))}
                        </Fade>
                    </ProjectsGrid>
                </FlexWrapper>
            </Container>
        </ProjectSection>
    );
}