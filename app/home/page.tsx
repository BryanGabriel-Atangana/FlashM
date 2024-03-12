import ProfileMenu from "@/components/ProfileMenu";
import React from "react";
import { redirect } from "next/navigation";
import { DrawerDemo } from "@/components/CreateDocDrawer";
import { createClient } from "@/utils/supabase/server";
import { Breadcrumb } from "@/components/ui/breadcrumb";

const page = async () => {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    return redirect("/login");
  }

  return (
    <div className="w-[100vw] h-[100vh] bg-[#FCFCFC]">
      <main className="grid grid-cols-8 w-[100%] h-[100%]">
        {/* Sidebar*/}
        <div className="grid grid-rows-8 col-span-1  border-r-[#F0F0F0] border-r-[2px] px-3">
          <div className="row-span-1 flex flex-col justify-center ">
            <p className="text-[#7E15FF] text-[1.2rem] font-black">FLASHMIND</p>
          </div>
          <div className="row-span-7 pt-3">
            <div className="flex flex-row items-center gap-2">
              <svg
                width="17"
                height="17"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z"
                  fill="#7E15FF"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-[#7E15FF]">Dashboard</span>
              <svg
                width="17"
                height="17"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
                  fill="#7E15FF"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="grid grid-rows-8 col-span-5  border-r-[#F0F0F0] border-r-[2px] px-4">
          <div className="row-span-1 flex flex-col justify-center px-3 ">
            <p className="text-[#7E15FF] text-[1.2rem]">
              {" "}
              Salut 👋 <strong>Mr.You</strong>,
            </p>
          </div>
          <div className="row-span-7 px-3 ">
            <div className="flex justify-between ">
              {/* search bar */}
              <span className="text-[#303030] text-[2rem]">Documents</span>
              <div className="flex flex-row items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                    fill="#B9BBC6"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <input
                  className="border-b-[1px] bg-[#FCFCFC] border-slate-300  h-[2rem] outline-none"
                  placeholder="Recherche ..."
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 pt-[1rem]">
              <div className="">
                {/* Drawer */}
                <DrawerDemo />
              </div>
            </div>
          </div>
        </div>
        {/* stats */}
        <div className="grid grid-rows-8 col-span-2 px-3">
          <div className="row-span-1 flex flex-col justify-center  ">
            <ProfileMenu />
          </div>
          <div className="row-span-7 ">
            <p className="text-[1.5rem]">stats</p>
            <div>docs : </div>
            <div>cards : </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
