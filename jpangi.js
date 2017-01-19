// q2 : 자판기를 만들어라.
/*
    1. 동작과 상태를 구별하자.
    2. 상태를 나타내는것들
        2-1 power = false,
        2-2 moneybox = moneybox || 10000,
        2-3 products[{kind : '', Quantity : 10,  price : 500},...]
    3. 동작
        3-1 power : on(), off()
        3-2 insertMoney(500)
        3-3 getbeverage(kind, quantity)
        3-4 changeMoney()
*/

function vendingMachine( products, moneyBox ){
    this.power = false;
    this.moneyBox = moneyBox || 10000;
    this.insert = 0;
    this.change = 0;
    this.door = false;
    this.products = products;
}

vendingMachine.prototype = vendingAction;

var vendingAction = {
    guide : function(){
        this.powerError();
        return v1;
    },
    on : function(){
        this.power = true;
        return '자판기가 작동합니다.'
    },
    off : function(){
        this.power = false;
        return '자판기 작동이 종료합니다.'
    },
    doorOpen : function(password){
        this.powerError();
        this.passwordError(password);
        return this.door = true;
    },
    doorClose : function(password){
        this.powerError();
        this.passwordError(password);
        return this.door = false;        
    },   
    insertMoney : function(money){
        this.powerError();
        // 잔돈 초기화... 더좋은 방법은 ?
        this.change = 0;
        this.moneyBox += money;
        this.insert += money;
        return '투입금액 : ' + money;
    },
    getBeverage : function ( name, quantites ){
        this.powerError();
        this.coinError();
        quantites = quantites || 1;
        for(var i = 0, max = this.products.length; i < max; i++){
            if( this.products[i].kind ===  name ){
                if(this.products[i].quantity < quantites){return '수량이 부족합니다.'}
                var salePrices = this.products[i].price * quantites;
                if( salePrices <= this.insert ){
                    console.log(salePrices);
                    this.insert -= salePrices;
                    return name + ' ' + quantites + '개, 남은 금액 : ' + this.insert;
                }
                return '금액이 부족합니다. 남은 금액 : ' + this.insert;
            }
        }
    },
    changeMoney : function(){
        this.powerError();
        // 잔돈이 머니 박스의 금액보다 클수가 없다....
        //if(this.moneyBox < this.change) return '관리자에게 문의하세요.';
        this.moneyBox -= this.insert;
        var userChange = this.change = this.insert;
        this.insert = 0;
        this.change = 0;
        return userChange;
    },
    setBeverage : function( obj ){
        this.powerError();
        if(!this.door) throw new Error('도둑놈아!!');
        var objCheck = [];
        if(typeof arguments[0] === 'string'){
            arguments[1] = arguments[1] || 100;
            for(var i = 0, max = this.products.length; i < max; i++){
                if(this.products[i].kind === arguments[0]){
                    this.products[i].kind = arguments[0]
                    this.products[i].quantity += arguments[1];
                    this.products[i].price = arguments[2];
                    objCheck.push(this.products[i]);
                    console.log(objCheck[i]);
                }
            }
        }
        if(typeof obj === 'object'){
            for(var i = 0, max = obj.length; i < max; i++){
                if(this.products[i].kind === obj[i].kind){
                    this.products[i].kind = obj[i].kind;
                    this.products[i].quantity += obj[i].quantity;
                    this.products[i].price = obj[i].price;
                    objCheck.push(this.products[i]);
                    console.log(objCheck[i]);
                }
            }
        }
        return objCheck + '비밀번호를 입력하여 문을 잠궈주세요!!';
    },
    setMoneyBox : function(money){
        this.powerError();
        this.doorError();
        this.moneyBox += money;
        console.log(v1.moneyBox);
        return '돈통에 총 금액은' + this.moneyBox + '원 입니다. 비밀번호를 입력하여 문을 잠궈주세요';
    },
    powerError : function(){
        if(!this.power) throw new Error('power on!!'); 
    },
    doorError : function(){
        if(!this.door) throw new Error('도둑놈아!!');
    },
    coinError : function(){
        if(this.insert === 0) throw new Error('insert coin!!');
    },
    passwordError : function(password){
        if( password !== 1234){
            alert('who are u?') 
            return this.off();
        }       
    }
}

var v1 = new vendingMachine([
    {kind : 'coke', quantity : 100, price : 500},
    {kind : 'cyder', quantity : 100, price : 600},
    {kind : 'fanta', quantity : 100, price : 700},
], 20000);	
