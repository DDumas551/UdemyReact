// import React from "react";
// import { Container } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
// MyApp.getInitialProps = async () => {
//   console.log("get Initial Props");
// };

export default MyApp;
