import {
    ContactsSection,
    ContactsTitle,
    FormWrapper,
    FormLabel,
    Input,
    Textarea
} from "./Contacts.styles.ts";
import {Button} from "../Shared/Button.ts";

export default function Contacts(): JSX.Element {
    return (
        <ContactsSection>
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