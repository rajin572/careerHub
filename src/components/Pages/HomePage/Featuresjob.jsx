import React from 'react'
import Button from "./../../Button"
import { Link } from 'react-router-dom'
function Featuresjob({data}) {
  return (
    <div>
    <div className='w-[150px]'>
         <img src={data.company_logo} alt="" className='object-contain h-[80px]'/>
    </div>
    <h3 className='text-xl text-gray-500'>{data.job_title}</h3>
    <h4 className='text-lg font-mono '>{data.company_name}</h4>
    <div className='my-5'><span className='font-mono'>Place: {data.location}</span>, Salary: <span>{data.salary}</span></div>
    <Link to={`/job/${data.id}`}><Button>View Details</Button></Link>
    </div>
  )
}

export default Featuresjob