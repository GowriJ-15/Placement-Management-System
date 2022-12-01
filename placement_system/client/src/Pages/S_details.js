import React, { useState, useEffect } from "react";
import ShowMenu from "../Components/ShowMenu";

function S_details() {
  const [state, setState] = useState(false);
  return (
    <div className="bg-gradient-to-tr from-slate-500 to-pink-600 relative w-full h-full">
      <div className="float-left ">
        <div>
          <div className="font-semibold tracking-tight leading-none font-serif text-transparent bg-clip-text bg-gradient-to-tr from-black to-pink-600 mr-5 mt-4 flex mb-0 pb-0  flex-row">
            <div>
              <img
                onClick={() => setState(!state)}
                className=" cursor-pointer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNXvRIuRSR1anM3AOe_EnHoq520h6uV1qDw&usqp=CAU"
                width="20"
              />
            </div>

            <div>
              <a>menu</a>
            </div>
          </div>
          {state ? <ShowMenu /> : null}
        </div>
      </div>
      <div className="float-right border ">
        Hello
      </div>

    </div>
  );
}

export default S_details;
