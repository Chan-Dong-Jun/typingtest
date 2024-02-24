import React, { useEffect, useRef, useState } from 'react';
import  "./input.css";

const InputField = () => { 
    
    const isAlphaNumeric = str => /^[a-z0-9 ]+$/i.test(str);

    let correctText = "It as announcing it me stimulated frequently continuing. Least their she you now above going stand forth. He pretty future afraid should genius spirit on. Set property addition building put likewise get. Of will at sell well at as. Too want but tall nay like old. Removing yourself be in answered he. Consider occasion get improved him she eat. Letter by lively oh denote and"
    correctText =  correctText.split(" ").map(e=>e.split(""));
    const [inputText, setInputText] = useState(Array(correctText.length).fill([]));
    const [index, setIndex] = useState(0);
    console.log(index)
    console.log(correctText)
    console.log(inputText)
    const ref = useRef(null)
  

    const handleKeyDown = event => {
        console.log('User pressed: ', event.key);
        
        if (/^[a-z0-9]+$/i.test(event.key) && event.key.length == 1) {
            const newInputTextInnerArray = [...inputText[index], event.key]
            const newInputText = inputText.map((innerList, i)=> {
                if (i == index) {
                    return newInputTextInnerArray;
                } else {
                    return innerList;
                }
            })
        setInputText(newInputText)
        }

        if (event.key == "Backspace") {
            if (inputText[index].length !== 0 ) {
                const newInputTextInnerArray = inputText[index].slice(0, -1);
                const newInputText = inputText.map((innerList, i)=> {
                    if (i == index) {
                        return newInputTextInnerArray;
                    } else {
                        return innerList;
                    }
                })
                setInputText(newInputText);
            } else if (index > 0) {
                setIndex(index => index - 1)
            }
        }

        if (event.key == " ") {    
            if (index < correctText.length - 1) {
                setIndex(index => index + 1)
            }
        }
        
    };

    useEffect(() => {
        ref.current.focus();
      }, []);

    // const renderTextWithStyle = () => {
    //     for inputText[:index+1].map((word, index)

    //     )
    // }
    
    return (
        <>
            <div 
            ref={ref} 
            className="displayText" 
            onKeyDown={handleKeyDown}
            tabIndex={-1}>
                {inputText.map((e) => {
                    return e.join("")
                }
                    ).join(" ")}
            </div>
        </>
    );
};

export default InputField;