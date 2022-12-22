import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ApiTable from '../companents/ApiTable/ApiTable'
import Changnyeong from '../companents/Changnyeong'

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Changnyeong />} />
        <Route path='/apiTable' element={<ApiTable />} />
      </Routes>
    </>
  )
}
