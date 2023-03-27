import { useState } from "react";

const useFormat = () => {
  const [time, setTime] = useState<string>("");
  const format = (onChangeValue: string) => {
    let timeSplit = onChangeValue.split(":"),
      hours: number,
      minutes: number,
      meridian: string;
    hours = Number(timeSplit[0]);
    minutes = Number(timeSplit[1]);

    if (hours > 12) {
      meridian = "PM";
      hours -= 12;
    } else if (hours < 12) {
      meridian = "AM";
      if (hours === 0) {
        hours = 12;
      }
    } else {
      meridian = "PM";
    }
    setTime(hours + ":" + minutes + " " + meridian);
  };
  return {
    format,
    time,
  };
};

export default useFormat;
