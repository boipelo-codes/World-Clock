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
        let tokyoTime = moment().tz("");

        tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
        tokyoTimeElement.innerHTML = tokyoTime.format(
            "h:mm:ss [<small>]A[</small>]"
        );
    }

    let astanaElement = document.querySelector("#astana");
    if (astanaElement) {
        let astanaDateElement = astanaElement.querySelector(".date");
        let astanaTimeElement = astanaElement.querySelector(".time");
        let astanaTime = moment().tz("");

        astanaDateElement.innerHTML = astanaTime.format("MMMM Do YYYY");
        astanaTimeElement.innerHTML = astanaTime.format(
            "h:mm:ss [<small>]A[</small>]"
        );
    }

    function updateCityTime(cityTimeZone) {
        let cityName = cityTimeZone.replace("_", " ").split("/")[1];
        let cityTime = moment().tz(cityTimeZone);
        let citiesElement = document.querySelector("#cities");
      
        if (citiesElement) {
          citiesElement.innerHTML = `
            <div class="city">
              <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
              </div>
              <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
            </div>
          `;
        }
      }
      


updateTime();

setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
