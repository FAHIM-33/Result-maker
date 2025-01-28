import React from 'react';
import DelBtn from './DelBtn';

async function SingleResultPage({ params }) {
    const { id } = params

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/student/all`, { cache: "no-store", });

    let students = [];

    if (response.ok) {
        students = await response.json();
    } else {
        console.error("Failed to fetch result");
    }

    const student = students?.find(obj => obj._id === id)



    return (
        <div>
            <div className='flex  lg:mt-12 mt-8 mb-4 justify-between px-4'>
                <h1 className="text-2xl  capitalize "><span className='text-emerald-400'>{student?.name}</span>&apos;s result :</h1>
                <DelBtn id={id}></DelBtn>
            </div>

            <table className="table-auto w-full dark:text-slate-300 ">
                <thead className="text-xs font-semibold uppercase border-y border-slate-600 bg-slate-900">
                    <tr>
                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                            <div className="font-semibold text-left">Subject</div>
                        </th>
                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                            <div className="font-semibold text-left">Grade</div>
                        </th>
                        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                            <div className="font-semibold text-left">GPA</div>
                        </th>

                        <th className="px-2  py-3 whitespace-nowrap">
                            <div className="font-semibold text-center">Marks</div>
                        </th>
                    </tr>
                </thead>

                <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-700">
                    {
                        student?.subjects?.map(sub =>
                            <tr key={sub.name} className={sub.grade === 'F' ? "bg-red-500/20" : ''}>
                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    {sub.title}
                                </td>

                                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                    {sub.grade}
                                </td>
                                <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                                    {sub?.gpa}
                                </td>
                                <td className="px-2 py-3 whitespace-nowrap text-center">
                                    {sub?.mark}
                                </td>
                            </tr >
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default SingleResultPage;