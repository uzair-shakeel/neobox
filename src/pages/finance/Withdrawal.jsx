import Sidebar from "../../components/Sidebar";

const Withdrawal = () => {
  return (
    <div className="flex bg-gray-50 h-screen">
      {/* Left Section - Sidebar and Saved Withdrawal Methods */}
      <Sidebar />

      <div className="flex-1 px-8 py-6">
        {/* Withdrawal Methods Section */}
        <h2 className="text-3xl font-semibold mb-6">Withdrawal Methods</h2>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Content - Saved Withdrawal Methods */}
          <div className="col-span-8">
            <h3 className="text-lg font-semibold mb-4">
              Saved withdrawal methods
            </h3>

            {/* Withdrawal Method Card */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm mb-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <span className="material-icons text-gray-600">
                    account_balance
                  </span>
                  <div>
                    <p className="font-semibold">Bank Transfer • CAD</p>
                    <p className="text-sm text-gray-500">
                      marquezemarc@gmail.com
                    </p>
                  </div>
                </div>
                <span className="material-icons text-gray-500 cursor-pointer">
                  more_vert
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Use them to withdraw your funds from Neobox once a payment is
                received. Click on each method to customize or view details.
              </p>
            </div>

            {/* Add Method Button */}
            <button className="flex items-center space-x-2 text-blue-600 font-semibold py-3 px-5 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="material-icons">add_circle_outline</span>
              <span>Add Method</span>
            </button>
          </div>

          {/* Right Content - Help Section */}
          <div className="col-span-4">
            <div className="bg-purple-50 rounded-lg p-6 relative">
              <h3 className="text-lg font-semibold mb-3">
                How to withdraw your money?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Get your money sent to multiple accounts automatically. Deposit
                every month.
              </p>

              <div className="flex justify-between items-center mt-6">
                <button className="text-blue-600 font-semibold flex items-center space-x-2 hover:underline">
                  <span>Learn more</span>
                  <span className="material-icons">arrow_forward</span>
                </button>
              </div>

              {/* Money Icon */}
              <div className="absolute bottom-4 right-4">
                <img
                  src="/path/to/money-icon.png"
                  alt="Money Icon"
                  className="w-20 h-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
