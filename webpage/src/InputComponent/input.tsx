import React, { useEffect, useRef, useState } from 'react';
import  "./input.css";

const InputField = () => { 
    
    const isAlphaNumeric = str => /^[a-z0-9 ]+$/i.test(str);

    let correctText = "It as announcing it me stimulated frequently continuing. Least their she you now above going stand forth. He pretty future afraid should genius spirit on. Set property addition building put likewise get. Of will at sell well at as. Too want but tall nay like old. Removing yourself be in answered he. Consider occasion get improved him she eat. Letter by lively oh denote and"
    //correctText = correctText.split(" ").map(e=>e.split(""));
    correctText = correctText.split(" ").map(e => [...e, " "]);

    const [inputText, setInputText] = useState(Array(correctText.length).fill([]));
    const [index, setIndex] = useState(0);
    // console.log(index)
    // console.log(correctText)
    console.log(inputText)
    const ref = useRef(null)
    
 
    // const renderRemainingText = () => {
    //     return correctText.map((word, indexOuter) => {
    //         if (indexOuter >= index) {
    //             return word.map((char, indexInner) => {
    //                 if (indexOuter === index && indexInner >= inputText[index].length || indexOuter > index) {
    //                     return <span style={{ color: 'black' }}>{char}</span>;
    //                 }
    //             })
    //         }
    //     })
    // }

    

    // const renderTextWithStyle = () => {
    //     return inputText.map((word, indexOuter) => {
    //         return word.map((char, indexInner) => {
    //             let charColour;
    //             if (indexOuter >= correctText.length || indexInner >= correctText[indexOuter].length) {
    //                 charColour = "red";
    //             } else if (correctText[indexOuter][indexInner] === char) {
    //                 charColour = "green";
    //             } else {
    //                 charColour = "red";
    //             }
    //             // Generate a unique key for each span element, not sure too
    //             const key = `${indexOuter}-${indexInner}`;
    //             if (char === " ") {
    //                 // nto sure why nbsp causes it to not collapse 
    //                 return <span key={key} style={{ backgroundColor: charColour }}>&nbsp;</span>;
    //             } else {
    //                 return <span key={key} style={{ color: charColour }}>{char}</span>;
    //             }   
                
    //         }) 
    //     })
    // }
    
    const renderText = () => {
        return correctText.map((word, indexOuter) => {
            return word.map((char, indexInner) => {
                let charColour = "grey"; 
                if (indexOuter <= inputText.length-1 && indexInner <= inputText[indexOuter].length-1 && correctText[indexOuter][indexInner] !== inputText[indexOuter][indexInner]) {
                    console.log(indexOuter)
                    console.log(indexInner)
                    charColour = "red";
                } else if (indexOuter <= inputText.length && indexInner <= inputText[indexOuter].length && correctText[indexOuter][indexInner] === inputText[indexOuter][indexInner]) {
                    charColour = "green";
                }
               
                // Generate a unique key for each span element, not sure too
                const key = `${indexOuter}-${indexInner}`;
                if (char === " ") {
                    // nto sure why nbsp causes it to not collapse 
                    return <span key={key} style={{ backgroundColor: 'transparent'}}>&nbsp;</span>;
                } else {
                    return <span key={key} style={{ color: charColour }}>{char}</span>;
                }   
            })
        })
    }
    

    const handleKeyDown = event => {
        console.log('User pressed: ', event.key);
        
        if (/^[a-z0-9.,]+$/i.test(event.key) && event.key.length == 1) {
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
            } 
            if (index > 0 && inputText[index].length == 0) {
                setIndex(index => index - 1)
                //setInputText(inputText)
                const newInputTextInnerArray = inputText[index-1].slice(0, -1);
                const newInputText = inputText.map((innerList, i)=> {
                    if (i == index-1) {
                        return newInputTextInnerArray;
                    } else {
                        return innerList;
                    }
                })
                setInputText(newInputText);
            }
        }

        if (event.key == " ") {    
            console.log(inputText[index].lenght)
            console.log(correctText[index].length)
            if (index < correctText.length - 1 && inputText[index].length === correctText[index].length - 1) {
                const newInputText = inputText.map((word,i) => {
                    if (index == i) {
                        return [...word, " "]
                    } else {
                        return word;
                    }
                })
                setInputText(newInputText);
                setIndex(index => index + 1);
            } else {
                const newInputText = inputText.map((word,i) => {
                    if (index == i) {
                        return [...word, " "]
                    } else {
                        return word;
                    }
                })
                setInputText(newInputText);
            }
            // if (inputText[index].length == correctText[index].length) {
            //     setIndex(index => index + 1);
            // }
        }
    };

    useEffect(() => {
        ref.current.focus();
      }, []);


    return (
        <>
            <div
            className='textBox'
            ref={ref}  
            onKeyDown={handleKeyDown}
            tabIndex={-1}>
                {/* {renderTextWithStyle()}
                {renderRemainingText()} */}
                {renderText()}
                {/* {inputText.map((e) => {
                    return e.join("")
                }
                    ).join(" ")} */}
            </div>
        </>
    );
};

export default InputField;