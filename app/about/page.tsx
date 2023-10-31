"use client";
import Mission from '../components/mission'
import CoreValues from '../components/core-values'
import Structure from '../components/structure'
import Team from '../components/team'
import About from '../components/about';

type Props = {}

const page = (props: Props) => {
  return (
    <div className='pt-20'>
     <About/>
    <Mission/>
   <CoreValues/>
   <Structure/>
   <Team/>
    </div>
  )
}

export default page