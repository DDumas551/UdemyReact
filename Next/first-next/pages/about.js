import Link from "next/link";
const AboutPage = () => {
  console.log("About Page");
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default AboutPage;
