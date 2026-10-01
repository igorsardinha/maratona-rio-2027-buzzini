# 🏃 Maratona do Rio 2027 - Infográfico de Inscrições | Buzzini

Site interativo no formato **infográfico** desenvolvido para os atletas e alunos da assessoria esportiva **Buzzini**, reunindo todas as regras, prazos, alertas e o passo a passo completo do sistema de sorteio de vagas da **Maratona do Rio 2027** (21km e 42km).

---

## 🚀 Como Rodar Localmente

1. Entre na pasta do projeto:
```bash
cd c:\sardinha-dev\maratona-rio-2027-buzzini
```

2. Instale as dependências (caso necessário):
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
Acesse no navegador: `http://localhost:5173`

4. Para testar o build de produção:
```bash
npm run build
npm run preview
```

---

## 🌐 Como Hospedar na Vercel

O projeto já está configurado com `vercel.json` e otimizado para a plataforma Vercel.

### Opção 1: Via Vercel CLI (Super Rápido)
No terminal, dentro da pasta do projeto, execute:
```bash
npx vercel
```
- Siga as instruções do terminal (faça login na Vercel se solicitado).
- Para subir diretamente em produção:
```bash
npx vercel --prod
```

### Opção 2: Conectando com GitHub (Recomendado)
1. Crie um repositório no seu GitHub (ex: `maratona-rio-2027-buzzini`).
2. Vincule e envie os arquivos:
```bash
git remote add origin https://github.com/SEU-USUARIO/maratona-rio-2027-buzzini.git
git branch -M main
git push -u origin main
```
3. Acesse o painel da [Vercel](https://vercel.com).
4. Clique em **"Add New Project"** e selecione o repositório.
5. As configurações de Build (`npm run build`) e Output Directory (`dist`) serão detectadas automaticamente!
6. Clique em **Deploy**.

---

## 📋 Recursos Inclusos no Infográfico

- 🎯 **Alerta Crítico**: Destaque de que ser sorteado **não** garante a vaga sem a efetuação da compra dentro do prazo.
- ⚡ **Infográfico em 6 Etapas**: Fluxograma visual da inscrição ao pagamento.
- 📅 **Cronograma 21 KM (Meia Maratona)**:
  - 09/11 a 18/11/2026: Abertura do cadastro gratuito no sorteio (GO DREAM).
  - 25/11/2026: Divulgação do número da sorte.
  - 27/11/2026: Divulgação da classificação dos sorteados.
  - Ondas de compra (30/11 a 14/12).
  - Inscrição: R$ 359 (com camiseta inclusa).
- 📅 **Cronograma 42 KM (Maratona)**:
  - Todas as datas e janelas das 4 ondas de compras.
- 🎽 **Distâncias de 5 KM e 10 KM**:
  - Provas sem sorteio (opção avulsa para sorteados nos 21k/42k: 5km R$ 149 / 10km R$ 169 sem camisa).
- 🍲 **Seção "Raspa do Tacho"**:
  - Explicação das vagas remanescentes de dezembro.
- 🧡 **Orientação Buzzini & Checklist Interativo**:
  - Lista de verificação com salvamento no navegador.
  - Botão de **exportação direta para o WhatsApp** com resumo formatado para alunos.
  - Botão de **download do calendário (.ics)** compatível com Google Calendar e Apple Calendar.
- 🎨 **Design & Identidade**:
  - Cores oficiais da Buzzini (`#ee5e2d`), logotipo vetorizado, tipografia atlética e modo escuro responsivo.

---

*RIO 2027 JÁ COMEÇOU! 🧡*
