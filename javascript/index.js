function updateTime() {
    // Update all city times
    let cities = [
        { id: "johannesburg", timezone: "Africa/Johannesburg" },
        { id: "tokyo", timezone: "Asia/Tokyo" },
        { id: "astana", timezone: "Asia/Almaty" }
    ];

    // Update local time
    let localTime = moment();
    document.querySelector("#local-date").innerHTML = localTime.format("MMMM Do YYYY");
    document.querySelector("#local-time").innerHTML = localTime.format("h:mm:ss A");

    // Update each city's time
    cities.forEach(city => {
        let element = document.querySelector(`#${city.id}`);
        if (element) {
            let dateElement = element.querySelector(".date");
            let timeElement = element.querySelector(".time");
            let cityTime = moment().tz(city.timezone);

            dateElement.innerHTML = cityTime.format("MMMM Do YYYY");
            timeElement.innerHTML = cityTime.format("h:mm:ss [<small>]A[</small>]");
        }
    });
}

function updateCityTime(timezone) {
    if (!timezone) return;
    
    let cityTime = moment().tz(timezone);
    let formattedTime = cityTime.format("MMMM Do YYYY, h:mm:ss A");
    
    alert(`The current time in the selected city is ${formattedTime}`);
}

// Set up city selector
let citiesSelectElement = document.querySelector("#city");

if (citiesSelectElement) {
    citiesSelectElement.addEventListener("change", function () {
        let selectedTimeZone = this.value;
        
        if (selectedTimeZone) {
            updateCityTime(selectedTimeZone);
        }
    });
}

// Start the clock
updateTime();
setInterval(updateTime, 1000)
