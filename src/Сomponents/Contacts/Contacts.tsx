import {
    ContactsSection,
    ContactsTitle,
    FormWrapper,
    FormRow,
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
                <FormRow>
                    <FormLabel>Email : </FormLabel>
                    <Input type="text" />
                </FormRow>

                <FormRow>
                    <FormLabel>Subject : </FormLabel>
                    <Input type="text" />
                </FormRow>

                <FormRow>
                    <FormLabel>Content : </FormLabel>
                    <Textarea />
                </FormRow>
            </FormWrapper>
            <Button>Send</Button>
        </ContactsSection>
    );
}