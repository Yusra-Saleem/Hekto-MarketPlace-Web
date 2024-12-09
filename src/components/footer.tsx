import React from 'react'

function Footer() {
  return (
    <div>
      
          {/* Footer */}
          <footer className=" bg-[#EEEFFB] pt-16 pb-8">
            <div className="container lg:w-[1177px] mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div className="space-y-4  pr-8 lg:w-[400px]">
                  <h2 className="text-2xl font-bold">Hekto</h2>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      className="p-2 border bg-purple-100 rounded-l"
                    />
                    <button className="rounded-l-none  px-3 text-white bg-[#FB2E86]">Sign Up</button>
                  </div>
                  <p className="text-sm text-gray-600">Contact Info</p>
                  <p className="text-sm w-[300px] text-gray-600">17 Princess Road, London, Greater London NW1 8JR, UK</p>
                </div>
                <div className="md:pl-8">
                  <h3 className="font-semibold  mb-4">Categories</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Laptops & Computers</li>
                    <li>Cameras & Photography</li>
                    <li>Smart Phones & Tablets</li>
                    <li>Video Games & Consoles</li>
                    <li>Waterproof Headphones</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Customer Care</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>My Account</li>
                    <li>Discount</li>
                    <li>Returns</li>
                    <li>Orders History</li>
                    <li>Order Tracking</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Pages</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Blog</li>
                    <li>Browse the Shop</li>
                    <li>Category</li>
                    <li>Pre-Built Pages</li>
                    <li>Visual Composer Elements</li>
                    <li>WooCommerce Pages</li>
                  </ul>
                </div>
              </div>
              <div className="border-t pt-8 text-center text-sm text-gray-600">
                ©2024 - All Rights Reserved
              </div>
            </div>
          </footer>
        </div>
      
  

    
  )
}

export default Footer
