// Función para calcular el factorial
function factorial(n) {
    if (n < 0) return NaN; // Manejo de números negativos
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Función para calcular combinaciones
function combinaciones(n, k) {
    if (n < 0 || k < 0 || k > n) return NaN; // Validación de parámetros
    return factorial(n) / (factorial(k) * factorial(n - k));
}

// Función para calcular permutaciones
function permutaciones(n, k) {
    if (n < 0 || k < 0 || k > n) return NaN; // Validación de parámetros
    return factorial(n) / factorial(n - k);
}

// Función para calcular el número de diagonales de un polígono
function diagonalesPoligono(lados) {
    if (lados < 3) return 0; // Un polígono debe tener al menos 3 lados
    return (lados * (lados - 3)) / 2;
}

// Función para generar inputs dinámicos
function generarInputs(ejercicio) {
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = "";

    switch (ejercicio) {
        case "1":
            inputContainer.innerHTML = `
                <label for="n">Total de personas (n):</label>
                <input type="number" id="n" placeholder="Ej: 10">
                <label for="k">Sitios disponibles (k):</label>
                <input type="number" id="k" placeholder="Ej: 4">
            `;
            break;
        case "2":
            inputContainer.innerHTML = `
                <label for="n">Total de alumnos (n):</label>
                <input type="number" id="n" placeholder="Ej: 21">
                <label for="k">Premios (k):</label>
                <input type="number" id="k" placeholder="Ej: 3">
            `;
            break;
        case "3":
            inputContainer.innerHTML = `
                <label for="lados">Número de lados del polígono:</label>
                <input type="number" id="lados" placeholder="Ej: 4 (cuadrado)">
            `;
            break;
        case "4":
            inputContainer.innerHTML = `
                <label for="hombres">Número de hombres:</label>
                <input type="number" id="hombres" placeholder="Ej: 8">
                <label for="mujeres">Número de mujeres:</label>
                <input type="number" id="mujeres" placeholder="Ej: 7">
            `;
            break;
        case "5":
            inputContainer.innerHTML = `
                <label for="digitos">Número de dígitos:</label>
                <input type="number" id="digitos" placeholder="Ej: 4">
            `;
            break;
        case "6":
            inputContainer.innerHTML = `
                <label for="amigos">Número de amigos:</label>
                <input type="number" id="amigos" placeholder="Ej: 15">
            `;
            break;
        case "7":
            inputContainer.innerHTML = `
                <label for="rayas">Número de rayas:</label>
                <input type="number" id="rayas" placeholder="Ej: 3">
                <label for="puntos">Número de puntos:</label>
                <input type="number" id="puntos" placeholder="Ej: 2">
            `;
            break;
        case "8":
            inputContainer.innerHTML = `
                <label for="monedas">Número de monedas:</label>
                <input type="number" id="monedas" placeholder="Ej: 4">
            `;
            break;
        case "9":
            inputContainer.innerHTML = `
                <label for="matematicas">Libros de matemáticas:</label>
                <input type="number" id="matematicas" placeholder="Ej: 5">
                <label for="control">Libros de control de proyecto:</label>
                <input type="number" id="control" placeholder="Ej: 7">
                <label for="interfaces">Libros de interfaces:</label>
                <input type="number" id="interfaces" placeholder="Ej: 3">
            `;
            break;
        case "10":
            inputContainer.innerHTML = `
                <label for="preguntas">Total de preguntas:</label>
                <input type="number" id="preguntas" placeholder="Ej: 10">
                <label for="elegir">Preguntas a elegir:</label>
                <input type="number" id="elegir" placeholder="Ej: 7">
            `;
            break;
        case "11":
            inputContainer.innerHTML = `
                <label for="estaciones">Número de estaciones:</label>
                <input type="number" id="estaciones" placeholder="Ej: 25">
            `;
            break;
        case "12":
            inputContainer.innerHTML = `
                <label for="atletas">Número de atletas:</label>
                <input type="number" id="atletas" placeholder="Ej: 3">
            `;
            break;
        case "13":
            inputContainer.innerHTML = `
                <label for="letras">Número de letras:</label>
                <input type="number" id="letras" placeholder="Ej: 25">
                <label for="digitos">Número de dígitos:</label>
                <input type="number" id="digitos" placeholder="Ej: 10">
            `;
            break;
    }
}

// Función para resolver el ejercicio seleccionado
function resolverEjercicio() {
    const ejercicio = document.getElementById("ejercicio").value;
    let resultado = "";

    try {
        switch (ejercicio) {
            case "1":
                const n1 = parseInt(document.getElementById("n").value);
                const k1 = parseInt(document.getElementById("k").value);
                if (isNaN(n1) || isNaN(k1) || n1 < 0 || k1 < 0 || k1 > n1) {
                    throw new Error("Ingrese valores válidos para n y k.");
                }
                resultado = `Número de maneras: ${permutaciones(n1, k1)}`;
                break;
            case "2":
                const n2 = parseInt(document.getElementById("n").value);
                const k2 = parseInt(document.getElementById("k").value);
                if (isNaN(n2) || isNaN(k2) || n2 < 0 || k2 < 0 || k2 > n2) {
                    throw new Error("Ingrese valores válidos para n y k.");
                }
                resultado = `Premios diferentes: ${permutaciones(n2, k2)}<br>Premios iguales: ${combinaciones(n2, k2)}`;
                break;
            case "3":
                const lados = parseInt(document.getElementById("lados").value);
                if (isNaN(lados) || lados < 3) {
                    throw new Error("Un polígono debe tener al menos 3 lados.");
                }
                resultado = `Número de diagonales: ${diagonalesPoligono(lados)}`;
                break;
            case "4":
                const hombres = parseInt(document.getElementById("hombres").value);
                const mujeres = parseInt(document.getElementById("mujeres").value);
                if (isNaN(hombres) || isNaN(mujeres) || hombres < 0 || mujeres < 0) {
                    throw new Error("Ingrese valores válidos para hombres y mujeres.");
                }
                resultado = `Número de maneras: ${factorial(hombres) * factorial(mujeres)}`;
                break;
            case "5":
                if (isNaN(parseInt(document.getElementById("digitos").value)) || parseInt(document.getElementById("digitos").value) < 1) {
                    throw new Error("Ingrese un número válido de dígitos.");
                }
                resultado = `Números posibles: ${Math.pow(9, parseInt(document.getElementById("digitos").value))}`;
                break;
            case "6":
                const amigos = parseInt(document.getElementById("amigos").value);
                if (isNaN(amigos) || amigos < 1) {
                    throw new Error("Ingrese un número válido de amigos.");
                }
                resultado = `Distribuciones de cumpleaños: ${Math.pow(365, amigos)}`;
                break;
            case "7":
                const rayas = parseInt(document.getElementById("rayas").value);
                const puntos = parseInt(document.getElementById("puntos").value);
                if (isNaN(rayas) || isNaN(puntos) || rayas < 0 || puntos < 0) {
                    throw new Error("Ingrese valores válidos para rayas y puntos.");
                }
                resultado = `Letras posibles: ${combinaciones(rayas + puntos, rayas)}`;
                break;
            case "8":
                const monedas = parseInt(document.getElementById("monedas").value);
                if (isNaN(monedas) || monedas < 1) {
                    throw new Error("Ingrese un número válido de monedas.");
                }
                resultado = `Resultados posibles: ${Math.pow(2, monedas)}<br>Casos con 2 caras y 2 cruces: ${combinaciones(monedas, 2)}`;
                break;
            case "9":
                const matematicas = parseInt(document.getElementById("matematicas").value);
                const control = parseInt(document.getElementById("control").value);
                const interfaces = parseInt(document.getElementById("interfaces").value);
                if (isNaN(matematicas) || isNaN(control) || isNaN(interfaces) || matematicas < 0 || control < 0 || interfaces < 0) {
                    throw new Error("Ingrese valores válidos para los libros.");
                }
                resultado = `Colocaciones con libros juntos: ${factorial(matematicas) * factorial(control) * factorial(interfaces) * factorial(3)}<br>Colocaciones con solo matemáticas juntas: ${factorial(matematicas) * factorial(control + interfaces + 1)}`;
                break;
            case "10":
                const preguntas = parseInt(document.getElementById("preguntas").value);
                const elegir = parseInt(document.getElementById("elegir").value);
                if (isNaN(preguntas) || isNaN(elegir) || preguntas < 1 || elegir < 1 || elegir > preguntas) {
                    throw new Error("Ingrese valores válidos para preguntas y elegir.");
                }
                resultado = `Maneras de elegir preguntas: ${combinaciones(preguntas, elegir)}<br>Si las 4 primeras son obligatorias: ${combinaciones(preguntas - 4, elegir - 4)}`;
                break;
            case "11":
                const estaciones = parseInt(document.getElementById("estaciones").value);
                if (isNaN(estaciones) || estaciones < 2) {
                    throw new Error("Ingrese un número válido de estaciones.");
                }
                resultado = `Billetes diferentes: ${permutaciones(estaciones, 2)}`;
                break;
            case "12":
                const atletas = parseInt(document.getElementById("atletas").value);
                if (isNaN(atletas) || atletas < 1) {
                    throw new Error("Ingrese un número válido de atletas.");
                }
                resultado = `Maneras de llegar a la meta: ${factorial(atletas)}`;
                break;
            case "13":
                const letras = parseInt(document.getElementById("letras").value);
                const digitos = parseInt(document.getElementById("digitos").value);
                if (isNaN(letras) || isNaN(parseInt(document.getElementById("digitos").value)) || letras < 1 || parseInt(document.getElementById("digitos").value) < 1) {
                    throw new Error("Ingrese valores válidos para letras y dígitos.");
                }
                resultado = `Historias clínicas sin restricciones: ${Math.pow(letras, 2) * Math.pow(parseInt(document.getElementById("digitos").value), 3)}<br>Historias clínicas con letras diferentes: ${letras * (letras - 1) * Math.pow(parseInt(document.getElementById("digitos").value), 3)}`;
                break;
        }
    } catch (error) {
        resultado = `Error: ${error.message}`;
    }

    document.getElementById("resultado").innerHTML = resultado;
}

// Eventos
document.getElementById("ejercicio").addEventListener("change", (e) => {
    generarInputs(e.target.value);
});

document.getElementById("btnResolver").addEventListener("click", resolverEjercicio);

// Inicializar inputs para el primer ejercicio
generarInputs("6");