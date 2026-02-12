'use client'
import TabContainer from '@/components/TabsContainer'
import React, { useEffect } from 'react'
import { nanoid } from "nanoid";

const Page = () => {

  useEffect(() => {
    let clientId = localStorage.getItem("clientId");

    if (!clientId) {
      clientId = nanoid(12);
      localStorage.setItem("clientId", clientId);
    }
  }, []);

  return (
    <div className='flex justify-center items-center w-screen h-screen '>
      <TabContainer />
    </div>
  )
}

export default Page