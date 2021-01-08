import InputProvider from "../context/InputProvider";
import JobProvider from "../context/JobProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <JobProvider>
        <InputProvider>
          <Component {...pageProps} />
        </InputProvider>
      </JobProvider>
      ;
    </>
  );
}

export default MyApp;
