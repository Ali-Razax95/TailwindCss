import React from 'react'

const Fotter = () => {
  return (
    <div class="bg-footer  text-customWhite lg:h-[200px]">
        {/* upper footer */}
        <div class=" text-customWhite text-center flex flex-col items-center sm:text-[10px] sd:text-[12px] md:text-[14px] lg:text-[16px] ">
            <div>
                <img class=" sm:mt-6 lg:mt-12   " src="\Assets\footer.png"/>
            </div>
            <div class="lg:mt-3">
            contact@freshbuilds.com
            </div>
            <div>
            1-844-769-6377
            </div>
        </div>

{/* lower footer */}
        <div class="flex flex-row justify-between mt-6  ">
            <div class="flex flex-row sm:space-x-3 lg:space-x-6 lg:text-[13px] font-[400] lg:pl-32 sm:text-[8px] sd:text-[10px] md:text-[12px]">
                <div>
                Privacy Policy
                </div>
                <div>
                Terms of Service
                </div>
                <div>
                Copyright © 2022. All Rights Reserved.
                </div>
            </div>
            <div>
            <img class="lg:pr-32 sm:h-[20px] sd:h-[23px] md:h-[25px]" src="\Assets\fotter2.png"/>
            </div>
        </div>


      
    </div>
  )
}

export default Fotter
