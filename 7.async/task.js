// Задача 1

class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    checkTime = 1000;

    addClock(time, callback){
        if ((time == undefined)||(callback == undefined)){
            throw new Error('Отсутствуют обязательные аргументы.');
        }

        if (this.alarmCollection.find(item => item.time === time)){
            console.warn(`Уже присутствует звонок на это же время`);
        }

        this.alarmCollection.push({callback, time, canCall: true});
    }

    removeClock(time){
        const controlSum = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item.time != time);

        return controlSum != this.alarmCollection.length;
    }

    getCurrentFormattedTime(addMin = 0){
        const currentDate = new Date();
        const currentHours = currentDate.getHours();
        const currentMinutes = currentDate.getMinutes() + addMin;
        let strHours;
        let strMinutes;
        
        strHours = (currentHours < 10) ? '0' + currentHours : '' + currentHours;
        strMinutes = (currentMinutes < 10) ? '0' + currentMinutes : '' + currentMinutes;

        return strHours + ':' + strMinutes;
    }

    start(){
        function checkClock(ring){
            if ((this.getCurrentFormattedTime() == ring.time)&&(ring.canCall == true)){
                ring.callback();
                ring.canCall = false;
            }
        }

        function checkRings(){
           this.alarmCollection.forEach(element => checkClock.call(this, element));
        }

        if (this.intervalId === null){
            this.intervalId = setInterval(() => checkRings.call(this), this.checkTime);
        }
    }

    stop(){
        if (this.intervalId != null){
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    resetAllCalls(){
        this.alarmCollection.forEach((ring) => ring.canCall = true);
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}

