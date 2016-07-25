        //부모클래스
        function Widget(width, height, position, border){
            this.width = width || 50;
            this.height = height || 50;
            this.position = position || 'static';
            this.border = border || 'solid 1px #000';
            this.$elem = null;
        }
        
        Widget.prototype.render = function($where){
            if(this.$elem){
                this.$elem.css({
                    width : this.width + 'px',
                    height : this.height + 'px',
                    position : this.position,
                    border : this.border
                }).appendTo($where);
            }
        };
        
        function Button(width, height, position, border, label){
            //super 생성자 호출
            Widget.call(this, width, height, position, border);
            this.label = label || 'Default'
            this.$elem = $('<div><ul><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li></ul>');         // 이걸 따로 부치는법 ? 뭉터기로 부치면 개별의 클릭 처리 어떻게 하지 ?
        }
        
        // Button은 Widget으로부터 상속을 받는다.
        Button.prototype = Object.create(Widget.prototype)
        
        // 상속받은 render()를 오버라이드한다.
        Button.prototype.render = function($where){
            //super 호출
            Widget.prototype.render.call(this, $where);       
            //this.$elem.dblclick(this.onDbClick.bind(this));

        };
        
        /*
        Button.prototype.onDbClick = function(evt){
            alert(this.label + '엘레베이터 더블 클릭됨');
        }
        */