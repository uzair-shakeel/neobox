import React from "react";
import {
  BiBell,
  BiChevronDown,
  BiHome,
  BiLogOut,
  BiShoppingBag,
  BiStore,
} from "react-icons/bi";
import { CgLayoutGrid } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { FaDollarSign, FaUserSecret } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-272px] bg-[#F4F4F5] border-r px-[12px] py-[16px]">
      <div className="px-[8px] border-b">
        <h1 className="text-xl font-semibold">Neobox</h1>
      </div>
      <div className="mt-[30px] border-b">
        <div className="px-[13px] py-[14px] bg-white flex items-center justify-between">
          <span className="flex items-center gap-[8px]">
            <BiStore size={20} /> Mob Shop
          </span>
          <BiChevronDown size={16} />
        </div>
      </div>
      <nav className="mt-[16px]">
        <span>Menu</span>
        <ul className="">
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:bg-white rounded p-2"
            >
              <BiHome size={18} className="mr-2" /> Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:bg-white rounded p-2"
            >
              <CgLayoutGrid size={18} className="mr-2" /> Catalog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:bg-white rounded p-2"
            >
              <FaDollarSign size={18} className="mr-2" /> Finances
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:bg-white rounded p-2"
            >
              <FaUserSecret size={18} className="mr-2" /> Customers
            </a>
          </li>
          <li>
            <div className="flex items-center justify-between text-gray-700 hover:bg-white rounded p-2">
              <span className="flex items-center">
                <BiShoppingBag size={18} className="mr-2" /> Sales Channels
              </span>
              <BiChevronDown size={16} />
            </div>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-[16px] border-t">
        <div className="flex items-center">
          <img
            src="/placeholder.svg?height=40&width=40"
            alt="User"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold">Max Verstappen</p>
            <p className="text-sm text-gray-500">lewis@mail.com</p>
          </div>
          <BiChevronDown size={16} className="ml-auto" />
        </div>
        <ul className="mt-4 space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:bg-white rounded p-2"
            >
              <CiSettings size={18} className="mr-2" /> Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:bg-white rounded p-2"
            >
              <BiLogOut size={18} className="mr-2" /> Log out
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
