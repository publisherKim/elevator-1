        (function($){
            // 작성순서2, 초기 추상화가 여기 다 들어있음
            function Elevator(selector, options){
                this.wrap = selector;
                this.options = options;
                this.nowFloor = 1;
                
                this.init();                // 건물을 초기화함 #elevator 함수명 설정문제.. 조금더 디테일한게 좋은가 ?
                this.initEvent();
            }
            
            //--- 외부 구현이 여기서부터 ---//
            // 작성순서3, 초기화 함수 #elevator을 생성 층수가 생김
            Elevator.prototype.init = function(){
                $(this.wrap).css({
                    height : this.options.floorHeight * this.options.floorCnt
                });
                this.makeElevator();        // .elevator를 만듬 Elevator에 추가해서 만들수도 있으나 초기화때 같이 만듬 뭐가 더 좋은지는 잘..
                this.makeBuilding();        // 같은 고민 Elevator(){//logic 에서 설정해주는게 좋은지 잘..}
            };
            
            // .elevator를 만듬
            Elevator.prototype.makeElevator = function(){
                var $elevator = $("<div>").addClass("elevator");
                var $ul = $("<ul>");
                var $floor = $("<li>");
                for (var i = 0 ;i<this.options.floorCnt;i++){
                    var $item = $floor.clone().text((i+1)+"층");
                    $item.data("floor",i+1);
                    $ul.append($item);
                }
                $elevator.append($ul);
                $(this.wrap).append($elevator);                
            }
            
            // 건물을 만듬 사실상 그냥 외부버튼 정도 구현함.
            Elevator.prototype.makeBuilding = function(){
                var $FloorButtonWrap = $("<div>").addClass("floor_button_wrap");
                var $ul = $("<ul>");
                var $floor = $("<li>");
                for (var i = 0 ;i<this.options.floorCnt;i++){
                    $ul.append($floor.clone().text((i+1)+"층").data("floor",i+1));
                }
                $FloorButtonWrap.append($ul);
                $(this.wrap).append($FloorButtonWrap);              
            }
            //--- 외부 구현이 여기까지 ---//
            
            //--- 기능 구현이 여기서부터 ---//
            // 작성순서4
            Elevator.prototype.initEvent = function(){
                this.bindingElevatorButton();
                this.bindingFloorButton();                
            }
            
            Elevator.prototype.bindingElevatorButton = function(){
                var that = this;        // this이놈이 문제당 어쩔수없이 어휘바인딩을 활용...
                $(this.wrap).find(".elevator>ul>li").off("click").on("click",function(){
                    that.goFloor($(this).data("floor"));        // 좀더 정리를 하고 싶다. 위로 올리는게 역시나 최선책일까..
                });
            };
            
            Elevator.prototype.bindingFloorButton = function(){
                var that = this;
                $(this.wrap).find(".floor_button_wrap>ul>li").off("click").on("click",function(){
                    that.goFloor($(this).data("floor"));
                })
            };            
            
            Elevator.prototype.goFloor = function(floorNumber){
                var distance = Math.abs(this.nowFloor - floorNumber);
                
                // elevator 움직임
                $(this.wrap).find(".elevator").stop().animate({
                    top : this.options.floorHeight * (floorNumber - 1)
                },this.options.floorSpeed * distance);
                
                // scroll 움직임
                $('html body').animate({
                    scrollTop:this.options.floorHeight * (floorNumber - 1)
                },this.options.floorSpeed * distance);
                this.nowFloor = floorNumber;
            };
            //--- 기능 구현이 여기까지 ---//
            
            // 작성순서1
            $.fn.elevator = function(userOptions){
                var dftOptions = {
                    floorCnt : 3,
                    floorHeight : 300,
                    floorSpeed : 1000
                };
                var s = $.extend({}, dftOptions, userOptions);
                
                new Elevator(this, s)
            }
        })(jQuery);