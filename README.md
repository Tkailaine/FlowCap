# 📊 Simulador de capacidade operacional

Simulador de capacidade operacional para análise de backlog, atraso e risco com base na relação entre demanda e capacidade ao longo do tempo.

---

## 🚀 Sobre o projeto

Este projeto foi desenvolvido com o objetivo de simular cenários operacionais e tornar visível o impacto de variações entre demanda e capacidade.

Em operações reais, pequenas diferenças diárias podem gerar acúmulo significativo ao longo do tempo.  
A proposta da aplicação é transformar esse comportamento em algo claro, visual e acionável.

---

## 🎯 Problema

Em muitos contextos operacionais:

- A capacidade não acompanha a demanda
- O impacto acumulado não é percebido imediatamente
- Decisões são tomadas sem visão clara de risco

---

## 💡 Solução

A aplicação permite simular cenários informando:

- Demandas por dia  
- Capacidade de atendimento por dia  
- Período da simulação (em dias)  

E retorna:

- Backlog acumulado  
- Atraso estimado  
- Nível de risco (Baixo, Médio, Alto)  
- Acúmulo diário  
- Recomendações de ação  

---

## 🧠 Lógica de negócio

O sistema considera:

- Diferença entre demanda e capacidade
- Acúmulo progressivo ao longo do tempo
- Impacto do backlog no atraso
- Classificação de risco baseada no desequilíbrio operacional

---

## ✅ Exemplos de uso

### 🟢 Cenário estável
Demanda: 30/dia  
Capacidade: 35/dia  
Período: 7 dias  

➡️ Resultado:
- Sem backlog  
- Sem atraso  
- Risco baixo  

---

### 🟡 Cenário de alerta
Demanda: 50/dia  
Capacidade: 45/dia  
Período: 5 dias  

➡️ Resultado:
- Acúmulo progressivo  
- Atraso leve  
- Risco médio  

---

### 🔴 Cenário crítico
Demanda: 80/dia  
Capacidade: 30/dia  
Período: 10 dias  

➡️ Resultado:
- Backlog elevado  
- Atraso significativo  
- Risco alto  

---
##  📷 Demonstração

![1](https://github.com/user-attachments/assets/56f34a62-f876-407a-9b53-4c66d440740c)
![2](https://github.com/user-attachments/assets/24bbc0bc-d191-4df2-8743-a57d7485096f)
![3](https://github.com/user-attachments/assets/4f0d8edd-6886-4623-b7a4-2e748e4edecc)
![4](https://github.com/user-attachments/assets/0a986fd5-eaba-4b5a-9aa7-f77c0f06037c)


---

## 🖥️ Interface

A interface foi pensada para:

- Leitura rápida
- Clareza na entrada de dados
- Destaque para informações críticas
- Comunicação visual do risco

---

## 🛠️ Tecnologias

- React  
- TypeScript  
- CSS  

---

## 📂 Estrutura do projeto
src/
├── components/
│ ├── FormularioSimulador
│ ├── DashboardResultado
│ ├── CardResultado
│ └── CardRecomendacao
│
├── utils/
│ └── logistica/
│ ├── calculos/
│ ├── validadores/
│ └── formatadores/


---

## ⚙️ Como executar

# Clone o repositório
git clone https://github.com/Tkailaine/FlowCap

# Acesse a pasta
cd FlowCap

# Instale as dependências
npm install

# Rode o projeto
npm run dev

---

## 📈 Possíveis melhorias
- Adição de gráficos (backlog ao longo do tempo)
- Exportação de resultados
- Ajuste dinâmico de capacidade

---

## 🧩 Aprendizados

Durante o desenvolvimento, os principais aprendizados foram:

- Transformar lógica de negócio em interface utilizável
- Pensar em UX para dados operacionais
- Estruturar código com separação clara de responsabilidades

---

## Deploy

Link Vercel: https://flow-cap.vercel.app/

---

## 📬 Contato

Caso queira trocar ideias ou dar feedback:

LinkedIn: https://www.linkedin.com/in/thaissa-kailaine
GitHub: https://github.com/Tkailaine/
