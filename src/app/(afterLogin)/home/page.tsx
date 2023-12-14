import React from "react";
import style from "./home.module.css";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";
import PostForm from "./_component/PostForm";

const Page = () => {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}
      </TabProvider>
    </main>
  );
};

export default Page;
