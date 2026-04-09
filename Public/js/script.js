const form = document.querySelector("#weather-form");
const locationElement = document.getElementById("location");
const forecastElement = document.getElementById("forecast");
const errorElement = document.getElementById("error");
const addressInput = document.getElementById("address");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  weatherFunction(addressInput.value.trim()); // Call the weather function with the input value
  form.reset(); // Clear the input field after submission
}); // Function to fetch weather data based on the provided address

const weatherFunction = async (address) => {
  if (!address) {
    // Check if the address is empty
    errorElement.innerHTML = `<span class="label">Error</span>Please enter a location.`;
    errorElement.classList.add("show"); // Show the error message
    locationElement.classList.remove("show"); // Hide the location element
    forecastElement.classList.remove("show"); // Hide the forecast element
    return; // Exit the function if the address is empty
  }

  try {
    const response = await fetch(`/weather?address=${address}`); // Fetch weather data from the server using the provided address
    const data = await response.json(); // Parse the response as JSON

    if (data.error) {
      // Check if there is an error in the response
      errorElement.innerHTML = `<span class="label">Error</span>${data.error}`;
      errorElement.classList.add("show");
      locationElement.classList.remove("show");
      forecastElement.classList.remove("show");
    } else {
      // If there is no error, display the location and forecast information
      locationElement.innerHTML = `<span class="label">Location</span>${data.location}`;
      forecastElement.innerHTML = `<span class="label">Weather</span>${data.forecast}`;
      errorElement.classList.remove("show");
      locationElement.classList.add("show");
      forecastElement.classList.add("show");
    }
  } catch (error) {
    // display a generic error message if there is an issue with fetching the weather data
    errorElement.innerHTML = `<span class="label">Error</span>An error occurred while fetching weather data.`;
    errorElement.classList.add("show");
    locationElement.classList.remove("show");
    forecastElement.classList.remove("show");
  }
};
