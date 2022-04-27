var today = /** @class */ (function() {
    function today(date) {
        this.date = date;
        this.day = this.date.getDate();
        this.month = this.date.getMonth() + 1;
        this.year = this.date.getFullYear();
    };
    return today;
}());;
var Today = new today(new Date());
console.log("".concat(Today.day, "/").concat(Today.month, "/").concat(Today.year, " "));
