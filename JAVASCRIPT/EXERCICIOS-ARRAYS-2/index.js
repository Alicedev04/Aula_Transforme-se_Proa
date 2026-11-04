function atividade1() {
  let alunos = ["Ana", "Bruno", "Carlos", "Diana"];
  alunos.forEach((alunos) => {
    console.log("Presença confirmada: " + alunos);
  });
}

function atividade2() {
  let valores = [2, 4, 6, 8];

  let valoresDobrados = valores.map((multiplicado) => {
    return multiplicado * 2;
  });

  console.log(valoresDobrados);
}

function atividade3() {
  let notas = [5, 8, 4, 9, 7];

  let notasAprovadas = notas.filter((nota) => {
    return nota >= 7;
  });

  console.log(notasAprovadas);
}

function atividade4() {
  let velocidades = [60, 75, 82, 90, 65];

  let primeiroMultado = velocidades.find((velocidades) => {
    return velocidades > 80;
  });
  console.log("Multa gerada para a velocidade: " + primeiroMultado);
}

function atividade5() {
  let salario = [1500, 2500, 3000, 1800];

  let salarioMenor = salario.filter((salario) => {
    return salario < 2000;
  });

  salarioBonus = salarioMenor.map((salario) => {
    return salario + 500;
  });

  console.log(salarioBonus);
}

atividade5();
