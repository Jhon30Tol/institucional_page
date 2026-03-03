# SafeTrust Technology - Institutional Site

![SafeTrust Banner](https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200&h=400)

Site institucional premium desenvolvido para uma empresa de soluções tecnológicas fundada por quatro amigos. Focado em **Amizade, Inteligência e Inovação Ousada**.

## 🚀 Tecnologias

- **React 19** + **TypeScript**
- **Vite** (Build Tool)
- **React Router Dom** (Navegação Multi-página)
- **Vanilla CSS** (Design System Customizado)
- **Cloudflare Pages/Workers** (Deployment)

## 💎 Diferenciais do Projeto

- **Estética Premium**: Paleta *Deep Blue & Teal*, com uso de glassmorphism e animações suaves.
- **Arquitetura OOP**: Dados de sócios, serviços e processos organizados através de *Models* e um *Content Store* centralizado.
- **Performance**: Carregamento ultrarrápido com assets otimizados e caminhos relativos para compatibilidade total com Cloudflare.

## 🛠️ Como Rodar Localmente

1. **Instale as dependências:**
   ```powershell
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```powershell
   npm run dev
   ```

3. **Gere o build de produção:**
   ```powershell
   powershell -ExecutionPolicy Bypass -Command "npx vite build"
   ```

## 🌐 Deployment (Cloudflare)

Para subir as alterações manualmente via Wrangler:

```powershell
powershell -ExecutionPolicy Bypass -Command "npx wrangler pages deploy dist --project-name institucional-page"
```

---
*SafeTrust: Inteligência coletiva transformando desafios em tecnologia de ponta.*
