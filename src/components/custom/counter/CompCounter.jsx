import Counter1 from '@/components/memo/couter1'
import React from 'react'
import CounterOne from './Counter1'
import CounterTwo from './Counter2'
import CounterThree from './Counter3'

const CompCounter = () => {
  return (
    <>
    <div className='flex flex-col gap-3 max-w-96 mx-auto'>
      <CounterOne />
       <CounterTwo />
       <CounterThree />
     
    </div>
    </>
  )
}

export default CompCounter