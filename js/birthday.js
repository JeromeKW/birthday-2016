$(function(){
    var textStr = '果果，祝愿你永远健康、快乐!';
    var zhuFuObj = $('#zhufu_text');
    var idx = 0;
    var musicObj = $('#music')[0];
    var isPlay = true;
    
    //显示文字
    setTimeout(function(){
        showText();
    }, 7000);

    //背景音乐控制
    var firstTouch = true; 
    $('body').bind('touchstart', function(){
        if(firstTouch){
            musicObj.play();
            firstTouch = false; 
        }
    });
    $('#audio_btn').click(function(){
        if(isPlay){
            isPlay = false;
            musicObj.pause();
        }else{
            isPlay = true;
            musicObj.play();
        }
    });

    function showText(){
        var curText = zhuFuObj.text();
        zhuFuObj.text(curText + textStr.substr(idx, 1));
        idx++;
        if(zhuFuObj.text().length < textStr.length){
            setTimeout(function(){
                showText();
            }, 500);
        }else{
            setTimeout(function(){
                showTimeLine();
            }, 2800);
        }
    }

    //切换内容
    function showTimeLine(){
        $('#cake_wrap').hide();
        $('#cd-timeline').show();
        $('body').css('backgroundColor', '#e9f0f5');
        musicObj.src = './media/mybaby.mp3';
    }
});