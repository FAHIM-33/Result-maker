'use client'

function Sub({ subjectData, inputRef, idx, focusNext, focusPrev, setData }) {
    function handleChange(e) {
        const mark = e.target.value;

        // Update the mark and grade in the data array
        setData((data) => {
            const updatedData = [...data];
            updatedData[idx] = {
                ...updatedData[idx],
                mark: mark,
                grade: getGrade(mark),
            };
            return updatedData;
        });

        if (/^\d{0,2}$/.test(mark)) {
            document.getElementById(subjectData.id).style.background = '';
            if (mark.length === 2) {
                focusNext(idx);
            }
        } else {
            document.getElementById(subjectData.id).style.background = 'red';
        }
    }

    function handleKeydown(e) {
        if (e.key === 'Backspace') {
            if (e.target.value === '') {
                focusPrev(idx);
            }
        }
    }

    function getGrade(num) {
        const number = parseInt(num, 10);
        if (isNaN(number)) return '';
        if (number >= 80) return 'A+';
        if (number >= 70) return 'A';
        if (number >= 60) return 'A-';
        if (number >= 50) return 'B';
        if (number >= 40) return 'C';
        if (number >= 33) return 'D';
        return 'F';
    }

    return (
        <div className="w-[150px] border rounded-md overflow-hidden">
            <h2
                onClick={() => document.getElementById(subjectData.id).focus()}
                className="font-bold w-full mx-auto text-center text-lg py-2 text-nowrap"
            >
                {subjectData.title}
            </h2>
            <div className="relative">
                {subjectData.grade && (
                    <p
                        className={`absolute z-10 right-2 top-1/2 -translate-y-1/2 italic font-bold text-lg text-black ${
                            subjectData.grade === 'F' ? 'text-red-500' : ''
                        } text-center bg-[#fafafa67] rounded-full h-8 w-8`}
                    >
                        {subjectData.grade}
                    </p>
                )}
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
