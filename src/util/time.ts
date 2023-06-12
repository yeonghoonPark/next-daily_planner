const time = new Date();

const dayNames = [
  "Sunday",
  "Monday",
  "TuesDay",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const addZero = (number: number): number | string => {
  return number < 10 ? "0" + number : number;
};

export const returnDays = (): string => {
  const day = dayNames[time.getDay()];
  const month = monthNames[time.getMonth()];
  const date = time.getDate();
  return `${day}, ${month} ${date}th`;
};

export const returnTimes = (): string => {
  const time = new Date();
  const hour = time.getHours();
  const minute = addZero(time.getMinutes());
  const second = addZero(time.getSeconds());
  return `${hour} : ${minute} : ${second}`;
};

export const hours = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
];

export const minutes = [
  ...hours,
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
];
