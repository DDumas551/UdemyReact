import Link from "next/link";
const Navbar = () => {
  const styles = {
    display: "flex",
    background: "oldlace",
    justifyContent: "space-around",
    padding: "1rem",
  };
  return (
    <div>
      <div style={styles}>
        <div>
          <Link href="/">
            <a>Index</a>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <a>About Page</a>
          </Link>
        </div>
        <div>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
