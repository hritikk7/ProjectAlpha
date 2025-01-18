import { Heart, Menu, ShoppingCart, Sofa, UserRound } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='border-2 border-blue-300 rounded-xl mx-2 my-2'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center h-16 px-4 '>

          <div className='flex items-center sm:gap-2'>
            <span><Sofa className='h-9 w-9 text-purple-700 sm:h-7 sm:w-7' /></span>
            <span className='font-semibold md:text-2xl'>Luxewood</span>
          </div>
          <div className='hidden md:flex sm:gap-5'>
            <div className='font-medium'>Home</div>
            <div className='font-medium'>Shop</div>
            <div className='font-medium'>Collection</div>
            <div className='font-medium'>About</div>
          </div>
          <div className='hidden md:flex sm:gap-3'>
            <span> <Heart className='h-5 w-5' /> </span>
            <span> <ShoppingCart className='h-5 w-5' /> </span>
            <span> <UserRound className='h-5 w-5' /> </span>
          </div>
          <div className='sm-block md:hidden'>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar