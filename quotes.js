const mainDate = [{
    i_d: "1111",
    i__d: "2222"
},
{
    i_d: "3333",
    i__d: "4444"
},
{
    i_d: "5555",
    i__d: "6666"
},
{
    i_d: "7777",
    i__d: "8888"
},
{
    i_d: "9999",
   i__d: "101010"
},
{
    i_d: "111111",
    i__d: "121212"
},
{
    i_d: "131313",
    i__d: "141414"
},
{
    i_d: "151515",
    i__d: "161616"
},
{
    i_d: "171717",
    i__d: "181818"
},
{
    i_d: "191919",
    i__d: "202020"
}];

const i_d = document.querySelector(".mainDate span:first-child");
const i__d = document.querySelector(".mainDate span:last-child");

const i_D =  mainDate[Math.floor(Math.random() *  mainDate.length)];

i_d.innerText = i_D.i_d;
i__d.innerText = i_D.i__d;
