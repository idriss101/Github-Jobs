import InputProvider from "../context/InputProvider";
import JobProvider from "../context/JobProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <InputProvider>
        <Component {...pageProps} />
      </InputProvider>
      ;
    </>
  );
}

export default MyApp;
