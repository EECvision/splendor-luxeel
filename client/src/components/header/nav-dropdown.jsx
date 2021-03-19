const NavDropdown = ({toggle, setToggle}) => {
  return(
    <div className={`${toggle ? "w-80" : "w-0"} fixed top-0 left-0 z-10 flex-col items-center justify-start h-screen bg-white transition-w duration-300 ease-in-out overflow-hidden py-4`}>
      <div className="w-full text-right"><span onClick={setToggle} className=" cursor-pointer border-2 border-gray-300 rounded text-2xl font-medium p-2 lnr lnr-cross"></span></div>

      <div className="w-full p-4 text-4xl">Your Lists Here</div>
    </div>
  )
}

export default NavDropdown