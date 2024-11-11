import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function Register() {
  const navigate = useNavigate()

  const [nomeCompleto, setnomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [curso, setCurso] = useState('');
  const [turno, setTurno] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');

  const regexEmail = /\S+@\S+\.\S+/;
  const phoneRegex = /^(\d{2})\s?(\d{4,5})-?(\d{4})$/;
  const fullNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)+$/;

  const handleRegister = () => {
  if(nomeCompleto === '' || !fullNameRegex.test(nomeCompleto)){
      alert('Preencher o Nome Completo');
    } 
    else if(email === '' || !regexEmail.test(email)){
        alert('Insira um e-mail válido');
      }
      
    else if(telefone === '' || !phoneRegex.test(telefone)){
      alert('Insira um telefone válido');
      }
      else if (curso === '') {
        alert('Preencha o Curso');
      } else if (turno === '') {
        alert('Preencha o Turno');
      } else if (senha === '') {
        alert('Preencha a Senha');
      } else if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres');
      } else if (confirmacaoSenha === '') {
        alert('Preencha a Confirmação de Senha');
      } else if (senha !== confirmacaoSenha) {
        alert('As senhas não coincidem');
      } else {
        
        alert('Cadastro realizado com sucesso');
        navigate("/mainPage");
        
      }

  }


  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="h-[90%] w-full flex flex-col items-center justify-center">
        <div className="flex flex-col w-full max-w-md space-y-10 bg-white rounded-3xl py-16 px-8 md:w-[30%]">
          <div>
            <h2 className="text-3xl text-center font-semibold text-emerald-500 md:text-[220%]">
              Cadastro
            </h2>
          </div>

          <div className="flex flex-col space-y-3">
            <input
              type="text"
              name="name"
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder="Nome Completo"
              onChange={(e) => setnomeCompleto(e.target.value)}
            />

            <input
              type="text"
              name="email"
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="phone-number"
              name="phone"
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder="Telefone"
              onChange={(e) => setTelefone(e.target.value)}
            />

            <input
              type="text"
              name="course"
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder="Curso"
              onChange={(e) => setCurso(e.target.value)}
            />

            <input
              type="text"
              name="time"
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder="Turno"
              onChange={(e) => setTurno(e.target.value)}
            />

            <input
              type="password"
              name="password"
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder="Senha"
              onChange={(e) => setSenha(e.target.value)}
            />

            <input
              type="password"
              name="password"
              className="rounded-xl w-full h-10 px-4 bg-emerald-100 text-emerald-950 font-semibold text-md"
              required
              placeholder="Confirmação de Senha "
              onChange={(e) => setConfirmacaoSenha(e.target.value)}
            />
          </div>

          <div className="flex flex-row justify-between">
            
            <button 
            onClick={handleRegister}
            className="bg-emerald-950 rounded-2xl py-2 px-12 text-lg font-semibold text-emerald-500">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
