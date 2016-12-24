var LinkedListModule = (function LinkedListModule() {

    function Node() {
        this.data = null;
        this.next = null;
    };

    Node.prototype.getData = function getData() {
        var data = this.data;
        return data;
    };

    Node.prototype.setData = function setData(_data) {
        var data = _data;
        this.data = data;
    };

    Node.prototype.getNext = function getNext() {
        var nextNode = this.next;
        return nextNode;
    };

    Node.prototype.setNext = function setNext(_node) {
        var nextNode = _node;
        this.next = nextNode;
    };


    function LinkedList() {
        this.length = 0;
        this.repository = [];
        this.headNode = null;
    }

    LinkedList.prototype.add = function add(_data, _pos) {
        var position = _pos === undefined ? this.length + 1 : _pos === 0 ? 1 : _pos;
        var newNode = new Node();
        newNode.setData(_data);
        this.repository.push(newNode);
        var preNode = this.headNode;

        if (preNode) {
            if (_pos < 2) {
                console.log('a');
                newNode.setNextNode(preNode);
                preNode.setNextNode(preNode.getNext());
                this.headNode = newNode;
            } else {
                for (var i = 1; i < position; i++) {
                    if (preNode.getNext()) {
                        preNode = preNode.getNext();
                    }
                }
                newNode.setNext(preNode.getNext());
                preNode.setNext(newNode);

                this.length++;
            }
        } else {
            this.headNode = newNode;
            this.length++;
        }
    };

    LinkedList.prototype.remove = function remove(_pos) {
        var target = null;
        var position = _pos === undefined? 0:_pos;
        if(this.isEmpty()){
            console.log('List is Empty.');
        }else if(position < this.length){
            var preNode = this.headNode;

            for(var i =1 ;i < position; i++){
                preNode = preNode.next;
            };
            target = preNode.next.data;
            preNode.next = preNode.next.next;

            this.length--;
        }else{
            console.log("index error");
        }

        return target;

    };

    LinkedList.prototype.search = function search(_data) {
        var node = this.headNode;
        var listLength = this.length;

        for (var i = 0; i < listLength; i++) {
            if (_data === node.getData()) {
                break;
            }
            node = node.getNext();
        }
        return node;
    };

    LinkedList.prototype.print = function print(){
        var str = "LinkedList : ";
        var node = this.headNode;
        while(node != null){
            str += node.data;
            if(node.next !== null){
                str += "->";
            }
            node = node.next;
        };
        console.log(str);
    };

    LinkedList.prototype.isEmpty = function isEmpty(){
        var status = false;
        if(!this.length) {
            status = true;
        }
        return status;
    };

    var init = function init() {
        var object = new LinkedList();
        return object;
    };

    return {
        init: init
    }

})();


