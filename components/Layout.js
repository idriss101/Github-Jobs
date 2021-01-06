import React from "react";
import Head from "next/head";

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen font-kumbh">{children}</main>
    </div>
  );
}
