import Navbar from "../components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="bg-black h-screen ">
      <Navbar />
      <div className="text-red-600 text-4xl text-center pt-20 font-semibold">
        Contact Us
      </div>
      <div className="flex justify-center mt-16 mb-20">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
          <form className="space-y-6">
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
                className="border border-gray-300 rounded-md mt-1 w-full px-3 py-2 h-32 resize-none"
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
