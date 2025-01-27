"use client"

import { Toast } from "../utils/toast";

const DeleteResultBtn = ({ id }) => {
    const handleDelete = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/student/${id}`, { method: 'DELETE' })
        if (response.ok) {
            const data = await response.json();
            if (data.deletedCount > 0) {
                Toast.fire({
                    icon: 'success',
                    title: "Deleted Succesfully"
                });
            }
            else {
                Toast.fire(
                    {
                        icon: 'error',
                        title: "Result not found"
                    }
                )
            }
        } else {
            Toast.fire(
                {
                    icon: 'error',
                    title: "Error"
                }
            )
        }

    }
    return (
        <button
            onClick={handleDelete}
            className="dark:bg-slate-800 border-red-200 dark:border-slate-700 hover:border-red-400 dark:hover:border-slate-600 text-rose-500 flex px-2 py-1 rounded-md"
        >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
            </svg>
            <span className="ml-2">Delete</span>
        </button>
    );
};

export default DeleteResultBtn;