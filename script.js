// =====================================================
// SCRIPT.JS — Funcionalidades interativas do portefólio
// =====================================================

// ---- 1. RELÓGIO EM TEMPO REAL ----
function atualizarRelogio() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    const relogio = document.getElementById('relogio');
    if (relogio) {
        relogio.textContent = `🕒 ${horas}:${minutos}:${segundos}`;
    }
}
atualizarRelogio();
setInterval(atualizarRelogio, 1000);

// ---- 2. ALTERNAR MODO CLARO / ESCURO ----
const botaoTema = document.getElementById('botaoTema');
if (botaoTema) {
    botaoTema.addEventListener('click', function() {
        document.body.classList.toggle('tema-escuro');
        if (document.body.classList.contains('tema-escuro')) {
            botaoTema.textContent = '☀ Modo claro';
        } else {
            botaoTema.textContent = '🌙 Modo escuro';
        }
    });
}

// ---- 3. CONTADOR DE CLIQUES ----
let contador = 0;
const botaoContador = document.getElementById('botaoContador');
if (botaoContador) {
    botaoContador.addEventListener('click', function() {
        contador++;
        botaoContador.textContent = `Já cliquei ${contador} vezes neste botão`;
    });
}

// ---- 4. SAUDAÇÃO PERSONALIZADA POR HORA ----
const saudacao = document.getElementById('saudacao');
if (saudacao) {
    const hora = new Date().getHours();
    let mensagem = 'Olá, sou o Nuno';

    if (hora < 12) {
        mensagem = 'Bom dia, sou o Nuno ☀';
    } else if (hora < 19) {
        mensagem = 'Boa tarde, sou o Nuno 🌤';
    } else {
        mensagem = 'Boa noite, sou o Nuno 🌙';
    }
    saudacao.textContent = mensagem;
}