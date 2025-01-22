import { Sofa } from 'lucide-react'

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto py-12 px-4'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
          <div>
            <h2 className='text-gray-400 font-semibold uppercase tracking-wider'>SHOP</h2>
            <ul className='mt-2 space-y-2'>
              <li className='text-base text-gray-300 hover:text-white'>New Arrivals</li>
              <li className='text-base text-gray-300 hover:text-white'>Best Seller</li>
              <li className='text-base text-gray-300 hover:text-white'>Sale</li>
            </ul>
          </div>
          <div>
            <h2 className='text-gray-400 font-semibold uppercase tracking-wider'>SUPPORT</h2>
            <ul className='mt-2 space-y-2'>
              <li className='text-base text-gray-300 hover:text-white'>Contact</li>
              <li className='text-base text-gray-300 hover:text-white'>Shipping</li>
              <li className='text-base text-gray-300 hover:text-white'>Return</li>
            </ul>
          </div>
          <div>
            <h2 className='text-gray-400 font-semibold uppercase tracking-wider'>COMPANY</h2>
            <ul className='mt-2 space-y-2'>
              <li className='text-base text-gray-300 hover:text-white'>About</li>
              <li className='text-base text-gray-300 hover:text-white'>Blog</li>
              <li className='text-base text-gray-300 hover:text-white'>Carreer</li>
            </ul>
          </div>
          <div>
            <h2 className='text-gray-400 font-semibold uppercase tracking-wider'>LEGAL</h2>
            <ul className='mt-2 space-y-2'>
              <li className='text-base text-gray-300 hover:text-white'>Privacy</li>
              <li className='text-base text-gray-300 hover:text-white'>Terms</li>
            </ul>
          </div>
        </div>
        <div className='border-t border-gray-400 mt-14 md:flex md:justify-between'>
          <div className='flex items-center mt-4'>
            <div><Sofa className='h-9 w-9 text-indigo-600 sm:h-7 sm:w-7' /></div>
            <div className="text-xl text-white ml-2 font-semibold md:text-2xl">Luxewood</div>
          </div>
          <div className='mt-2 md:mt-4'>
            <p className='text-base text-gray-300'>© 2024 Luxewood. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer