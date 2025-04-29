import { Button } from '@/components/ui/button';
import React from 'react'
import { Link } from 'react-router-dom';

const LearnMOre = () => {
  return (
    <>
    <div className='h-full flex flex-col gap-5 items-center justify-center font-bold text-5xl my-20'>   
        What Do U wanna Learn The Btn is just for showcase here
        <Link to={'/'}>
        
        <Button className='text-white'>Go Back</Button>
        </Link>
    </div>
    </>
  )
}

export default LearnMOre;