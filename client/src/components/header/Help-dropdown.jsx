import React from 'react';
import { withRouter } from 'react-router-dom';

const HelpDropdown = ({ history }) => {
  return (
    <div className="w-48 flex flex-col items-center justify-center p-4 pt-8 shadow-xl bg-white rounded-b">
      <div
        onClick={()=>history.push('/help-center')}
        className="w-full cursor-pointer text-center text-pink-600 font-medium py-2 border border-pink-600 rounded">Help center
      </div>
    </div>
  )
}

export default withRouter(HelpDropdown);