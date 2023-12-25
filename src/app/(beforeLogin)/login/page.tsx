"use client";

import { useRouter } from "next/navigation";
import Main from "../_components/Main";
import { useSession } from "next-auth/react";

const Page = () => {
  const router = useRouter();
  const { data: seesion } = useSession();

  if (seesion?.user) {
    router.replace("/home");
    return null;
  }
  router.replace("/i/flow/login");
  return <Main />;
};

export default Page;
