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
      <main className="flex-1 overflow-y-auto lg:px-[32px] md:px-[24px] px-[16px] py-[27px]">
        <h1 className="md:text-[24px] text-[20px] leading-[36px] font-[500] pt-[5px] pb-[32px] flex items-center gap-[16px]">
          <span className="min-h-[20px] min-w-[20px]">
            <RiArrowLeftLine size={20} />
          </span>
          Order {order.id}
        </h1>
        <div className="flex flex-col lg:flex-row gap-[24px] md:pt-[15px]">
          <div className="lg:w-[65%] w-full flex flex-col gap-[24px]">
            <div
              className="bg-white xl:px-[24px] md:px-[15px] px-[12px] xl:py-[24px] py-[18px] rounded-[8px] border border-[#E4E4E7]"
              style={{
                boxShadow: "0px 1px 2px 0px #1018280F",
              }}
            >
              <h2 className="md:text-[20px] text-[18px] font-[500] md:mb-[32px] mb-[20px]">
                Shipping
              </h2>
              <div className="flex sm:flex-row flex-col justify-between sm:items-start items-center mb-[16px]">
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
                <div className="sm:flex-1 sm:h-[4px] h-[70px] w-[4px] rounded-[8px] bg-[#151515] w-full sm:my-[18px] my-2"></div>
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
                <div className="sm:flex-1 sm:h-[4px] h-[70px] w-[4px] rounded-[8px] bg-[#E4E4E7] w-full sm:my-[18px] my-2"></div>
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
                <div className="sm:flex-1 sm:h-[4px] h-[70px] w-[4px] rounded-[8px] bg-[#E4E4E7] w-full sm:my-[18px] my-2"></div>
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
              className="bg-white xl:px-[24px] md:px-[15px] px-[12px] xl:py-[24px] py-[18px] rounded-[8px] border border-[#E4E4E7]"
              style={{ boxShadow: "0px 1px 2px 0px #1018280F" }}
            >
              <div className="flex flex-wrap justify-between items-center border-b border-b-[#F4F4F5] md:mb-[16px] mb-[13px] md:pb-[16px] pb-[13px] md:gap-1 gap-3">
                <div>
                  <h2 className="md:text-[20px] text-[18px] font-[500] text-[#09090B] pb-[4px]">
                    Order {order.id}
                  </h2>
                  <p className="text-[#3F3F46] md:text-[14px] text-[13px] font-[400]">
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
                <h3 className="md:text-[20px] text-[18px] font-[500] text-[#09090B] pb-[4px]">
                  {order.customer}
                </h3>
                <p className="text-[#3F3F46] md:text-[14px] text-[13px] font-[400]">
                  Customer ID : 121231
                </p>
              </div>
            </div>

            <div
              className="bg-white xl:px-[24px] md:px-[15px] px-[12px] xl:py-[24px] py-[18px] rounded-[8px] border border-[#E4E4E7]"
              style={{ boxShadow: "0px 1px 2px 0px #1018280F" }}
            >
              <h2 className="md:text-[20px] text-[18px] font-[500] text-[#09090B] border-b border-b-[#F4F4F5] md:mb-[16px] mb-[13px] md:pb-[16px] pb-[13px]">
                Order Items
              </h2>
              <div className="flex items-center sm:gap-[16px] gap-[6px] border-b border-b-[#F4F4F5] mb-[16px] pb-[16px]">
                <img
                  src="/product-img-3.png"
                  alt="BBQ Sauce"
                  className="sm:w-[64px] w-[45px] sm:h-[64px] h-[45px]"
                />
                <div className="flex items-center justify-between gap-[16px] w-full flex-wrap">
                  <h3 className="font-[500] md:text-[20px] text-[18px] text-[#09090B]">
                    BBQ Sauces
                  </h3>

                  <div className="flex items-center sm:gap-[40px] gap-[16px] flex-wrap">
                    <p className="text-[#09090B] sm:text-[14px] text-[13px] font-[500]">
                      {order.total}
                    </p>
                    <p className="text-[#09090B] sm:text-[16px] text-[14px] font-[500]">
                      1x
                    </p>
                    <p className="text-[#09090B] sm:text-[14px] text-[13px] font-[500]">
                      {order.total}
                    </p>
                  </div>
                </div>
              </div>
              <button className="bg-[#151515] text-white md:text-[16px] text-[14px] font-[500] md:px-[16px] px-[12px] md:py-[11px] py-[9px] rounded-[10px] flex items-center ms-auto gap-[8px]">
                <RiInboxFill className="md:w-[20px] w-[17px] md:h-[20px] h-[17px]" />{" "}
                Mark as shipped
              </button>
            </div>
          </div>

          <div className="lg:w-[35%] w-full">
            <div
              className="bg-white xl:px-[24px] xl:py-[24px] px-[12px] py-[15px] rounded-[8px] border border-[#E4E4E7] w-full"
              style={{ boxShadow: "0px 1px 2px 0px #1018280F" }}
            >
              <h2 className="md:text-[20px] text-[18px] font-[500] text-[#09090B] md:mb-[30px] mb-[20px]">
                Payment
              </h2>
              <p className="font-[500] sm:text-[16px] text-[14px] text-[#09090B] pb-[4px]">
                Paid via Debit Card
              </p>
              <p className="text-[#3F3F46] sm:text-[14px] text-[13px] font-[400] mb-[30px]">
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
