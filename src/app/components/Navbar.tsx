import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      {/* Profile Image */}
      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-red-600 flex items-center justify-center">
          <Image 
            src="/profile.jpg" 
            alt="profile_pic" 
            width={48} 
            height={48} 
            className="w-full h-full object-cover" 
          />
        </div>
      {/* Brand Name */}
      <Link href="/">
      <div className="text-xl ml-28 font-extrabold cursor-pointer">
        
        Hassan/ <span className="text-red-600">حسن</span> / हसन
      </div></Link>

      {/* Menu Items */}
      <div className="flex gap-4 font-semibold cursor-pointer">
        <div className="hover:text-red-600 transition">About me</div>
        <div className="hover:text-red-600 transition">Skills</div>
        <div className="hover:text-red-600 transition">Contact</div>
      </div>
    </nav>
  );
};

export default Navbar;
