
var btns = document.getElementsByClassName('ripple-it');
Array.prototype.forEach.call(btns, function (btn) {
    btn.addEventListener('click', rippleMe);
});
function rippleMe(e) {
    var wave = document.createElement('div');
    var w = Math.max(this.clientWidth, this.clientHeight);
    var button = this;
    wave.style.height = wave.style.width = w + 'px';
    wave.style.left = e.clientX - this.offsetLeft - w / 2 + 'px';
    wave.style.top = e.clientY - this.offsetTop - w / 2 + 'px';
    this.appendChild(wave);
    wave.classList.add('ripple');
   setTimeout(function () {
        button.removeChild(wave);
    }, 700);
}