import React from 'react';

function ULTableItem(props) {
    return (
        <tr className="">
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                1
            </td>

            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                Abal
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                5.00
            </td>
            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                1289
            </td>

            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                <button
                    className="dark:bg-slate-800 border-red-200 dark:border-slate-700 hover:border-red-400 dark:hover:border-slate-600 text-rose-500 flex px-2 py-1 rounded-md"
                >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                        <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
                    </svg>
                    <span className="ml-2">Delete</span>
                </button>
            </td>
        </tr>
    );
}

export default ULTableItem;