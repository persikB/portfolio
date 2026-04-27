import {ProjectSection, ProjectsGrid, ProjectsTitle} from "./Projects.styles.ts";
import {Container} from "../Shared/Container.ts";
import {FlexWrapper} from "../Shared/FlexWrapper.ts";
import { Card } from "../Shared/Card/Card.tsx";
import Image from "../../assets/images/CardImage.webp"


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
                        {projects.map((project, i) => (
                            <Card key={i} {...project} />
                        ))}
                    </ProjectsGrid>
                </FlexWrapper>
            </Container>
        </ProjectSection>
    );
}