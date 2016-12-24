var StackModule = (function StackModule() {

    //Stack Class
    function MyStack() {
        this.repository = [];
    }

    MyStack.prototype.push = function push(_array) {
        this.repository.push(_array);
    };

    MyStack.prototype.pop = function pop() {
        if (this.repository.length === 0) {
            console.log('repository is empty.');
            return null;
        }

        var result = this.repository[this.repository.length -1];
        this.repository = this.repository.slice(0, this.repository.length-1);
        return result;
    };

    MyStack.prototype.display = function display() {
        console.log('==============Start===============');
        for(var i = this.repository.length -1 ; i > -1 ; i--){
            console.log(this.repository[i]);
        }
        console.log('===============End================');
        console.log('');
    };

    var init = function init(){
        var object = new MyStack();
        return object;
    };

    return {
        init: init
    };
})();

