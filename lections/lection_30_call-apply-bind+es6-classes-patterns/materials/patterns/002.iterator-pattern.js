// iterartor
let iterator = (function(data) {
    let index = 0, size = data.length;

    function hasNext() {
        return index < size;
    }



    return {
        next() {
            if(!hasNext()) return;
            // to DO
            return ++index;
        },

        hasPrevious() {
            return index != 0;
        }
    };
})([1,2,3]);

iterator.hasNext()