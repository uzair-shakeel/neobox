import React from "react";
import Sidebar from "../../components/Sidebar";
import { BiBell, BiChevronDown } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa";
import { CgLayoutGrid } from "react-icons/cg";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Hello, Marc!</h2>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Open Site
          </button>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6 flex justify-between items-center">
          <div className="flex items-center">
            <CgLayoutGrid className="text-green-500 mr-2" />
            <span>Learn how to set up your store step by step.</span>
          </div>
          <a href="#" className="text-green-600 hover:underline">
            Learn more →
          </a>
        </div>

        <h3 className="text-xl font-semibold mb-4">Welcome to Neobox 👋</h3>
        <p className="text-gray-600 mb-6">
          A quick guide to getting your first sale
        </p>

        <div className="bg-purple-50 border border-purple-200 rounded-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <CgLayoutGrid className="text-purple-500 mr-2" />
              <div>
                <h4 className="font-semibold">Stock your store</h4>
                <p className="text-sm text-gray-600">
                  Let's get started. Add your products & Categories.
                </p>
              </div>
            </div>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-md border border-purple-200">
              Set Up →
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaDollarSign className="text-purple-500 mr-2" />
              <div>
                <h4 className="font-semibold">
                  Set up your withdrawal methods to receive payments.
                </h4>
                <p className="text-sm text-gray-600">
                  Let's get started, tell about you and your shop
                </p>
              </div>
            </div>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-md border border-purple-200">
              Set Up →
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Overview performance</h3>
          <div className="flex space-x-2">
            <button className="bg-gray-200 px-3 py-1 rounded-md text-sm">
              Day
            </button>
            <button className="bg-gray-200 px-3 py-1 rounded-md text-sm">
              Week
            </button>
            <button className="bg-gray-200 px-3 py-1 rounded-md text-sm">
              Month
            </button>
            <button className="bg-gray-200 px-3 py-1 rounded-md text-sm">
              Year
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h4 className="text-gray-500 mb-2">Total Views</h4>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-500">From last 732 (last 7 days)</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h4 className="text-gray-500 mb-2">Visits</h4>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-500">From last 732 (last 7 days)</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h4 className="text-gray-500 mb-2">Orders</h4>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-500">From last 124 (last 7 days)</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h4 className="text-gray-500 mb-2">Conversion Rate</h4>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-500">From last 732 (last 7 days)</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Revenue</h3>
          <div className="flex items-center">
            <span className="mr-2">Last Year</span>
            <BiChevronDown size={16} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-md shadow-sm mb-6">
          <h4 className="text-gray-500 mb-2">Total Revenue</h4>
          <p className="text-3xl font-bold">$0</p>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Products</h3>
          <a href="#" className="text-blue-600 hover:underline">
            See All →
          </a>
        </div>

        <div className="bg-white p-6 rounded-md shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold">Active listings</h4>
            <span className="text-2xl font-bold">0</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold">Hidden listings</h4>
            <span className="text-2xl font-bold">0</span>
          </div>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">Sold out</h4>
            <span className="text-2xl font-bold">0</span>
          </div>
        </div>
      </main>

      {/* Chat Button */}
      <button className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg">
        <BiBell size={24} />
      </button>
    </div>
  );
}
