FutebolNet Monitor

Sistema de Monitoramento de Dispositivos do Centro de Treinamento

Descrição do Projeto

O FutebolNet Monitor é um sistema desenvolvido para monitorar dispositivos utilizados em um Centro de Treinamento (CT) de futebol. A aplicação permite cadastrar equipamentos, realizar testes de conectividade (ping) e registrar o histórico de funcionamento, garantindo maior controle e disponibilidade dos dispositivos essenciais às operações do clube.

Este repositório reúne o backend, frontend, documentação técnica e demais recursos utilizados no desenvolvimento do projeto.

Objetivo Geral

Desenvolver uma plataforma web que permita o cadastro, o monitoramento e a análise histórica de dispositivos críticos do Centro de Treinamento, incluindo testes de conectividade e exibição de status em tempo real.

Objetivos Específicos

Criar uma API REST para execução de testes de conectividade (ping) e registro de logs.

Desenvolver uma interface web para cadastro, consulta e teste de dispositivos.

Armazenar dispositivos e registros de testes em um banco de dados MySQL.

Registrar e apresentar histórico de latência e status por dispositivo.

Atualizar em tempo real a disponibilidade dos dispositivos monitorados.

Problema

A falta de monitoramento centralizado de dispositivos como câmeras, computadores, tablets e telões dificulta a identificação rápida de falhas, podendo prejudicar treinos e processos internos relacionados ao desempenho esportivo.

Hipótese

A criação de um sistema simples e integrado de inventário e testes de conectividade permitirá a rápida identificação de falhas e a prevenção de problemas que possam impactar as atividades do Centro de Treinamento.

Justificativa

O uso crescente de tecnologias em clubes de futebol demanda soluções que garantam disponibilidade e funcionamento adequado dos dispositivos. O FutebolNet Monitor oferece uma solução prática e eficaz para acompanhar o estado dos equipamentos, além de servir como ferramenta educacional para integrar conhecimentos de redes, backend, frontend e banco de dados.

Metodologia
Tecnologias Utilizadas

Frontend:

HTML

CSS

JavaScript

Backend:

Node.js

Express

Biblioteca Ping (NPM)

API REST com comunicação JSON

Banco de Dados:

MySQL

Ferramentas de Teste e Documentação:

Postman

Git e GitHub

Etapas do Desenvolvimento

Modelagem do banco de dados e definição da arquitetura.

Construção da API REST e implementação das rotas.

Desenvolvimento da interface web.

Integração entre frontend e backend.

Testes e otimizações.

Documentação final do projeto.

Funcionalidades
Requisitos Obrigatórios

Cadastro de dispositivos.

Listagem de dispositivos com status atualizado.

Teste de conectividade via ping (latência e online/offline).

Armazenamento de logs de testes.

Consulta de histórico pela interface web.

Requisitos Opcionais

Alertas visuais avançados.

Filtros por tipo de dispositivo.

Indicação de última atualização de cada dispositivo.

Integrantes da Equipe
Nome	Função
Bruno	Backend e banco de dados
Eduardo	React Native e React Web
Henrique	Documentação e testes
Conclusão

O FutebolNet Monitor apresenta uma solução eficiente para o acompanhamento da disponibilidade de dispositivos essenciais em um Centro de Treinamento esportivo. Combinando funcionalidades de inventário, testes de conectividade e histórico de desempenho, o sistema melhora a confiabilidade operacional e possibilita resposta rápida a falhas. Além disso, o projeto cumpre papel educacional ao integrar práticas de desenvolvimento full stack com conceitos fundamentais de redes e bancos de dados.

Referências

Node.js – https://nodejs.org

Express.js – https://expressjs.com

Biblioteca Ping (NPM) – https://www.npmjs.com/package/ping

MySQL Documentation – https://dev.mysql.com/doc

MDN Web Docs – https://developer.mozilla.org
