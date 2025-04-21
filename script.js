const apiKey = "4a768f53535d07bbe011bf0ffac39aot";

document.getElementById("search-btn").addEventListener("click", () => {
  const city = document.getElementById("city-input").value;

  if (city) {
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const displayContainer = document.getElementById("weather-display");
        document.getElementById("city-name").textContent = `${data.city}, ${data.country}`;
        document.getElementById("temperature").textContent = `🌡️ Temperature: ${data.temperature.current}°C`;
        document.getElementById("description").textContent = `🌤️ Condition: ${data.condition.description}`;
        document.getElementById("weather-icon").src = data.condition.icon_url;

        displayContainer.classList.add("animated-container");
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  } else {
    alert("Please enter a city name!");
  }
});