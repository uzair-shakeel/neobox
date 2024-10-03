import { useState, useEffect } from "react";

const Step4Form = ({ onNext }) => {
  const [timer, setTimer] = useState(59);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [code, setCode] = useState(Array(6).fill("")); // Store each input value

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          setResendDisabled(false);
          clearInterval(countdown);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;

    // Move focus to the next input if a value is entered
    if (value && index < 5) {
      document.getElementById(`code-input-${index + 1}`).focus();
    }

    setCode(newCode);

    // Check if all inputs are filled
    if (newCode.every((val) => val !== "")) {
      onNext(); // Call onNext when all inputs are filled
    }
  };

  return (
    <div>
      <div className="flex justify-center my-6">
        <img src={"/Lock.svg"} alt="lock icon" />
      </div>

      {/* Code input */}
      <div className="flex justify-between mx-6">
        {code.map((value, index) => (
          <input
            key={index}
            id={`code-input-${index}`}
            type="text"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            className="text-center border bg-gray-100 border-gray-300 rounded-lg w-12 h-9 text-xl font-medium"
          />
        ))}
      </div>

      {/* Resend button */}
      <div className="text-center mt-4">
        <button
          disabled={resendDisabled}
          className={`text-gray-400 ${
            resendDisabled
              ? "cursor-not-allowed"
              : "text-indigo-600 hover:text-indigo-900"
          } font-semibold`}
        >
          {resendDisabled ? `Resend again in (${timer})` : "Resend Code"}
        </button>
      </div>

      {/* Support */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Can’t access your account?{" "}
          <a href="#" className="text-indigo-600 font-semibold">
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
};

export default Step4Form;
