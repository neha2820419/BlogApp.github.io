const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>The Blogs</h1>
        <div className="links"></div>
        <a href="/"> Home </a>
        <a href="/create"> New Blog</a>
        <a href="/about">About Us</a>
      </nav>
    </div>
  );
};
export default Navbar;
