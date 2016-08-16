    Elevator.prototype.init = function(){
        $(this.wrap).css({
            height : this.options.floorHeight * this.options.floorCnt
        });
        this.makeElevator();
        this.makeBuilding();
    };

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

        
