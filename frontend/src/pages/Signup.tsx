import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"


const Signup = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="../../public/Images/spacejoy-q3Qd86sfaoU-unsplash.jpg"
          alt="Background"
          className="w-[100%] h-screen object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="max-w-7xl mx-auto flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Card className="w-96">
            <CardHeader>
              <CardTitle className="text-4xl">Register</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="">
                <Label htmlFor="email">Email*</Label>
                <Input type="email" id="email" placeholder="Enter email" />
              </div>
              <div className="my-2">
                <Label htmlFor="password">Password*</Label>
                <Input type="password" id="password" placeholder="Enter password" />
              </div>
              <div className="my-2">
                <Label htmlFor="password">Confirm Password*</Label>
                <Input type="password" id="ConfirmPassword" placeholder="Enter password" />
              </div>
              <div className="flex justify-between mt-2 mb-4">
                <Link to="/login" className="text-sm text-orange-500 font-medium hover:underline">Existing user ? Login</Link>
                <Link to="/forgetpassword" className="text-sm text-orange-500 font-medium hover:underline">Forgot password?</Link>
              </div>
              <div>
                <Button className="w-full">Register</Button>
              </div>
              <div className="mt-2">
                <span className="text-sm">By clicking Register you agree to our <span className="text-orange-500 font-medium hover:underline hover:cursor-pointer"> Terms of use </span> and <span className="text-orange-500 font-medium hover:underline hover:cursor-pointer">privacy policy.</span></span>
              </div>
              <p ></p>
            </CardContent>
            <CardFooter className="border-t p-5 mx-6 flex justify-between">
              <div className="border px-4 py-3 rounded-full">Facebook</div>
              <div className="border px-4 py-3 rounded-full">Google</div>
              <div className="border px-4 py-3 rounded-full">Apple</div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>

  )
}

export default Signup