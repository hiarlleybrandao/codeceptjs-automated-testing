# Automação de Testes Web com CodeceptJS

Projeto de automação de testes desenvolvido com **JavaScript e CodeceptJS**, com foco na validação de funcionalidades web, organização de cenários e prática de conceitos de Qualidade de Software (QA).

Este repositório faz parte do meu desenvolvimento técnico em automação de testes e da construção do meu portfólio na área de QA.

## Tecnologias utilizadas

- **JavaScript** — desenvolvimento dos cenários automatizados.
- **CodeceptJS** — framework de automação de testes.
- **Chromium** — navegador utilizado na execução dos testes.
- **Node.js** — ambiente de execução JavaScript.
- **npm** — gerenciamento de dependências.
- **Git e GitHub** — controle de versão e hospedagem do código.

## Objetivos do projeto

- Praticar a automação de testes para aplicações web.
- Desenvolver e executar cenários automatizados com CodeceptJS.
- Validar comportamentos esperados e situações de erro.
- Organizar cenários utilizando tags para facilitar sua execução seletiva.
- Aprimorar habilidades de análise de resultados e identificação de falhas.
- Aplicar boas práticas de organização e versionamento de código.

## Organização dos testes

Os cenários são classificados por meio de tags, permitindo separar os testes de acordo com o comportamento que está sendo validado.

| Tag | Descrição |
|---|---|
| `@sucesso` | Identifica cenários que validam fluxos positivos e comportamentos esperados da aplicação. |
| `@falha` | Identifica cenários que validam fluxos negativos, entradas inválidas e o tratamento de erros pela aplicação. |

Essa organização facilita a execução seletiva dos cenários e torna a suíte de testes mais simples de manter.

**Importante:** um cenário marcado com `@falha` também pode terminar com sucesso. Isso acontece quando a aplicação trata corretamente a situação de erro e o teste confirma o resultado esperado.

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- [Node.js](https://nodejs.org/)
- npm, incluído na instalação do Node.js
- [Git](https://git-scm.com/)

Para verificar as instalações, execute:

```bash
node --version
npm --version
git --version
```

## Instalação

Clone o repositório:

```bash
git clone https://github.com/hiarlleybrandao/codeceptjs-automated-testing.git
```

Acesse a pasta do projeto:

```bash
cd codeceptjs-automated-testing
```

Instale as dependências:

```bash
npm install
```

## Execução dos testes

Execute todos os cenários automatizados:

```bash
npx codeceptjs run
```

Execute os testes com informações adicionais para depuração:

```bash
npx codeceptjs run --debug
```

### Executar testes por tag

Para executar somente os cenários identificados com `@sucesso`:

```bash
npx codeceptjs run --grep "@sucesso"
```

Para executar somente os cenários identificados com `@falha`:

```bash
npx codeceptjs run --grep "@falha"
```

Os comandos de filtragem pressupõem que as tags estejam declaradas de forma compatível com o filtro `--grep` do CodeceptJS.

## Resultados da execução

Os resultados apresentados pelo CodeceptJS permitem identificar quais cenários passaram, quais falharam e onde investigar possíveis problemas.

Durante a análise, é importante diferenciar:

- **Teste aprovado:** o comportamento observado corresponde ao resultado esperado.
- **Teste reprovado:** o comportamento observado diverge do resultado esperado.
- **Cenário negativo:** fluxo que verifica como a aplicação reage a uma condição inválida ou inesperada.

## Boas práticas

O desenvolvimento deste projeto busca reforçar práticas importantes para a automação de testes:

- Organização e identificação dos cenários por tags.
- Separação entre fluxos positivos e negativos.
- Reutilização de etapas quando apropriado.
- Clareza na definição dos comportamentos esperados.
- Versionamento das alterações com Git.
- Documentação das instruções de instalação e execução.
- Exclusão de dependências instaladas e arquivos temporários do controle de versão por meio do `.gitignore`.

## Próximos passos

O projeto poderá evoluir com a inclusão de novos cenários, melhorias na estrutura dos testes, maior cobertura funcional e outras práticas de automação e qualidade de software.

## Autor

**Hiarlley Brandão**

Projeto desenvolvido para fins de estudo, prática técnica e construção de portfólio na área de Qualidade de Software (QA).

[GitHub — Hiarlley Brandão](https://github.com/hiarlleybrandao)

[Repositório do projeto](https://github.com/hiarlleybrandao/codeceptjs-automated-testing)
