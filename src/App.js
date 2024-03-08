import { useState } from 'react';
import { AreaChart } from '@mantine/charts';
import moment from 'moment';
import Layout from '../src/Component/Layout';
import { Indicator } from '@mantine/core';
import { AvatarSvg, CalenderSvg, TrendSvg, PlusSvg, ArrowSvg, UserIconSvg, ArrowRightSvg } from './assets/svgs';
import './App.css';
import Blog1 from './assets/images/Blog1.png';
import Blog2 from './assets/images/Blog2.png';
import { DatePicker } from '@mantine/dates';
import { weeklyData, DailyData, MonthlyData, YearlyData } from './Component/Data';

const App = () => {
  const [calenderOpen, setCalenderOpen] = useState(false);
  const [data, setData] = useState(weeklyData);

  const [calender1, setCalender1] = useState(null);
  const [calender2, setCalender2] = useState(null);

  const UserList = [
    {
      name: 'Phoenix Baker',
      active: 'Last active Feb 2022',
    },
    {
      name: 'Lana Steiner',
      active: 'Last active Jan 2022',
    },
    {
      name: 'Demi Wikinson',
      active: 'Last active Feb 2022',
    },
    {
      name: 'Candice Wu',
      active: 'Last active Feb 2022',
    },
    {
      name: 'Natali Craig',
      active: 'Last active Mar 2022',
    },
  ];

  const userIcon = (name) => {
    const value = name.split(' ').map((list) => {
      return list.slice(0, 1).toUpperCase();
    });
    return value.join('');
  };

  const holidays = ['2024-03-10', '2024-03-15', '2024-03-20']; // Add your holiday dates here

  const isHoliday = (date) => holidays.includes(moment(date).format('YYYY-MM-DD'));

  const onCalenderClose = () => {
    setCalender1(null);
    setCalender2(null);
    setCalenderOpen(false);
  };

  const dayRendere = (date) => {
    const day = date.getDate();
    return (
      <Indicator size={6} color="#3E3CE1" offset={-5} position="bottom-center" disabled={!isHoliday(date)}>
        <div>{day}</div>
      </Indicator>
    );
  };
  return (
    <div className="w-full h-fit bg-modifiedBlack ">
      <Layout>
        {/* Backdrop */}
        {calenderOpen && <div className="fixed top-0 left-0 w-full h-full z-10 " onClick={onCalenderClose}></div>}
        <div className="pt-5 size-full h-[calc(100vh-20px)] overflow-y-scroll">
          {/* main Content  */}
          <div className="bg-gray-50 rounded-tl-[40px]">
            {/* Main */}
            <div className="flex flex-col gap-5 py-[30px]">
              {/* Header Section  */}
              <div className="flex flex-col gap-5 px-[30px]">
                <div className="flex justify-between gap-2.5 pb-5 border-b border-[#EAECF0]">
                  <div className="flex flex-col gap-1">
                    <div className=" text-[30px] leading-[38px] font-semibold text-[#101828]">Welcome, Lucas</div>
                    <div className=" text-base font-normal text-[#475467]">
                      Your current QxEaaS summary and activity.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <AvatarSvg alt="AvatarSvg" width={48} height={48} />
                    <div>
                      <div className="text-base font-semibold text-[#344054]">Quantum eMotion</div>
                      <div className="text-[12px] leading-[18px] font-normal text-[#475467]">4 members</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 relative">
                  <div className="border border-[#D0D5DD] rounded-lg shadow-[0_1px_2px_0_#1018280D]">
                    <button
                      className="text-sm font-semibold text-[#344054] bg-[#F9FAFB] px-4 py-2 border-r rounded-l-lg cursor-pointer h-full"
                      onClick={() => setData(DailyData)}
                    >
                      24 hours
                    </button>
                    <button
                      className="text-sm font-semibold text-[#344054] bg-[#F9FAFB] px-4 py-2 border-r cursor-pointer h-full"
                      onClick={() => setData(weeklyData)}
                    >
                      7 days
                    </button>
                    <button
                      className="text-sm font-semibold text-[#344054] bg-[#F9FAFB] px-4 py-2 border-r cursor-pointer h-full"
                      onClick={() => setData(MonthlyData)}
                    >
                      30 days
                    </button>
                    <button
                      className="text-sm font-semibold text-[#344054] bg-[#F9FAFB] px-4 py-2 border-r rounded-r-lg cursor-pointer h-full"
                      onClick={() => setData(YearlyData)}
                    >
                      12 months
                    </button>
                  </div>
                  <div
                    className="flex gap-1 border border-[#D0D5DD] rounded-lg px-[14px] py-2.5 shadow-[0_1px_2px_0_#1018280D]"
                    onClick={() => setCalenderOpen(!calenderOpen)}
                  >
                    <CalenderSvg alt="CalenderSvg" width={20} height={20} />

                    <div
                      className={`text-sm font-semibold ${calender1 === null || calender2 === null ? ' text-modifiedGrey' : 'text-[#344054]'} cursor-pointer`}
                    >
                      {calender1 === null || calender2 === null
                        ? 'Select dates'
                        : `${moment(calender1).format('ll')} - ${moment(calender2).format('ll')}`}
                    </div>
                  </div>
                </div>

                {/* calender */}
                {calenderOpen && (
                  <div className="absolute top-[23%] left-[30%] py-3 z-30 bg-white shadow-[0_20px_24px_-4px_#10182814] border border-[#EAECF0] rounded-xl flex">
                    <div className="flex flex-col gap-1  px-4 border-r border-[#EAECF0] w-[192px]">
                      <div className="py-2 px-4 text-sm font-medium text-[#344054] cursor-pointer ">Today</div>
                      <div className="py-2 px-4 text-sm font-medium text-[#344054] cursor-pointer">Yesterday</div>
                      <div className="py-2 px-4 text-sm font-medium text-[#344054] cursor-pointer">This week</div>
                      <div className="py-2 px-4 text-sm font-medium text-[#344054] cursor-pointer">Last week</div>
                      <div className="py-2 px-4 text-sm font-medium text-[#344054] cursor-pointer">This month</div>
                      <div className="py-2 px-4 text-sm font-medium text-[#344054] cursor-pointer">Last month</div>
                      <div className="py-2 px-4 text-sm font-medium text-[#344054] cursor-pointer">This year</div>
                      <div className="py-2 px-4 text-sm font-medium text-[#344054] cursor-pointer">Last year</div>
                      <div className="py-2 px-4 text-sm font-medium text-[#344054] cursor-pointer">All time</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex">
                        <DatePicker
                          label="Book hotel"
                          placeholder="Pick dates range"
                          size="md"
                          value={calender1}
                          onChange={setCalender1}
                          renderDay={dayRendere}
                          className="px-6 py-5"
                        />
                        <DatePicker
                          label="Book hotel"
                          placeholder="Pick dates range"
                          size="md"
                          value={calender2}
                          onChange={setCalender2}
                          renderDay={dayRendere}
                          defaultDate={new Date(2024, 3, 1)}
                          className="px-6 py-5"
                        />
                      </div>
                      <div className="flex justify-between border-t border-[#EAECF0] p-4">
                        <div className="flex items-center gap-3">
                          <input
                            value={calender1 !== null ? moment(calender1).format('ll') : '-'}
                            className="w-[136px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg text-center"
                          />
                          <span>-</span>
                          <input
                            value={calender2 !== null ? moment(calender2).format('ll') : '-'}
                            className="w-[136px] py-2.5 px-3.5 border border-[#D0D5DD] rounded-lg text-center"
                          />
                        </div>
                        <div className="flex gap-3">
                          <button
                            className="py-2.5 px-4 border border-[#D0D5DD] rounded-lg text-sm font-semibold text-[#344054]"
                            onClick={onCalenderClose}
                          >
                            Cancel
                          </button>
                          <button
                            className="py-2.5 px-4 border border-[#3E3CE1] rounded-lg text-sm font-semibold text-white bg-[#3E3CE1]"
                            onClick={() => setCalenderOpen(false)}
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* section 1  */}
              <div className="flex gap-6 px-[30px]">
                {/* chart  */}
                <div className="w-full relative">
                  <div className="absolute flex items-center h-[calc(100%-48px)]">
                    <div
                      className=" text-center text-xs font-medium text-[#475467] "
                      style={{ writingMode: 'vertical-lr' }}
                    >
                      Usage in KiB
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <AreaChart
                      h={300}
                      data={data}
                      dataKey="date"
                      series={[{ name: 'usage', color: 'indigo.6' }]}
                      curveType="natural"
                      withDots={false}
                      className="max-h-[222px]"
                    />
                    <div className="p-4 text-center text-xs font-medium text-[#475467]">7 days</div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 w-full max-w-[240px]">
                  <div className="flex flex-col gap-2 ">
                    <div className="font-medium text-sm text-[#475467] ">Limit</div>
                    <div className="flex gap-1 items-baseline text-[#101828]">
                      <div className="font-semibold text-[36px] leading-[44px] text-[#101828]">25</div>
                      <div className="font-medium text-[20px] leading-[30px] ">Mib</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="font-medium text-sm text-[#475467] ">Entropy consumption</div>
                    <div className="flex gap-1 items-baseline text-[#101828] relative">
                      <div className="font-semibold text-[36px] leading-[44px] ">0</div>
                      <div className="font-medium text-[20px] leading-[30px] ">KiB</div>
                      <div className="flex gap-1 absolute left-[30%] ">
                        <TrendSvg alt="AvatarSvg" width={20} height={20} />
                        <div className="text-sm font-medium text-[#079455] ">0%</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="font-medium text-sm text-[#475467] ">Total API Calls</div>
                    <div className="flex gap-1 items-baseline text-[#101828]">
                      <div className="font-semibold text-[36px] leading-[44px] ">0</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* section2  */}
              <div className="flex flex-col gap-5 px-[30px]">
                <div className="text-lg font-semibold text-[#101828] h-[49px] border-b ">Getting started</div>
                {/* main content  */}
                <div className="flex gap-6">
                  {/* Section  */}
                  <div className="flex flex-col gap-5 w-full">
                    {/* CTAs  */}
                    <div className="grid grid-cols-2 gap-5">
                      <div className="flex justify-between gap-3 p-5 border border-[#EAECF0] rounded-xl shadow-[0_1px_2px_0_#1018280D] cursor-pointer">
                        <div className="w-12">
                          <PlusSvg alt="AvatarSvg" width={48} height={48} className="cursor-pointer" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <div className="text-base font-semibold text-[#5654E5]">Create an API key</div>
                          <div className="text-sm font-normal text-[#475467]">
                            Create a new API key to generate quantum entropy
                          </div>
                        </div>
                        <div className="w-12">
                          <ArrowSvg alt="AvatarSvg" width={48} height={48} className="cursor-pointer" />
                        </div>
                      </div>

                      <div className="flex gap-3 justify-between p-5 border border-[#EAECF0] rounded-xl shadow-[0_1px_2px_0_#1018280D] cursor-pointer">
                        <div className="w-12">
                          <UserIconSvg alt="AvatarSvg" width={48} height={48} className="cursor-pointer" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <div className="text-base font-semibold text-[#5654E5]">Invite a team member</div>
                          <div className="text-sm font-normal text-[#475467]">Add member to your organization</div>
                        </div>
                        <div className="w-12">
                          <ArrowSvg alt="AvatarSvg" width={48} height={48} className="cursor-pointer" />
                        </div>
                      </div>
                    </div>

                    {/* Posts */}
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-5">
                        <div className=" text-lg font-semibold text-[#101828]">Documentation</div>
                        <div className="h-px bg-[#EAECF0]"></div>
                      </div>
                      {/* Blogs  */}
                      <div className="grid grid-cols-2 gap-5">
                        {/* Blogs 1 */}
                        <div className="flex flex-col gap-5">
                          <img src={Blog1} alt="Blog1" height={240} width={632} />
                          <div className="flex flex-col gap-6">
                            {/* part1  */}
                            <div className="flex flex-col gap-2">
                              <div className="flex gap-4 justify-between">
                                <div className="text-lg font-medium text-[#101828]">Overview</div>
                                <ArrowRightSvg alt="ArrowRightSvg" width={24} height={24} className="cursor-pointer" />
                              </div>
                              <div className="text-wrap text-base font-normal text-[#475467]">
                                How do you create compelling presentations that wow your colleagues and impress your
                                managers?
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <div className="flex items-center gap-1.5 py-0.5 px-2 border border-[#D0D5DD] rounded-md shadow-[0_1px_2px_0_#1018280D]">
                                <div className="w-2 h-2 rounded-full bg-[#5654E5]" />
                                <div className="text-sm align-middle font-medium text-[#344054] ">Design</div>
                              </div>
                              <div className="flex items-center gap-1.5 py-0.5 px-2 border border-[#D0D5DD] rounded-md shadow-[0_1px_2px_0_#1018280D]">
                                <div className="w-2 h-2 rounded-full bg-[#6172F3]" />
                                <div className="text-sm align-middle font-medium text-[#344054] ">Research</div>
                              </div>
                              <div className="flex items-center gap-1.5 py-0.5 px-2 border border-[#D0D5DD] rounded-md shadow-[0_1px_2px_0_#1018280D]">
                                <div className="w-2 h-2 rounded-full bg-[#EE46BC]" />
                                <div className="text-sm align-middle font-medium text-[#344054] ">Presentation</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Blogs 2 */}
                        <div className="flex flex-col gap-5">
                          <img src={Blog2} alt="Blog2" height={240} width={632} />
                          <div className="flex flex-col gap-6">
                            {/* part1  */}
                            <div className="flex flex-col gap-2">
                              <div className="flex gap-4 justify-between">
                                <div className="text-lg font-medium text-[#101828]">Tutorial</div>
                                <ArrowRightSvg alt="ArrowRightSvg" width={24} height={24} className="cursor-pointer" />
                              </div>
                              <div className="text-wrap text-base font-normal text-[#475467]">
                                How do you create compelling presentations that wow your colleagues and impress your
                                managers?
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <div className="flex items-center gap-1.5 py-0.5 px-2 border border-[#D0D5DD] rounded-md shadow-[0_1px_2px_0_#1018280D]">
                                <div className="w-2 h-2 rounded-full bg-[#5654E5]" />
                                <div className="text-sm align-middle font-medium text-[#344054] ">Design</div>
                              </div>
                              <div className="flex items-center gap-1.5 py-0.5 px-2 border border-[#D0D5DD] rounded-md shadow-[0_1px_2px_0_#1018280D]">
                                <div className="w-2 h-2 rounded-full bg-[#6172F3]" />
                                <div className="text-sm align-middle font-medium text-[#344054] ">Research</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* side content  */}
                  <div className="h-full flex flex-col gap-5 w-full max-w-[240px]">
                    <div className="flex flex-col gap-2 pb-5 border-b border-[#EAECF0]">
                      <div className="flex gap-2.5 justify-between">
                        <div className="text-sm font-medium text-[#475467]">Current Plan</div>
                        <div className="text-sm font-semibold text-[#5654E5] cursor-pointer">Upgrade Plan</div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="text-[30px] leading-[38px] font-semibold text-[#101828]">Starter</div>
                        <div>
                          <span className="text-[12px] leading-[18px] font-normal text-[#475467]">Renewal date</span>:{' '}
                          <span className="text-[12px] leading-[18px] font-semibold text-[#475467]">2024-02-03</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="text-sm font-medium text-[#475467]">Quantum eMotion’s Organization</div>
                      <div className="flex flex-col gap-5">
                        {UserList.map(({ name, active }, index) => {
                          return (
                            <div className="flex gap-3" key={index}>
                              <div className=" flex items-center justify-center w-8 h-8 rounded-full text-[#94969C] text-center text-sm font-semibold bg-[#F2F4F7]">
                                {userIcon(name)}
                              </div>
                              <div className="flex flex-col gap-2">
                                <div className="text-sm font-medium text-[#344054]">{name}</div>
                                <div className="text-sm font-normal text-[#475467]">{active}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default App;
