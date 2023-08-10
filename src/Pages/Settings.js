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
    <div className="w-full overflow-x-hidden">
      <div className="px-4 md:px-0">
        <DashboardHeader
          title="Settings"
          subtitle="Manage your team and preferences here."
        />

        <section className="w-full md:mt-52 mt-2 pb-6 border-b">
          <h3 className="text-gray-900 text-xl">Payment method</h3>
          <p className="text-gray-500 text-sm font-light mt-1">
            Manage your team and preferences here.
          </p>
        </section>

        <section className="w-full py-6 border-b flex md:flex-row flex-col">
          <div>
            <h3 className="text-gray-700 text-md">Contact email</h3>
            <p className="text-gray-500 text-md font-light mt-0">
              Where should invoices be sent?
            </p>
          </div>
          <div className="flex-1 md:pl-8 pl-0 md:mt-0 mt-3">
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
              <div className="ml-2 flex-1">
                <h3 className="text-gray-700 text-md -mt-1">
                  Send to my account email
                </h3>
                <PrefixedInput
                  otherClasses="md:w-[400px] w-full"
                  image={mail}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-6 flex  md:flex-row flex-col">
          <div>
            <h3 className="text-gray-700 text-md">Card details</h3>
            <p className="text-gray-500 text-md font-light mt-0">
              Select default payment method.
            </p>
          </div>
          <div className="flex-1 pl-0 md:pl-8 mt-4 md:mt-0 pr-0 md:pr-12">
            <div className="w-full">
              <PaymentMethod />
            </div>
            <p className="text-gray-500 flex cursor-pointer">
              <img src={plus} alt="" className="mr-2" /> Add new payment method
            </p>
          </div>
        </section>
      </div>

      <section className="w-full mt-10 pb-6">
        <div className="w-full flex md:flex-row flex-col justify-between px-4 md:px-0">
          <h3 className="text-gray-900 text-xl md:mb-0 mb-2">
            Billing history
          </h3>
          <button className="border-2 bg-white rounded-lg px-3 py-2 text-sm flex items-center text-gray-700 w-fit">
            {" "}
            <img src={cloud} alt="" className="mr-2" /> Download all
          </button>
        </div>
        <AppTable />
      </section>
    </div>
  );
}

export default Settings;
