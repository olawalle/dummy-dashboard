import React, { useState } from "react";
import AvatarGroup from "../avatar-group/AvatarGroup";

import cloud from "../../assets/download-cloud.svg";
import check from "../../assets/check-green.svg";

function AppTable(props) {
  const [checkAll, setCheckAll] = useState(false);

  return (
    <table className="w-full rounded-xl mt-6 overflow-hidden shadow">
      <thead className="bg-gray-100 text-[12px] font-semibold">
        <tr className="text-left">
          <th className="text-gray-500 text-sm font-medium px-4 py-2">
            <input
              onChange={(e) => setCheckAll(e.target.checked)}
              type="checkbox"
              className="bg-white border border-gray-300 text-purple-500 focus:ring-purple-200 mr-2 rounded-md"
            />
            Invoice
          </th>
          <th className="text-gray-500 text-sm font-medium px-4 py-2">
            Amount
          </th>
          <th className="text-gray-500 text-sm font-medium px-4 py-2">Date</th>
          <th className="text-gray-500 text-sm font-medium px-4 py-2">
            Status
          </th>
          <th className="text-gray-500 text-sm font-medium px-4 py-2">
            Users on plan
          </th>
          <th className="w-12"></th>
        </tr>
      </thead>
      <tbody>
        {Array.from({
          length: 10,
        }).map((x, n) => (
          <tr className="border-b text-[14px]" key={n}>
            <td className=" px-4 py-4 text-gray-900 flex items-center">
              <input
                checked={checkAll}
                onChange={(e) => null}
                type="checkbox"
                className="bg-white border border-gray-300 text-purple-500 focus:ring-purple-200 mr-2 rounded-md"
              />
              Basic Plan – Nov 2022
            </td>
            <td className=" px-4 py-2 text-gray-500 font-light">$100</td>
            <td className=" px-4 py-2 text-gray-500 font-light">Dec 1, 2022</td>
            <td className=" px-4 py-2">
              <div className="bg-green-100 text-green-800 flex px-3 py-1 rounded-3xl w-fit text-[12px]">
                <img src={check} alt="" className="w-4" />
                <span className="ml-2">Paid</span>
              </div>
            </td>
            <td className=" px-4 py-2">
              <div className="flex -space-x-1 overflow-hidden">
                <AvatarGroup
                  avatars={Array.from({
                    length: n,
                  })}
                />
              </div>
            </td>
            <td className="w-12 px-4 py-2">
              <img src={cloud} alt="" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AppTable;
