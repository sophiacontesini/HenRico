import React from 'react';
import styles from '../pages/Company.module.css';
import LinkButton from '../layout/LinkButton';

export default function Company() {
  return (
    <div className={styles.company_container}>
      <h1>Sobre a HenRico</h1>
      <h2>Seu gerenciador de custos e projetos!</h2>
      <p>
        Bem-vindo(a) à HenRico, a sua solução inteligente de gerenciamento de
        custos de projetos! Estamos aqui para ajudá-lo(a) a simplificar e
        otimizar o processo de gerenciar projetos e serviços, mantendo suas
        finanças sob controle e garantindo que você alcance seus objetivos sem
        exceder o orçamento.
      </p>
      <h2>O Que É a HenRico?</h2>
      <p>
        A HenRico é mais do que um simples gerenciador de projetos. Nós
        compreendemos que um dos aspectos fundamentais do sucesso de qualquer
        empreendimento é a capacidade de gerenciar efetivamente os recursos
        financeiros. Com isso em mente, criamos uma plataforma intuitiva e
        amigável que permite a você:
      </p>
      <ul>
        <li>Adicionar Serviços</li>
        <li>Remover Serviços</li>
        <li>Editar Detalhes e Custos</li>
        <li>Acompanhar Orçamento</li>
        <li>Evitar Extravasamento</li>
      </ul>
      <h4>
        Comece a usar a HenRico hoje mesmo e descubra como tornar o
        gerenciamento de projetos uma experiência gratificante!
      </h4>
      <p>
        Comece a usar a HenRico hoje mesmo e descubra como podemos tornar o
        gerenciamento de projetos e custos uma experiência gratificante.
      </p>
      <LinkButton to='/newproject' text='CRIAR PROJETO' />
    </div>
  );
}
