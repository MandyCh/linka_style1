window.onload = function() {
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var len = 3;
    var animated = false;
    var timer;


    function animate(offset) {
        if (offset == 0) {
            return;
        }
        animated = true;
        var time = 600;
        var interval = 20;
        var speed = offset / (time / interval);
        var left = parseInt(list.style.left) + offset;

        var go = function() {
            if ((speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, interval);
            } else {
                list.style.left = left + 'px';
                if (left > -1903) {
                    list.style.left = -5709 + 'px';
                }
                if (left < -5709) {
                    list.style.left = -1903 + 'px';
                }
                animated = false;
            }
        }
        go();
    }

    function showButton() {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }

    function play() {
        timer = setTimeout(function() {
            next.onclick();
            play();
        }, 3000);
    }

    function stop() {
        clearTimeout(timer);
    }

    next.onclick = function() {
        if (animated) {
            return;
        }
        if (index == 3) {
            index = 1;
        } else {
            index += 1;
        }
        animate(-1903);
        showButton();
    }

    prev.onclick = function() {
        if (animated) {
            return;
        }
        if (index == 1) {
            index = 3;
        } else {
            index -= 1;
        }
        animate(1903);
        showButton();
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            if (animated) {
                return;
            }
            if (this.className == 'on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -1903 * (myIndex - index);

            animate(offset);
            index = myIndex;
            showButton();
        }
    }

    container.onmouseover = stop;
    container.onmouseout = play;

    play();

}