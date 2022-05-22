### Install Tailwind CSS
Install tailwindcss via npm, and create your tailwind.config.js file.
`Terminal`
`npm install -D tailwindcss`
`npx tailwindcss init`

### Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.
`tailwind.config.js`
```
module.exports = {
  content: ["./*.{html,js}"], // Cette ligne
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.
`style.css`
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### Start the Tailwind CLI build process
Run the CLI tool to scan your template files for classes and build your CSS.
`package.json`
```
{
  "name": "tailwindcss-starter",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx tailwindcss -i ./style.css -o ./output.css --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

### Start using Tailwind in your HTML
Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.
`ìndex.html`
```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

Source: [doc.tailwindcss](https://tailwindcss.com/docs/installation)