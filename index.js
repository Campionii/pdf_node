var pdf = require("html-pdf");
var fs = require("fs");
var path = require("path");

// Dados fictícios do boletim escolar
var aluno = "Seu Nome";
var curso = "Técnico em Desenvolvimento de Sistemas";

// Caminho para a imagem local (logo do SENAI)
var logoSenaiPath = path.join(__dirname, 'images', 'logo-senai.png');

// Lê a imagem e a converte para Base64
var logoSenaiBase64 = fs.readFileSync(logoSenaiPath, 'base64');

// Converte a imagem para Base64 e insere no conteúdo HTML
var conteudo = `
  <div style="text-align: center; font-family: Arial, sans-serif;">
    <img src="data:image/png;base64,${logoSenaiBase64}" alt="Logo SENAI" width="150"/>
    <h1>Boletim Escolar</h1>
    <p><strong>Aluno:</strong> ${aluno}</p>
    <p><strong>Curso:</strong> ${curso}</p>
    <hr>
    <h2>Notas</h2>
    <table border="1" cellpadding="10" cellspacing="0" style="width: 100%; text-align: left;">
      <thead>
        <tr>
          <th>Disciplina</th>
          <th>Nota</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Programação Web</td><td>9.5</td></tr>
        <tr><td>Banco de Dados</td><td>8.7</td></tr>
        <tr><td>Desenvolvimento Mobile</td><td>9.0</td></tr>
        <tr><td>Lógica de Programação</td><td>9.8</td></tr>
        <tr><td>Sistemas Embarcados</td><td>8.5</td></tr>
      </tbody>
    </table>
    <hr>
    <p style="font-size: 12px; color: #666;">Gerado automaticamente pelo sistema de boletins SENAI</p>
  </div>
`;

pdf.create(conteudo, {}).toFile("./boletim_escolar.pdf", (err, res) => {
  if (err) {
    console.log("Erro ao gerar o PDF:", err);
  } else {
    console.log("PDF gerado com sucesso:", res);
  }
});
