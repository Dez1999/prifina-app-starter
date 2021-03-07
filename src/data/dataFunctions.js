export function Device(device) {
  let result;

  switch (device) {
    case "fitbit":
      result = [
        {
          name: "Day 1",
          Calories: 2400,
          activiy: 1000,
        },
        {
          name: "Day 2",
          Calories: 2400,
          activiy: 12000,
        },
        {
          name: "Day 3",
          Calories: 2400,
          activiy: 1000,
        },
        {
          name: "Day 4",
          Calories: 2400,
          activiy: 1000,
        },
        {
          name: "Day 5",
          Calories: 7398,
          activiy: 1000,
        },
        {
          name: "Day 6",
          Calories: 1398,
          activiy: 1000,
        },
        {
          name: "Day 7",
          Calories: 4398,
          activiy: 1000,
        },
        {
          name: "Day 8",
          Calories: 3398,
          activiy: 1000,
        },
        {
          name: "Day 9",
          Calories: 4398,
          activiy: 1000,
        },
        {
          name: "Day 10",
          Calories: 3398,
          activiy: 1000,
        },
        {
          name: "Day 11",
          Calories: 2400,
          activiy: 1000,
        },
        {
          name: "Day 12",
          Calories: 2400,
          activiy: 1000,
        },
        {
          name: "Day 13",
          Calories: 2400,
          activiy: 1000,
        },
        {
          name: "Day 14",
          Calories: 2400,
          activiy: 1000,
        },
        {
          name: "Day 15",
          Calories: 7398,
          activiy: 1000,
        },
        {
          name: "Day 16",
          Calories: 1398,
          activiy: 1000,
        },
        {
          name: "Day 17",
          Calories: 4398,
          activiy: 1000,
        },
        {
          name: "Day 18",
          Calories: 3398,
          activiy: 1000,
        },
        {
          name: "Day 19",
          Calories: 4398,
          activiy: 1000,
        },
        {
          name: "Day 20",
          Calories: 3398,
          activiy: 1000,
        },
        {
          name: "Day 21",
          Calories: 2400,
          activiy: 1000,
        },
        {
          name: "Day 22",
          Calories: 2400,
          activiy: 1000,
        },
        {
          name: "Day 23",
          Calories: 2400,
          activiy: 1000,
        },
        {
          name: "Day 24",
          Calories: 2400,
          activiy: 1000,
        },
        {
          name: "Day 25",
          Calories: 7398,
          activiy: 1000,
        },
        {
          name: "Day 26",
          Calories: 1398,
          activiy: 1000,
        },
        {
          name: "Day 27",
          Calories: 4398,
          activiy: 1000,
        },
        {
          name: "Day 28",
          Calories: 3398,
          activiy: 1000,
        },
        {
          name: "Day 29",
          Calories: 4398,
          activiy: 1000,
        },
        {
          name: "Day 30",
          Calories: 3398,
          activiy: 1000,
        },
      ];
      break;

    case "oura":
      result = [
        {
          name: "Day 1",
          Calories: 4400,
        },
        {
          name: "Day 2",
          Calories: 1400,
        },
        {
          name: "Day 3",
          Calories: 8400,
        },
        {
          name: "Day 4",
          Calories: 2400,
        },
        {
          name: "Day 5",
          Calories: 1398,
        },
        {
          name: "Day 6",
          Calories: 2398,
        },
        {
          name: "Day 7",
          Calories: 3398,
        },
        {
          name: "Day 8",
          Calories: 4398,
        },
        {
          name: "Day 9",
          Calories: 4398,
        },
        {
          name: "Day 10",
          Calories: 3398,
        },
        {
          name: "Day 11",
          Calories: 2400,
        },
        {
          name: "Day 12",
          Calories: 2300,
        },
        {
          name: "Day 13",
          Calories: 2600,
        },
        {
          name: "Day 14",
          Calories: 1400,
        },
        {
          name: "Day 15",
          Calories: 7398,
        },
        {
          name: "Day 16",
          Calories: 6398,
        },
        {
          name: "Day 17",
          Calories: 1398,
        },
        {
          name: "Day 18",
          Calories: 2398,
        },
        {
          name: "Day 19",
          Calories: 8398,
        },
        {
          name: "Day 20",
          Calories: 3398,
        },
        {
          name: "Day 21",
          Calories: 2400,
        },
        {
          name: "Day 22",
          Calories: 2400,
        },
        {
          name: "Day 23",
          Calories: 2400,
        },
        {
          name: "Day 24",
          Calories: 2400,
        },
        {
          name: "Day 25",
          Calories: 4398,
        },
        {
          name: "Day 26",
          Calories: 1398,
        },
        {
          name: "Day 27",
          Calories: 2398,
        },
        {
          name: "Day 28",
          Calories: 3398,
        },
        {
          name: "Day 29",
          Calories: 8398,
        },
        {
          name: "Day 30",
          Calories: 1398,
        },
      ];
      break;
    default:
      break;
  }
  return Promise.resolve(result);
}
