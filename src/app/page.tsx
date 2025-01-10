import Image from "next/image";
import cardImage from "../assets/card-image.png";
import heartImage from "../assets/heart.png";
import mapIcon from "../assets/location.png";
import wifi from "../assets/WifiHigh.png";
import swimmingPool from "../assets/SwimmingPool.png";
import building from "../assets/Frame.png";
import starIcon from "../assets/Star.png";
import viewIcon from "../assets/ArrowSquareOut.png";
import thumbIcon from "../assets/thumb_up.png";
export default function Home() {
  return (
    <div className="py-3 ">
      <div className="max-w-[1088px] mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left side with image */}
          <div className="flex justify-center items-center mx-auto relative  pt-[14px] ps-[16px] pr-[16px] lg:pr-0  pb-[16px]">
            <div className="flex justify-center items-center">
              <Image
                src={cardImage}
                alt="Hotel room"
                className="rounded-[8px] w-full lg:w-[335px] lg:h-[235px] object-cover"
              />
            </div>

            <div className="absolute w-[32px] h-[32px] top-12 md:top:8 lg:top-10 right-14 md:right-12 lg:right-1 p-2 rounded-full bg-gray-400/75">
              <Image className=" " src={heartImage} alt="heart" />
            </div>
            <div className="w-[59.65px] h-[20.57px] bg-gray-500/90 flex justify-center items-center gap-[6.17px] p-[6px] absolute bottom-10 rounded-[20.57px]">
              <div className="w-[8.23px] h-[8.23px] bg-white rounded-full"></div>
              <div className="w-[8.23px] h-[8.23px] bg-[#959595] rounded-full"></div>
              <div className="w-[8.23px] h-[8.23px] bg-[#959595] rounded-full"></div>
              <div className="w-[6.17px] h-[6.17px] bg-[#959595] rounded-full"></div>
            </div>
          </div>

          <div className="md:flex md:justify-between ">
            {/* Middle content */}
            <div className="flex flex-col md:flex-row">
              <div className="pt-[14px] ps-[24px] pb-[44px] pr-[13px]">
                <div className="flex items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-3 md:mb-4">
                      <h2 className="text-[16px] md:text-2xl font-bold text-[#000000]">
                        Hotel Golden Palace, Puri
                      </h2>
                      <div className="flex gap-[5px]">
                        <Image
                          className="w-4 h-4"
                          src={starIcon}
                          alt="star icon"
                        />
                        <Image
                          className="w-4 h-4"
                          src={starIcon}
                          alt="star icon"
                        />
                        <Image
                          className="w-4 h-4"
                          src={starIcon}
                          alt="star icon"
                        />
                        <Image
                          className="w-4 h-4"
                          src={starIcon}
                          alt="star icon"
                        />
                      </div>
                    </div>
                    <div className="flex items-center mb-3 md:mb-4 gap-[2px]">
                      <Image
                        className="w-4 h-4 block lg:hidden"
                        src={mapIcon}
                        alt="location"
                      />
                      <p className="text-[#626262] ">
                        VIP Rd, Puri, Odisha-752002
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-4 mb-3 md:mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#5054D9] font-bold">
                      View property in map
                    </span>
                    <Image className="w-4 h-4" src={viewIcon} alt="view icon" />
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#000000]">📍</span>
                    <span className="text-xs ms-2 text-[#424242] font-medium">
                      34.32 KM from center
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 mb-3 md:mb-4">
                  <div className="flex items-center">
                    <Image className="w-4 h-4 mr-2" src={wifi} alt="wifi" />
                    <span className="text-[9px] md:text-sm font-medium text-[#626262]">
                      Free Wifi
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Image
                      className="w-4 h-4 mr-2"
                      src={swimmingPool}
                      alt="pool"
                    />
                    <span className="text-[9px] md:text-sm font-medium text-[#626262]">
                      Swimming Pool
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Image
                      className="w-4 h-4 mr-2"
                      src={building}
                      alt="building"
                    />
                    <span className="text-[9px] md:text-sm font-medium text-[#626262]">
                      City View
                    </span>
                  </div>
                </div>

                <div className="flex items-center mb-3 md:mb-4">
                  <button className="w-[161px] h-[32px] bg-[#E1E1E159] flex justify-center items-center rounded-[9.5px]">
                    <Image
                      className="w-4 h-4 mr-2"
                      src={thumbIcon}
                      alt="thumb up"
                    />
                    <div className="flex gap-2">
                      <span className="text-base text-[#000000] font-semibold">
                        4.5{" "}
                      </span>
                      <span className="text-[#626262] text-base font-medium">
                        (23 Reviews)
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              <div className="border-dashed border-r-[1px] border-[#626262] hidden md:block"></div>
              <div className="border-dashed border-b-[1px] border-[#626262] block md:hidden"></div>
            </div>

            {/* Right side pricing */}
            <div className="px-4 pt-[21px] pb-[19px] hidden md:flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-end gap-4 mb-4">
                  <button className="w-[54px] h-[26px] text-xs font-bold bg-[#B8BBFF40] rounded-[4px] text-[#5054D9]">
                    Best
                  </button>
                  <button className="w-[89px] h-[26px] text-xs font-bold bg-[#FFD18140] rounded-[4px] text-[#F99F1D]">
                    Cheapest
                  </button>
                </div>
                <div className="flex items-center justify-end mb-1">
                  <span className="text-base line-through text-[#444444]">
                    ₹ 34,440.87
                  </span>
                  <span className="ml-2 text-2xl font-bold text-blue-600">
                    ₹ 31,440.87
                  </span>
                </div>
                <p className="text-[10px] text-[#5A5A5A] text-right mb-2">
                  Includes Taxes & Charges
                </p>
                <p className="text-base text-[#5A5A5A] text-right mb-2">
                  3 nights
                </p>
                <p className="text-sm text-gray-600 text-right mb-4">
                  2 Adult, 2 Child
                </p>
              </div>
              <div className="flex justify-end">
                <button className="w-[274px] h-[45px] border border-[#5054D9] text-[#5054D9] rounded-[8px] font-medium text-md">
                  Choose Room
                </button>
              </div>
            </div>
            {/* Right side pricing  for mobile devices*/}
            <div className="p-6 flex items-center gap-2 md:hidden">
              <div className="flex items-center justify-end mb-1">
                <p className=" text-xl  text-[#5054D9] font-bold">
                  ₹ 31,440.87
                  <span className="text-base  text-[#707070] font-bold">
                    / 3 nights
                  </span>
                </p>
              </div>
              <div className="flex">
                <button className="w-[129px] h-[32px] border border-[#5054D9] text-[#5054D9] rounded-[8px] font-medium text-sm">
                  Choose Room
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
