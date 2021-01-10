import React, { useState, createContext } from "react";
import Header from "../components/Header";
import JobList from "../components/JobList";
import Layout from "../components/Layout";
import useSWR from "swr";

export const JobContext = createContext();

export default function Home({ data }) {
  const [jobs, setJobs] = useState(data.slice(0, 10));

  return (
    <Layout title="Github Jobs">
      <JobContext.Provider value={[jobs, setJobs]}>
        <Header />
        <JobList />
      </JobContext.Provider>
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
