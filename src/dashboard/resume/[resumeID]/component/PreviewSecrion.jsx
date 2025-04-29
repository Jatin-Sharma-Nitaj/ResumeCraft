import { ResumeContext } from '@/Context/ResumeContext'
import React, { useContext } from 'react'
import PersonalDetails from './preview/PersonalDetails'
import Summery from './preview/Summery'
import Exp from './preview/Exp'
import Education from './preview/Education'
import Skills from './preview/Skills'

const PreviewSecrion = () => {
    const { resumeinfo, setresumeinfo } = useContext(ResumeContext)

    console.log("🔥 resumeinfo inside PreviewSection:", resumeinfo)
    console.log("🔥 resumeinfo.skills inside PreviewSection:", resumeinfo?.skills)

    return (
        <div className='shadow-lg h-full p-14 border-t-20 border-primary'>
            <PersonalDetails resumeinfo={resumeinfo} />
            <Summery resumeinfo={resumeinfo} />
            <Exp resumeinfo={resumeinfo} />
            <Education resumeinfo={resumeinfo} />
            <Skills resumeinfo={resumeinfo} />
        </div>
    )
}

export default PreviewSecrion
