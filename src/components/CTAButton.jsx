import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function CTAButton({content, link}) {
    const navigate = useNavigate()
    function navigateToAnotherPage(){
        navigate(link)
    }
  return (
    <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg" onClick={navigateToAnotherPage}>{content}</button>
  )
}
