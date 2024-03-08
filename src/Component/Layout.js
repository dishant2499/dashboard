import React from 'react';
import { TextInput } from '@mantine/core';

import {
  LogoSvg,
  SearchSvg,
  BarChartSvg,
  CreditCardSvg,
  LogoutSvg,
  FileSvg,
  HomeLineSvg,
  LayerThreeSvg,
  LifeBuoySVG,
  PieChartSvg,
  PlaySquare,
  SettingSVG,
  UserSvg,
} from '../assets/svgs';

const Layout = ({ children }) => {
  return (
    <div className="flex ">
      {/* sidebar */}
      <div className="max-w-[312px]  text-lightgrey rounded-tr-[1px] flex-initial">
        <div className="flex flex-col justify-between h-full">
          {/* Header */}
          <div>
            <div className="flex flex-col pt-10 gap-6 ">
              {/* logo */}
              <div className="px-4">
                <LogoSvg alt="Logo" width={280} height={45} />
              </div>
              {/* part 1 */}
              <div className="flex flex-col  gap-6 ">
                <div className="px-4">
                  <TextInput
                    leftSectionPointerEvents="none"
                    leftSection={<SearchSvg alt="Search" />}
                    placeholder="Search"
                    className="text-base font-normal "
                  />
                </div>
                <div className="flex flex-col gap-1 px-4">
                  <div className=" w-full flex gap-3 text-sm font-medium text-white bg-[#344054]  items-center px-3 py-2 rounded-md cursor-pointer">
                    <HomeLineSvg alt="Logo" width={24} height={24} />
                    <span>Dashboard</span>
                  </div>

                  <div className=" w-full flex items-center px-3 py-2 rounded-md gap-3 text-sm font-medium text-lightgrey cursor-pointer">
                    <LayerThreeSvg alt="Logo" width={24} height={24} />
                    <span>API Key</span>
                  </div>

                  <div className=" w-full flex items-center px-3 py-2 rounded-md gap-3 text-sm font-medium text-lightgrey cursor-pointer">
                    <UserSvg alt="Logo" width={24} height={24} />
                    <span>Organization</span>
                  </div>

                  <div className=" w-full flex items-center px-3 py-2 rounded-md gap-3 text-sm font-medium text-lightgrey cursor-pointer">
                    <BarChartSvg alt="Logo" width={24} height={24} />
                    <span>Usage</span>
                  </div>
                  <div className=" w-full flex items-center px-3 py-2 rounded-md gap-3 text-sm font-medium text-lightgrey cursor-pointer">
                    <CreditCardSvg alt="Logo" width={24} height={24} />
                    <span>Billing</span>
                  </div>
                </div>
              </div>
            </div>
            {/* part 2  */}
            <div className="py-5 px-4">
              <div className="border-[1px] border-modifiedGrey" />
            </div>
            <div className="px-4">
              <div className=" w-full flex justify-between px-3 py-2 rounded-md  gap-2  ">
                <div className="flex gap-3 text-sm font-medium text-lightgrey  items-center cursor-pointer">
                  <PieChartSvg alt="Logo" width={24} height={24} />
                  <span>Applications</span>
                </div>
                <div className="py-0.5 px-2 border-[1px] border-[#333741] rounded-full text-[#94969C] font-medium text-[12px] leading-[18px]  ">
                  Comming soon
                </div>
              </div>
            </div>
            <div className="py-5 px-4">
              <div className="border-[1px] border-modifiedGrey" />
            </div>

            {/* part3  */}
            <div className="flex flex-col gap-1 px-4">
              <div className=" w-full flex items-center px-3 py-2 rounded-md gap-3 text-sm font-medium text-lightgrey cursor-pointer">
                <PlaySquare alt="Logo" width={24} height={24} />
                <span>Tutorials</span>
              </div>
              <div className=" w-full  flex items-center px-3 py-2 rounded-md gap-3 text-sm font-medium text-lightgrey cursor-pointer">
                <FileSvg alt="Logo" width={24} height={24} />
                <span>Documentation</span>
              </div>
            </div>
          </div>
          {/* footer */}
          <div className="flex flex-col gap-5 px-4 pb-6">
            {/* settings */}
            <div className="flex flex-col gap-1">
              <div className=" w-full flex items-center px-3 py-2 rounded-md gap-3 text-sm font-medium text-lightgrey cursor-pointer">
                <LifeBuoySVG alt="Logo" width={24} height={24} />
                <span>Support</span>
              </div>
              <div className=" w-full flex items-center px-3 py-2 rounded-md gap-3 text-sm font-medium text-lightgrey cursor-pointer">
                <SettingSVG alt="Logo" width={24} height={24} />
                <span>Settings</span>
              </div>
            </div>
            {/* userProFIle  */}
            <div className="flex gap-4 justify-between border-t border-modifiedGrey pt-5 pr-5 pl-2">
              <div className="flex gap-3">
                <div className=" flex items-center justify-center w-10 h-10 rounded-full text-[#94969C] text-center text-base font-semibold bg-[#1F242F] cursor-pointer">
                  OR
                </div>
                <div className="text-sm ">
                  <div className=" font-semibold text-[#CECFD2]">Olivia Rhye</div>
                  <div className="font-normal  text-[#94969C]">olivia@untitledui.com</div>
                </div>
              </div>
              <div className="flex w-9 h-9 rounded-lg p-2 cursor-pointer">
                <LogoutSvg alt="LogoutSvg" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content  */}

      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
