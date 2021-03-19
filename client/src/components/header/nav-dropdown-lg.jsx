const NavDropdownLg = ({toggle, setToggle}) => {
  return(
    <div className={`${toggle ? "h-96" : "h-0"} w-64 fixed top-0 left-0 flex-col items-center justify-start bg-gray-200 overflow-hidden px-2 mt-16 ml-20 rounded-lg shadow`}>
      <div className="w-full p-4 text-4xl">Your Lists Here</div>
    </div>
  )
}

export default NavDropdownLg