

enum direction{
    up=1,
    down,
    left,
    right,
}

console.log(direction);

enum Appststus{
    Active='act',
    Inactive='inact',
    OnHold='HLD',
    OnStop='STOP',

}

console.log(Appststus)

function checkstatus(status:Appststus):void{

    console.log(status);

}

checkstatus(Appststus.Active);

enum color{
    RED = 'yes',
    BLUE= '1',
    PINK= '2',
    YELLOW= 'no'
}

console.log(color.BLUE);
console.log(color.RED);

enum weekdays{
    SUNDAY = 1,
    MONDAY =2,
    TUESDAY ,
    THURSDAY ,
    FRIDAY ,
    SATURDAY ,
}

console.log(weekdays[3]);