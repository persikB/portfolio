import {
    PreviewSection,
    PreviewContainer,
    TextSection,
    PreviewLabel,
    PreviewName,
    PreviewText,
    PreviewImage,
    PreviewWrapper,
    ImgSection, FrameWrapper
} from "./Preview.styles.ts";
import {Button} from "../Shared/Button.ts";
import Avatar from "../../assets/images/avatar.svg";
import {Frame} from "../sprites/Frame.tsx";

export default function Preview(): JSX.Element {
    return (
        <PreviewWrapper>
        <PreviewSection>
            <PreviewContainer>
                <TextSection>
                    <PreviewLabel>WEB DEVELOPER</PreviewLabel>

                    <PreviewName>John Doe</PreviewName>

                    <PreviewText>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                        sint. Velit officia consequat duis enim velit mollit. Exercitation
                        veniam consequat sunt.
                    </PreviewText>
                    <Button>Contact me</Button>
                </TextSection>

                <ImgSection>
                    <PreviewImage src={Avatar} alt="profile" />
                </ImgSection>
            </PreviewContainer>
        </PreviewSection>
            <FrameWrapper>
                <Frame id="Frame" viewBox="0 0 1894 74" svgColor="#07070f" isLookUp={true} flippedHorizontal={true}/>
            </FrameWrapper>
        </PreviewWrapper>
    );
}