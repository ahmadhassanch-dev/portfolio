

// Contact.js
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="bg-black h-screen"> {/* Changed to min-h-screen */}
     
      <div className="text-red-600 text-3xl md:text-4xl text-center pt-12 md:pt-20 font-semibold">
        Contact Us
      </div>
      <div className="flex justify-center mt-8 md:mt-16 mb-12 md:mb-20 px-4"> {/* Added px-4 */}
        <div className="bg-white shadow-lg rounded-xl p-4 md:p-8 w-full max-w-md">
          <form className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name:
              </label>
              <Input
                id="name"
                type="text"
                className="border border-gray-300 rounded-md mt-1 w-full px-3 py-2"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email:
              </label>
              <Input
                id="email"
                type="email"
                className="border border-gray-300 rounded-md mt-1 w-full px-3 py-2"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Message:
              </label>
              <Textarea
                id="message"
                className="border border-gray-300 rounded-md mt-1 w-full px-3 py-2 h-24 md:h-32 resize-none"
                placeholder="Enter your message"
              />
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;