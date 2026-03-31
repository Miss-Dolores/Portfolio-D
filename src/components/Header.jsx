export const Header = () => {
return (
    <header className="bg-gray-800 text-white py-2 md:py-4">
      <div className="max-w-4xl mx-auto px-2 flex justify-between">
        <h1 className="text-sm font-bold md:text-xl">Dolores <span className="  text-[#F59E0B]">Dev</span></h1>
        <nav>
          <ul className="flex space-x-4 text-[10px] md:text-lg">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#contact" className="hover:text-gray-300">My Projects</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
