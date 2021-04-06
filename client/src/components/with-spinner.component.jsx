import React from 'react';


const WithSpinner = WrappedComponent => {
    const Spinner = ({ loading, ...otherProps }) => {

        return (
            <div className="w-full">
                {
                    loading
                        ?
                        <div className="w-full">
                            <WrappedComponent {...otherProps} />
                            <div style={{ background: "rgb(0, 0, 0, 0.1)" }} className="z-50 absolute left-0 top-0 w-screen h-screen flex items-center justify-center">
                                <i className="text-pink-500 text-6xl font-bold fas fa-circle-notch fa-spin"></i>
                            </div>
                        </div>
                        :
                        <WrappedComponent {...otherProps} />
                }
            </div>
        )
    }
    return Spinner
}

export default WithSpinner;