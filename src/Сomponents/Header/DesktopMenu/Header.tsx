import {useState, useEffect} from "react";
import {
    HeaderNav,
    HeaderWrapper,
    HeaderNavItem,
    HeaderNavList,
} from "./Header.styles.ts";
import {Container} from "../../Shared/Container.ts";
import {FlexWrapper} from "../../Shared/FlexWrapper.ts";
import {scrollToSection} from "../../Shared/ScrollToSections.ts";


const items = ["HOME", "PROJECTS", "SKILLS", "ABOUT ME", "CONTACTS"];

export default function Header(): JSX.Element {
    const [active, setActive] = useState("HOME");

    useEffect(() => {
        const sections = document.querySelectorAll("section, header, footer");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id.toUpperCase());
                    }
                });
            },
            {
                threshold: 0.6
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <HeaderWrapper>
            <Container>
                <FlexWrapper $direction="row">
                    <HeaderNav>
                        <HeaderNavList>
                            {items.map((item) => (
                                <li key={item}>
                                    <HeaderNavItem
                                        $active={active === item}
                                        onClick={() => scrollToSection(item.toLowerCase())}
                                    >
                                        {item}
                                    </HeaderNavItem>
                                </li>
                            ))}
                        </HeaderNavList>
                    </HeaderNav>
                </FlexWrapper>
            </Container>
        </HeaderWrapper>
    );
}