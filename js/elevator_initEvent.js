    Elevator.prototype.initEvent = function(){
        this.bindingElevatorButton();
        this.bindingFloorButton();                
    }

    Elevator.prototype.bindingElevatorButton = function(){
        var that = this;
        $(this.wrap).find(".elevator>ul>li").off("click").on("click",function(){
            that.goFloor($(this).data("floor"));
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

        $(this.wrap).find(".elevator").stop().animate({
            top : this.options.floorHeight * (floorNumber - 1)
        },this.options.floorSpeed * distance);

        $('html body').animate({
            scrollTop:this.options.floorHeight * (floorNumber - 1)
        },this.options.floorSpeed * distance);
        this.nowFloor = floorNumber;
    };

        
