"use client";

import GoogleIcon from "@/components/ui/icons/GoogleIcon";
import SignBtn from "@/components/ui/SignBtn";
import { signIn, ClientSafeProvider } from "next-auth/react";

type Props = {
  providers: Record<string, ClientSafeProvider>;
};

export default function SignIn({ providers }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <div className='flex justify-center mt-40' key={name}>
          <SignBtn
            onClick={() => signIn(id)}
            size='medium'
            text={`Sign in with ${name}`}
          >
            <GoogleIcon classname='w-8 h-8' />
          </SignBtn>
        </div>
      ))}
    </>
  );
}
