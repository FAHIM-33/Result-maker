"use client"
import Sub from "./components/Sub";
import { useRef } from "react";

export default function Home() {
  const inputRefs = useRef([])

  const subjects = [
    { id: 1, name: 'bangla', title: 'Bangla', mark: '' },
    { id: 2, name: 'english', title: 'English', mark: '' },
    { id: 3, name: 'sci', title: 'Science', mark: '' },
    { id: 4, name: 'math', title: 'গণিত', mark: '' },
  ]

  function clearAll() {
    const inputs = document.getElementsByTagName('input')
    Object.values(inputs).map(elem => elem.value = '')
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


  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="border border-foreground flex t-container">
        {
          subjects.map((s, idx) =>
            <Sub
              key={s.id}
              idx={idx}
              data={s}
              inputRef={(el) => (inputRefs.current[idx] = el)}
              focusNext={focusNext}
              focusPrev={focusPrev}
            />
          )
        }
      </div>
      <button
        className="border border-red-500 rounded-md px-4 py-2 mt-12 hover:text-red-500 active:bg-red-500 active:text-white"
        onClick={clearAll}
      >Clear All</button>
    </div>
  );
}
