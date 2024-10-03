export const Header = () => {
  return <div className="flex justify-center items-center">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur fixed top-3 z-10">
      <a href="#" className="nav-item">Home</a>
      <a href="#Projects" className="nav-item">Projects</a>
      <a href="#About" className="nav-item">About</a>
      <a href="#contant" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
    </nav>
  </div>;
};
