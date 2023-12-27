import style from "./profile.module.css";
import UserPosts from "@/app/(afterLogin)/[username]/_component/UserPosts";
import UserInfo from "@/app/(afterLogin)/[username]/_component/UserInfo";
import { getUser } from "@/app/(afterLogin)/[username]/_lib/getUser";
import { getUserPosts } from "@/app/(afterLogin)/[username]/_lib/getUserPosts";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
type Props = {
  params: { username: string };
};

export default async function Profile({ params }: Props) {
  const { username } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users", username],
    queryFn: getUser,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", "users", username],
    queryFn: getUserPosts,
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <UserInfo username={username} />
        <div>
          <UserPosts username={username} />
        </div>
      </HydrationBoundary>
    </main>
  );
}
