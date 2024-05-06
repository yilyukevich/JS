class Timer {
  allTimeInMSeconds = 0;
  increaseValue = 1;
  isStarted = false;
  
  processId = 0;

  divHours = document.querySelector("#hours");
  divMinutes = document.querySelector("#minutes");
  divSeconds = document.querySelector("#seconds");
  divMSeconds = document.querySelector("#mSeconds");

  divHistory = document.querySelector(".history");
  historyLog = [];

  btnStart = document.querySelector("#start");
  btnStop = document.querySelector("#stop");

constructor() {
  this.getFromSessionStorage();  

  this.updateTimer();
  this.updateHistory();

  if (this.isStarted) {
    this.start();
  }
}

  start() {
    this.processId = setInterval(() => this.changeTime(), 1);
    this.isStarted = true;
  };

  stop() {
    clearInterval(this.processId);
    this.isStarted = false;
  }

  reverse()  {
    this.stop()
    this.increaseValue = this.increaseValue * -1;
    this.start()
  }

  reset()  {
    this.stop();
    this.allTimeInMSeconds = 0;
    this.updateTimer();
  }

  save()  {
    this.stop();
    this.addHistoryItem(this.allTimeInMSeconds);
    this.historyLog.push(this.allTimeInMSeconds);
  }

  clearAll()  {
    this.reset();
    this.clearHistory();
  }

  clearHistory()  {
    this.divHistory.innerHTML = "";
    this.historyLog = [];
  }

  addHistoryItem(time)  {
    let parsedTime = this.parseTime(time);
    this.divHistory.innerHTML += "<p>" 
                              + parsedTime.hours + "h " 
                              + parsedTime.minutes + "m " 
                              + parsedTime.seconds + "s " 
                              + parsedTime.mSeconds + "ms" 
                          + "</p>";
  }

  changeTime()  {
    this.allTimeInMSeconds = this.allTimeInMSeconds + this.increaseValue;
    if (this.allTimeInMSeconds < 0) {
      this.stop();
      this.allTimeInMSeconds = 0;
    }
    this.updateTimer();
  };

  updateTimer()  {
    let parsedTime = this.parseTime(this.allTimeInMSeconds);

    this.divHours.innerHTML = parsedTime.hours;
    this.divMinutes.innerHTML = parsedTime.minutes;
    this.divSeconds.innerHTML = parsedTime.seconds;
    this.divMSeconds.innerHTML = parsedTime.mSeconds;  
  };

  updateHistory() {
    for(let time of this.historyLog) {
      this.addHistoryItem(time);  
    }
  }

  setToSessionStorage()  {
    sessionStorage.setItem("timer: allTimeInMSeconds", this.allTimeInMSeconds);
    sessionStorage.setItem("timer: increaseValue", this.increaseValue);
    sessionStorage.setItem("timer: isStarted", this.isStarted);
    sessionStorage.setItem("timer: historyLog", this.historyLog);
  }

  getFromSessionStorage() {
    this.allTimeInMSeconds = sessionStorage.getItem("timer: allTimeInMSeconds") ? +sessionStorage.getItem("timer: allTimeInMSeconds") : 0;
    this.increaseValue = sessionStorage.getItem("timer: increaseValue") ? +sessionStorage.getItem("timer: increaseValue") : 1;
    this.isStarted = sessionStorage.getItem("timer: isStarted") ? sessionStorage.getItem("timer: isStarted") === 'true' : false;
    this.historyLog = sessionStorage.getItem("timer: historyLog") ? sessionStorage.getItem("timer: historyLog").split(",") : [];
  }

  parseTime(time)  {
    let result = {};
    
    result.hours = (time - time % 3_600_000) / 3_600_000;
    time = time - result.hours * 3_600_000;
    
    result.minutes = (time - time % 60_000) / 60_000; 
    time = time - result.minutes * 60_000;
    
    result.seconds = (time - time % 1_000) / 1_000;
    time = time - result.seconds * 1_000;
    
    result.mSeconds = time;

    return result;
  }  

};

let timerObj = new Timer();

const btnStart = document.querySelector("#start");
btnStart.addEventListener('click', timerObj.start.bind(timerObj));

const btnStop = document.querySelector("#stop");
btnStop.addEventListener('click', timerObj.stop.bind(timerObj));

const btnReset = document.querySelector("#reset");
btnReset.addEventListener('click', timerObj.reset.bind(timerObj));

const btnReverse = document.querySelector("#reverse");
btnReverse.addEventListener('click', timerObj.reverse.bind(timerObj));

const btnSave = document.querySelector("#save");
btnSave.addEventListener('click', timerObj.save.bind(timerObj));

const btnClearAll = document.querySelector("#clearAll");
btnClearAll.addEventListener('click', timerObj.clearAll.bind(timerObj));

window.addEventListener('unload', timerObj.setToSessionStorage.bind(timerObj));
