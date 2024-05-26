document.getElementById('window1').style.display = 'none';
document.getElementById('window2').style.display = 'none';
document.getElementById('window3').style.display = 'none';

document.getElementById('minimised-p1').addEventListener('click', function() {
    const windowDiv = document.getElementById('window1');
    if (windowDiv.style.display === 'none' || windowDiv.style.display === '') {
        windowDiv.style.display = 'block';
    } else {
        windowDiv.style.display = 'none';
    }
});

document.getElementById('minimised-p2').addEventListener('click', function() {
    const windowDiv = document.getElementById('window2');
    if (windowDiv.style.display === 'none' || windowDiv.style.display === '') {
        windowDiv.style.display = 'block';
    } else {
        windowDiv.style.display = 'none';
    }
});

document.getElementById('minimised-about').addEventListener('click', function() {
    const windowDiv = document.getElementById('window3');
    if (windowDiv.style.display === 'none' || windowDiv.style.display === '') {
        windowDiv.style.display = 'block';
    } else {
        windowDiv.style.display = 'none';
    }
});