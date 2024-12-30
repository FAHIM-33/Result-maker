'use client'

function Sub({ subjectData, inputRef, idx, focusNext, focusPrev, setData }) {
    function handleChange(e) {
        const mark = e.target.value;

        // Update the mark and grade in the data array asdadsfa
        setData((data) => {
            const updatedData = [...data];
            updatedData[idx] = {
                ...updatedData[idx],
                mark: mark,
                grade: getGrade(mark),
                gpa: getGradePoint(mark)
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
        if (number >= 80) return 'A+';
        if (number >= 70) return 'A';
        if (number >= 60) return 'A-';
        if (number >= 50) return 'B';
        if (number >= 40) return 'C';
        if (number >= 33) return 'D';
        return 'F';
    }
    function getGradePoint(num) {
        if (num >= 80) {
            return 5.0; // A+
        } else if (num >= 70) {
            return 4.0; // A
        } else if (num >= 60) {
            return 3.5; // A-
        } else if (num >= 50) {
            return 3.0; // B
        } else if (num >= 40) {
            return 2.0; // C
        } else if (num >= 33) {
            return 1.0; // D
        } else {
            return 0.0; // F
        }
    }
// asdf
    return (
        <div className="max-w-[120px] border rounded-md overflow-hidden">
            <h2
                onClick={() => document.getElementById(subjectData.id).focus()}
                className="font w-full mx-auto text-center py-2"
            >
                {subjectData.title}
            </h2>
            <div className="relative">
                {subjectData.grade && (
                    <p
                        className={`absolute z-10 pt-[2px] right-2 top-1/2 -translate-y-1/2 italic font-bold text-lg ${subjectData.grade === 'F' ? 'bg-red-500 text-white' : 'bg-[#fafafaa1]  text-black'
                            } text-center  rounded-full h-8 w-8`}
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
