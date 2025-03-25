function updateTime() {
    let johannesburgElement = document.querySelector("#johannesburg");
    if (johannesburgElement) {
        let johannesburgDateElement = johannesburgElement.querySelector(".date");
        let johannesburgTimeElement = johannesburgElement.querySelector(".time");
        let johannesburgTime = moment().tz("Africa/Johannesburg");

        johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
        johannesburgTimeElement.innerHTML = johannesburgTime.format(
            "h:mm:ss [<small>]A[</small>]"
        );
    }
}

    let tokyoElement = document.querySelector("#tokyo");
    if (tokyoElement) {
        let tokyoDateElement = tokyoElement.querySelector(".date");
        let tokyoTimeElement = tokyoElement.querySelector(".time");
        let tokyoTime = moment().tz("Asia/Tokyo");

        tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
        tokyoTimeElement.innerHTML = tokyoTime.format(
            "h:mm:ss [<small>]A[</small>]"
        );
    }

    let astanaElement = document.querySelector("#astana");
    if (astanaElement) {
        let astanaDateElement = astanaElement.querySelector(".date");
        let astanaTimeElement = astanaElement.querySelector(".time");
        let astanaTime = moment().tz("Asia/Almaty");

        astanaDateElement.innerHTML = astanaTime.format("MMMM Do YYYY");
        astanaTimeElement.innerHTML = astanaTime.format(
            "h:mm:ss [<small>]A[</small>]"
        );
    }

    function updateTime() {
        let cities = [
            { id: "johannesburg", timezone: "Africa/Johannesburg" },
            { id: "tokyo", timezone: "Asia/Tokyo" },
            { id: "astana", timezone: "Asia/Almaty" }
        ];
    
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
    
    let citieSSelectElement = document.querySelector("#city");

if (citieSSelectElement) {
    citieSSelectElement.addEventListener("change", function () {
        let selectedTimeZone = this.value;

        if (selectedTimeZone) {
            let cityTime = moment().tz(selectedTimeZone);
            let formattedTime = cityTime.format("MMMM Do YYYY, h:mm:ss A");

            
            alert(`The current time in ${this.options[this.selectedIndex].text} is ${formattedTime}`);

            updateCityTime(selectedTimeZone);
        }
    });
}

    setInterval(updateTime, 1000);
    updateTime();
    


updateTime();

setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

if (citiesSelectElement) {
    citiesSelectElement.addEventListener("change", function () {
        updateCityTime(this.value);
    });
}


