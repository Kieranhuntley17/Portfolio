
document.getElementById('start-content').style.display = 'none';

document.getElementById('start').addEventListener('click', function() {
    const windowDiv = document.getElementById('start-content');
    if (windowDiv.style.display === 'none' || windowDiv.style.display === '') {
        windowDiv.style.display = 'block';
        document.getElementById('start').style.backgroundColor = "#a7a7a7"
    } else {
        windowDiv.style.display = 'none';
        document.getElementById('start').style.backgroundColor = "#ccc"
    }
});