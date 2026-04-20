import {
    DescriptionSection,
    DescriptionTitle,
    DescriptionText
} from "./Description.styles.ts";
import {Frame} from "../sprites/Frame.tsx";

export default function Description(): JSX.Element {
    return (
        <DescriptionSection>
            <Frame id="FrameUp" viewBox="0 0 1894 74"/>
            <DescriptionTitle>About me</DescriptionTitle>
            <DescriptionText>
                The long barrow was built on land previously inhabited in the Mesolithic period.
                It consisted of a sub-rectangular earthen tumulus, estimated to have been
                15 metres (50 feet) in length, with a chamber built from sarsen megaliths
                on its eastern end. Both inhumed and cremated human remains were placed
                within this chamber during the Neolithic period, representing at least
                nine or ten individuals.
            </DescriptionText>
        </DescriptionSection>
    );
}