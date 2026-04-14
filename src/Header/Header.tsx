import { useState } from "react";
import {
    HeaderWrapper,
    Nav,
    NavItem
} from "./Header.styles";

const items = ["HOME", "ABOUT ME", "SKILLS", "PROJECTS", "CONTACTS"];

export default function Header(): JSX.Element {
    const [active, setActive] = useState("HOME");

    return (
        <HeaderWrapper>
            <Nav>
                {items.map((item) => (
                    <NavItem
                        key={item}
                        $active={active === item}
                        onClick={() => setActive(item)}
                    >
                        {item}
                    </NavItem>
                ))}
            </Nav>
        </HeaderWrapper>
    );
}