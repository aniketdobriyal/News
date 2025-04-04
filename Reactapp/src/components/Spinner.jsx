import React from 'react'
import loading from './loading.gif'
export default function Spinner() {
  return (
    <div className=' d-flex justify-content-center align-items-center vh-100 vw-100 z-3  bg-dark bg-opacity-50  position-fixed'>
    <img src={loading} alt="loading" width={100}  />
    </div>
  )
}
