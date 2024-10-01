// Cotação de moedas
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente numeros
amount.addEventListener("input", () => {    
    // Esse \D diz somente digitos o + diz para pegar em sequencia e o g para toda a string
    const hasCharactersRegex = /\D+/g
    // aqui com a função replace sobrescreve o valor com o padrão do regex
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturando o evento de submit do formulario
form.onsubmit = (event) => {
    event.preventDefault() // remove a ação padrão

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol){
    try {
        // textContent insere um texto no elemento
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        let total = amount * price

        result.textContent = `${formatCurrencyBRL(total).replace("R$", "")} Reais`

        footer.classList.add("show-result")
    } catch (error){
        console.log(error)
        footer.classList.remove("show-result")
        alert("não foi possivel converter, tente novamente.")
    }
}

// Formata a moeda em real brasileiro
function formatCurrencyBRL(value){

    // Converte o value para numero para usar a função toLocaleString e formatar o valor para real
    return Number(value).toLocaleString("pt-BR", {
        style:"currency",
        currency: "BRL"
    })
}
