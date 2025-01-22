// import { getUsers } from "@/Database/actions/user";

import { getResulets } from "@/Database/actions/user";
import ULTableItem from "./ULTableItem";

async function UserList(props) {
    const students = await getResulets()
    console.log(students)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table-auto w-full dark:text-slate-300 ">
                    <thead className="text-xs font-semibold uppercase border-y border-slate-600">
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
                                <div className="font-semibold text-left">Marks</div>
                            </th>

                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                <span className="sr-only">Menu</span>
                            </th>
                        </tr>
                    </thead>

                    <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-700">
                        <ULTableItem />
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserList;