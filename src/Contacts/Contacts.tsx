import {
    Section,
    Title,
    FormWrapper,
    Row,
    Label,
    Input,
    Textarea,
    Button
} from "./Contacts.styles";

export default function Contacts(): JSX.Element {
    return (
        <Section>
            <Title>Contact me</Title>

            <FormWrapper>
                <Row>
                    <Label>Email</Label>
                    <Input type="text" />
                </Row>

                <Row>
                    <Label>Subject</Label>
                    <Input type="text" />
                </Row>

                <Row>
                    <Label>Content</Label>
                    <Textarea />
                </Row>

                <Button>Send</Button>
            </FormWrapper>
        </Section>
    );
}