/*eslint-disable no-unused-vars*/
/*!
 * basic JavaScript interface v1.0.0
 * https://서울시/관악구/관천로.com/
 *
 * Copyright Uk Foundation and other contributors(empty)
 * Released under the Uk license
 * https://서울시/관악구/관천로.house/license
 *
 * Date: 2016-08-19
 */
$(document).ready(function(){
    var $btnClose = $('.btn_close');
    var $mainWrap = $('.main_wrap');
    var mainWrapHeight = $('.main_wrap').outerWidth()/1.9;
    var $character = $('.character_li > li');
    var $positionLi = $('.position_li > li');
    var $positionSeeLi = $('.position_see_li > li');
    var $seeLi = $('.see_wrap li');
    var $btnHint = $('.btn_hint');
    var positionIdx;
    var $gymWrap = ('.gym_wrap');
    var $gymLi = $('.gym_li > li');
    var $collectPocektLi = $('.collect_pocekt_li > li')
    var $collectOptionLi = $('.collect_option_li > li');
    var optionName = ['Neo~', 'Tube!!', 'GaeDdong2', 'Moozi', 'Peach'];
    //intro
    $btnClose.on('click', function(){
       window.open('about:blank','_self').self.close();
    });
    
    $mainWrap.css('height', mainWrapHeight);
    
    // character move
    $positionLi.on('click', function(){
        var position = $(this).position();
        positionIdx = $(this).index();
        $character.animate({'top' : position.top, 'left' : position.left}, 2000, function(){
            gymMission();
            gymSolution();
        });
    });
    
    // 6대륙 처리부분
    function gymMission(){
        $('.gym_wrap').css('display', 'block');
        $gymLi.eq(positionIdx).addClass('active');
    }
    
    function gymSolution(){
        if(positionIdx == 0){
            var keyValue = [67,76,73,67,75,66];
            var step = 0;
            document.addEventListener('keyup', function(e){
                if(e.which === keyValue[step]){
                    step +=1;
                }else{
                    step = 0;
                }
                if(step == keyValue.length){
                    gymComplete();
                    return step=0;	
                }		
            });             
        }else if(positionIdx == 1){
            var keyValue = [38,40,38,38,40];
            var step = 0;
            document.addEventListener('keyup', function(e){
                if(e.which === keyValue[step]){
                    step +=1;
                }else{
                    step = 0;
                }
                if(step == keyValue.length){
                    gymComplete();
                    return step=0;	
                }		
            });   
        }
    };
    
    function gymComplete(){
        alert('complete');
        $gymLi.eq(positionIdx).removeClass('active').addClass('complete');
        $('.gym_wrap').css('display', 'none');
        $collectPocektLi.eq(positionIdx).addClass('complete');
        
    };
    
    // 5대양 처리 부분
    $positionSeeLi.on('mouseenter', function(){
        var idx = $(this).index();
        if(!$collectOptionLi.eq(idx).hasClass('complete')){
            $seeLi.eq(idx).fadeIn(500);
            alert('숨겨진 캐릭터를 발견하였당!!! 축하축하 \n' + optionName[idx] + '획득하였습니다.');           
        }
        $collectOptionLi.eq(idx).addClass('complete')
    });
    $seeLi.on('mouseleave', function(){
        $(this).fadeOut();
    });
    
    /*
    // hint --> 추후 버튼을 통해 동작하게 하는게 더 좋을듯.
    setInterval(hint, 10000);
    
    function hint(){
        $positionLi.css('background', 'black');
        setTimeout(function(){
           $positionLi.css('background', 'none')
        }, 11)
    };
    */
    
    // gym 체육관 stage 이동
    function stageStart(){
        for(var i = 0; i < $positionLi.length; i++){
            location.href=""
        }
    }
    
    // btn_hint
    $btnHint.on('click', function(){
        $(this).siblings('.hint').css('display', 'block');
    });
    
    
});
