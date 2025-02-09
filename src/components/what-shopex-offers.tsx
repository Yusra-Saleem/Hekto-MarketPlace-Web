
export function WhatShopexOffers() {
  return (
    <section className="py-16">
      <div className="container md:w-[1177px] mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#1A0B5B]">
          What Shopex Offers!
        </h2>

        <div className="grid gap-8 md:grid-cols-4 ">
          <div className="text-center  bg-transparent  px-8 duration-500 cursor-pointer  py-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
              <img src={"/images/delvry.png"} alt={"dlvry image"} />
            </div>
            <h3 className="mb-2 text-lg font-bold text-[#151875]">
              {"Free Delivery"}
            </h3>
            <p className="text-sm text-gray-600">
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.  "
              }
            </p>
          </div>
        

    
          <div className="text-center  bg-transparent  px-8 duration-500 cursor-pointer  py-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
              <img src={"/images/cashback.png"} alt={"cashback image"} />
            </div>
            <h3 className="mb-2 text-lg font-bold text-[#151875]">
              {"100% Cash Back"}
            </h3>
            <p className="text-sm text-gray-600">
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.  "
              }
            </p>
          </div>
      

       
          <div className="text-center  bg-transparent  px-8 duration-500 cursor-pointer  py-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
              <img src={"/images/guarentee.png"} alt={"guarentee image"} />
            </div>
            <h3 className="mb-2 text-lg font-bold text-[#151875]">
              {"Quality Product"}
            </h3>
            <p className="text-sm text-gray-600">
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.  "
              }
            </p>
          </div>
   


        
          <div className="text-center  bg-transparent  px-8 duration-500 cursor-pointer  py-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
              <img src={"/images/support.png"} alt={"support image"} />
            </div>
            <h3 className="mb-2 text-lg font-bold text-[#151875]">
              {"24/7 Support"}
            </h3>
            <p className="text-sm text-gray-600">
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.  "
              }
            </p>
          </div>
        </div>

       
      </div>
    </section>
  );
}
