# Project Setup Instructions

Follow these steps to set up the project environment for writing, compiling, and viewing code in the browser.

## 1. Create Project Structure

1. Create an empty folder for your project.
2. Add the following files to the folder:
    - `index.html`
    - `app.ts`

## 2. Set Up index.html

1. In `index.html`, initialize it with the HTML5 skeleton:
    To do this you can type `html:5` or to get hint in editor `ctrl + space`. This should give you the below code.
    Update the `title` to whatever you need.
    Add a `script` tag and add `src` pointing to `app.js`. This allows us to view our changes directly in the browser or dev tools.
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Understanding TypeScript</title>
        <script src="app.js" defer></script>
    </head>
    <body>
        <!-- Your content goes here -->
    </body>
    </html>
    ```

## 3. Write TypeScript Code

1. In `app.ts`, write your TypeScript code, e.g.:
    ```typescript
    console.log('Your code goes here ...');
    ```

## 4. Compile TypeScript Code

1. Open your terminal.
2. Navigate to your project folder.
3. Compile the TypeScript file:
    ```bash
    tsc app.ts
    ```
4. Note that whenever you change something in your code in `app.ts` you have to manually recompile to see the new changes and also manually reload the `index.html` page.
5. To avoid doing this every time we will add another tool to this setup which will help us do this automatically.

## 5. Install Node.js and npm

1. Download and install the latest version of Node.js from [nodejs.org](https://nodejs.org).

## 6. Initialize npm and Install lite-server

1. Initialize npm in your project folder:
    ```bash
    npm init -y
    ```
2. Install lite-server:
    ```bash
    npm install lite-server --save-dev
    ```
    The `--save-dev` marks it as a development only dependency.
    
3. Update `package.json` to include a start script in the script section:
    ```json
    "scripts": {
        "start": "lite-server"
    }
    ```

## 7. Start Development Server

1. Start the development server:
    ```bash
    npm start
    ```
2. Open your browser and visit `http://localhost:3000`.

## 8. Automatic Reloading

- lite-server automatically reloads the page when files change.
- Keep the `npm start` process running while working on the project.
Certainly! Here's the formatted version of the text:

---

Simply enter `localhost:3000` in the browser.

And now your code runs here.

**Why is this better?**

This setup will automatically reload the page whenever another file in this directory changes. 

For example:

1. If you add an exclamation mark in your code and save it:
    ```typescript
    console.log('Your code goes here!');
    ```
2. Then compile it again with:
    ```bash
    tsc app.ts
    ```
3. Go back to the browser.

You will see the latest output immediately because it automatically reloaded. This saves us the extra work of reloading manually.

---

## 9. Recreate Node Modules (if needed)

1. If you download a project snapshot without `node_modules`, run:
    ```bash
    npm install
    ```
2. Then start the server with:
    ```bash
    npm start
    ```

## 10. Stopping the Server

- To stop the server, use `Ctrl + C` in the terminal.

---

Save this as `instructions.txt` in your git repository.