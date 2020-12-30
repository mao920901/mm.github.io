

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	
        var endTime = new Date('2021/1/1 00:00:00');
        var nowTime = new Date();
        var t = endTime.getTime() - nowTime.getTime();
        console.log(t);
        var d = '';
        var h = '';
        var m = '';
        var s = '';
        if (t > 0) {
            d = Math.floor(t / 1000 / 60 / 60 / 24);
            h = Math.floor(t / 1000 / 60 / 60 % 24);
            m = Math.floor(t / 1000 / 60 % 60);
            s = Math.floor(t / 1000 % 60);
        }
 
        function toDouble(n) {
            return n < 10 ? '0' + n : n;
        }
 
        // return d+'天'+toDouble(h)+'时'+toDouble(m)+'分'+toDouble(s)+'秒';
       // console.log(d + '天' + toDouble(h) + '时' + toDouble(m) + '分' + toDouble(s) + '秒')setInterval(countDown, 100);
	var result =  d + "</span> 天 <span class=\"digit\">" + h + "</span> 小时 <span class=\"digit\">" + m + "</span> 分钟 <span class=\"digit\">" + s + "</span> 秒"; 
	$("#clock").html(result);
    }
    

