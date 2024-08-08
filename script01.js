// Preciso verificar se a idade do aluno é maior que 7 anos

// Para alunos entre 8 e 12 anos:
// Para alunos entre 13 e 17 anos: adolescentes
// para alunos maiores de 18: adulto

let idadeAluno = 8;

if (idadeAluno > 7 && idadeAluno < 13) {
    console.log("Aluno está na categoria INFANTIL");
} else if (idadeAluno > 12 && idadeAluno < 18){
    console.log("Aluno está na categoria ADOLESCENTE"); 
} else if (idadeAluno > 17) {
    console.log("Aluno está na categoria ADULTO");
}
else {
    console.log("O aluno não pode se matricular!");
}


