import { useContext } from "react";
import Header from "../components/Header";
import JobList from "../components/JobList";
import Layout from "../components/Layout";
import JobContext from "../context/JobProvider";

export default function Home(props) {
  const jobs = useContext(JobContext);
  // jobs.setJobs(props.data.slice(0, 20));
  return (
    <Layout title="Github Jobs">
      <Header />
      <JobList />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://jobs.github.com/positions.json?page=1&search=web"
  );
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
