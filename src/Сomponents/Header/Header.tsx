import { useState } from "react";
import {
    HeaderNav,
    HeaderWrapper,
    HeaderNavItem
} from "./Header.styles.ts";

const items = ["HOME", "ABOUT ME", "SKILLS", "CONTACTS"];

export default function Header(): JSX.Element {
    const [active, setActive] = useState("HOME");

    return (
        <HeaderWrapper>
            <HeaderNav>
                {items.map((item) => (
                    <HeaderNavItem
                        key={item}
                        $active={active === item}
                        onClick={() => setActive(item)}
                    >
                        {item}
                    </HeaderNavItem>
                ))}
            </HeaderNav>
        </HeaderWrapper>
    );
}