class today{
 
    date:Date;
    day:number;
    month:number;
    year:number;

    public constructor(date:Date){

    this.date = date;
    this.day = this.date.getDate();
    this.month = this.date.getMonth() + 1;
    this.year = this.date.getFullYear();

   };
};

const Today = new today(new Date());

async function Execute(){
    return `${Today.day}/${Today.month}/${Today.year} `
    throw 'Error'
    // const process = Promise.resolve(`${Today.day}/${Today.month}/${Today.year}`)
    // console.log(await process);
};

Execute().then((resolve)=> console.log(resolve))
.catch((reason)=> console.log(reason))
.finally(()=> console.log('Done!'));

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
