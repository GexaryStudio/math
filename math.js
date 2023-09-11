function primeFactors(x) {
    let facteursPremiers = [];
    let diviseur = 2;

    while (x > 1) {
        let puissance = 0;
        while (x % diviseur === 0) {
            puissance++;
            x /= diviseur;
        }
        if (puissance > 0) {
            if (puissance === 1) {
                facteursPremiers.push(diviseur);
            } else {
                facteursPremiers.push(`${diviseur}^${puissance}`);
            }
        }
        diviseur++;
    }

    return facteursPremiers.join(" x ");
}

const input = document.getElementById("input");
const output = document.getElementById("output");
const decompose = document.getElementById("decompose");

function checkConvertInt(v) {
    const n = parseInt(v);
    if (!isNaN(n)) {
        return n;
    } else {
        return null;
    }
}

decompose.addEventListener("click", () => {
    const number = input.value;
    if (checkConvertInt(number) !== null) {
        const decomposition = primeFactors(number);
        output.innerHTML = `The prime factorization of ${number} is: ${decomposition}`;
    } else {
        output.innerHTML = "Check the input number";
    }
});
