import { useState } from 'react'
import PersonalDetail from './form/PersonalDetail';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, ArrowRightIcon, Home, LayoutGrid, SquareDashedBottomCodeIcon } from 'lucide-react';
import Summery from './form/Summery';
import {v4 as uuidv4} from 'uuid'
import Experince from './form/Experince';
import Educationform from './form/Educationform ';
import { SkillForm } from './form/SkillForm';
import { Link, Navigate} from 'react-router-dom';
import { useRef } from 'react';



const FormSection = () => {
  const resumeid = useRef(uuidv4());
  const [activeFormIndex, setactiveFormindex] = useState(1)
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3'>

        <div className='flex gap-4'>
          <Link to ={"/dashboard"}>
          <Button>
            <Home className='text-white'/>
          </Button>
          </Link>
        </div>
        <Button
          //  variant="outline"
          size="sm"
          className="flex gap-2 text-white ">
          <LayoutGrid />   Customize  </Button>
        </div>

        <div className="flex gap-1">
          {activeFormIndex > 1 &&
            <Button className="text-white" size="sm"
              onClick={() => setactiveFormindex(activeFormIndex - 1)

              }
            > <ArrowLeftIcon /></Button>}
          <Button className="text-white flex gap-2" size="sm"
            onClick={() => setactiveFormindex(activeFormIndex + 1)}


          > Next
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
      {/* perosnal detail  */}

      {activeFormIndex == 1 ?
        <PersonalDetail /> : null}

      {/* summery  */}

      {activeFormIndex == 2 ?
        <Summery /> : null}

      {/* exp  */}

      {activeFormIndex == 3 ?
        <Experince /> : null}


      {/* Education  */}
      {
        activeFormIndex == 4 ?
          <Educationform /> : null
      }

      {/* skills  */}
      {
        activeFormIndex == 5 ?
          <SkillForm /> : null
      }

      {/* redirect to download page */}
      {
        activeFormIndex == 6 ?
        <Navigate to={`/my-resume/${resumeid.current}/view`} />
        : null
      }
    </div>
  )
}

export default FormSection;