function Map() {
    var items = {};

    this.has = function (key) {
        return key in items;
    }

    this.set = function (key, value) {
        items[keys] = value;
    }

    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }

    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    };

    this.values = function (key) {
        var values = {};
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
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
    
}

function Hash() {
    var tabel = [];

    var loseloseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    this.put = function (key, value) {
        var position = loseloseHashCode(key);
        console.log(position + '-' + key);
        tabel[position] = value;
    };

    this.get = function (key) {
        return table[loseloseHashCode(key)];
    };

    this.remove = function(key) {
        table[loseloseHashCode(key)] = undefined;
    };
    
    

}