import Link from 'next/Link'
const Navbar = () => {
  return(
    <nav>
    <div className="logo">
      <Image src="/logo.png" width={128} height={77} />
      <h1>Woody List</h1>
    </div>
      <Link href="/"><a>Home</a></Link>
     <Link href="/about"> <a>About</a></Link>
      <Link href="/pugs"><a>Pugs List</a></Link>
      </nav>
  );
}
export default Navbar;