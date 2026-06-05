import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import logo from "./assets/Discord-Symbol2.png";

function App() {

  //---↓ Lógica do useState e useEffect ↓---
  const [login, setLogin] = useState(""); //Cria a variável login e a função setLogin para mudar o state
  const [senha, setSenha] = useState("");
  const [tentativaLogin, setTentativaLogin] = useState(0);

  useEffect(() => {

    //If que evita mostra na primeira ou segunda carga do React o login que ele fez.
    if (tentativaLogin > 0) { 
      let msgString = `Login e senha corretos! \nLogin: ${login} \nSenha: ${senha}`;
      alert(msgString);
      console.log(msgString);
      setTentativaLogin(0); //=> Reseta a tentativaLogin para que o usuário possa digitar novamente sem imprimir toda hora
    }

  }, [tentativaLogin, login, senha]);

  const Entrar = () => {
    setTentativaLogin((prev) => prev + 1);
  };
  //---↑ Lógica do useState e useEffect ↑---


  //---↓ Lógica da página HTML ↓---
  return (
    <div className={styles.background}>
      <img className={styles.logo} src={logo} alt="Logo do Discord"/>
      <div className={styles.loginCard}>

        {/*---↓ Lado Esquerdo, o formulário ↓---*/}
        <div className={styles.leftPanel}> 
          <h2 className={styles.title}>Boas-vindas de volta!</h2>
          <p className={styles.subtitle}>
            Estamos muito animados em te ver novamente!
          </p>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              E-mail ou número de telefone <span>*</span>
            </label>
            <input
              type="text"
              className={styles.input}
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Senha <span>*</span>
            </label>
            <input
              type="password"
              className={styles.input}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <a href="#" className={styles.forgotPassword}> Esqueceu sua senha? </a>

          <button className={styles.loginButton} onClick={Entrar}>
            Entrar
          </button>

          <p className={styles.registerText}>
            Precisando de uma conta?{" "}
            <a href="#" className={styles.registerLink}>
              Registre-se
            </a>
          </p>
        </div>

        {/* Lado Direito - QR Code */}
        <div className={styles.rightPanel}>
          <div className={styles.qrPlaceholder}>
            {/* Você pode substituir essa div por uma tag <img> com um QR code real depois */}
            [QR CODE]
          </div>
          <h3 className={styles.qrTitle}>Entrar com código QR</h3>
          <p className={styles.qrSubtitle}>
            Escaneie isto com o <strong>app móvel do Discord</strong> para fazer
            login imediatamente.
          </p>
          <a href="#" className={styles.registerLink}>
              Ou, faça login com uma passkey 
          </a>
        </div>
      </div>

    </div>
  );
}
export default App;
