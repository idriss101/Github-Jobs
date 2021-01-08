import Header from "../components/Header";
import JobList from "../components/JobList";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Github Jobs">
      <Header />
      <JobList />
    </Layout>
  );
}
