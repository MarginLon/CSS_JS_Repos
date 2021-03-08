function Set() {
    var items = {};

    // add(value)
    // remove(value)
    // has(value)
    // clear()
    // size()
    // values()

    /*
    this.has = function (value) {
        return value in items;  
    };
    */
    this.has = function (value) {
        return items.hasOwnProperty(value);
    };

    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    };

    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    };

    this.clear = function () {
        items = {};
    };

    this.size = function () {
        //1 length变量
        //2
        return Object.keys(items).length;
    };

    this.sizeLegacy = function () {
        var count = 0;
        for (var prop in items) {
            if (items.hasOwnProperty(prop)) {
                ++count;
            }
        }
        return count;
    };

    this.values = function () {
        return Object.keys(items);
    };

    //union
    this.union = function (otherSet) {
        var unionSet = new Set();

        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        values = otherSet.values();
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        return unionSet;
    };

    //交集
    this.intersection = function (otherSet) {
        var intersectionSet = new Set();
        
        var values = this.values();
        for (var i = 0; i < values.length; i++){
            if (otherSet.has(values[i])){
                intersectionSet.add(values[i]);   
            }
        }
        return intersectionSet;
    };
}
    //差集
this.difference = function (otherSet) {
    var differenceSet = new Set();

    var values = this.values();
    for (var i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
            differenceSet.remove(values[i]);
        }
    }
    return differenceSet;
};
    //子集
this.subset = function (otherSet) {
    if (this.size() > otherSet.size()) {
        return false;
    } else {
        var values = this.values();
        for (var i = 0; i < values.length; i++){
            if (!otherSet.has(values[i])) {
                return false;
            }
        }
        return true;
    }
};