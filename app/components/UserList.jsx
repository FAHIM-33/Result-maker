import ULTableItem from "./ULTableItem";

function UserList({ students }) {

    students.sort((a, b) => parseInt(b.mark) - parseInt(a.mark))

    return (
        <div>
            <div className="overflow-x-auto  mr-6">
                <table className="table-auto w-full dark:text-slate-300 ">
                    <thead className="text-xs font-semibold uppercase border-y border-slate-600 bg-slate-900">
                        <tr>
                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                <div className="font-semibold text-left">Rank</div>
                            </th>
                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                <div className="font-semibold text-left">Name</div>
                            </th>
                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                <div className="font-semibold text-left">GPA</div>
                            </th>

                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                <div className="font-semibold text-center">Marks</div>
                            </th>

                            <th className="py-3 whitespace-nowrap  md:text-end">
                                Menu
                            </th>
                        </tr>
                    </thead>

                    <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-700">
                        {
                            students?.map((item,idx) =>
                                <ULTableItem idx={idx} student={item} key={item._id} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserList;