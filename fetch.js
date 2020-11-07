class Fetch {
     async getCurrent(input) {
        const myKey = "40a0b759fb3ba5148a95bd0448b9693b";

const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
  );

  const data = await response.json();

  console.log(data);

  return data;
}
}
