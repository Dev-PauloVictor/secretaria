"use client";
import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import logo from "../assets/images/Logo_black.png"
import "../assets/css/login.css"

export default function Login() {

  const [open, setOpen] = useState(false)
  // const toggle = () => {
  //   setOpen(!open)
  // }

  return (
    <>
      <section class="area-login">
        <div class="login">
          <Image src={logo} alt="logo" width={60} height={60} priority />
          <form>
            <input type="text" name="nome" placeholder="Seu nome" autoFocus required />
            <input
              type={open ? "text" : "password"} id="password" name="senha" placeholder="Sua senha" required />
            <span id="icon" onClick={() => setOpen(!open)}></span>

            <div className="forget">
              <label className="container">
                <input type="checkbox" />
                <svg viewBox="0 0 64 64" height="1em" width="1em">
                  <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                </svg>
              </label>
              <div className="lembrar">Lembre de mim</div>
              <Link className="link" href="#">Esqueceu a senha</Link>
            </div>
            <input type="submit" value="Entrar" />
            <p>Ainda não criou sua conta?<a href="../cadastro">Criar Conta</a></p>
          </form>

        </div>
      </section>
    </>
  )
}
