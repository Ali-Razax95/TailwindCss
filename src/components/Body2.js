import React from 'react'

const Body2 = () => {
    return (
        <div class="">

            <div class=" mx-auto relative flex sm:flex-col lg:flex-row sm:w-[200px] 
            sd:w-[300px] lg:w-[1000px] sm:h-[450px] sd:h-[550px] lg:h-[650px] lg:space-x-4 lg:mt-[60px] sm:mt-5 ">
                {/* left */}
                <div class=" lg:pl-[100px] ">
                    <div class="lg:w-[454px]  lg:pl-[80px] ">
                        <div class=" lg:text-[26px] font-[500] sm:text-[12px] sd:text-[17px]" >
                            Find your new home on <span class="text-custom-teal">fresh<span class="font-[350]">builds</span></span>.
                        </div>
                        <div class=" lg:text-[16px] sm:text-[10px] sd:text-[14px] font-[400]">
                            freshbuilds has the largest inventory of new construction homes that you won’t find on other websites. Our proprietary technology and network of local real estate agents mean you’ll be the first to hear about new construction projects.
                        </div>
                        <div class=" sm:mx-auto max-w-[205px] sm:mt-[5px] sm:w-[100px] sd:w-[120px] md:w-[150px] lg:mt-6 rounded-[5px] sd:pt-4  lg:mr-80">

                            <button class="bg-custom-or text-white sm:w-[80px] sd:w-[120px]   md:w-[160px] lg:w-[205px] sm:h-[20px] sd:h-[30px] md:h-[25px] lg:h-[50px]   flex items-center justify-center sm:text-[8px] sd:text-[10px] lg:text-[16px] 
                            rounded-md hover:bg-orange-600  ">
                                Search freshbuilds
                            </button>
                        </div>
                    </div>

                    <div class="absolute bottom-0 left-8 sm:hidden lg:block ">
                        <img src="\Assets\search_houses2.png" />
                    </div>
                </div>
                {/* right */}

                
                <div class=" mt-3 relative flex flex-col ">
                    <div class="  bg-circle z-0   sm:w-[250px] sd:w-[300px] sd:h-[300px] sm:h-[250px] lg:h-[400px] lg:w-[400px] rounded-full">
                    </div>

                    <div class="absolute sm:left-12 lg:left-12 z-10 sm:h-[200px] lg:h-[400px]   ">
                        {/* image section */}
                        <div class=" ">
                            <img class="sm:h-[125px] sd:h-[150px] lg:h-[200px] sm:sm:w-[150px] sd:w-[200px] lg:w-[300px]" src="\Assets\Mask group.png" />
                        </div >

                        {/* body section */}


                        <div class=" pl-4 sm: sm:w-[150px] lg:h-[200px] sm:h-[125px] sd:h-[150px] sd:w-[200px] lg:w-[300px] bg-customWhite  lg:leading-[32px] sm:leading-5 sd:leading-6 ">
{/* upper body */}
                            <div class="font-[700] sm:text-[7px] lg:text-[14px] sd:text-[9px] ">
                            1294 Westleigh Drive
                            </div>
                            <div class="font-[400] sm:text-[6px] opacity-50 sd:text-[8px] lg:text-[12px]">
                            3 Bd 2  Bth  1,524 Sq. ft

                            </div>
                            
                            <div class="font-[700] sm:text-[7px] sd:text-[9px] lg:text-[14px]">
                            $445,000
                            </div>
{/* lower body */}
                            <div class="flex flex-row justify-between sm:text-[6px] sd:text-[8px]  lg:text-[12px]">
                            <div class=" font-[400]">
                                <div class="opacity-50">
                                Completion Date

                                </div>
                                <div class="opacity-50">
                                Neighborhood
                                </div>
                                <div class="opacity-50">
                                Schools
                                </div>
                            </div>
                            <div class=" justify-items-end pr-3 font-[700]">
                                <div class="">
                                09/27/2023
                                </div>
                                <div class="">
                                <img class=" sm:h-[14px] sd:h-[17px]  lg:h-[22px]" src="\Assets\A.png" />
                                </div>
                                <div class="">
                                <img class="sm:h-[14px] lg:h-[22px] mt-2
                                 sd:h-[17px]" src="\Assets\B.png" />
                                </div>
                            </div>
                            </div>



                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Body2
