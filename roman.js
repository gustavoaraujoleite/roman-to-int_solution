var romanToInt = function(s) {
    const list = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let total = 0;
    let current, num = 0;
    
    s.split('').reverse().forEach(e => {
        current = list[e];
        if(current >= num){
            total += current;
        } else {
            total -= current;
        }
        num = current;
    });
    return total;
};
