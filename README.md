# Personalização de Corrida & Perfumaria

Aplicação web em React para passageiros de transporte por aplicativo personalizarem a experiência da viagem (ar-condicionado, música, nível de conversa) e visualizarem o catálogo de perfumes disponíveis no carro.

---

## Arquitetura do Sistema

```text
[ Passageiro ] ──► [ Site em React ] ──► [ Webhook (Make) ] ──► [ Bot Telegram ] ──► [ Celular do Motorista ]
```

## Estrutura do Projeto

```Plaintext
src/
├── assets/                  # Imagens, ícones e arquivos estáticos
├── components/
│   ├── ui/                  # Componentes reutilizáveis (Background, Modais, Botões)
│   ├── Form/                # Estrutura, opções e modal de confirmação do formulário
│   ├── Perfumes/            # Cards, lista, slider e modal dos perfumes
│   └── Inicio/              # Tela inicial / Hero de boas-vindas
├── data/                    # Dados estáticos (opções do form e lista de perfumes em .js)
├── services/                # Integração com o Webhook (Make/Telegram)
├── Home.jsx                 # Página principal unificando as seções
└── App.jsx                  # Raiz da aplicação
```
## Tecnologias

- Front-end: React + Vite
- Integração: Webhook (Make) + Bot do Telegram


