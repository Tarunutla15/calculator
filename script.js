// Mapping for display values to their corresponding Math functions
const mathFunctions = {
    'SIN(': 'Math.sin(',
    'COS(': 'Math.cos(',
    'TAN(': 'Math.tan(',
    'π': 'Math.PI',
    'LOG(': 'Math.log(',
    '√(': 'Math.sqrt('
};

// Function to handle button clicks
function fun(val) {
    const displayInput = document.getElementById("txt");
    const evalInput = document.getElementById("evalTxt");

    // Check if the value is a key in the mathFunctions mapping
    if (mathFunctions[val]) {
        displayInput.value += val; // Add the display value
        evalInput.value += mathFunctions[val]; // Add the actual Math function
    } else {
        displayInput.value += val; // Add the normal value
        evalInput.value += val; // Add the normal value
    }
}

// Function to calculate the result
function calRes() {
    const evalInput = document.getElementById("evalTxt");

    try {
        document.getElementById('txt').value = eval(evalInput.value);
        evalInput.value = eval(evalInput.value); // Update the hidden input with the result
    } catch (error) {
        document.getElementById("txt").value = error;
    }
}

// Function to clear the input
function cl() {
    document.getElementById('txt').value = "";
    document.getElementById('evalTxt').value = "";
}

// Function to delete the last character
function del() {
    const displayInput = document.getElementById("txt");
    const evalInput = document.getElementById("evalTxt");

    displayInput.value = displayInput.value.slice(0, -1);
    evalInput.value = evalInput.value.slice(0, -1);
}

// Function to toggle calculator mode
function change() {
    const togg = document.getElementById("toggle").value;
    const r1 = document.getElementById("t");
    const r2 = document.getElementById("t1");

    if (togg === "On") {
        document.getElementById("toggle").value = "Off";
        document.getElementById("itxt").innerText = "Scientific Calculator";
        r1.style.display = "table-row";
        r2.style.display = "table-row";
    } else {
        document.getElementById("toggle").value = "On";
        document.getElementById("itxt").innerText = "Standard Calculator";
        r1.style.display = "none";
        r2.style.display = "none";
    }
}

// Function to calculate the square of the value
function x2() {
    const val = document.getElementById("txt").value;
    document.getElementById("txt").value = (val * val);
    document.getElementById("evalTxt").value = (val * val); // Update the hidden input
}

// Function to calculate the cube of the value
function x3() {
    const val = document.getElementById("txt").value;
    document.getElementById("txt").value = (val * val * val);
    document.getElementById("evalTxt").value = (val * val * val); // Update the hidden input
}
