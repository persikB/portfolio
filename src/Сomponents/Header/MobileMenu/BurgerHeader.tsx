import { useState } from "react";
import {
    MobileMenuWrapper,
    BurgerButton,
    CloseButton,
    MobileMenuPopup,
    MobileNav,
    MobileNavList,
    MobileNavItem
} from "./BurgerHeader.styles.ts";

import { Icon } from "../../sprites/Icon.tsx";
import {scrollToSection} from "../../Shared/ScrollToSections.ts";

const items = ["HOME", "PROJECTS", "SKILLS", "ABOUT ME", "CONTACTS"];

export default function BurgerHeader(): JSX.Element {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    const closeMenu = () => {
        setMenuIsOpen(false);
    };


    return (
        <MobileMenuWrapper>
            <BurgerButton
                isOpen={menuIsOpen}
                onClick={toggleMenu}
            >
                <Icon
                    id="listSvg"
                    width={40}
                    height={40}
                    viewBox="0 0 16 16"
                    iconColor="white"
                    iconHover="none"
                />
            </BurgerButton>

            <MobileMenuPopup isOpen={menuIsOpen}>
                <CloseButton onClick={closeMenu}>
                    <Icon
                        id="xSvg"
                        width={40}
                        height={40}
                        viewBox="0 0 16 16"
                        iconColor="white"
                        iconHover="none"
                    />
                </CloseButton>

                <MobileNav>
                    <MobileNavList>
                        {items.map((item) => (
                            <MobileNavItem
                                key={item}
                                onClick={() => {scrollToSection(item.toLowerCase());
                                    closeMenu()}}
                            >
                                {item}
                            </MobileNavItem>
                        ))}
                    </MobileNavList>
                </MobileNav>
            </MobileMenuPopup>
        </MobileMenuWrapper>
    );
}