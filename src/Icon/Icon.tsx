import sprite from "../assets/images/code.svg";

type IconProps = {
    id: string;
    width: number;
    height: number;
};

export const Icon = ({id, width = 50, height = 50}: IconProps) => {
    return (
        <svg width={width} height={height}>
            <use href={`${sprite}#${id}`}/>
        </svg>
    );
};
