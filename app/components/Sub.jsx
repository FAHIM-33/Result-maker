'use client';

function Sub({ subjectData, inputRef, idx, focusNext, focusPrev, setData, grades, setGrades }) {
  function handleChange(e) {
    const mark = e.target.value;

    subjectData.mark = mark;

    if (/^\d{0,2}$/.test(mark)) {
      const grade = getGrade(mark);
      setGrades((prevGrades) => ({ ...prevGrades, [subjectData.id]: grade })); // Update grade
      setData((sub) => {
        const newArr = [...sub];
        newArr[idx] = subjectData;
        return newArr;
      });

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
    if (num >= 80) return 'A+';
    if (num >= 70) return 'A';
    if (num >= 60) return 'A-';
    if (num >= 50) return 'B';
    if (num >= 40) return 'C';
    if (num >= 33) return 'D';
    return 'F';
  }

  return (
    <div className="w-[150px] border rounded-md overflow-hidden">
      <h2
        onClick={() => {
          document.getElementById(subjectData.id).focus();
        }}
        className="font-bold w-full mx-auto text-center text-lg py-2 text-nowrap"
      >
        {subjectData.title}
      </h2>
      <div className="relative">
        {grades[subjectData.id] && (
          <p
            className={`absolute z-10 right-2 top-1/2 -translate-y-1/2 italic font-bold text-lg text-black ${
              grades[subjectData.id] === 'F' ? 'text-red-500' : ''
            } text-center bg-[#fafafa67] rounded-full h-8 w-8`}
          >
            {grades[subjectData.id]}
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
