import React from 'react';
import { withRouter } from 'react-router-dom';

const HelpDropdown = ({ history }) => {
  return (
    <div className="w-64 flex flex-col items-center justify-center p-8 shadow-xl bg-white border-2 border-gray-300">
      <div
        onClick={()=>history.push('/help-center')}
        className="w-full cursor-pointer text-cetner font-medium py-2 border border-black rounded-lg">Help center
      </div>
      <div className="my-6">
        OR
      </div>
      <div
        // onClick={()=>history.push('')}
        className="w-full cursor-pointer text-center font-medium py-2 border border-black rounded-lg">Live Help
      </div>
    </div>
  )
}

export default withRouter(HelpDropdown);