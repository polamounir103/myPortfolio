import React from 'react'

function SkillItem(probs) {
  return (
    <h2 className="text-red-500 capitalize px-5 py-3 bg-gray-200 rounded-xl"> {probs.name}</h2>
  )
}

export default SkillItem