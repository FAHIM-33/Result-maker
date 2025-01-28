
import React from 'react';
import DeleteResultBtn from './DeleteResultBtn';
import Link from 'next/link';
// 
function ULTableItem({ student, idx }) {

    return (
        <tr className="">
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                {idx + 1}
            </td>

            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                {student?.name}
            </td>
            <td className={`px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ${student.gpa === '0.0' ? 'text-red-500' : ''}`}>
                {student?.gpa}
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-center min-w-[100px]">
                {student?.mark}
            </td>

            <td className="px-2 -ml-6 py-3 whitespace-nowrap ">
                <div className='flex gap-2 justify-end text-end'>
                <DeleteResultBtn id={student._id}></DeleteResultBtn>
                <Link href={`/all-users/${student._id}`}>
                    <button className='bg-slate-800 text-emerald-400 rounded-sm px-2 py-1'>View</button>
                </Link>
                </div>
            </td>
        </tr >
    );
}

export default ULTableItem;