import React from 'react';

const Display = ({color, tone, details}) => {
  return (
    <div className={ `w-full h-full flex items-center justify-center md:rounded-lg bg-${color}-${tone} mb-6`}>
      <div className="text-white text-2xl md:text-5xl font-medium capitalize">{details}</div>
    </div>
  )
}

export default Display;