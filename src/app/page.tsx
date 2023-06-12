import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import TimeBar from "@/components/TimeBar";
import NewPlan from "@/components/NewPlan";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <>
      <TimeBar />
      <NewPlan />
    </>
  );
}
