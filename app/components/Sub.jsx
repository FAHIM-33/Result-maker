'use client'
import { useRef, useState } from "react";

function Sub({ data, inputRef, idx, focusNext, focusPrev }) {
    const [value, setValue] = useState(0)

    function handleChange(e) {
        const mark = e.target.value
        if (/^\d{0,2}$/.test(mark)) {
            setValue(mark);
            if (mark.length === 2) {
                document.getElementById(data.id).style.background = ''    
                focusNext(idx);
            }
        } else {
            document.getElementById(data.id).style.background = 'red'
        }
    }

    function handleKeydown(e) {
        if (e.key === 'Backspace') {
            if (e.target.value === '') {
                focusPrev(idx)
            }
        }
    }

    return (
        <div className=" w-fit">
            <h2 className="font-bold text-center text-lg py-2">{data.title}</h2>
            <input
                id={data.id}
                type="text"
                className="w-full text-2xl p-1"
                inputMode="numeric"
                maxLength={2}
                onChange={handleChange}
                onKeyDown={handleKeydown}
                ref={inputRef}
            />
        </div>
    );
}

export default Sub;