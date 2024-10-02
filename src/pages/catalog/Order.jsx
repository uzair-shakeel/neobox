import React from "react";
import Sidebar from "../../components/Sidebar";
import { useParams } from "react-router-dom";
import {
  RiArrowLeftLine,
  RiCaravanLine,
  RiHomeSmile2Line,
  RiInboxFill,
  RiOpenArmLine,
} from "react-icons/ri";
import { HiOutlineInbox } from "react-icons/hi";
import orders from "../../assets/OrdersData";

export default function Order() {
  const { id } = useParams();
  const orderId = parseInt(id, 10);
  const order = orders.find((order) => order.id === orderId);

  if (!order) {
    return <div>Order not found</div>;
  }
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-[32px] py-[27px]">
        <h1 className="text-[24px] leading-[36px] font-[500] pt-[5px] pb-[32px] flex items-center gap-[16px]">
          <span className="min-h-[20px] min-w-[20px]">
            <RiArrowLeftLine size={20} />
          </span>
          Order {order.id}
        </h1>
        <div className="flex flex-col md:flex-row gap-[24px] pt-[15px]">
          <div className="md:w-[65%] w-full flex flex-col gap-[24px]">
            <div
              className="bg-white p-[24px] rounded-[8px] border border-[#E4E4E7]"
              style={{
                boxShadow: "0px 1px 2px 0px #1018280F",
              }}
            >
              <h2 className="text-[20px] font-[500] mb-[32px]">Shipping</h2>
              <div className="flex justify-between items-start mb-[16px]">
                <div className="flex flex-col items-center">
                  <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center border border-dashed border-[#151515]">
                    <div className="w-[33.6px] h-[33.6px] bg-[#151515] rounded-full flex items-center justify-center text-white">
                      <HiOutlineInbox size={20} />
                    </div>
                  </div>
                  <p className="text-[#3F3F46] text-[14px] font-[400] mt-[8px] mb-[4px]">
                    Step 1
                  </p>
                  <p className="text-[#09090B] font-[500] text-[16px]">
                    Packaging
                  </p>
                </div>
                <div className="flex-1 h-[4px] rounded-[8px] bg-[#151515] mx-2 my-[18px]"></div>
                <div className="flex flex-col items-center">
                  <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center border border-[#E4E4E7] bg-white">
                    <div className="flex items-center justify-center text-[#71717A]">
                      <RiCaravanLine size={20} />
                    </div>
                  </div>
                  <p className="text-[#3F3F46] text-[14px] font-[400] mt-[8px] mb-[4px]">
                    Step 2
                  </p>
                  <p className="text-[#09090B] font-[500] text-[16px]">
                    On its way
                  </p>
                </div>
                <div className="flex-1 h-[4px] rounded-[8px] bg-[#E4E4E7] mx-2 my-[18px]"></div>
                <div className="flex flex-col items-center">
                  <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center border border-[#E4E4E7] bg-white">
                    <div className="flex items-center justify-center text-[#71717A]">
                      <RiHomeSmile2Line size={20} />
                    </div>
                  </div>
                  <p className="text-[#3F3F46] text-[14px] font-[400] mt-[8px] mb-[4px]">
                    Step 3
                  </p>
                  <p className="text-[#09090B] font-[500] text-[16px]">
                    On Destination
                  </p>
                </div>
                <div className="flex-1 h-[4px] rounded-[8px] bg-[#E4E4E7] mx-2 my-[18px]"></div>
                <div className="flex flex-col items-center">
                  <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center border border-[#E4E4E7] bg-white">
                    <div className="flex items-center justify-center text-[#71717A]">
                      <RiOpenArmLine size={20} />
                    </div>
                  </div>
                  <p className="text-[#3F3F46] text-[14px] font-[400] mt-[8px] mb-[4px]">
                    Step 4
                  </p>
                  <p className="text-[#09090B] font-[500] text-[16px]">
                    Delivered
                  </p>
                </div>
              </div>
              <div className="bg-[#F5F3FF] text-[#09090B] py-[8px] px-[12px] rounded-[8px] text-center w-full font-[500] text-[14px]">
                Package still on processing
              </div>
            </div>

            <div
              className="bg-white p-[24px] rounded-[8px] border border-[#E4E4E7]"
              style={{ boxShadow: "0px 1px 2px 0px #1018280F" }}
            >
              <div className="flex justify-between items-center border-b border-b-[#F4F4F5] mb-[16px] pb-[16px] gap-1">
                <div>
                  <h2 className="text-[20px] font-[500] text-[#09090B] pb-[4px]">
                    Order {order.id}
                  </h2>
                  <p className="text-[#3F3F46] text-[14px] font-[400]">
                    {order.date}
                  </p>
                </div>
                <div className="flex gap-[16px]">
                  <span
                    className={`px-[12px] py-[4px] rounded-full text-[14px] ${
                      order.paymentStatus === "Paid"
                        ? "bg-[#F0FDF4] text-[#22C55E]"
                        : "bg-[#FCE8EC] text-[#EF4444]"
                    }`}
                  >
                    {order.paymentStatus}
                  </span>
                  <span
                    className={`px-[12px] py-[4px] rounded-full text-[14px] ${
                      order.deliveryStatus === "Delivered"
                        ? "bg-[#F0FDF4] text-[#22C55E]"
                        : order.deliveryStatus === "Processing"
                        ? "bg-[#FEF9C3] text-[#CA8A04]"
                        : "bg-[#FCE8EC] text-[#EF4444]"
                    }`}
                  >
                    {order.deliveryStatus}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-[20px] font-[500] text-[#09090B] pb-[4px]">
                  {order.customer}
                </h3>
                <p className="text-[#3F3F46] text-[14px] font-[400]">
                  Customer ID : 121231
                </p>
              </div>
            </div>

            <div
              className="bg-white p-[24px] rounded-[8px] border border-[#E4E4E7]"
              style={{ boxShadow: "0px 1px 2px 0px #1018280F" }}
            >
              <h2 className="text-[20px] font-[500] text-[#09090B] border-b border-b-[#F4F4F5] mb-[16px] pb-[16px]">
                Order Items
              </h2>
              <div className="flex items-center justify-between border-b border-b-[#F4F4F5] mb-[16px] pb-[16px]">
                <div className="flex items-center gap-[16px]">
                  <img
                    src="/product-img-3.png"
                    alt="BBQ Sauce"
                    className="w-[64px] h-[64px] "
                  />
                  <h3 className="font-[500] text-[20px] text-[#09090B]">
                    BBQ Sauces
                  </h3>
                </div>
                <div className="flex items-center gap-[40px]">
                  <p className="text-[#09090B] text-[14px] font-[500]">
                    {order.total}
                  </p>
                  <p className="text-[#09090B] text-[16px] font-[500]">1x</p>
                  <p className="text-[#09090B] text-[14px] font-[500]">
                    {order.total}
                  </p>
                </div>
              </div>
              <button className="bg-[#151515] text-white text-[16px] font-[500] px-[16px] py-[11px] rounded-[10px] flex items-center ms-auto gap-[8px]">
                <RiInboxFill size={20} /> Mark as shipped
              </button>
            </div>
          </div>

          <div className="md:w-[35%] w-full">
            <div
              className="bg-white p-[24px] rounded-[8px] border border-[#E4E4E7] w-full"
              style={{ boxShadow: "0px 1px 2px 0px #1018280F" }}
            >
              <h2 className="text-[20px] font-[500] text-[#09090B] mb-[30px]">
                Payment
              </h2>
              <p className="font-[500] text-[16px] text-[#09090B] pb-[4px]">
                Paid via Debit Card
              </p>
              <p className="text-[#3F3F46] text-[14px] font-[400] mb-[30px]">
                27 Jan 2024 11:33 am
              </p>
              <div className="flex justify-between mb-[14px] gap-[6px]">
                <p className="text-[#3F3F46] text-[14px] text-[400]">
                  Subtotal
                </p>
                <p className="font-[400] text-[16px] text-[#09090B]">
                  $800,740
                </p>
              </div>
              <div className="flex justify-between gap-[6px]">
                <p className="font-[600] text-[16px] text-[#3F3F46]">Total</p>
                <p className="font-[600] text-[16px] text-[#3F3F46]">
                  $800,740
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
