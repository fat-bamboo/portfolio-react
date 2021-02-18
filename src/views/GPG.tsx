import React from 'react'
import { FingerPrintOutline } from 'heroicons-react'

const GPG = () => {
  return (
    <div className="pl-2">
      <div className="text-2xl font-bold flex items-center">
        <FingerPrintOutline size={28} className="mr-4" />
        <div>GPG</div>
      </div>
    </div>
  )
}

export default GPG
