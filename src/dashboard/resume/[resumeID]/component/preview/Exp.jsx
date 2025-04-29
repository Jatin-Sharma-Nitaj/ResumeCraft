import React from 'react'

const Exp = ({ resumeinfo }) => {
  return (
    <div className='my-6 '>
      <h2 className='text-center text-primary font-bold text-sm mb-2'>Experience</h2>
      <hr className='border-primary' />
      {Array.isArray(resumeinfo?.exp) && resumeinfo.exp.map((exp, index) => (
        <div className='my-5' key={index}>
          <h2 className='text-sm text-primary font-bold'>{exp?.title}</h2>
          <h2 className='text-xs flex justify-between'>
            {exp?.companyame}, {exp?.city}, {exp?.state}
            <span className='text-xs my-2'>
              {exp?.startdate} - {exp?.currentlyWorking ? 'present' : exp?.enddate}
            </span>
          </h2>
          <div
            className='text-xs'
            dangerouslySetInnerHTML={{ __html: exp?.workSummary }}
          />
        </div>
      ))}
    </div>
  )
}

export default Exp