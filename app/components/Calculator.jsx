"use client"
import Swal from 'sweetalert2/dist/sweetalert2.js';
import '@sweetalert2/theme-dark/dark.css'

import Sub from "./Sub";
import { useCallback, useEffect, useRef, useState } from "react";
import { calculateSizeAdjustValues } from 'next/dist/server/font-utils';
const subjects = [
    { id: 1, name: 'bangla', title: 'বাংলা', mark: '', gpa: '', grade: '' },
    { id: 2, name: 'english', title: 'English', mark: '', gpa: '', grade: '' },
    { id: 4, name: 'math', title: 'Math', mark: '', gpa: '', grade: '' },
    { id: 3, name: 'science', title: 'Science', mark: '', gpa: '', grade: '' },
    { id: 5, name: 'history', title: 'ইতিহাস', mark: '', gpa: '', grade: '' },
    { id: 6, name: 'religion', title: 'ধর্ম', mark: '', gpa: '', grade: '' },
    { id: 7, name: 'ict', title: 'ডিজিটাল প্রযুক্তি', mark: '', gpa: '', grade: '' },
    { id: 8, name: 'health', title: 'স্বাস্থ্য সুরক্ষা', mark: '', gpa: '', grade: '' },
    { id: 9, name: 'life', title: 'জীবন ও জীবিকা', mark: '', gpa: '', grade: '' },
    { id: 10, name: 'art', title: 'শিল্প ও সংস্কৃতি', mark: '', gpa: '', grade: '' },
]

function Calculator(props) {
    const inputRefs = useRef([])
    const [data, setData] = useState(subjects)
    const [total, setTotal] = useState(0)
    const [gpa, setGpa] = useState(0)
    const [valid, setValid] = useState(false)
    const [student, setStudent] = useState('')


    function clearAll() {
        const inputs = document.getElementsByTagName('input')
        Object.values(inputs).map(elem => elem.value = '')
        setData(subjects)
        setTotal(0)
        setValid(false)
        document.getElementsByClassName('mark-input')[0].focus()
    }

    const focusNext = (currentIdx) => {
        if (currentIdx < inputRefs.current.length - 1) {
            inputRefs.current[currentIdx + 1].focus()
        }
    }
    const focusPrev = (currentIdx) => {
        if (currentIdx !== 0) {
            inputRefs.current[currentIdx - 1].focus()
        }
    }


    const cal = useCallback(() => {
        const a = data.reduce((acc, curr) => {
            return acc + (parseInt(curr.mark) || 0);
        }, 0);

        const points = data.reduce((acc, curr) => {
            console.log(curr.gpa);
            return acc + (parseFloat(curr.gpa));
        }, 0);
        setTotal(a);
        setGpa(points / data.length)
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [data]);

    useEffect(() => {
        const valiidity = data.every(sub => sub.mark !== '' && !isNaN(sub.mark * 1))
        setValid(valiidity)
    }, [data])


    useEffect(() => {
        const handleEnterKey = (e) => {
            if (e.key === 'Enter') {
                if (valid) {
                    cal()
                } else { alert('Enter all values correctly') }
            }
            if (e.key === 'Escape') {
                clearAll()
            }
        };
        document.addEventListener('keydown', handleEnterKey)
        return () => { document.removeEventListener('keydown', handleEnterKey) }
    }, [cal, valid])

    function shit() {
        Swal.fire({
            title: `Save result for <span class='text-red-400'>${student}</span>?`,
            text: 'No tention. পরে delete করতে পারবা. ভাইপুত বলে কথা...',
            showDenyButton: true,
            // showCancelButton: true,
            html: `
            <div id="results" class="my-4 flex justify-center gap-8 w-full lg:mt-10">
                        <p class="text-2xl">Total <span class="text-green-500">${total}</span></p>
                        <p class="text-2xl">GPA <span class="text-green-500">${gpa.toFixed(2)}</span></p>
                        ${data.filter(s => s.grade === 'F').length > 0 ?
                    `<p class="text-2xl text-red-500">Failed</p>`
                    :
                    ''
                }
                    </div>
    
  `,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }

    console.log(student)

    return (
        <div>
            <input
                onChange={(e) => setStudent(e.target.value)}
                value={student}
                type="text"
                name="name"
                placeholder="Name"
                className="bg-black border rounded-md outline-none p-2 w-1/2 mb-8"
            />
            <div className="flex flex-col justify-start items-start lg:items-center lg:justify-center p-2">
                <div className="grid  grid-cols-3 lg:flex lg:flex-wrap lg:grid-cols-none justify-center gap-3 t-container lg:mt-0 mx-auto">
                    {data?.map((s, idx) => (
                        <Sub
                            key={s.id}
                            idx={idx}
                            subjectData={s}
                            inputRef={(el) => (inputRefs.current[idx] = el)}
                            focusNext={focusNext}
                            focusPrev={focusPrev}
                            setData={setData}
                        />
                    ))}
                </div>

                {/* {
                total !== 0 ?
                    <div id="results" className="my-4 flex justify-center gap-8 w-full lg:mt-10">
                        <p className="text-2xl">Total <span className="text-green-500">{total}</span></p>
                        <p className="text-2xl">GPA <span className="text-green-500">{gpa.toFixed(2)}</span></p>
                        {data.filter(s => s.grade === 'F').length > 0 &&
                            <p className="text-2xl">Fail count <span className="text-red-500">{data.filter(s => s.grade === 'F').length}</span></p>
                        }

                    </div>
                    :
                    <></>
            } */}

                <div className="flex gap-4 w-full mt-4 container lg:w-[800px] lg:mt-10 mx-auto">
                    <button
                        className="border border-red-500 rounded-md px-4 py-2 hover:text-red-500 active:bg-red-500 active:text-white w-full block"
                        onClick={clearAll}
                    >Clear All</button>
                    <button
                        onClick={cal}
                        className={`border rounded-md px-4 py-2 ${valid ? 'border-green-500 hover:text-green-400 active:bg-green-500' : 'border-gray-500 hover:text-gray-400 active:bg-gray-500 pointer-events-none'}  active:text-white w-full block ${valid ? 'opacity-100' : 'opacity-50'}`}
                    >
                        Calculate
                    </button>
                    <button onClick={shit}>fire</button>
                </div>

            </div>
        </div>
    );
}

export default Calculator;