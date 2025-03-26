# 📋 API de Gerenciamento de Tarefas

## 📝 Descrição

Uma API simples de gerenciamento de tarefas desenvolvida com Node.js, utilizando Express e MySQL. Este projeto foi criado como um exercício de aprendizado para desenvolvimento backend com Node.js.

> **Nota:** Esta API foi desenvolvida em uma versão antiga do Node.js utilizando o módulo CommonJS (`require` e `module.exports`) em vez de ES Modules.
## 🚀 Tecnologias

- **Node.js**
- **Express**
- **MySQL**
- **Dotenv**

## ✨ Funcionalidades

- Criação de tarefas
- Recuperação de todas as tarefas
- Atualização de tarefas existentes
- Exclusão de tarefas
- Validação de middleware para operações de tarefas

## 🔧 Pré-requisitos

- Node.js (versão 14+ recomendada)
- MySQL
- npm

## 💻 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/MatheusLimaCarneiro/study-express-mysql-crud
cd /backend
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env` com sua configuração do MySQL:
```
MYSQL_HOST=localhost
MYSQL_USER=seu_usuario
MYSQL_PASSWORD=sua_senha
MYSQL_DB=seu_banco_de_dados
PORT=3333
```

## 🏃 Executando a Aplicação

### Modo de Desenvolvimento
```bash
npm run dev
```

### Modo de Produção
```bash
npm start
```

## 🌐 Endpoints da API

- `GET /tasks`: Recuperar todas as tarefas
- `POST /tasks`: Criar uma nova tarefa
- `PUT /tasks/:id`: Atualizar uma tarefa existente
- `DELETE /tasks/:id`: Excluir uma tarefa

## 🛡️ Validações de Middleware

- Criação de tarefa requer um título não vazio
- Atualização de tarefa valida a existência da tarefa
- Exclusão de tarefa verifica ID válido

## 💾 Esquema do Banco de Dados

```sql
CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  status VARCHAR(50) DEFAULT 'pendente',
  created_at TIMESTAMP
);
```

## 🐛 Tratamento de Erros

A API inclui tratamento de erros abrangente para:
- Parâmetros de solicitação ausentes ou inválidos
- Problemas de conexão com o banco de dados
- Cenários de tarefa não encontrada

## 🤝 Contribuições

1. Faça um fork do repositório
2. Crie sua branch de feature (`git checkout -b feature/RecursoIncrivel`)
3. Commit suas alterações (`git commit -m 'Adiciona algum RecursoIncrivel'`)
4. Faça o push para a branch (`git push origin feature/RecursoIncrivel`)
5. Abra um Pull Request
