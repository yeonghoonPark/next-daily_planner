"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import SignBtn from "./ui/SignBtn";

export default function Header() {
  const { data: session } = useSession();
  console.log(session, "@세션");

  return (
    <>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-3xl'>
          <Link href={"/"}>Daily Planner</Link>
        </h1>

        <nav>
          {session ? (
            <SignBtn onClick={() => signOut()} text={"Sign Out"} />
          ) : (
            <Link href={"/auth/signin"}>
              <SignBtn text={"Sign In"} />
            </Link>
          )}
        </nav>
      </div>
    </>
  );
}
