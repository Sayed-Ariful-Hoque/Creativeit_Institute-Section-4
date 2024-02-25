import React from 'react'

const LIstItem = ({href, atag}) => {
  return (
   <li>
    <a className="text-[#767676] font-DMSans text-sm capitalize hover:text-black hover:border-b-2  hover:border-b-slate-950" href={href}>{atag}</a>
   </li>
  )
}

export default LIstItem