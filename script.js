document.getElementById("form").addEventListener("submit", function validar() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  let reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let reSenha = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;

  if (reEmail.test(email) && reSenha.test(senha)) {
    alert("BOA MEU NOBRE");
  } else {
    if (reEmail.test(email) == false && reSenha.test(senha) == false) {
        alert('ERRO - reveja suas informações')
    } else {
      if (reEmail.test(email) == false) {
        alert("Tem algo de errado no seu email");
      }
      if (reSenha.test(senha) == false) {
        alert("Tem algo de errado na sua senha");
      }
    }
  }
});
