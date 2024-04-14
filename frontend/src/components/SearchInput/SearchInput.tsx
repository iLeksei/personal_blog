import React, {ReactElement} from "react";

export const SearchInput = (): ReactElement => {
    return (
        <div className="SearchInput__container">
            <input
                id="search-input"
                placeholder="search..."
            />
        </div>
    );
}