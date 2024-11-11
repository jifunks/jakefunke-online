import Layout from "../components/layout";

export default function About({}) {
  return (
    <Layout title={"About"}>
      This site was built with Next.js. Was it overkill? Absolutely. I just wanted to try it out. You can find the source code for this site{" "}
      <a href="https://github.com/jifunks/jakefunke-online">here</a>.
    </Layout>
  );
}
