import sprite from "../../assets/images/FrameSprite.svg"
import styled from "styled-components";

type FrameProps =
 {
    id: string;
    viewBox: string;
};

export const Frame = ({id,viewBox}: FrameProps) => {
    return (
        <FrameSvg viewBox={viewBox} preserveAspectRatio="xMidYMid meet">
            <use href={`${sprite}#${id}`}/>  {/*на старых браузерах все равно потребуется xlinkHref*/}
        </FrameSvg>
    );
};

export const FrameSvg = styled.svg `
    width: 100%;
    height: auto;
    display: block;
;`