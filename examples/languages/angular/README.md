# Connections SDK with Angular sample project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

This project is an example of using Connections SDK within a brand new Angular application.

## Running this project

Install dependencies using `npm install`. Run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## CORS settings

For this example to work, the domain it runs on must be included in the list of allowed domains for your client.

See <a href="https://github.com/codatio/sdk-connections/tree/main#set-cors-domains" target="_blank">readme guide</a> on setting up CORS.

## Access token

You need to have generated an access token for the company you want to access.

See <a href="https://github.com/codatio/sdk-connections/tree/main#generate-an-access-token" target="_blank">readme guide</a> on getting an access token.

## Get started with Angular

1. **Set up steps**
   1. Copy <a href="https://github.com/codatio/sdk-connections/blob/main/snippets/types.d.ts" target="_blank"> `types.d.ts`</a> to the `/src` directory.
   2. If you are using content security policy (CSP) headers, you must edit the headers:
      * Add `*.codat.io` to all of `(script-src, style-src, font-src, connect-src, img-src)`, or to `default-src`.
      * Add `unsafe-inline` to `style-src`. Do *not* use a hash because this can change at any time without warning.
  
2. **Create a component that mounts the SDK.** See the <a href="./src/app/codat-connections/">codat connections</a> folder for an example module.
