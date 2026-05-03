import {
    DescriptionSection,
    DescriptionTitle,
    DescriptionText, ContentWrapper
} from "./Description.styles.ts";
import {Frame} from "../sprites/Frame.tsx";
import {Container} from "../Shared/Container.ts";
import {FlexWrapper} from "../Shared/FlexWrapper.ts";
import { Fade } from "react-awesome-reveal";


export default function Description() {
    return (
        <DescriptionSection id="about me">
            <Frame id="Frame" viewBox="0 0 1894 74" svgColor="#07070f" isLookUp={false} flippedHorizontal={true}
                   Top="-1px"/>
            <Container>

                <FlexWrapper $direction="column">
                    <ContentWrapper>
                        <Fade direction={"down"} triggerOnce={true}>
                            <DescriptionTitle>About me</DescriptionTitle>
                            <DescriptionText>
                                The long barrow was built on land previously inhabited in the Mesolithic period.
                                It consisted of a sub-rectangular earthen tumulus, estimated to have been
                                15 metres (50 feet) in length, with a chamber built from megaliths
                                on its eastern end. Both and cremated human remains were placed
                                within this chamber during the Neolithic period, representing at least
                                nine or ten individuals.
                            </DescriptionText>
                        </Fade>
                    </ContentWrapper>

                </FlexWrapper>
                <Frame id="Frame" viewBox="0 0 1894 74" svgColor="#07070f" isLookUp={true} flippedHorizontal={false}
                       Bottom="-1px"/>
            </Container>

        </DescriptionSection>
    );
}