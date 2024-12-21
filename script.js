
const addResult = async () => {
    const userInput = document.getElementById('countryInput').value.trim();
    if (!userInput) {
        alert("Please enter a city or country name.");
        showResult.style.display = "none";
        return;
    }

    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${(userInput)}&units=metric&appid=f87fb431afcc7d22990e40414ea18672`;
    
    try {

        const response = await fetch(endpoint);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log(result);


        // showResult.style.display = "block";
        document.getElementById('showResult').innerHTML = `
            <table>
                <tr>
                    <td class="edit">Location:</td>
                    <td>${result.name}</td>
                </tr>
                <tr>
                    <td class="edit">Country:</td>
                    <td>${result.sys.country}</td>
                </tr>
                <tr>
                    <td class="edit">Description:</td>
                    <td>${result.weather[0].description}</td>
                </tr>
                <tr>
                    <td class="edit">Pressure:</td>
                    <td>${result.main.pressure}</td>
                </tr>
                <tr>
                    <td class="edit">Humidity:</td>
                    <td>${result.main.humidity}</td>
                </tr>
                <tr>
                    <td class="edit">Maximum Temperature:</td>
                    <td>${result.main.temp_max}</td>
                </tr>
                <tr>
                    <td class="edit">Minimum Temperature:</td>
                    <td>${result.main.temp_min}</td>
                </tr>
            </table>
     
        `;

        document.getElementById('showTemperature').innerHTML = `
        <h1> ${result.main.temp}°C</h1>
        <img src="http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png" alt="Weather icon">
        `

    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert("Could not fetch weather data. Please try again.");
    }
}

