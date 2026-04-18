import ProdcutsList from '@/components/ProdcutsList';
import hero from '../../public/featured.png'
import Image from 'next/image';

const Homepage = () => {
  
  
  return (
    <div className=''>

      <div className='relative aspect-[3/1] mb-12'> 
        <Image src={hero} alt='Featured Product'  fill/>
      </div>

      <ProdcutsList/>
    </div>
  )
}

export default Homepage