const input = document.querySelector('#valor-inicial')
const button = document.querySelector('button')
const form = document.querySelector('form')
const thead1 = document.querySelector('.thead1')
const tbody1 = document.querySelector('.tbody1')
const thead2 = document.querySelector('.thead2')
const tbody2= document.querySelector('.tbody2')

const criarTabela = (i, deposito, guardar, head, body) => {
  head.innerHTML =
    `
      <tr>
          <td>Semana</td>
          <td>Depositar</td>
          <td>Guardado</td>
      </tr>
    `
  body.innerHTML +=
    `
      <tr>
        <td>${i}</td>
        <td>R$ ${deposito.toFixed(2).replace('.', ',')}</td>
        <td>R$ ${guardar.toFixed(2).replace('.', ',')}</td>
      </tr>
    `
}

const calculo = () => {
  let valorCorrigido = input.value.replace(',', '.')
  const valorBase = parseFloat(valorCorrigido)

  let guardado = 0

  for (i = 1; i <= 26; i++) {
    const deposito = valorBase * i
    const guardar = guardado += deposito

    criarTabela(i, deposito, guardar, thead1, tbody1)
  }
  for (i = 27; i <= 52; i++) {
    const deposito = valorBase * i
    const guardar = guardado += deposito

    criarTabela(i, deposito, guardar, thead2, tbody2)
  }
}

const validacao = () => {
  const regex = /^[\d,.?!]+$/
  const teste = regex.test(input.value)
  if (teste) {
    calculo()
  }
  if (input.value === '') {
    alert('Digite um valor.')
  } else if (!teste) {
    alert('Digite apenas números.')
  } else if (input.value <= 0) {
    alert('Digite um valor maior que zero.')
  }
}

const clearContent = () => {
  tbody1.innerHTML = ``
  thead1.innerHTML = ``
  tbody2.innerHTML = ``
  thead2.innerHTML = ``
}
form.addEventListener('submit', event => {
  clearContent()
  event.preventDefault()
  validacao()
  input.value = ''
})