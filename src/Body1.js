import React from 'react'

const Body1 = () => {
  return (
    <div class="  ">

      {/* // upper  body */}

      <div class="relative text-center flex justify-center  pt-[50px]">
        <div class="font-medium lg:w-[400px] sm:w-[200px] sd:w-[250px] md:w-[300px] lg:text-[26px] sm:text-[12px] sd:text-[16px] md:text-[18px] ">
          Buying a new home is daunting. <span class="text-custom-teal">fresh<span class="font-[350]">builds</span></span> makes it oh-so easy.
        </div>



        <div class="absolute top-2 right-2 flex font-[400] sm:w-[80px] md:w-[200px] sd:w-[120px] lg:w-[305px] sm:text-[6px] sd:text-[8px] md:text-[12px] max-w-[255px] lg:text-[16px] bg-customWhite h-auto">
          <div>
            <img class="" src="/Assets/Group 20304.png" alt="" />
          </div>
          <div class="ml-auto sm:w-[80px] sd:w-[120px] lg:w-[200px] md:w-[180px]">
            John S. just closed on a new home with freshbuilds!
          </div>
        </div>
      </div>

      {/* middle body  */}
      <div class="flex sm:flex-col sd:flex-row items-center justify-center sd:space-x-4 sm:space-y-3 sd:space-y-0 sm:pt-[40px]">

        <div class="bg-customWhite lg:w-[300px] pt-[40px] pl-[10px] sd:h-[271px] sm:-[90px] sm:text-[10px] sd:text-[14px] sm:w-[200px] sd:w-[150px] md:w-[200px]">
          <div>
            <img class="" src="/Assets/Group20280.png" alt="" />
          </div>
          <div class="text-custom-teal lg:text-[22px] font-[800] pt-[20px] ">
            Get your time back
          </div>
          <div class=" lg:text-[16px]">
            Spend time with family, not searching dozens of listing sites. freshbuilds has all the new construction homes in one place.
          </div>
        </div>

        <div class="bg-customWhite  pt-[40px] pl-[10px]  sm:-[90px] sd:h-[271px] sm:text-[10px] sd:text-[14px] sm:w-[200px] sd:w-[150px] md:w-[200px] lg:w-[300px] ">
          <div>
            <img src="/Assets/Group2.png" alt="" />
          </div>
          <div class="text-custom-teal lg:text-[22px] font-[800] pt-[20px]">
            Be a know-it-all
          </div>
          <div class="lg:text-[16px]">
            We monitor local construction activity and send you alerts when a new home with your criteria is ready for its new owners.
          </div>
        </div>

        <div class=" " >
          <img  class=" sm:w-[200px] sd:h-[271px] md:w-[250px] lg:w-[359px] lg:h-[450px]" src='/Assets/Group3.png' alt='' />
        </div>

      </div>

      {/* lower body */}

      <div class="flex sm:flex-col sd:flex-row items-center justify-center sd:space-x-4 lg:space-x-6 sm:space-y-3 sd:space-y-0  sm:pt-[40px]">

        <div class="bg-customWhite w-[300px] pt-[40px] pl-[10px] sm:-[90px] sm:text-[10px] sd:text-[14px] sm:w-[200px] lg:w-[300px] lg:h-[271px]">
          <div class="flex-shrink-0">
            <img src="/Assets/Group4.png" alt="" class="max-h-[100px] w-auto object-contain" />
          </div>
          <div class="text-custom-teal lg:text-[22px] font-[800] pt-[20px]">
            Rely on experts
          </div>
          <div class="lg:text-[16px] flex-grow">
            Our licensed, new construction experts are by your side every step of the way and are available 7AM to 7PM – 7 days a week.
          </div>
        </div>

        <div class="bg-customWhite w-[300px] pt-[40px] pl-[10px] sm:-[90px] sm:text-[10px] sd:text-[14px] md:h-[236px] lg:h-[271px] sm:w-[200px] lg:w-[300px]">
          <div class="flex-shrink-0">
            <img src="/Assets/Group5.png" alt="" class="max-h-[100px] w-auto object-contain" />
          </div>
          <div class="text-custom-teal lg:text-[22px] font-[800] pt-[20px]">
            Rest assured
          </div>
          <div class="lg:text-[16px] flex-grow">
            Every freshbuild purchase comes with a complimentary home warranty giving you one less thing to worry about the house you have.
          </div>
        </div>
      </div>





    </div>





  )
}

export default Body1
