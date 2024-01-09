const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-end p-6 gap-10 bg-gray-200 border-b border-black">
        <li>
          <a href="/" className="text-lg font-bold hover:font-extrabold" >Home</a>
        </li>
        <li>
          <a href="/owner" className="text-lg font-bold hover:font-extrabold">Owner</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
