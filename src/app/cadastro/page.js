import "../assets/css/cadastro.css"
import Image from "next/image"
import logo from "../assets/images/Logo_black.png"


export default function Cadastro() {
  return (
    <div>
      <section class="area-login">
        <div class="login-cadastro">
          <Image src={logo} alt="logo" width={60} height={60} priority />
          <form>
            <input type="text" name="nome" placeholder="Seu nome" />
            <input type="text" name="nome fantasia" placeholder="Nome fantasia" />
            <input type="text" name="email" placeholder="Digite e-mail" />
            <input type="number" name="cnpj" placeholder="Digite seu CNPJ" />
            <input type="tel" name="telefone" placeholder="Digite seu telefone" />
            <input type="text" name="endereco" placeholder="Digite seu endereço" />


            <input type="submit" value="cadastrar" />
            <p>Já possuo uma conta cadastrada!<a href="../login">Logar</a></p>
          </form>

        </div>
      </section>
    </div>
  )
}
