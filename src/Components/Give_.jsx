import React,{ useState }from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Transtion from '../Transition';


const Give_ = () => {
  
  const [amount, setAmount] = useState(50); // Default amount is $50

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send amount to server)
    alert(`Thank you for your generosity! You have given $${amount}.`);
  };
  return (
    <div name="Hometop" className="flex flex-col min-h-screen bg-[#64092c]">
      <Navbar />
      <div className="flex-grow mt-3">
        <div name="Give" className="w-full h-auto bg-[#64092c] flex justify-center items-center py-10">
      
          <div className="bg-[#f0f0f0] w-[90%] lg:w-[70%] xl:w-[60%] p-8 rounded-lg shadow-lg flex flex-col items-center mt-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#64092c] mb-6">Give to Our Church</h1>
            <p className="text-lg md:text-xl text-gray-700 text-center mb-6">
              Your generous contributions help us continue our mission and serve our community. Every gift makes a difference!
            </p>
            
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
              <div className="w-full flex flex-col items-center">
                <label htmlFor="amount" className="text-xl font-semibold mb-4">Amount: ${amount}</label>
                
                {/* Range slider for selecting the amount */}
                <input
                  type="range"
                  id="amount"
                  name="amount"
                  min="10"
                  max="1000"
                  step="5"
                  value={amount}
                  onChange={handleAmountChange}
                  className="w-full md:w-[70%] lg:w-[60%] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />

                {/* Display the selected amount */}
                <span className="text-lg mt-4 text-gray-800">
                  You are giving: <strong>${amount}</strong>
                </span>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="mt-6 px-6 py-2 bg-[#64092c] text-white text-lg font-bold rounded-lg shadow-md hover:bg-[#540822]"
              >
                Give ${amount}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Transtion(Give_);
 