import Layout from "../components/layout";

export default function About({}) {
  return (
    <Layout title={"About"}>
      This site was built with Next.js, all by hand. Peep the source {` `}
      <a href="https://github.com/jifunks/jakefunke-online">here</a>.
    </Layout>
  );
}
