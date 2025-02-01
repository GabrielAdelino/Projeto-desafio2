import "./globals.css";

export default function Home() {
  return (
   <div>
        <div className="div-principal">
            <div className="left-side">
              <div className="teste123">
                <div className="text-container">
                    <p className="text-left">Acessar sua conta</p>

                    <h2 className="text-left2">Preencha seus<br/>dados de<br/>acesso</h2>

                    {/*Testar se a imagem deve ficar no text-container ou não. */}

                </div>

                <img className="img" src="/pessoas.png" alt="Imagem de pessoas"></img>

                </div>
                

            </div>

            <div className="form-side">
              <img src="logo.png"></img>
              <div className="input-div">
              <input className="inputs" placeholder="E-mail"></input>
              <input className="inputs" placeholder="Senha"></input>
              <a className="forget-password">Esqueci minha senha</a>
              </div>
              <button>Logar</button>

            </div>

        </div>
      <footer>
        <div className="footer">
        <p>Hospital H-dia todos os direitos reservados - 2023</p>
        <p>Desevolvido por b2digital</p>
        </div>
      </footer>
   </div>
  );
}
