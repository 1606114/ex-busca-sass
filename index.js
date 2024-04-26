import "./index.scss"


console.log("FUNCIONOU!")

document.getElementById("findButton")
    .addEventListener("click", iniciarExercicioFind)

    document.getElementById("filterButton")
    .addEventListener("click", iniciarExercicioFilter)

function iniciarExercicioFind() {
    console.log("--- FIND INICIADO! ---")
}

function iniciarExercicioFilter() {
    console.log("--- FILTER INICIADO! ---")
}




