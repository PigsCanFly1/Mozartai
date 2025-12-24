# Mozartai Deployment Instructions

## 1. Build for Production

Run:

    npm run build

This will generate a production-ready build in the `dist/` folder.

## 2. Environment Variables

Set the following environment variables in your deployment platform (Vercel, Netlify, etc):

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

These are required for Supabase integration. Do NOT hardcode them in the codebase.

## 3. Preview Production Build Locally

Run:

    npm run preview

## 4. Deploy

Upload the contents of the `dist/` folder to your static hosting provider, or connect your repository to a platform like Vercel or Netlify and set the build command to `npm run build` and the output directory to `dist`.

---

For custom domains, HTTPS, or backend integration, refer to your hosting provider's documentation.
