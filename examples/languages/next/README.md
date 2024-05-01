# An example project of embedding Connections SDK within a brand new create-next-app application

## Running this project

Run the app in the development mode:

```npm run dev```

Open [http://localhost:3000](http://localhost:3000).

## CORS settings

For this example to work, the domain it runs on must be included in the list of allowed domains for your client.

See <a href="https://github.com/codatio/sdk-connections/tree/main#set-cors-domains" target="_blank">readme guide</a> on setting up CORS.

## Access token

You need to have generated an access token for the company you want to access.

See <a href="https://github.com/codatio/sdk-connections/tree/main#generate-access-token" target="_blank">readme guide</a> on getting an access token.

## Get started with Next.js

For full instructions on getting started with Next.js, see our [embedded link documentation](https://docs.codat.io/auth-flow/authorize-embedded-link).

1. **Create a component that mounts the SDK** - you can copy and paste the example <a href="./src/app/components/CodatConnections.tsx" target="_blank">`CodatConnections.tsx`</a> file to an appropriate location in your Next.js app.

2. **Conditional steps**
   
    - **Extend your type declarations with our types** - If you are using TypeScript, download the <a href="https://github.com/codatio/sdk-connections/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a> file, then copy and paste its contents into a new or existing `.d.ts` file.

    - **Update CSP headers** - If you're using content security policy (CSP) headers, you must edit the headers:

      - Add `*.codat.io` to all of `(script-src, style-src, font-src, connect-src, img-src)`, or to `default-src`.
      - Add `unsafe-inline` to `style-src`. Do _not_ use a hash because this can change at any time without warning.
