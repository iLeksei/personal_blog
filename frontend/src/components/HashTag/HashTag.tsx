import React, {ReactElement} from "react";

import "./HashTag.css";

interface IProps {
    name: string,
    onClick: () => void,
}

export const HashTag = (props: IProps): ReactElement => {
    return (
        <button id={`hash-tag-${props.name}`} className="hash-tag" onClick={props.onClick} aria-label="hash-tag">
            {`#${props.name}`}
        </button>
    );
}