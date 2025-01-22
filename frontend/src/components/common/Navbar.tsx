import { Heart, Menu, ShoppingCart, Sofa, UserRound } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from './ThemeToggle'

const Navbar = () => {

  const menuItems: string[] = ['Home', 'Shop', 'Collections', 'About']

  return (
    <div className='border-2 shadow-sm'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center h-16 px-4'>

          <div className='flex items-center sm:gap-2'>
            <span><Sofa className='h-9 w-9 text-indigo-600 sm:h-7 sm:w-7' /></span>
            <span className='font-semibold md:text-2xl'>Luxewood</span>
          </div>
          <div className='hidden md:flex sm:gap-5'>
            {
              menuItems.map((item) => (
                <div className='hover:text-indigo-600 duration-500'>{item}</div>
              ))
            }
          </div>
          <div className='hidden md:flex sm:gap-3'>
            <span> <Heart className='h-5 w-5' /> </span>
            <span> <ShoppingCart className='h-5 w-5' /> </span>
            <span> <UserRound className='h-5 w-5' /> </span>
            <span> <ThemeToggle /> </span>
          </div>
          <div className='sm-block md:hidden'>
            <Sheet>
              <SheetTrigger><Menu /></SheetTrigger>
              <SheetContent>
                <SheetHeader>
                </SheetHeader>
                {
                  menuItems.map((item) => (
                    <div className='font-medium'>{item}</div>
                  ))
                }
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar