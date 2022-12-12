import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Changnyeong from '../companents/Changnyeong'

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Changnyeong />} />
      </Routes>
    </>
  )
}
