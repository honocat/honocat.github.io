import { Metadata } from "next";

import Blogs from "@/components/blogs";

import { Layout } from "@/components/styles/article";

export const metadata: Metadata = {
  title: "Blogs - Keisuke Nakano",
  description: "",
};

export default function BlogsPage(): JSX.Element {
  return (
    <Layout>
      <Blogs />
    </Layout>
  );
}
