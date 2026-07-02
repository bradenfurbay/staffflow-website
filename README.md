# StaffFlow — Marketing Website

Landing page for **StaffFlow**: employee onboarding, training, quizzes, AI assistance, and manager dashboards built for restaurants.

Built with **React + Vite + Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Vite — click **Deploy**. Done.

## Adding your demo video

Open `src/components/Demo.jsx` and replace the placeholder `<div>` with the
commented-out `<iframe>` snippet, using your YouTube/Vimeo embed URL.

## Wiring up the contact form

The form in `src/components/Contact.jsx` currently shows a success state
without sending anything. Connect it to [Formspree](https://formspree.io),
[Web3Forms](https://web3forms.com), or your own API in `handleSubmit`.
