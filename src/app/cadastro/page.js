import "../assets/css/cadastro.css"

export default function Cadastro() {
  return (
    <div>
        <section class="area-login">
      <div class="login-cadastro">
      
        <form>
          <input type="text" name="nome" placeholder="Seu nome"/>
          <input type="text" name="nome fantasia" placeholder="Nome fantasia"/>
          <input type="text" name="email" placeholder="Digite e-mail"/>
          <input type="number" name="cnpj" placeholder="Digite seu CNPJ"/>
          <input type="tel" name="telefone" placeholder="Digite seu telefone"/>
          <input type="text" name="endereco" placeholder="Digite seu endereço"/>

    
          <input type="submit" value="cadastrar" />
        </form>
        <p>Já possuo uma conta cadastrada!<a href="../login">Logar</a></p>
      </div>
    </section>
    </div>
  )
}
