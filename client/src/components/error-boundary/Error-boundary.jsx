import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        hasErrored: false
      }
    }

  static getDerivedStateFromError(error) {

    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render(){
    if(this.state.hasErrored){
      return <div className="w-screen h-screen bg-gray-900 text-gray-100 flex items-center justify-center text-6xl "> Something went wrong </div>
    }
    return this.props.children;
  }
}

export default ErrorBoundary