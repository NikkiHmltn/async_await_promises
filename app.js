// Timing exercise 1
// Uncomment these lines and run them, observing the order that the logs happen
// How can you change it to log in the correct order?


//using .then

// console.log('I should log before the data!');
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
// .then((res) => res.json()).then((json) => console.log(json))
// console.log('I should log after the data!');


// async function exercise1() {
//     console.log('I should log before the data!');
//     const res = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
//     const json = await res.json()
//     console.log(json)
//     console.log('I should log after the data!');
// }
// exercise1();

// ========================================

// Timing exercise 2: slightly more complicated

console.log('I should be before the cats data');
fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
.then((res) => res.json()).then((json) => {
    console.log(json); 
    console.log('I should be between the cats and dogs');
    fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
    .then((res) => res.json()).then((json) => {
        console.log(json)
        console.log('I should be last');
    })
})

async function exercise2() { 
console.log('I should be before the cats data');
const res1 = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no');
const json1 = await res1.json();
console.log(json1);
console.log('I should be between the cats and dogs');

const res2 = await fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
const json2 = await res2.json();
console.log(json2);
console.log('I should be last')

}
exercise2();