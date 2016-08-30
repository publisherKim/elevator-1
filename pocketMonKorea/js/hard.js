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
(function($){
    function Pocketmon(selector, options){
        this.wrap = selector;
        this.options = options;
        this.nowCharacter = 1;
        
        this.init();
        this.initEvent();
    }
    
    Pocketmon.prototype.init = function(){
        this.mainWrap();
        this.collectWrap();
    }
    
    // collectWrap start
    Pocketmon.prototype.collectWrap = function(){
        var $collectWrap = $('<div class="collect_wrap">');
        $(this.wrap).append($collectWrap);
        
        this.collectPocketLi($collectWrap);
        this.collectOptionLi($collectWrap);
    }
    
    Pocketmon.prototype.collectPocketLi = function($collectWrap){
        var $collectPocketLi = $('<ul class="collect_pocket_li">');
        var $collectPocketList = $('<li>');
        // img list 012345순차적으로 어떻게 돌릴것이냐..
        var $collectPocketImg = $('<img src="images/pocket1.png" alt="포케몬캐릭터">');
        var $collectPocketListTotal = $collectPocketList.append($collectPocketImg);
        for(var i = 0; i < this.options.positionListCnt; i++){
            var $item = $collectPocketListTotal.clone();
            $collectPocketLi.append($item);
        }

        $collectWrap.append($collectPocketLi);        
    }

    Pocketmon.prototype.collectOptionLi = function($collectWrap){
        var $collectOptionLi = $('<ul class="collect_option_li">');
        var $collectOptionList = $('<li>');
        var $collectOptionImg = $('<img src="images/option1.png" alt="포케몬캐릭터">');
        var $collectOptionListTotal = $collectOptionList.append($collectOptionImg);
        for(var i = 0; i < this.options.positionSeeListCnt; i++){
            var $item = $collectOptionListTotal.clone();
            $collectOptionLi.append($item);
        }

        $collectWrap.append($collectOptionLi);        
    }   
    // collectWrap end
    // mainWrap start
    Pocketmon.prototype.mainWrap = function(){
        var $mainWrap = $('<div class="main_wrap">');
        var $characterWrap = $('<div class="character_wrap">');
        $mainWrap.append($characterWrap);
        $(this.wrap).append($mainWrap);
        
        this.chracterLi($characterWrap);
        this.positionLi($characterWrap);
        this.positionSeeLi($characterWrap);
        this.gymWrap($characterWrap);
        this.seeWrap($characterWrap);
    }
    
    Pocketmon.prototype.chracterLi = function($characterWrap){
        var $characterLi = $('<ul class="character_li">');
        var $characterGender = $('<li class="woman">');
        var $characterImg = $('<img src="images/character_w.png" alt="여자캐릭터">');
        var $characterGenderImg = $characterGender.append($characterImg);
        for(var i = 0; i < this.options.characterListCnt; i++){
            var $item = $characterGenderImg.clone();
            $characterLi.append($item);
        }
        // 조잡이 나온다... 응용력 0점... 동적으로 src경로랑 alt 바꾸기 캐릭터 li class도...강제로도 바꿀수 있겠지만... 모르겠다.
        // if else... 쓰면 백퍼 되는데 구려!!
        $characterWrap.append($characterLi);
    }
    
    Pocketmon.prototype.positionLi = function($characterWrap){
        var $positionLi = $('<ul class="position_li">');
        var $positionList = $('<li><a>');
        for(var i = 0; i < this.options.positionListCnt; i++){
            var $item = $positionList.clone();
            $positionLi.append($item);
        }

        $characterWrap.append($positionLi);
    };

    Pocketmon.prototype.positionSeeLi = function($characterWrap){
        var $positionSeeLi = $('<ul class="position_see_li">');
        var $positionSeeList = $('<li><a>');
        for(var i = 0; i < this.options.positionSeeListCnt; i++){
            var $item = $positionSeeList.clone();
            $positionSeeLi.append($item);
        }

        $characterWrap.append($positionSeeLi);
    }
    
    Pocketmon.prototype.seeWrap = function($characterWrap){
        var $seeWrap = $('<div class="see_wrap">');
        var $seeLi = $('<ul>');
        var $seeList = $('<li>');
        var $img = $('<img src="images/jipang9.jpg" alt="지팡구">')
        var $text = $('<span class="text">test</span>');
        var $seeListTotal = $seeList.append($img, $text);
        /*
        var $text = $('<span class="text">" + textData[i] + "') 이런형태에서 textData를 쓰지 않을까 추정
        */
        for(var i = 0; i < this.options.positionSeeListCnt; i++){
            var $item = $seeListTotal.clone();
            $seeLi.append($item);
        }
        $seeWrap.append($seeLi);
        $characterWrap.append($seeWrap);
    };    

    Pocketmon.prototype.gymWrap = function($characterWrap){
        var $gymWrap = $('<div class="gym_wrap">');
        var $gymLi = $('<ul>');
        var $gymList = $('<li>');
        var $div = $('<div>');
        var $mission = $('<div class="mission">').append($h2, $btnHint, $hint);
        var $h2 = $('<h2>위 그림중 어떤 캐릭터를 얻을까 ?0</h2>');
        var $btnHint = $('<a href="#none" class="btn btn_hint">힌트</a>');
        var $hint = $('<p class="hint">test</p>');
        var $img = $('<img src="images/pocketmon.png" alt="포켓몬캐릭터모음">');
        var $missionTotal = $mission.append($h2, $btnHint, $hint);
        var $divTotal = $div.append($missionTotal);
        var $gymListTotal = $gymList.append($img, $missionTotal);

        for(var i = 0; i < this.options.positionListCnt; i++){
            var $item = $gymListTotal.clone();
            $gymLi.append($item);
        }
        
        $gymWrap.append($gymLi);
        $characterWrap.append($gymWrap);
    }
    //mainWrap end
    
    //event start
    Pocketmon.prototype.initEvent = function(){
        this.bindingButtonGymMission();
        this.bindingButtonFiveOcean();
    }
    
    Pocketmon.prototype.bindingButtonGymMission = function(){
        var that = this;
        $(this.wrap).find('.position_li > li').off('click').on('click', function(){
            var position = $(this).position();
            var positionIdx = $(this).index();
            $(that.wrap).find('.character_li > li').animate({'top' : position.top, 'left' : position.left}, 2000, function(){
               that.gymMission(positionIdx); 
            });
        });   
    }
    
    Pocketmon.prototype.gymMission = function(positionIdx){
        var that = this;
        $(this.wrap).find('.gym_wrap').css('display', 'block');
        $(this.wrap).find('.gym_wrap > ul > li').eq(positionIdx).addClass('active');
        $(this.wrap).find('.btn_hint').off('click').on('click', function(){
            that.hint();
        });
        
        this.gymSolution(positionIdx);        
    }
    
    Pocketmon.prototype.hint = function(){
        $(this.wrap).find('.hint').toggle();
    }
    
    Pocketmon.prototype.gymSolution = function(positionIdx){
        var that = this;
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
                    that.gymComplete(positionIdx);
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
                    that.gymComplete(positionIdx);
                    return step=0;	
                }		
            });   
        }        
    }
    
    Pocketmon.prototype.gymComplete = function(positionIdx){
        alert('complete');
        console.log($(this.wrap));
        $(this.wrap).find('.gym_wrap > ul > li').eq(positionIdx).removeClass('active').addClass('complete');
        $(this.wrap).find('.gym_wrap').css('display', 'none');
        $(this.wrap).find('.collect_pocket_li > li').eq(positionIdx).addClass('complete');        
    }
    
    Pocketmon.prototype.bindingButtonFiveOcean = function(){
        var that = this;
        $(this.wrap).find('.position_see_li > li').off('mouseenter').on('mouseenter', function(){
            var idx = $(this).index();
            var optionName = ['Neo~', 'Tube!!', 'GaeDdong2', 'Moozi', 'Peach'];
            if(!$(that.wrap).find('.collect_option_li > li').eq(idx).hasClass('complete')){
                $(that.wrap).find('.see_wrap li').eq(idx).fadeIn(500);
                console.log(idx);
                alert('숨겨진 캐릭터를 발견하였당!!! 축하축하 \n' + optionName[idx] + '획득하였습니다.');           
            }
            $(that.wrap).find('.collect_option_li > li').eq(idx).addClass('complete');            
        });
        
        $(this.wrap).find('.see_wrap li').off('mouseleave').on('mouseleave', function(){
            $(this).fadeOut();
        });        
    }
    //event end
    
    //flugin 
    $.fn.Pocketmon = function(userOptions){
        var dftOptions = {
            // 대륙과 바다에 대한 변수명 좀더 적합한 요소를 찾을 필요 있음.
            characterListCnt : 2,
            positionListCnt : 1,
            positionSeeListCnt : 3
            
        };
        var optionSet = $.extend({}, dftOptions, userOptions);

        new Pocketmon(this, optionSet); 
    };   
})(jQuery);


/*
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
*/
