
import React from 'react';
import DeleteResultBtn from './DeleteResultBtn';
// 
function ULTableItem({ student }) {

    return (
        <tr className="">
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                1
            </td>

            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                {student?.name}
            </td>
            <td className={`px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ${student.gpa === '0.0' ? 'text-red-500' : ''}`}>
                {student?.gpa}
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                {student?.mark}
            </td>

            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                <DeleteResultBtn id={student._id}></DeleteResultBtn>
            </td>
        </tr>
    );
}

export default ULTableItem;