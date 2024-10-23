import React from 'react'

const Navbar = () => {
    return (
        //upper 
        <div class=''>

            

            <div class=" bg-white" >
                <div class=" mx-3 text-black flex sm:text-[8px] sm:justify-between md:flex-row flex-col  min-h-6 items-center " >

                    <div class="logo md:ml-[20px] tab:mx-0 " >
                        <img class="sm:h-[10px] md:h-[19px]" src="/Assets/fresh-buildings.png  " alt="" />
                    </div>

                    <div class="flex  md:mr-[20px]  w-138px  font-bold md:text-[16px]  ">
                        1-8-44-769-63377
                    </div>
                </div>


                <div class="bg-custom-radial flex  ">


                    <div class="sm:w-[120px] md:w-[240px] lg:w-[437px]" ><img src="/Assets/hero_houses.png" alt="" />

                    </div>

                    <div class="flex flex-col items-center text-center mx-auto sm:mt-[4px] lg:pr-[90px]  md:mt-[35px] lg:mt-[50px] row-span-2 ">

                        <div class="text-custom-teal max-w-[747px] sm:text-[15px] sd:text-[19px] md:text-[25px] sd:font-[600] md:font-[700] md:pr-[40px] lg:text-[40px] font-[800]">
                            Discover New Construction Homes Before They Hit The Market
                        </div>

                        <div class="sm:leading-[10px] sd:leading-[14px] md:leading-[18px] lg:leading-[26.04px]  max-w-[545px] font-[400] sm:text-[8px] sd:text-[13px] md:pr-[40px] md:text-[18px] text-wrap lg:text-[20px] sm:mt-[8px] sd:mt-[4px] lg:mt-4 ">
                            From move-in-ready to custom homes, is the modern way to find + buy a new construction house.
                        </div>

                        <div class="max-w-[205px] sm:mt-[5px] sm:w-[100px] sd:w-[120px] md:w-[150px] lg:mt-6 rounded-[5px] lg:mr-[40px] ">

                            <button class="bg-custom-or text-white sm:w-[80px] sd:w-[100px]  md:w-[140px] lg:w-[205px] sm:h-[10px] sd:h-[20px] md:h-[25px] lg:h-[50px]  lg:py-2  flex items-center justify-center sm:text-[8px] lg:text-[16px] rounded-md hover:bg-orange-600  ">
                                Search freshbuilds
                            </button>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Navbar
