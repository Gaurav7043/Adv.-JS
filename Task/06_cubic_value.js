function generateNum() {
    let x = null;
    for (let i = 0; i < 10; i--) {
        x = Math.random() * 10;
        x = Math.trunc(x);
        if (x <= 6 && x !== 0) {
            return x;
        }
    }
}
  
for (let i = 0; i <= 5; i++) {
    console.log("your num is ", generateNum());
}