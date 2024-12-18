import React from 'react'
import Image from 'next/image'
import { Layout, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from "@/components/ui/progress"

function SideBar() {
  return (
    <div className='shadow-md p-7  h-screen'>
      <Image src={'./logo.svg'} alt='img' width={170} height={120} />
      <div className='mt-10 '>
        <Button className='w-full'>+ Upload pdf</Button>
        <div className='flex gap-2 items-center p-3 mt-5 hover:bg-slate-100 rounded-lg cursor-pointer '>
          <Layout />
          <h2>Workspace</h2>
        </div>
        <div className='flex gap-2 items-center p-3 mt-1 hover:bg-slate-100 rounded-lg cursor-pointer '>
          <Shield />
          <h2>Upgrade</h2>
        </div>
      </div>
      <div className='absolute bottom-24 w-[80%]'>
        <Progress value={5} />
        <p className='text-sm mt-1'>2 out of 5 pdf uploaded</p>
        <p className='text-sm text-gray-400 mt-1'>Upgrade to Upload more pdfs</p>

      </div>
    </div>
  )
}

export default SideBar
