export const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    let blockPosition: ScrollLogicalPosition = "center";

    if (id == "projects") blockPosition = "start";

    el.scrollIntoView({
        behavior: "smooth",
        block: blockPosition,
    })
};