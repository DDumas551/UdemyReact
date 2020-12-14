import Link from "next/link";

const ContactPage = () => {
  console.log("ContactPage");
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Talk to me</p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default ContactPage;
