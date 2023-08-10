import React, { useState } from "react";
import DashboardHeader from "../components/dashboard/dashboard-header/DashboardHeader";
import PrefixedInput from "../components/prefixed-input/PrefixedInput";
import PaymentMethod from "../components/payment-method/PaymentMethod";
import AppTable from "../components/app-table/AppTable";

import mail from "../assets/mail.svg";
import plus from "../assets/plus.svg";
import cloud from "../assets/download-cloud.svg";

function Settings(props) {
  return (
    <>
      <DashboardHeader
        title="Settings"
        subtitle="Manage your team and preferences here."
      />

      <section className="w-full mt-52 pb-6 border-b">
        <h3 className="text-gray-900 text-xl">Payment method</h3>
        <p className="text-gray-500 text-sm font-light mt-1">
          Manage your team and preferences here.
        </p>
      </section>

      <section className="w-full py-6 border-b flex">
        <div>
          <h3 className="text-gray-700 text-md">Contact email</h3>
          <p className="text-gray-500 text-md font-light mt-0">
            Where should invoices be sent?
          </p>
        </div>
        <div className="flex-1 pl-8">
          <div className="items-start flex">
            <input
              type="radio"
              name=""
              id=""
              className="bg-white border border-gray-300 text-purple-500 focus:ring-purple-200"
            />
            <div className="ml-2">
              <h3 className="text-gray-700 text-md -mt-1">
                Send to my account email
              </h3>
              <p className="text-gray-500 text-md font-light mt-0">
                olivia@untitledui.com
              </p>
            </div>
          </div>
          <div className="items-start flex mt-4">
            <input
              type="radio"
              name=""
              id=""
              className="bg-white border border-gray-300 text-purple-500 focus:ring-purple-200"
            />
            <div className="ml-2">
              <h3 className="text-gray-700 text-md -mt-1">
                Send to my account email
              </h3>
              <PrefixedInput styles={{ width: 400 }} image={mail} />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-6 flex">
        <div>
          <h3 className="text-gray-700 text-md">Card details</h3>
          <p className="text-gray-500 text-md font-light mt-0">
            Select default payment method.
          </p>
        </div>
        <div className="flex-1 pl-8 pr-12">
          <div className="w-full">
            <PaymentMethod />
          </div>
          <p className="text-gray-500 flex cursor-pointer">
            <img src={plus} alt="" className="mr-2" /> Add new payment method
          </p>
        </div>
      </section>

      <section className="w-full mt-10 pb-6">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-gray-900 text-xl">Billing history</h3>
          <button className="border-2 bg-white rounded-lg px-3 py-2 text-sm flex items-center text-gray-700">
            {" "}
            <img src={cloud} alt="" className="mr-2" /> Download all
          </button>
        </div>
        <AppTable />
      </section>
    </>
  );
}

export default Settings;
