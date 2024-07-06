const getWeather = function (nameOfCity) {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    `http://api.openweathermap.org/data/2.5/weather?q=${nameOfCity}&units=metric&APPID=5d066958a60d315387d9492393935c19`
  );
  request.send();
  request.addEventListener("load", function () {
    const data = JSON.parse(this.response);
    console.log(data);
    const html = ` 
      <article class="nameOfCity">
          <h2>${data.name}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Pressure: ${data.main.pressure}</p>
          <p>Description: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}</p>
          <p>Speed: ${data.wind.speed}</p>
          <p>Deg: ${data.wind.deg}</p>
          <p>Icon: ${data.weather[0].icon}</p>
      </article>`;
    document.body.innerHTML = html;
    const style = document.createElement("style");
    style.innerHTML = `
    body{
    padding:30px
    }
      .nameOfCity {
        padding: 20px;
        width: 200px;
        border-radius: 5px;
        font-family: Arial, sans-serif;
        box-shadow: 0px 0px 30px 10px black; 
      }
    `;
    document.head.appendChild(style);
  });
};

getWeather("odessa");
