---
layout: post
title: "Como escolher um sistema operacional"
subtitle: "Parte 2 de uma análise de SO"
date: 2021-05-17 22:50:00 -0300
categories: sistemas-operacionais
permalink: /:categories/:title
tags: linux windows
---

Depois de uma introdução gigante, quero relatar aqui o que eu levo em conta quando escolho um sistema operacional. Fiz uma análise superficial dos 3 principais sistemas para computador: Windows, Mac e Linux.

Como eu disse no [post anterior](./2021-05-11-minha-historia-com-sistemas-operacionais.md):

> A maioria das pessoas nunca parou pra pensar em usar um sistema operacional diferente. Com exceção dos celulares, onde costumam escolher entre Android e iPhone (iOS), o computador da maior parte das pessoas tem Windows. Claro que existem aqueles que escolhem comprar um Mac para continuar no ecossistema da apple, e nesse caso usam o MacOS, mas mesmo assim acredito que ninguém para pra pensar de fato na escolha do sistema.

Mas afinal, você deveria pensar em mudar de sistema operacional? Depende!

Se o seu uso é comum, de ferramentas de escritório, Windows provavelmente te atende perfeitamente. Mas cada sistema tem suas características: melhores para jogar, para produção gráfica, para desenvolvimento. Claro que os sistemas "fechados", como Windows e Mac são pouco customizáveis. Você usa exatamente da forma que vem, só instala os seus programas. Se você quer um ambiente exatamente do jeito que você quer, Linux é a melhor opção - e por isso é a minha escolha de SO principal.

Admitindo que você esteja em um dos grupos que está considerando trocar de sistema, aqui vai uma visão geral sobre a escolha.

PS: Os dados de utilização são retirados do [Stat Counter](https://gs.statcounter.com/os-market-share/desktop/).

### Divisão do mercado global
<div class="row">
<img src="/assets/img/os_global.png" alt="tela do windows" height="300px">
</div>

### Divisão do mercado brasileiro
<div class="row">
<img src="/assets/img/os_brasil.png" alt="tela do windows" height="300px">
</div>

## Windows

Prós:

- Fácil de instalar e usar
- Solução de problemas quase infinita na internet
- Suporte para todos os programas, jogos e etc.

Contras:

- Dificuldade de configurações avançadas
- Limite de customização
- Terminal diferente dos outros, difícil de mexer.

<div class="row">
<img src="/assets/img/windows10.png" alt="tela do windows" height="300px">
</div>

Sistema mais utilizado do mundo com 75% do mercado, no Brasil se destaca ainda mais: incríveis 90% dos desktops do nosso país utilizam o sistema da Microsoft.

Windows é escolhido não só por familiaridade, mas pela proposta do sistema. Ele foi desenvolvido para que fosse fácil de utilizar. Se você quer instalar algo, basta baixar um arquivo executável e clicar duas vezes. A interface é feita de forma que é muito fácil configurar aquilo que é necessário para a maior parte das pessoas.

Aí entra algo que considero um ponto negativo: fazer configurações mais avançadas é uma tarefa complicada. Quem já tentou instalar docker, java e algumas outras ferramentas sabe bem a quantidade de empecilhos. Além disso, ele é pouco customizável. A interface precisa ser exatamente a que a Microsoft definiu, com exceção de alguns programas que permitem trocar o posicionamento de alguns elementos.

Voltando aos pontos positivos, as ferramentas do pacote Office são as mais utilizadas para edição de documentos, planilhas e apresentações, e foram feitas para funcionar no Windows.

Além disso, o fato de ser o sistema mais utilizado garante algo muito importante: praticamente todo software vai ter suporte para windows.

Isso inclui todos os jogos das principais plataformas, como Steam e Epic Games.

Todas as ferramentas de produção gráfica: desenho, ilustração, edição de imagens e vídeos.

E o mais crucial, os programas de ferramentas específicas de hardware. Configurações de placa de vídeo, de mesas digitalizadoras, webcams, mouses, teclados; todos possuem suporte ao sistema da Microsoft.

## MacOS

Prós:

- Ecossistema da Apple
- Arquitetura do hardware até o software
- Também tem bastante suporte nos programas
- Terminal com shell do Unix <3

Contras:

- Custo muito alto
- Não é customizável

<div class="row">
<img src="/assets/img/macos.jpg" alt="tela do macos" height="300px">
</div>

O sistema seguinte no ranking, com 15% do mercado global e 5% do nacional. A comparação entre o Macintosh e Windows vem desde o lançamento dos dois lá nos anos 80. A proposta da Apple mudou ao longo dos anos, e hoje o foco do sistema é a Experiência do Usuário, o que é potencializado pelo famoso ecossistema da marca. Quando você utiliza o restante dos dispositivos da maçã encontra uma integração que é incomparável. A conexão entre iPhone, iPad e MacOS é o principal motivo das pessoas escolherem o sistema.

Além disso, a interface é muito bonita e otimizada. Aliás, otimização é a palavra chave no sistema. O fato da Apple ser detentora da produção de **todas** as peças de hardware faz com que o sistema tenha uma fluidez incrível. Por isso comparar as especificações de um Mac com um PC não é necessariamente a melhor análise. A arquitetura faz com que ele precise de muito menos recursos pra executar algumas coisas.

E é daí que vêm os principais casos de uso pra quem quer um computador da Apple. É muito utilizado para produção de conteúdo. Designers, ilustradores, fotógrafos, editores de vídeos. Os programas utilizados por essas profissões rodam muito bem mesmo nos menores notebooks, enquanto um PC com Windows precisa de especificações bem potentes.

O fato de ser o segundo sistema mais utilizado faz com que ele tenha um bom suporte pra todo tipo de software, quase tanto quanto no concorrente.

Para os devs o Mac também é muito bom. Por usar um terminal baseado no shell do Unix ele junta a facilidade de utilização da interface com um terminal completo e configurável. Quer dizer que fazer a configuração do seu ambiente é muito fácil e só precisa de algumas linhas de comando. Além de toda a produtividade que um bom terminal pode trazer. Acho que hoje o terminal padrão é o zsh, que tem um ecossistema legal cheio de plugins que podemos instalar.

Claro que o sistema é ainda menos personalizável que o windows, e pode impor algumas dificuldades para instalação de programas, principalmente se não forem oficiais. Aliás, o ecossistema fechado faz com que se alguém quer desenvolver para Apple (iOS principalmente), a pessoa precisa de um Mac.

## Linux

Prós:

- Open source e quase sempre grátis
- Completamente personalizável
- Dezenas ou centenas de distribuições diferentes, tem pra todos os gostos

Contras:

- Falta de suporte de software proprietário (jogos, hardware, etc)
- Menos preocupação com UX

<div class="row">
<img src="/assets/img/linux.webp" alt="ilustração sobre linux, o pinguim tux do lado de um notebook" height="300px">
</div>

Sistema queridinho dos devs que não programam pra iOS, Linux só é popular nessa comunidade mesmo. E muitas vezes só porque é uma escolha comum para servidores. Convenhamos, a maioria das pessoas associa a interface do windows com o que é esperado para os computadores, por isso a maioria das interfaces Linux já começam como um choque. Além disso, costumava ser muito difícil fazer a instalação; não pelo sistema em si, mas pela dificuldade em encontrar drives compatíveis. A maioria dos usuários já deve ter sofrido com drives de áudio e vídeo, que são cruciais, sem falar em conseguir instalar uma impressora e outros dispositivos externos.

Essa inclusive é minha maior frustração com o sistema. Uso um mouse da Logitech que tem botões extras, mas não consigo configurar eles. Tenho uma mesa digitalizadora da Wacom, e fiquei algumas horas pra configurar parcialmente, e não consegui utilizar todas as opções. Meu notebook usa uma placa de vídeo da Nvidia, e é difícil tirar o máximo proveito dela. Todas essas marcas tem software somente para Windows e Mac. Isso porque não jogo no PC, mas sei que são precisas várias gambiarras pra conseguir ter acesso a todos os jogos.

Apesar desses problemas, Linux é minha escolha de sistema principal. Testei várias distros, e encontrei em algumas variantes do ubuntu um sistema fácil o suficiente de usar, e completamente personalizável. Quando configurei da forma que gosto, vi minha produtividade aumentar incrivelmente.

A minha escolha são as distros baseadas em Ubuntu. O fato de ter o apt como gerenciador de pacotes, junto da possibilidade de instalar snaps e flatpaks faz com que seja muito simples instalar quase qualquer coisa. Além disso a comunidade ubuntu é grande o suficiente pra você encontrar ajuda muito facilmente no stackoverflow e outros fóruns.

Além disso, a preocupação com a interface e experiência do usuário não costuma ser prioridade dentro de software open-source. Isso vai mudando conforme o projeto amadurece, mas ainda assim vemos que o cuidado com a interface dos sistemas Linux não é o mesmo dos concorrentes.

Enfim, esse é um assunto bem vasto, e a escolha do sistema é algo muito pessoal. É importante entender que todos tem seus usos, e não precisa cair na pilha de "dev de verdade usa linux" ou "designer usa apple". Se você tem interesse, faça o teste até encontrar um sistema que goste. Recomendo demais separar uma Máquina Virtual, aprender sobre a instalação e testar vários sistemas. Quando se sentir seguro você pode instalar em paralelo no seu computador e ter todas as possibilidades. Eu uso um dual boot com Windows 10 e Ubuntu, onde instalo os desktops que quero testar.

Em breve vou escrever sobre a configuração de ambos os meus ambientes, então me segue pra continuar acompanhando!

<div class="row foto">
    <img class="profile" src="/assets/img/cadu.png" alt="my picture" width="210" height="210" loading="lazy">
</div>

<div class="card justify-around shadow body-bg text-bg" id="infos-card">
        <div class="row head">
            <blockquote>
                <p class="flow-text">Cadu Magalhães</p>
            </blockquote>
            <blockquote>
                <p class="flow-text">24 anos</p>
            </blockquote>
            <blockquote>
                <p class="flow-text">Data Engineer</p>
            </blockquote>
        </div>
        <div class="row icons social">
            <a href="https://www.instagram.com/1cadumagalhaes" aria-label="instagram"><em
                    class="fab fa-instagram blockquote icon"></em></a>
            <a href="https://www.twitter.com/1cadumagalhaes" aria-label="twitter"><em
                    class="fab fa-twitter icon"></em></a>
            <a href="https://www.github.com/1cadumagalhaes" aria-label="github"><em class="fab fa-github icon"></em></a>
            <a href="https://www.linkedin.com/in/1cadumagalhaes" aria-label="linkedin"><em
                    class="fab fa-linkedin icon"></em></a>
            <a href="https://www.twitch.tv/1cadumagalhaes" aria-label="twitch"><em class="fab fa-twitch icon"></em></a>
            <a href="https://www.medium.com/@1cadumagalhaes" aria-label="medium"><em
                    class="fab fa-medium icon"></em></a>
        </div>
    </div>
