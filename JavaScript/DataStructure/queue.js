var QueueModule = (function QueueModule() {

    function Queue() {
        this.repository = [];
    }

    Queue.prototype.put = function put(_array) {
        this.repository.push(_array);
    };

    Queue.prototype.get = function get() {
        if (this.repository.length === 0) {
            console.log('repository is empty.');
            return null;
        }
        var result = this.repository[0];
        this.repository = this.repository.slice(1);
        return result;
    };

    Queue.prototype.display = function display() {
        var result = this.repository.toString();
        console.log(result);
    };

    var init = function init() {
        var object = new Queue();
        return object;
    };

    return {
        init: init
    };
})();