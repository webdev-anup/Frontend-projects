let btn = document.querySelector(".btn");
let showWether = document.querySelector(".show-wether");

btn.addEventListener("click", async (e) => {
  showWether.innerHTML = "<h2>Loading data...</h2>";
  e.preventDefault();
  const city = document.getElementById("search").value.trim();
  if (!city) {
    showWether.innerHTML = "<h2>Please enter a city name</h2>";
    return;
  }
  const apiKey = "YOUR_API_KEY_HERE";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Fix #2

  const response = await fetch(url);
  const data = await response.json();
  if(data.cod === "404") {
    showWether.innerHTML = "<h2>City not found</h2>";
    return;
  }
  showData(data);
  console.log(data);
});

let showData = (data) => {
  if (data.cod === "404") {
    showWether.innerHTML = `<h2>${data.message}</h2>`;
  } else {
    const temp = Math.floor(data.main.temp);
    const status = data.weather[0].description;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
    showWether.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h2 class="temp">${temp}&deg;C</h2>             
            <p class="status">${status}</p>
            <div>
                <div class="humidity">
                    <p>Humidity:</p>
                    <h2 class="humidity-status">${humidity}%</h2>
                </div>
                <div class="wind">
                    <p>Wind Speed:</p>
                    <h2 class="wind-status">${wind} m/s</h2>
                </div>
            </div>`;
  }
};
