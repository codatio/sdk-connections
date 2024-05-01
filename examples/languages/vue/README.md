# An example project of embedding Link SDK within a brand new create-vue application

## Running this project

### `npm run dev`

Runs the app in the development mode.\
Open [http://127.0.0.1:5174/](http://127.0.0.1:5174/) to view it in the browser.

## CORS settings

For this example to work, the domain it runs on must be included in the list of allowed domains for your client.

See <a href="https://github.com/codatio/sdk-connections/tree/main#set-cors-domains" target="_blank">readme guide</a> on setting up CORS.

## Access token

You need to have generated an access token for the company you want to access.

See <a href="https://github.com/codatio/sdk-connections/tree/main#generate-access-token" target="_blank">readme guide</a> on getting an access token.

## Get started with Vue

For full instructions on getting started, see our [embedded link documentation](https://docs.codat.io/auth-flow/authorize-embedded-link#get-started).

1. **Create a component that mounts the SDK** - you can copy and paste the example <a href="./src/components/CodatConnections.vue" target="_blank">`CodatConnections.vue`</a> file to an appropriate location in your Vue app.
2. **Conditional steps**

   1. **Extend your type declarations with our types (if using TS).** - download the <a href="https://github.com/codatio/sdk-conenctions/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a> file, then copy and paste its contents into a new or existing `.d.ts` file.

   3. **Update CSP headers.** If you're using content security policy (CSP) headers, you must edit the headers:

   - Add `*.codat.io` to all of `(script-src, style-src, font-src, connect-src, img-src)`, or to `default-src`.
   - Add `unsafe-inline` to `style-src`. Do _not_ use a hash because this can change at any time without warning.
