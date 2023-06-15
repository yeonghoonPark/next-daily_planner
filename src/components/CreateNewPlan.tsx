import { hours, minutes } from "@/util/time";
import { FormEvent, useState } from "react";
import Select from "./Select";
import BaseBtn from "./ui/BaseBtn";
import { useSWRConfig } from "swr";
import LoadingPackman from "./ui/LoadingPackman";

type Props = {
  onClose: () => void;
};

export default function CreateNewPlan({ onClose }: Props) {
  const [missionVal, setMissionVal] = useState("");
  const [hoursVal, setHoursVal] = useState("00");
  const [minutesVal, setMinutesVal] = useState("00");

  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useSWRConfig();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({
        mission: missionVal,
        appointedTime: `${hoursVal}${minutesVal}`,
        isCompleted: false,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          alert(`${res.status} ${res.statusText}`);
          return;
        }
      })
      .catch((err) => alert(err.toString()))
      .finally(() => {
        mutate("/api/user");
        onClose();
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <LoadingPackman bgColor='bg-emerald-100/50' />}
      <form
        className='flex flex-col justify-center items-center gap-8'
        onSubmit={handleSubmit}
      >
        <div className='flex items-center gap-2'>
          <Select
            value={hoursVal}
            onChange={(e) => setHoursVal(e.target.value)}
            arr={hours}
          />

          <span>:</span>

          <Select
            value={minutesVal}
            onChange={(e) => setMinutesVal(e.target.value)}
            arr={minutes}
          />

          <label htmlFor='mission'>
            <input
              className='outline-none border-2 border-slate-300 rounded-md p-2 focus:border-slate-500'
              type='text'
              id='mission'
              required
              value={missionVal}
              onChange={(e) => setMissionVal(e.target.value)}
            />
          </label>
        </div>
        <BaseBtn text='Submit' />
      </form>
    </>
  );
}
