'use client'

import { useState } from "react"

function Sub({ subjectData, inputRef, idx, focusNext, focusPrev, setData }) {
    const [grade, setGrade] = useState('')

    function handleChange(e) {
        const mark = e.target.value

        subjectData.mark = mark

        if (/^\d{0,2}$/.test(mark)) {
            setGrade(getGrade(mark))
            setData((sub) => {
                const newArr = [...sub]
                newArr[idx] = subjectData
                return newArr
            })

            document.getElementById(subjectData.id).style.background = ''
            if (mark.length === 2) {
                focusNext(idx);
            }
        } else {
            document.getElementById(subjectData.id).style.background = 'red'
        }
    }

    function handleKeydown(e) {
        if (e.key === 'Backspace') {
            if (e.target.value === '') {
                focusPrev(idx)
            }
        }
    }

    function getGrade(num) {
        if (num >= 80) {
            return "A+";
        } else if (num >= 70) {
            return "A";
        } else if (num >= 60) {
            return "A-";
        } else if (num >= 50) {
            return "B";
        } else if (num >= 40) {
            return "C";
        } else if (num >= 33) {
            return "D";
        } else {
            return "F";
        }
    }


    return (
        <div
            className="w-[150px]  border rounded-md overflow-hidden">
            <h2
                onClick={() => { document.getElementById(subjectData.id).focus() }}
                className="font-bold w-full mx-auto text-center text-lg py-2 text-nowrap">{subjectData.title}
            </h2>
            <div className="relative">{
                grade &&
                <p className={`absolute z-10 right-2 top-1/2 -translate-y-1/2 italic font-bold text-lg text-black ${grade === 'F' ? "text-red-500" : ''} text-center bg-[#fafafa67] rounded-full h-8 w-8`}>{grade}</p>
            }
                <input
                    className="w-full text-xl p-1 mx-auto"
                    id={subjectData.id}
                    name={subjectData.name}
                    type="text"
                    inputMode="numeric"
                    maxLength={2}
                    onChange={handleChange}
                    onKeyDown={handleKeydown}
                    ref={inputRef}
                />
            </div>

        </div>

    );
}

export default Sub;