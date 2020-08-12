
window.onload = function() {
    document.getElementById("add-item").addEventListener('click', () => {
        //console.log("Button clicked..");
        let value = document.getElementById("item").value;

        if (value) {
            console.log("yeh..! value given..");
        }
    });
}
