function updateTime() {
    letjohannesburgElement = document.querySelector("#johannesburg");
    if (johannesburgElement) {
        let johannesburgDateElement = johannesburgElement.querySelector(".date");
        let johannesburgTimeElement = johannesburgElement.querySelector(".time");
        let johannesburgTime = moment().tz ("Africa/Johannesburg");
    }
}