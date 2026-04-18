import logo from '../../public/logo.png'
import  Image  from 'next/image';
import  Link from 'next/link';


const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center md:flex-row md:items-start bg-gray-800 p-8 rounded-lg '>

      <div className=''>
        <Link href='/' className="flex items-center tracking-wider">
          <Image src= {logo} alt="TrendLama" width={36} height={36} className="w-6 md:w-9 md:h-9 " />
          <p className="hidden md:block text-md font-medium ">TRENDLAMA</p>
        </Link>

      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Footer
