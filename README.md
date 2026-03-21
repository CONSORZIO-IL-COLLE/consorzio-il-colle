# Consorzio il colle

## Local Development

1. Install dependencies:
	```sh
	npm install
	```

2. Start the development server:
	```sh
	npm run dev
	```

The app will be available at http://localhost:5173 (or the port shown in your terminal).

## Deploy to GitHub Pages

1. Set the `base` in `vite.config.ts` to your repo name:
	```ts
	// vite.config.ts
	export default defineConfig({
	  base: "/your-repo-name/",
	  // ...rest of config
	});
	```

2. Install the deploy dependencies:
	```sh
	npm install --save-dev gh-pages
	```

3. Add these scripts to your `package.json`:
	```json
	"scripts": {
	  "predeploy": "npm run build",
	  "deploy": "gh-pages -d dist"
	}
	```

4. Deploy:
	```sh
	npm run deploy
	```

Your site will be available at `https://<your-username>.github.io/<your-repo-name>/`

## Project Structure

- `src/pages/` — Main pages (Landing, Chi Siamo, etc.)
- `src/components/` — Reusable UI components
- `public/` — Static assets

## Customization

Edit the content in `src/pages/` and `src/components/` to update the site.
