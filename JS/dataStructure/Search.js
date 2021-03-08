function ArrayList() {
    var array = [];

    var swap = function (index1, index2) {
        var temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    };

    this.insert = function (item) {
        array.push(item);
    };

    this.toString = function () {
        return array.join();
    };

    this.sequentialSearch = function (item) {
        for (var i = 0; i < array.length; i++){
            if (item === array[i])
                return i;
        }  
        return -1;
    };

    this.binarySearch = function (item) {
        array.sort();

        var low = 0,
            high = array.length - 1,
            mid, element;
        while (low <= high) {
            mid = Math.floor((low + hight) / 2);
            element = array[mid];
            if (element < item) {
                low = mid + 1;
            } else if (element > item) {
                high = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    };
}