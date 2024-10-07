### Requisitos

Lista de softwares necessários para executar este aplicativo

- [Node.js](https://nodejs.org/)

  > Usei a versão 20, atualmente a LTS

- [pnpm](https://pnpm.io/installation)
- [git](https://git-scm.com/)

### Clone

Clone o repositório na sua máquina, usando o comando abaixo:

```bash
git clone https://github.com/nathan2slime/munique.git
```

### Variáveis de ​​ambiente

São variáveis nomeadas para o computador e usadas por algum software. Abaixo estão todas as variáveis de ambiente dessa aplicação.

| Variável       | Descrição                                                                                                       |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| `PORT`         | Porta que a aplicação vai usar, certifique-se que ela não esteja sendo usada por outro processo.                |
| `DATABASE_URL` | URI de conexão com o banco de dados, você deve modificar as credenciais e host de acordo com o seu banco local. |
| `HOST`         | URL da api para configuração do SwaggerUI.                                                                      |

### Instalar dependências

Depois de configurar as variáveis de ambiente, instale as dependências do projeto usando o gerenciador de pacotes **pnpm**.
Rode o comando abaixo pra instalar as dependências

Entre no dir do backend

```bash
cd api
```

```bash
pnpm install
```

### Executar a aplicação

Você pode usar o comando abaixo para executar a aplicação

```bash
pnpm dev
```

## Documentação

A documentação em Swagger está no endpoint `/docs`
