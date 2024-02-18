import React from 'react';
import { useState } from 'react';
import  "./input.css";

const InputField = () => {

    let inputText = ""
    let sampleText = "It as announcing it me stimulated frequently continuing. Least their she you now above going stand forth. He pretty future afraid should genius spirit on. Set property addition building put likewise get. Of will at sell well at as. Too want but tall nay like old. Removing yourself be in answered he. Consider occasion get improved him she eat. Letter by lively oh denote and"
    const [texts, setTexts] = useState({inputText, sampleText});

    return (
        <>
            <div className="displayText" onChange={}>{texts.inputText}{texts.sampleText}</div>
        </>
    );
};

export default InputField;