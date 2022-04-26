class today{
 
    date:Date;
    day:number;
    month:number;
    year:number;

   constructor(date:Date){

    this.date = date;
    this.day = this.date.getDate();
    this.month = this.date.getMonth() + 1;
    this.year = this.date.getFullYear();

   };
};

const Today = new today(new Date());

console.log(`${Today.day}/${Today.month}/${Today.year} `);
// console.log(`วันนี้วันที่ ${Today.day} เดือน ${Today.month} ปี ${Today.year} `);


// ===========> javascrit อันเก่า
/*
// date and time
const date = new Date();
const whatdayistoday = [
    day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear()
];
//tell time
console.log(whatdayistoday.join('/'));
const whatdayistoday = [
    date = new Date(),
    day = "วันที่   " + ": " + date.getDate(),
    month = "เดือน  " + ": " + date.getMonth() + 1,
    year = "ปี     " + ": " + date.getFullYear()
];
whatdayistoday.map((today_is_the_day) => {
    console.log(today_is_the_day);
});
*/