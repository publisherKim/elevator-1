    function Elevator(selector, options){
        this.wrap = selector;
        this.options = options;
        this.nowFloor = 1;

        this.init();                
        this.initEvent();
    }

    $.fn.elevator = function(userOptions){
        var dftOptions = {
            floorCnt : 3,
            floorHeight : 300,
            floorSpeed : 1000
        };
        var s = $.extend({}, dftOptions, userOptions);

        new Elevator(this, s)
    }
        
