import Link from "next/link"
import Image from "next/image"
import logo from '../../../public/logo.png'


const Navbar = () => {


  return (


    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4  ">

      {/* LEFT */}
      <Link href='/' className="flex items-center tracking-wider">
        
        <Image src= {logo} alt="TrendLama" width={36} height={36} className="w-6 md:w-9 md:h-9 " />

        <p className="hidden md:block text-md font-medium ">TRENDLAMA</p>
      {/* RIGHT */}
        <div>

        </div>
      </Link>



    </nav>
  )
}

export default Navbar
