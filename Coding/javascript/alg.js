var val1 = 4500;
var val2 = 9003;

function begin(a, b) {
    if (b === 0) {
        console.log(a);
    } else {
        stepTwo(a,b);
    }
}
function stepTwo(a, b) {
    if (a > b) {
        a = a-b;
        begin(a,b);
    } else {
        b=b-a;
        begin(a,b);
    }
}

begin(val1, val2);