# TMT Angular App - Development Guide

This is an Angular application with Tailwind CSS pre-configured.

## Development Workflow

### Starting Development

1. Start the development server:
   ```bash
   npm start
   ```

2. Navigate to `http://localhost:4200/`

### Project Structure

- `src/app/` - Application components and routing
- `src/styles.css` - Global Tailwind CSS styles
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS setup

### Code Style

- Use Angular best practices and the [Angular Style Guide](https://angular.io/guide/styleguide)
- Use Tailwind utility classes for styling (prefer `class` attributes over component CSS when possible)
- Keep components small and focused
- Use TypeScript strict mode

### Adding Features

#### Create a New Component

```bash
ng generate component feature/my-component
```

#### Create a New Service

```bash
ng generate service services/my-service
```

### Tailwind CSS Tips

- All Tailwind classes are available in templates (`.html` files)
- For component-specific styles, create a `.css` file alongside the component
- Use the Tailwind CSS IntelliSense VS Code extension for autocomplete
- Reference: [Tailwind CSS Docs](https://tailwindcss.com)

### Build & Deployment

```bash
npm run build
```

Output files will be in the `dist/` directory, ready for deployment.

### Testing

```bash
npm test
```

### Linting

```bash
npm run lint
```

## Resources

- [Angular Documentation](https://angular.io)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
