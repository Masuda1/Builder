Aqui está o **README.md** modificado com mais detalhes, visando um público iniciante:

---

# Projeto Builder de Pizzas 🍕

## Descrição

Este projeto demonstra o uso do **padrão de projeto Builder** implementado em **TypeScript** para simular a criação de pizzas em uma pizzaria. Com ele, você pode:
- Criar pizzas pré-definidas, como **Calabresa** e **Quatro Queijos**.
- Personalizar sua própria pizza escolhendo tamanho, tipo de massa e ingredientes.

O projeto é ideal para aprender os conceitos de programação orientada a objetos e design patterns.

---

## Pré-requisitos

Antes de executar o projeto, você precisa ter instalado no seu computador:
1. **Node.js** (versão 16 ou superior) - para rodar o projeto.
2. **npm** (gerenciador de pacotes do Node.js, geralmente incluído com o Node.js).
3. **Editor de código** (recomendado: Visual Studio Code).

---

## Passo a Passo para Rodar o Projeto

### 1. Clone o repositório

Faça o download do projeto para o seu computador usando o Git ou baixe o arquivo ZIP:

```bash
git clone <URL_DO_REPOSITORIO>
```

Depois de clonado, entre na pasta do projeto:
```bash
cd nome-da-pasta
```

### 2. Instale as dependências

Na raiz do projeto, execute o comando abaixo para instalar os pacotes necessários:
```bash
npm install
```

### 3. Compile o código TypeScript

Antes de executar o programa, o código TypeScript precisa ser convertido para JavaScript. Para isso, use o comando:
```bash
npx tsc
```
O código será compilado e os arquivos JavaScript gerados ficarão na pasta `dist`.

### 4. Execute o programa

Agora você pode rodar o programa com o seguinte comando:
```bash
node dist/index.js
```

Se tudo estiver correto, o programa exibirá informações sobre as pizzas criadas no terminal.

---

## Estrutura do Projeto

Abaixo está a estrutura básica do projeto:

```
├── builders/
│   ├── MargheritaPizzaBuilder.ts
│   ├── PepperoniPizzaBuilder.ts
├── director/
│   ├── PizzaDirector.ts
├── dist/
│   ├── (código compilado em JavaScript será gerado aqui)
├── index.ts
├── Pizza.ts
├── tsconfig.json
├── package.json
```

### Principais Arquivos:
- **index.ts**: O ponto de entrada do programa. Contém a lógica principal de criação das pizzas.
- **Pizza.ts**: Define a estrutura da pizza (tamanho, massa, ingredientes).
- **PizzaDirector.ts**: Implementa o papel do "diretor" no padrão Builder, responsável por organizar os processos de construção.
- **Builders**: Contém os construtores específicos das pizzas pré-definidas.

---

## Saída Esperada

Quando o programa for executado, você verá a seguinte saída no terminal:

```
Montando a Pizza Quatro Queijos:
Pizza - Tamanho: grande, Massa: fina, Ingredientes: Mussarela, Provolone, Parmesão, Gorgonzola

Montando a Pizza Calabresa:
Pizza - Tamanho: média, Massa: tradicional, Ingredientes: Queijo, Calabresa, Cebola

Montando uma Pizza Personalizada:
Pizza - Tamanho: média, Massa: fina, Ingredientes: Mussarela, Presunto, Azeitona
```

---

## Funcionalidades

- **Pizza Quatro Queijos**:
  - Tamanho: Grande.
  - Massa: Fina.
  - Ingredientes: Mussarela, Provolone, Parmesão, Gorgonzola.

- **Pizza Calabresa**:
  - Tamanho: Média.
  - Massa: Tradicional.
  - Ingredientes: Queijo, Calabresa, Cebola.

- **Pizza Personalizada**:
  - Permite que você escolha:
    - Tamanho: Pequena, Média ou Grande.
    - Massa: Tradicional, Fina ou Recheada.
    - Ingredientes: Adicione os toppings que desejar.

---

## Dicas para Iniciantes

1. **Problemas ao rodar o programa?**
   - Certifique-se de que o Node.js está instalado corretamente:
     ```bash
     node -v
     ```
     O comando acima deve retornar a versão do Node.js.

2. **Erro ao executar o TypeScript?**
   - Verifique se o TypeScript está instalado no projeto:
     ```bash
     npx tsc --version
     ```

3. **Entendendo o código:**
   - O padrão Builder é uma forma de organizar o processo de criação de objetos complexos.
   - Aqui, ele é usado para criar diferentes tipos de pizzas com configurações específicas.

---

## Tecnologias Utilizadas

- **TypeScript**: Linguagem de programação que adiciona tipos ao JavaScript.
- **Node.js**: Ambiente de execução para rodar o JavaScript no servidor.

---

