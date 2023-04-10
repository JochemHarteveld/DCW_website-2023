// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: 'index.html',
			precompress: false,
			strict: true,
		}),
		paths: {
			// base: dev ? '': '/DCW_website-2023'
			base: '/DCW_website-2023'
		}
	
	}
};

export default config;
