# Mozartai

A modern React application built with TypeScript, Vite, and Supabase.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git
- A GitHub account with SSH keys set up (recommended)

### Setup SSH Keys for GitHub

For secure access to this repository, we recommend setting up SSH keys. See our comprehensive guide:

📖 **[SSH Setup Guide](./SSH_SETUP.md)**

This guide includes:
- Step-by-step SSH key generation
- Adding keys to GitHub
- Platform-specific instructions (Windows, macOS, Linux)
- Troubleshooting tips

### Installation

1. Clone the repository:

```bash
# Using SSH (recommended)
git clone git@github.com:PigsCanFly1/Mozartai.git

# Or using HTTPS
git clone https://github.com/PigsCanFly1/Mozartai.git
```

2. Navigate to the project directory:

```bash
cd Mozartai
```

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:

```bash
cp .env.example .env
```

Edit `.env` and add your Supabase credentials:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

5. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run deploy` - Build and preview

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Contributing

We welcome contributions! To get started:

1. Set up SSH keys following our [SSH Setup Guide](./SSH_SETUP.md)
2. Fork the repository
3. Create a feature branch
4. Make your changes
5. Submit a pull request

## License

This project is private and proprietary.

## Support

For issues or questions, please open an issue on GitHub.
