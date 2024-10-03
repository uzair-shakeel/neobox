const Step5Form = ({ onClose }) => {
  return (
    <div>
      <div className="relative w-full  space-y-6  ">
        <img
          src="/Ilustrations.svg"
          alt=""
          className="absolute -top-12 left-1/2 -translate-x-1/2"
        />

        <div className="text-center w-[90%] mx-auto pt-40">
          <h2 className=" text-[24px] font-[500] text-gray-900">
            Withdrawal method added
          </h2>
          <p className=" text-[16px] px-3 text-gray-600">
            Instant Card Transfer - USD
          </p>
        </div>

        {/* Continue Button */}
        <div>
          <button
            type="button"
            className={`w-full py-2 px-4 rounded-lg bg-black text-white`}
            onClick={onClose}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step5Form;
