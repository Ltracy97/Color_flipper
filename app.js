const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');

const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    
    //get random number for colors list
    const randnumber = getRandomNum();

    document.body.style.backgroundColor = colors[randnumber];

    color.textContent = colors[randnumber];

});

function getRandomNum(){
    return Math.floor(Math.random()*colors.length);
}