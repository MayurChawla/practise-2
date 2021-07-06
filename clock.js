function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    Time = hours + " : " + mins + " : " + secs;

    document.getElementById("clocktime").innerHTML = Time;
}
setInterval(showTime,1000);
