import ClassTile from "./components/ClassTile";
import Button from "./components/Button";
import { LuCalendarPlus, LuCalendarMinus, LuCirclePlus, LuTrash2, LuGrid2X2, LuColumns2, LuGalleryVertical, LuGalleryHorizontal } from "react-icons/lu";

export default function Home() {
  return (
    <div>
      <div className="items-center justify-center">
        <div className="m-4 md:m-12 lg:m-20">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 lg:mb-8">Academic Planner</h1>
          <p className="text-sm md:text-base mb-6 md:mb-8 lg:mb-10">**THIS IS JUST A MOCK-UP, NOT FUNCTIONAL!**</p>
          
          {/* buttons for view and system */}
          <div className="grid grid-cols-2 gap-3 md:gap-6 w-full mb-6 md:mb-8 ml-auto">
            <Button className="hover:bg-green-200 active:bg-green-300 hover:text-green-900">
              <LuGalleryHorizontal className="md:text-lg mr-1.5" aria-hidden />
              <LuGalleryVertical className="hidden md:text-lg mr-1.5" aria-hidden />
              <span>Horizontal View</span>
            </Button>
            <Button className="hover:bg-green-200 active:bg-green-300 hover:text-green-900">
              <LuColumns2 className="hidden text-lg md:text-xl mr-1.5" aria-hidden />
              <LuGrid2X2 className="text-lg md:text-xl mr-1.5" aria-hidden />
              <span>Quarter System</span>
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 mb-6 lg:mb-8">
            <div className="flex flex-1 gap-4 md:gap-6 lg:gap-8">

              {/* "outside" box for extra courses */}
              <div className="flex-1 min-h-30 md:min-h-36 border-2 border-gray-300 border-dashed rounded-md p-2.5 md:p-4">
                <h2 className="font-bold text-sm md:text-base">Your Courses</h2>
                <div className="flex flex-wrap items-start gap-3 mt-3">
                  <ClassTile name="CS 100" color="bg-orange-200 hover:bg-orange-300 focus:bg-orange-300" />
                  <ClassTile name="ENG 101" color="bg-yellow-200 hover:bg-yellow-300 focus:bg-yellow-300" />
                  <button className="bg-gray-200 hover:bg-blue-200 active:bg-blue-300 hover:text-blue-900 flex items-center justify-center w-full max-w-28 md:max-w-32 min-h-max h-14 md:h-18 rounded-md p-2 text-left transition-colors cursor-pointer">
                    <LuCirclePlus className="text-xl md:text-2xl mr-2 md:mr-3" aria-hidden />
                    <span className="w-min wrap-break-word text-sm md:text-base">Add Course</span>
                  </button>
                </div>
              </div>

              {/* trash box for removing courses */}
              <div className="relative max-w-full max-h-30 md:max-h-36 flex-[0.1] md:flex-[0.075] text-center text-gray-400 transition border-2 border-gray-300 border-dashed rounded-md flex items-center justify-center px-2 md:px-4">
                <div className="w-full">
                  <LuTrash2 className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-xl md:text-3xl" aria-hidden />
                </div>
              </div>

            </div>
          </div>

          <div className="mb-8">
            {/* the rest of the terms in a grid */}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-y-8 lg:gap-x-6 lg:gap-y-12 place-items-start mb-8">
              
              {/* term 1 */}
              <div className="w-full min-h-[24vh] h-full p-2.5 md:p-4 border-2 flex-shrink-0 border-gray-300 border-dashed rounded-md">
                <div className="flex items-center justify-center flex-col md:flex-row gap-1 md:gap-1.5 font-bold text-center text-sm md:text-base">
                  <h2 className="bg-gray-100 rounded px-1.5 py-0.25">Year 1</h2>
                  <h2 className="bg-gray-100 rounded px-1.5 py-0.25">Term 1</h2>
                </div>
                <div className="flex flex-col items-center gap-2 md:gap-4 mt-3">
                  <ClassTile name="ENG 102" color="bg-yellow-200 hover:bg-yellow-300 focus:bg-yellow-300" />
                  <ClassTile name="CS 101" color="bg-orange-200 hover:bg-orange-300 focus:bg-orange-300" />
                </div>
              </div>

              {/* term 2 */}
              <div className="w-full min-h-[24vh] h-full p-2.5 md:p-4 border-2 flex-shrink-0 border-gray-300 border-dashed rounded-md">
                <div className="flex items-center justify-center flex-col md:flex-row gap-1 md:gap-1.5 font-bold text-center text-sm md:text-base">
                  <h2 className="bg-gray-100 rounded px-1.5 py-0.25">Year 1</h2>
                  <h2 className="bg-gray-100 rounded px-1.5 py-0.25">Term 2</h2>
                </div>
                <div className="flex flex-col items-center gap-2 md:gap-4 mt-3">
                  <ClassTile name="CS 102" color="bg-orange-200 hover:bg-orange-300 focus:bg-orange-300" />
                </div>
              </div>

              {/* term 3 */}
              <div className="w-full min-h-[24vh] h-full p-2.5 md:p-4 border-2 flex-shrink-0 border-gray-300 border-dashed rounded-md">
                <div className="flex items-center justify-center flex-col md:flex-row gap-1 md:gap-1.5 font-bold text-center text-sm md:text-base">
                  <h2 className="bg-gray-100 rounded px-1.5 py-0.25">Year 1</h2>
                  <h2 className="bg-gray-100 rounded px-1.5 py-0.25">Term 3</h2>
                </div>
                <div className="flex flex-col items-center gap-2 md:gap-4 mt-3">
                  <ClassTile name="CS 103" color="bg-orange-200 hover:bg-orange-300 focus:bg-orange-300" />
                </div>
              </div>

              {/* term 4 */}
              <div className="w-full min-h-[24vh] h-full p-2.5 md:p-4 border-2 flex-shrink-0 border-gray-300 border-dashed rounded-md">
                <div className="flex items-center justify-center flex-col md:flex-row gap-1 md:gap-1.5 font-bold text-center text-sm md:text-base">
                  <h2 className="bg-gray-100 rounded px-1.5 py-0.25">Year 1</h2>
                  <h2 className="bg-gray-100 rounded px-1.5 py-0.25">Term 4</h2>
                </div>
              </div>

              {/* add/remove year buttons */}
              <div className="flex flex-col items-center gap-2 md:gap-4 mt-3">
                <div className="flex-row flex gap-4 items-center justify-center">
                  <button className="flex items-center justify-center rounded-full w-10 md:w-16 h-10 md:h-16 bg-blue-100 hover:bg-blue-200 active:bg-blue-300 hover:text-blue-900 transition cursor-pointer">
                    <LuCalendarPlus className="text-xl md:text-3xl" aria-label="Add Year" />
                  </button>
                  <button className="flex items-center justify-center rounded-full w-10 md:w-16 h-10 md:h-16 bg-red-100 hover:bg-red-200 active:bg-red-300 hover:text-red-900 transition cursor-pointer">
                    <LuCalendarMinus className="text-xl md:text-3xl" aria-label="Remove Year" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
