import React, { useContext } from 'react'
import { SidebarNavData } from '../Constant.js';
import SidebarNavButtom from './SidebarNavButtom';
import SidebarContext from '../utils/SidebarContext.js';

const SidebarNavigation = () => {
const {isSidebarOpen} = useContext(SidebarContext)
if(!isSidebarOpen)
  return;
return (
  <div className='pl-5 pr-5 h-full w-60 flex-col flex-shrink-0 overflow-auto bg-white'>
      <div className='w-full flex flex-col gap-1'>
        {
          SidebarNavData?.functionality && SidebarNavData?.functionality.map((data, index) => {
            return <SidebarNavButtom prop={data} key={index} />
          })
        }
        <span className='m-1 border-2'></span>
      </div>
      <div className='w-full flex flex-col gap-1'>
        <p className='m-2 text-bold text-xl font-semibold'>You</p>
        {
          SidebarNavData?.userData && SidebarNavData?.userData.map((data, index) => {
            return <SidebarNavButtom prop={data} key={index} />
          })
        }
        <span className='m-1 border-2'></span>
      </div>
      <div className='w-full flex flex-col gap-1'>
        <p className='m-2 text-bold text-xl font-semibold'>Subscriptions</p>
        {
          SidebarNavData?.subscriptions && SidebarNavData?.subscriptions.map((data, index) => {
            return <SidebarNavButtom prop={data} key={index} />
          })
        }
        <span className='m-1 border-2'></span>
      </div>
      <div className='w-full flex flex-col gap-1'>
        <p className='m-2 text-bold text-xl font-semibold'>Explore</p>
        {
          SidebarNavData?.explore && SidebarNavData?.explore.map((data, index) => {
            return <SidebarNavButtom prop={data} key={index} />
          })
        }
      </div>
    </div>
  )
}

export default SidebarNavigation;
