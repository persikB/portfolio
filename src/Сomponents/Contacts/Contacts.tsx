import {
    ContactsSection,
    ContactsTitle,
    FormWrapper,
    FormLabel,
    Input,
    Textarea
} from "./Contacts.styles.ts";
import {Button} from "../Shared/Button.ts";
import {Frame} from "../sprites/Frame.tsx";

export default function Contacts(): JSX.Element {
    return (
        <ContactsSection>
            <Frame id="FrameUp" viewBox="0 0 1894 74"/>
            <ContactsTitle>Contact me</ContactsTitle>
            <FormWrapper>
                <FormLabel>Email :</FormLabel>
                <Input $row={1} placeholder="Enter your email"/>

                <FormLabel>Name :</FormLabel>
                <Input $row={2} placeholder="Enter your name"/>

                <FormLabel>Message :</FormLabel>
                <Textarea placeholder="Enter your message"/>
            </FormWrapper>
            <Button>Send</Button>
        </ContactsSection>
    );
}