import {
    HeroSection,
    Container,
    Left,
    Label,
    Name,
    Text,
    Image,
    Button,
    PageWrapper,
    Right
} from "./Preview.styles";
import Avatar from "../assets/images/avatar.webp";

export default function Preview(): JSX.Element {
    return (
        <PageWrapper>
        <HeroSection>
            <Container>
                <Left>
                    <Label>WEB DEVELOPER</Label>

                    <Name>John Doe</Name>

                    <Text>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                        sint. Velit officia consequat duis enim velit mollit. Exercitation
                        veniam consequat sunt.
                    </Text>
                    <Button>Contact me</Button>
                </Left>

                <Right>
                    <Image src={Avatar} alt="profile" />
                </Right>
            </Container>
        </HeroSection>
        </PageWrapper>
    );
}