function calcularDosagem() {
    const peso = parseFloat(document.getElementById('peso').value);
    const dose = parseFloat(document.getElementById('dose').value);
    const resultadoDose = document.getElementById('resultado-dose');

    // Validação de entrada
    if (peso <= 0 || isNaN(peso)) {
        resultadoDose.innerHTML = "Peso inválido. Insira um valor positivo.";
        return; // Interrompe a função se o peso for inválido
    }

    if (dose <= 0 || isNaN(dose)) {
        resultadoDose.innerHTML = "Dose inválida. Insira um valor positivo.";
        return; // Interrompe a função se a dose for inválida
    }

    // Realiza o cálculo se a entrada for válida
    const totalDose = peso * dose;
    resultadoDose.innerHTML = `Dose total: ${totalDose.toFixed(2)} mg`;
}
// Função para alternar entre os campos de cálculo
function updateCalculator() {
    const calcType = document.getElementById("calcType").value;

    // Esconde todos os campos de cálculo
    const calcFields = document.querySelectorAll(".calc-fields");
    calcFields.forEach(field => {
        field.style.display = "none";
    });

    // Mostra o campo de cálculo selecionado
    document.getElementById(`${calcType}-fields`).style.display = "block";
}

// Função para calcular dosagem de medicamentos
function calcularDosagem() {
    const peso = parseFloat(document.getElementById('peso').value);
    const dose = parseFloat(document.getElementById('dose').value);
    const resultadoDose = document.getElementById('resultado-dose');

    if (peso && dose) {
        const totalDose = peso * dose;
        resultadoDose.innerHTML = `Dose total: ${totalDose.toFixed(2)} mg`;
    } else {
        resultadoDose.innerHTML = "Insira o peso e a dose recomendada.";
    }
}

// Função para calcular taxa de gotejamento
function calcularGotejamento() {
    const volume = parseFloat(document.getElementById('volume').value);
    const tempo = parseFloat(document.getElementById('tempo').value);
    const gotejo = parseFloat(document.getElementById('gotejo').value);
    const resultadoGotejamento = document.getElementById('resultado-gotejamento');

    if (volume && tempo && gotejo) {
        const gotasPorMinuto = (volume * gotejo) / tempo;
        resultadoGotejamento.innerHTML = `Taxa de gotejamento: ${gotasPorMinuto.toFixed(2)} gotas/min`;
    } else {
        resultadoGotejamento.innerHTML = "Insira todos os valores.";
    }
}

// Função para calcular IMC
function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const pesoImc = parseFloat(document.getElementById('pesoImc').value);
    const resultadoIMC = document.getElementById('resultado-imc');

    if (altura && pesoImc) {
        const imc = pesoImc / (altura * altura);
        resultadoIMC.innerHTML = `IMC: ${imc.toFixed(2)}`;
    } else {
        resultadoIMC.innerHTML = "Insira a altura e o peso.";
    }
}

// Função para calcular Dose Pediátrica
function calcularDosePediatrica() {
    const pesoCrianca = parseFloat(document.getElementById('pesoCrianca').value);
    const doseRecomendada = parseFloat(document.getElementById('doseRecomendada').value);
    const resultadoDosePediatrica = document.getElementById('resultado-dosePediatrica');

    if (pesoCrianca && doseRecomendada) {
        const dosePediatrica = pesoCrianca * doseRecomendada;
        resultadoDosePediatrica.innerHTML = `Dose Pediátrica: ${dosePediatrica.toFixed(2)} mg`;
    } else {
        resultadoDosePediatrica.innerHTML = "Insira o peso da criança e a dose recomendada.";
    }
}

// Função para calcular Taxa de Infusão
function calcularTaxaInfusao() {
    const volumeInfusao = parseFloat(document.getElementById('volumeInfusao').value);
    const tempoInfusao = parseFloat(document.getElementById('tempoInfusao').value);
    const resultadoInfusao = document.getElementById('resultado-infusao');

    if (volumeInfusao && tempoInfusao) {
        const taxaInfusao = volumeInfusao / tempoInfusao;
        resultadoInfusao.innerHTML = `Taxa de Infusão: ${taxaInfusao.toFixed(2)} mL/hora`;
    } else {
        resultadoInfusao.innerHTML = "Insira o volume total e o tempo de infusão.";
    }
}

// Função para calcular Nutrição
function calcularNutricional() {
    const calorias = parseFloat(document.getElementById('calorias').value);
    const proteinas = parseFloat(document.getElementById('proteinas').value);
    const carboidratos = parseFloat(document.getElementById('carboidratos').value);
    const lipidios = parseFloat(document.getElementById('lipidios').value);
    const resultadoNutricao = document.getElementById('resultado-nutricao');

    if (calorias && proteinas && carboidratos && lipidios) {
        resultadoNutricao.innerHTML = `Calorias: ${calorias} kcal<br>Proteínas: ${proteinas} g<br>Carboidratos: ${carboidratos} g<br>Lipídios: ${lipidios} g`;
    } else {
        resultadoNutricao.innerHTML = "Insira todos os valores nutricionais.";
    }
}
// Função para calcular a Escala de Dor
function calcularEscalaDor() {
    const nivelDor = parseFloat(document.getElementById('nivelDor').value);
    const resultadoDor = document.getElementById('resultado-dor');

    if (nivelDor >= 0 && nivelDor <= 10) {
        let interpretacao;
        if (nivelDor === 0) {
            interpretacao = "Sem dor.";
        } else if (nivelDor <= 3) {
            interpretacao = "Dor leve.";
        } else if (nivelDor <= 6) {
            interpretacao = "Dor moderada.";
        } else if (nivelDor <= 9) {
            interpretacao = "Dor intensa.";
        } else {
            interpretacao = "Dor insuportável.";
        }
        resultadoDor.innerHTML = `Nível de dor: ${nivelDor} - ${interpretacao}`;
    } else {
        resultadoDor.innerHTML = "Insira um nível de dor entre 0 e 10.";
    }
}

// Função para calcular a Escala de Coma de Glasgow
function calcularEscalaComa() {
    const aberturaOcular = parseInt(document.getElementById('aberturaOcular').value);
    const respostaVerbal = parseInt(document.getElementById('respostaVerbal').value);
    const respostaMotora = parseInt(document.getElementById('respostaMotora').value);
    const resultadoComa = document.getElementById('resultado-coma');

    if (aberturaOcular >= 1 && aberturaOcular <= 4 && 
        respostaVerbal >= 1 && respostaVerbal <= 5 && 
        respostaMotora >= 1 && respostaMotora <= 6) {
        
        const pontuacaoTotal = aberturaOcular + respostaVerbal + respostaMotora;
        let gravidade;

        if (pontuacaoTotal >= 13) {
            gravidade = "Lesão leve.";
        } else if (pontuacaoTotal >= 9) {
            gravidade = "Lesão moderada.";
        } else {
            gravidade = "Lesão grave (coma).";
        }

        resultadoComa.innerHTML = `Pontuação total: ${pontuacaoTotal} - ${gravidade}`;
    } else {
        resultadoComa.innerHTML = "Insira valores válidos para a Escala de Coma.";
    }
}

// Função para calcular Regra de Três
function calcularRegraTres() {
    const valorA = parseFloat(document.getElementById('valorA').value);
    const valorB = parseFloat(document.getElementById('valorB').value);
    const resultadoRegraTres = document.getElementById('resultado-regraTres');

    if (valorA && valorB) {
        const resultado = (valorA * valorB) / 100;
        resultadoRegraTres.innerHTML = `Resultado: ${resultado.toFixed(2)}`;
    } else {
        resultadoRegraTres.innerHTML = "Insira os valores A e B.";
    }
}

// Envia dados para o Python
function enviarDados(dados) {
    python.call('receber_dados', dados);
}
function updateCalculator() {
    const calcType = document.getElementById('calcType').value;

    // Esconde todas as seções
    const calcFields = document.querySelectorAll('.calc-fields');
    calcFields.forEach(field => field.style.display = 'none');

    // Mostra a seção selecionada
    document.getElementById(`${calcType}-fields`).style.display = 'block';
}
function updateCalculator() {
    const calcType = document.getElementById("calcType").value;

    // Esconde todas as seções
    const calcFields = document.querySelectorAll('.calc-fields');
    calcFields.forEach(field => field.style.display = 'none');

    // Mostra a seção selecionada
    document.getElementById(`${calcType}-fields`).style.display = 'block';
}