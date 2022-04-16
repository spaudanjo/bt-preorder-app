import React from "react"; 
import I18n from "./I18n";


interface NavigationBarProps {
    onClickBack: () => void;
    canGoBack: boolean;
}

const NavigationBar = ({onClickBack, canGoBack}: NavigationBarProps) => {
    return (
        <div>
            <button disabled={!canGoBack} onClick={onClickBack}><I18n k="navigationBar.back" /></button>
        </div>
    )
};

export default NavigationBar;