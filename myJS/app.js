const myButton = document.querySelector(".myBtn");
myButton.addEventListener("mouseover", function() {
    //alert("Don\'t Touch Me!!!");
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random() * window.innerWidth);
    myButton.style.left = `${width}px`;
    myButton.style.top = `${height}px`;
});

myButton.addEventListener('click', function() {
    /* alert("Don\'t Touch Me!!!");
    console.log('hi') */
    myButton.innerText = "Yeah You Touch Me";
    myButton.style.backgroundColor = 'green'
});