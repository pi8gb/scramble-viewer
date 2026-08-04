let input = document.getElementById("input");
let cube = document.getElementById("cube");

// Check if the user has visited before
if (!localStorage.getItem("visited")) {
    window.location.reload();

    // Save that they've visited
    localStorage.setItem("visited", "true");
}

function updateCube() {
    let algorithm = input.value;
    cube.alg = algorithm;
    document.getElementById("algorithmP").textContent = "ALG: " + algorithm;

    cube.puzzle = document.getElementById("dropdown1").value;
    cube.visualization = document.getElementById("dropdown2").value;
}

setInterval(updateCube, 200);
