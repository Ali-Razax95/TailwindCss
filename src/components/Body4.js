import React from 'react'

const Body4 = () => {
  return (
    <div>

        <div class=" bg-customWhite flex sm:flex-col lg:flex-row justify-center items-center mt-8  " >
            <div class=" space-y-3 ">
                <div class="font-[500] pt-3 lg:text-[26px] sm:text-[14px] sd:text-[16px] md:text-[22px] lg:leading-[39px]" >
                Have any questions about <span class="text-custom-teal">fresh<span class="font-[350]">builds?</span></span>
                </div>
                <hr class="  "></hr>
                {/* below heading */}
                <div class="sm:text-[8px] sd:text-[10px] lg:leading-[39px] md:text-[14px]" >
                <div class="flex font-[500] lg:text-[16px]  ">
                What kind of new construction homes does freshbuilds have on its platform? <img class="sm:w-[15px] md:w-[25px]" src="\Assets\frame.png" ></img>
                </div>
                <hr></hr>
                <div class="flex font-[500] lg:text-[16px] lg:leading-[20px] " >
                How do I find new construction homes that match my criteria?
                <img class="sm:w-[15px] md:w-[25px]" src="\Assets\frame.png" ></img>

                </div>
                <hr></hr>
                <div class="flex font-[500] lg:text-[16px] lg:leading-[20px] ">
                Why should I work with a licensed new construction specialist?
                <img class="sm:w-[15px] md:w-[25px]" src="\Assets\frame.png" ></img>
                </div>
                <hr></hr>
                <div class="flex font-[500] lg:text-[16px] lg:leading-[20px] mb-4">
                What factors does freshbuilds consider when evaluating home builders?
                <img class="sm:w-[15px] md:w-[25px]" src="\Assets\frame.png" ></img>
                </div>
                </div>
            </div>
            <div class="lg:w-[400px] sm:hidden lg:block" >
                <img src="\Assets\faq_houses.png"/>
            </div>
        </div>

      
    </div>
  )
}

export default Body4
