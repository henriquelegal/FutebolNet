FutebolNet Monitor – Sistema de Monitoramento de Dispositivos do Centro de Treinamento
Descrição do Projeto
-----------------------------

O FutebolNet Monitor é um sistema desenvolvido para realizar o monitoramento de dispositivos utilizados em um Centro de Treinamento (CT) de futebol. O sistema permite cadastrar equipamentos, executar testes de conectividade (ping) e registrar o histórico de funcionamento, oferecendo uma visão clara e centralizada da disponibilidade dos dispositivos essenciais para as operações do clube.

Este projeto integra conhecimentos de desenvolvimento web, redes de computadores, banco de dados e documentação técnica.

-----------------------------

Objetivo Geral

Desenvolver uma plataforma web que possibilite o cadastro, o monitoramento e a análise histórica de dispositivos críticos do Centro de Treinamento, incluindo testes de conectividade e exibição de status em tempo real.

-----------------------------

Objetivos Específicos

Implementar uma API REST capaz de executar testes de conectividade (ping) e registrar logs das operações.

Desenvolver uma interface web para consulta, cadastro e teste de dispositivos.

Integrar um banco de dados MySQL para armazenamento de dispositivos e registros de testes.

Registrar e disponibilizar histórico de latência e status de cada dispositivo monitorado.

Exibir em tempo real a disponibilidade dos dispositivos cadastrados.

-----------------------------

Problema

O crescente uso de dispositivos tecnológicos no contexto profissional de clubes de futebol, como câmeras de análise, computadores técnicos, tablets e telões, exige que esses equipamentos estejam sempre disponíveis. Entretanto, a falta de um sistema centralizado de monitoramento dificulta identificar falhas rapidamente e pode gerar prejuízos operacionais durante treinos ou análises de desempenho.

-----------------------------

Hipótese

A criação de um sistema unificado de inventário e testes de conectividade permitirá identificar falhas de forma rápida e eficiente, minimizando impactos nas atividades do Centro de Treinamento e garantindo maior confiabilidade operacional.

-----------------------------

Justificativa

A infraestrutura tecnológica é um componente fundamental no cotidiano esportivo moderno. A ausência de uma ferramenta simples e centralizada para monitoramento pode resultar em interrupções operacionais significativas. O FutebolNet Monitor surge como uma solução prática, educacional e funcional, permitindo visualizar o estado dos dispositivos e registrando informações relevantes sobre seu desempenho ao longo do tempo.

Além disso, o projeto agrega valor acadêmico ao integrar conteúdos de redes de computadores, desenvolvimento backend, frontend e modelagem de dados.

-----------------------------

Metodologia

Tecnologias Utilizadas

Frontend:
HTML, CSS, JavaScript e React Web

-----------------------------

Backend:
Node.js e Express
Biblioteca Ping para testes de conectividade
API REST com comunicação via JSON

-----------------------------

Banco de Dados:
MySQL

-----------------------------

Organização e Versionamento:
Git e GitHub para gerenciamento do código e histórico do projeto

-----------------------------

Etapas de Desenvolvimento

Modelagem do banco de dados e definição da arquitetura do sistema.

Construção da API REST e implementação das rotas.

Desenvolvimento da interface web.

Integração entre backend e frontend.

Testes e ajustes.

Elaboração da documentação final.

-----------------------------

Funcionalidades Previstas
Requisitos Obrigatórios

Cadastro de dispositivos.

Listagem de dispositivos com exibição de status atualizado.

Teste de conectividade via ping (latência e indicador online/offline).

Registro de logs de testes.

Consulta do histórico de testes via interface web.

-----------------------------

Requisitos Opcionais

Alertas visuais para estados críticos.

Filtros por categoria de dispositivo.

Exibição da última atualização realizada para cada dispositivo.

-----------------------------

Integrantes da Equipe
-----------------------------

Integrante	Função
Bruno	Backend e banco de dados
-----------------------------
Eduardo	React Native e React Web
-----------------------------
Henrique	Documentação e testes
-----------------------------
Conclusão

O FutebolNet Monitor fornece uma solução funcional para o monitoramento de dispositivos essenciais de um Centro de Treinamento esportivo, contribuindo para a prevenção de falhas e para a melhoria da eficiência operacional. A integração entre inventário, testes de conectividade e registro de histórico cria uma ferramenta prática para uso real e também didática para fins acadêmicos. O projeto demonstra como sistemas simples e bem estruturados podem apoiar processos críticos e otimizar o uso da tecnologia no ambiente esportivo.

-----------------------------

Referências

Node.js Documentation – https://nodejs.org

Express.js Documentation – https://expressjs.com

NPM Ping Library – https://www.npmjs.com/package/ping

MySQL Reference Manual – https://dev.mysql.com/doc

MDN Web Docs – https://developer.mozilla.org
