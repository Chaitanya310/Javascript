var direction;
(function (direction) {
    direction[direction["up"] = 1] = "up";
    direction[direction["down"] = 2] = "down";
    direction[direction["left"] = 3] = "left";
    direction[direction["right"] = 4] = "right";
})(direction || (direction = {}));
console.log(direction);
var Appststus;
(function (Appststus) {
    Appststus["Active"] = "act";
    Appststus["Inactive"] = "inact";
    Appststus["OnHold"] = "HLD";
    Appststus["OnStop"] = "STOP";
})(Appststus || (Appststus = {}));
console.log(Appststus);
function checkstatus(status) {
    console.log(status);
}
checkstatus(Appststus.Active);
var color;
(function (color) {
    color["RED"] = "yes";
    color["BLUE"] = "1";
    color["PINK"] = "2";
    color["YELLOW"] = "no";
})(color || (color = {}));
console.log(color.BLUE);
console.log(color.RED);
var weekdays;
(function (weekdays) {
    weekdays[weekdays["SUNDAY"] = 1] = "SUNDAY";
    weekdays[weekdays["MONDAY"] = 2] = "MONDAY";
    weekdays[weekdays["TUESDAY"] = 3] = "TUESDAY";
    weekdays[weekdays["THURSDAY"] = 4] = "THURSDAY";
    weekdays[weekdays["FRIDAY"] = 5] = "FRIDAY";
    weekdays[weekdays["SATURDAY"] = 6] = "SATURDAY";
})(weekdays || (weekdays = {}));
console.log(weekdays[3]);
