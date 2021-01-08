# Bug demo
0. Install dependencies
```
npm i
```
1. Run client build (entry point ./src/client.js)
```
npm run client:build
```
2. Run server build (entry point ./src/ssr.js)
```
npm run ssr:build
```
3. Start the server on port 3333
```
npm run ssr:start
```
4. Open home page using SSR
```
http://localhost:3333
```
5. In server console:
```
GET /
[Vue warn]: SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.
[Vue warn]: SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.
```

Server sent markup:
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/png" href="/favicon.png">
        <title>Demo App</title>
    </head>
    <body>
        <div id="root">
            <div>
                <h1>Index</h1>
                <div>
                    <a href="/test-vue-router" class="">
                    <!--[-->
                    Vue Router Link 
                    <!--]-->
                    </a>
                </div>
                <div>
                    <a href="https://v3.vuejs.org/">
                    <!--[-->
                    <!--]-->
                    </a>
                </div>
                <div>
                    <div>
                    <!--[-->
                    <!--]-->
                    </div>
                </div>
            </div>
        </div>
        <script src="/resources/app.js"></script>
    </body>
</html>
```

Second and third **VLink** did not render default slot on server.
