function UTUtimeUpdate() {
    const utuTimeContainer = document.querySelector('[data-testid="currentUTCTime"]');
    const currentUTCTime = Date.now();
    utuTimeContainer.innerHTML=`Time: ${currentUTCTime}`
}
// UTUtimeUpdate()
setInterval(UTUtimeUpdate, 2000)
function currentDay() {
    const currentDayContainer = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentDay = new Date().getDay()
    console.log(currentDay)
    let dayOfTheWeek;
    
    switch (currentDay) {
        case 1:
            dayOfTheWeek = "Monday"
            break;
        case 2:
            dayOfTheWeek = "Tuesday";
            break;
        case 3:
            dayOfTheWeek = "Wednesday"
            break;
        case 4:
            dayOfTheWeek = "Thursday";
            break;
        case 5:
            dayOfTheWeek = "Friday";
            break;
        case 6:
            dayOfTheWeek = "Saturday";
            break;
        case 7:
            dayOfTheWeek = "Sunday";
            break;
        default:
            dayOfTheWeek;    
    }
    currentDayContainer.textContent = dayOfTheWeek;
}
currentDay()
