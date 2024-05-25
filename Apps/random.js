// Function to shuffle the order of elements within a container

let nh,nw; 
const maxh = 450;
const minh = 0;

const maxw = 1000;
const minw = 0;

function newPosition(){
    // nh = Math.floor(Math.random() * h);
    // nw = Math.floor(Math.random() * w);
    nh = Math.floor(Math.random() * (maxh - minh + 1)) + minh;
    nw = Math.floor(Math.random() * (maxw - minw + 1)) + minw;
    return [nh,nw];          
};



function shuffleElements(container) {
    var elements = container.children;
    for (var i = elements.length; i >= 0; i--) {
        var newp = newPosition();
        document.getElementById("window" + i).style.left = newp[1] + 'px';
        document.getElementById("window" + i).style.top = newp[0] + 'px';
        container.appendChild(elements[Math.random() * i | 0]);
    };
};



  // Wait for the page to fully load before shuffling the elements
 window.addEventListener('load', function() {
   var container = document.getElementById("mainContainer");
   shuffleElements(container);
 });