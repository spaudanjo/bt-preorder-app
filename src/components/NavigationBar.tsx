import React from "react"; 


interface NavigationBarProps {
    onClickBack: () => void;
    canGoBack: boolean;
}

const NavigationBar = ({onClickBack, canGoBack}: NavigationBarProps) => {
    return (
        <div>
            <button disabled={!canGoBack} onClick={onClickBack}>Back</button>
        </div>
    )
};

export default NavigationBar;