function fazerSaque(saldoAtual, valorSaque) {
  if (valorSaque > saldoAtual) {
    return "Saldo Insuficiente";
  } else {
    let novoSaldo = saldoAtual - valorSaque;
    return "Saque realizado. Novo saldo: R$" + novoSaldo;
  }
}
