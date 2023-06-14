"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import BaseBtn from "./ui/BaseBtn";

export default function Header() {
  const { data: session } = useSession();
  console.log(session, "##세션");
  return (
    <>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-3xl'>
          <Link href={"/"}>Daily Planner</Link>
        </h1>

        <nav>
          {session ? (
            <BaseBtn onClick={() => signOut()} text={"Sign Out"} />
          ) : (
            <Link href={"/auth/signin"}>
              <BaseBtn text={"Sign In"} />
            </Link>
          )}
        </nav>
      </div>
    </>
  );
}
