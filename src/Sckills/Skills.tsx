import {
    Section,
    Row,
    Circle,
    Title
} from "./Skills.styles";

import { Icon } from "../Icon/Icon";

const icons = [
    "codeSvg",
    "reactSvg",
    "css3Svg",
    "typeScriptSvg",
    "styledComponentsSvg",
    "gitSvg"
];

export default function Skills(): JSX.Element {
    return (
        <Section>
            <Title>My skills</Title>

            <Row>
                {icons.map((id) => (
                    <Circle key={id}>
                        <Icon id={id} width={50} height={50} />
                    </Circle>
                ))}
            </Row>
        </Section>
    );
}