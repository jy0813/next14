import React from "react";
import style from "./home.module.css";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";
import PostForm from "./_component/PostForm";
import Post from "../_component/Post";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

async function getPostRecommend() {
  const res = await fetch(`http://localhost:9090:api/postRecommends`, {
    next: {
      tags: ["posts", "recommends"],
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommend,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
};

export default Home;
