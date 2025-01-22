import { Button } from "@/components/ui/button"
import { ChevronRight, Shield, TrendingUp, Truck } from "lucide-react"


const HeroSection = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto pb-4">
        {/* HeroSection */}
        <div className="py-4 md:grid md:grid-cols-2">
          <div className="md:grid-col-8 md:px-4 lg:pt-28">
            <h1 className="px-4 text-indigo-600 font-bold text-4xl md:text-5xl md:tracking-tighter">Transform your space with luxury furniture</h1>
            <p className="px-4 text-md mt-2 text-gray-600 md:mt-5 dark:text-white">Discover our curated collection of premium furniture pieces that blend style, comfort, and functionality. Shop Now</p>
            <Button className="mx-4 my-4 px-4 py-6 text-base md:px-8 md:py-7 flex justify-center items-center md:mt-4 md:text-lg">Shop now
              <ChevronRight />
            </Button>
          </div>
          <div className="md:grid-cols-4">
            <div className="px-4 w-full md:object-cover">
              <img src="/Images/hero bannerrr.jpg" alt="Furniture-banner" className="rounded-2xl" />
            </div>
          </div>
        </div>
        {/* Features-Section */}
        <div className="grid px-4 md:grid-cols-3 gap-5">
          <div className="bg-white text-gray-700 dark:bg-gray-900 rounded-2xl p-7 md:p-3 lg:p-7 shadow-md ">
            <div className="flex">
              <TrendingUp className=" text-indigo-600 h-10 w-8" />
              <h1 className="text-xl font-bold text-indigo-600 ms-3">Premium Quality</h1>
            </div>
            <p className=" text-gray-700 ms-11 dark:text-gray-300">Handcrafted furniture made from the finest materials.</p>
          </div>
          <div className="bg-white text-gray-700 dark:bg-gray-900 rounded-2xl p-7 md:p-3 lg:p-7 shadow-md ">
            <div className="flex">
              <Truck className=" text-indigo-600 h-10 w-8" />
              <h1 className="text-xl font-bold text-indigo-600 ms-3">Free Delivery</h1>
            </div>
            <p className=" text-gray-700 ms-11 dark:text-gray-300">Free shipping on all orders over $999.</p>
          </div>
          <div className="bg-white text-gray-700 dark:bg-gray-900 rounded-2xl p-7 md:p-3 lg:p-7 shadow-md ">
            <div className="flex">
              <Shield className=" text-indigo-600 h-10 w-8" />
              <h1 className="text-xl font-bold text-indigo-600 ms-3">10 Year Warranty</h1>
            </div>
            <p className="text-gray-700 ms-11 dark:text-gray-300">All our furniture comes with extended warranty.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection