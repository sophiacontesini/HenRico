import React from 'react';
import styles from '../pages/Company.module.css';

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
        <li>
          Adicionar Serviços: Cadastre os serviços que compõem o seu projeto,
          atribuindo a eles detalhes específicos e custos associados.
        </li>
        <li>
          Remover Serviços: Se as circunstâncias mudarem, você pode facilmente
          remover serviços que já não são necessários ou relevantes para o
          projeto.
        </li>
        <li>
          Editar Detalhes e Custos: A flexibilidade é importante. Com a HenRico,
          você pode editar os detalhes e os custos dos serviços existentes para
          manter os dados atualizados conforme as necessidades mudam.
        </li>
        <li>
          Acompanhar Orçamento: Estabeleça um orçamento inicial para o projeto e
          observe a HenRico calcular e atualizar automaticamente o orçamento
          restante à medida que você adiciona, edita ou remove serviços.
        </li>
        <li>
          Evitar Extravasamento: Nossa principal prioridade é ajudá-lo(a) a
          manter o controle financeiro do seu projeto. A HenRico emite alertas
          quando você está se aproximando do limite de orçamento, permitindo que
          você tome decisões informadas.
        </li>
      </ul>
      <h2>Por Que Escolher a HenRico?</h2>
      <p>
        Sabemos que cada projeto é único e requer atenção individualizada. A
        HenRico foi projetada com a sua flexibilidade em mente. Quer você esteja
        gerenciando um projeto pessoal ou uma iniciativa empresarial, nosso
        objetivo é oferecer uma experiência simplificada, adaptável e poderosa
        para atender às suas necessidades.
      </p>
      <p>
        Nossa equipe está comprometida em fornecer as ferramentas necessárias
        para você tomar decisões inteligentes e baseadas em dados, garantindo
        que o seu projeto se mantenha no caminho certo e dentro do orçamento
        planejado. Junte-se a nós na jornada para um gerenciamento financeiro
        mais eficiente e tranquilo.
      </p>
      <p>
        Comece a usar a HenRico hoje mesmo e descubra como podemos tornar o
        gerenciamento de projetos e custos uma experiência gratificante.
      </p>
    </div>
  );
}
