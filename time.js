// Unix Epoch - January 1st 1970 00:00:00

const now = new Date()

// console.log(now); // You see this string in the console: 'Fri Oct 05 2018 18:46:57 GMT+0200 (Central European Summer Time)'



const timestamp = now.getTime() // it gives you a huge number in miliseconds

const myDate = new Date(timestamp)
// console.log(myDate.getFullYear());  // 2018



// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`); // Index zero, 9 is October
// console.log(`Day of the month: ${now.getDate()}`); // not index zero, 5 is 5
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minute: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);


// 1. Create two dates in the past (use string for Date)

const oldDate2005 = new Date('February 12 2005 13:21:37')


const oldDate2016 = new Date('November 29 2016 22:01:43')




// 2. Get timestamps for both

const timestamp2005 = oldDate2005.getTime()
console.log(timestamp2005);

const timestamp2016 = oldDate2016.getTime()

console.log(timestamp2016);



// 3. Figure out which is first and print its time (use toString)

if (timestamp2005 < timestamp2016) {
    console.log('====================================');
    console.log(oldDate2005.toString());
    console.log('====================================');
 
    
} else if (timestamp2016 < timestamp2005) {
    console.log(oldDate2016.toString());
    
}

