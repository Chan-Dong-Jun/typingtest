import React, { useEffect, useRef, useState } from 'react';
import  "./input.css";

const InputField = () => { 
    
    const isAlphaNumeric = str => /^[a-z0-9 ]+$/i.test(str);

    let inputText = "hello"
    let sampleText = "It as announcing it me stimulated frequently continuing. Least their she you now above going stand forth. He pretty future afraid should genius spirit on. Set property addition building put likewise get. Of will at sell well at as. Too want but tall nay like old. Removing yourself be in answered he. Consider occasion get improved him she eat. Letter by lively oh denote and"
    const [texts, setTexts] = useState([inputText, sampleText]);
    const [index, setIndex] = useState(0);

    const ref = useRef(null)
    console.log(index)
    const handleKeyDown = event => {
        console.log('User pressed: ', event.key);
        
        if (isAlphaNumeric(event.key) && event.key.length == 1) {
            let newInputText = texts[0] + event.key
            let newSampleText = texts[1].substring(1)
            setTexts([newInputText, newSampleText])

            setIndex(index+1)
        
        }

        if (event.key == "Backspace") {
            let newInputText = texts[0].slice(0, -1)
            setTexts([newInputText, texts[1]])
            
            if (index > 0) {
            setIndex(index-1)
            }
        }
      };

    useEffect(() => {
        ref.current.focus();
      }, []);

    return (
        <>
            <div 
            ref={ref} 
            className="displayText" 
            onKeyDown={handleKeyDown}
            tabIndex={-1}>{texts[0]}</div>
            <div>
            {texts[1]}
            </div>
        </>
    );
};

export default InputField;