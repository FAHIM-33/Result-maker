"use client"
function DelBtn({ id }) {

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
            className="text-rose-500 bg-slate-800 px-2 py-1 rounded"
        >
            Delete
        </button>
    );
}

export default DelBtn;