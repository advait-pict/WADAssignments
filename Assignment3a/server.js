const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const PORT = 1800;

const mimeType = {
	'.ico': 'image/x-icon',
	'.html': 'text/html',
	'.js': 'text/javascript',
	'.json': 'application/json',
	'.css': 'text/css',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.gif': 'image/gif',
	'.wav': 'audio/wav',
	'.mp3': 'audio/mpeg',
	'.svg': 'image/svg+xml',
	'.pdf': 'application/pdf',
	'.doc': 'application/msword',
	'.eot': 'application/vnd.ms-fontobject',
	'.ttf': 'application/font-sfnt'
};

http.createServer((req, res) => {
	const parsedUrl = url.parse(req.url);

	if (parsedUrl.pathname === '/') {
		let filesLink = '<ul class="file-list">';
		res.setHeader('Content-type', 'text/html');
		const filesList = fs.readdirSync('./');

		filesList.forEach(element => {
			if (fs.statSync('./' + element).isFile()) {
				filesLink += `<li><a class="file-button" href="/${element}">${element}</a></li>`;
			}
		});

		filesLink += '</ul>';
		res.end(`<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>List of files</title>
	<style>
		:root {
			--bg: #f5efe7;
			--text: #1f2933;
			--button-bg: #1f6f8b;
			--button-bg-hover: #15556b;
			--button-text: #f9fafb;
		}

		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			min-height: 100vh;
			display: flex;
			align-items: center;
			justify-content: center;
			background: var(--bg);
			color: var(--text);
			font-family: "Segoe UI", Arial, sans-serif;
		}

		main {
			width: min(520px, 90vw);
			text-align: center;
		}

		h1 {
			margin: 0 0 24px;
			font-size: 28px;
			letter-spacing: 0.3px;
		}

		.file-list {
			list-style: none;
			padding: 0;
			margin: 0;
			display: grid;
			gap: 12px;
		}

		.file-button {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			padding: 12px 16px;
			border-radius: 10px;
			background: var(--button-bg);
			color: var(--button-text);
			text-decoration: none;
			font-weight: 600;
			transition: background 0.2s ease, transform 0.2s ease;
		}

		.file-button:hover,
		.file-button:focus-visible {
			background: var(--button-bg-hover);
			transform: translateY(-1px);
		}
	</style>
</head>
<body>
	<main>
		<h1>List of files</h1>
		${filesLink}
	</main>
</body>
</html>`);
	} else {
		const sanitizePath = path.normalize(parsedUrl.pathname)
			.replace(/^(\.\.[/\\])+/, '');

		const pathname = path.join(__dirname, sanitizePath);

		if (!fs.existsSync(pathname)) {
			res.statusCode = 404;
			res.end(`File ${pathname} not found!`);
			return;
		}

		fs.readFile(pathname, (err, data) => {
			if (err) {
				res.statusCode = 500;
				res.end('Error in getting the file.');
				return;
			}

			const ext = path.parse(pathname).ext;
			res.setHeader('Content-type', mimeType[ext] || 'text/plain');
			res.end(data);
		});
	}
}).listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}/`);
});
