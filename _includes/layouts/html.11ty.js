import {default as table} from '../components/table.11ty.js';

let html = (data) => `
<!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.title ?? ''}</title>
        <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>
        <main>
            ${data.content}
        </main>
        <aside>
            ${table(data)}
        </aside>
        <footer>
            Copyright 2024 Eiusmod Voluptate
        </footer>
    </body>
  </html>`;

export default html;
