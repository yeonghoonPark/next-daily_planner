import { hours, minutes } from "@/util/time";
import { FormEvent, useState } from "react";
import Select from "./Select";
import BaseBtn from "./ui/BaseBtn";

export default function CreateNewPlan() {
  const [missionVal, setMissionVal] = useState("");
  const [hoursVal, setHoursVal] = useState("00");
  const [minutesVal, setMinutesVal] = useState("00");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    fetch("/api/plan", {
      method: "POST",
      body: JSON.stringify({
        mission: missionVal,
        appointedTime: `${hoursVal}${minutesVal}`,
        isCompleted: false,
      }),
    });
  };

  return (
    <>
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
