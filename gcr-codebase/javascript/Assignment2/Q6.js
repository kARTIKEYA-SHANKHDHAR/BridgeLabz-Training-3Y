let count = 0;
function increment() {
    count++;

    function showCount() {
        console.log("Current Count:", count);
    }

    showCount();
}
function decrement() {
    count--;

    function showCount() {
        console.log("Current Count:", count);
    }

    showCount();
}
increment();
increment();
increment();
decrement();
decrement();