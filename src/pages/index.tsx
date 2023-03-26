import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { useState } from "react";
import { z } from "zod";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>NEXT1</title>
      </Head>
      <main className="min-h-screen bg-slate-800">{hello.data?.greeting}</main>
    </>
  );
};

export default Home;
