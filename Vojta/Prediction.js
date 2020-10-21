var infection = [8, 4, 2, 1, 0, 0, 0] //včera, předevčera atd.
var i;
var AllR = 0;
for (i = 0; i < infection.length-1; i++) {
    var New = infection[i];
    var Old = infection[i + 1];
    var R = -1.0;
    if (Old == 0) {
        R = New / 1;
    }
    else if (Old == 0 && New == 0) {
        R = 0;
    }
    else {
         R = New / Old;
    }
    AllR += R;
   
}
var NumberR = AllR / 7;
console.log(NumberR);
console.log('Hello world');   