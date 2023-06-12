"use client";

import { returnDays, returnTimes } from "@/util/time";
import { useEffect, useState } from "react";

export default function TimeBar() {
  const [days, setDays] = useState("");
  const [times, setTimes] = useState("");

  useEffect(() => {
    setDays(returnDays);
    setTimes(returnTimes);

    const interval = setInterval(() => {
      setTimes(returnTimes);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='flex flex-col justify-center items-center gap-2 my-6'>
      <h2 className='font-bold text-lg'>{days}</h2>
      <time className='font-semibold text-lg'>{times}</time>
    </section>
  );
}
