import React from "react";

const Stepper = ({ steps, activeStep }) => {
  return (
    <div className="w-2/4 border-r h-screen border-gray-300 p-8">
      <h2 className="text-[24px] font-semibold mb-6">Setup your store</h2>
      <ul className="space-y-6">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <span
                className={`w-8 h-8 inline-flex items-center justify-center rounded-full ${
                  index < activeStep
                    ? "bg-black text-white"
                    : "border-[1.4px] border-black text-black"
                }`}
              >
                {index + 1}
                {index < activeStep && (
                  <span className="text-green-500"> ✔</span>
                )}
              </span>
            </div>
            <div>
              <h3 className="text-[18px] font-medium">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stepper;
