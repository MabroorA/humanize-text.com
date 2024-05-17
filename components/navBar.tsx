

export default function navBar() {
  return (
    <nav className=" flex flex-row justify-between bg-origin-padding p-3 text-white">
        <div className=" hover:text-white">
          Humanize 
        </div>
        <div className="flex">
          <div className="hover:text-white px-3">Pricing</div>
          <div className="hover:text-white px-3">Login</div>
        </div>
      </nav>
  )
}

