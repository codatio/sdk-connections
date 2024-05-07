# sdk-connections

Give your customers the ability to manage the access permissions they have given you by using our Connections SDK in your front end. This is key from a regulatory perspective, builds trust between you and your customer, and is required by some accounting platforms (e.g. Xero).

[Examples](https://github.com/codatio/sdk-connections/tree/main/examples) | [Full docs](https://docs.codat.io/auth-flow/optimize/connection-management)

## Prerequisites

<h3 id='set-cors-domains'>Set allowed CORS domains</h2>

These examples run on localhost, and for them to work you must first have configured the CORS domains the SDK is allowed to run on for your client. This is done via our API by sending a list of allowed domains to our [CORS settings endpoint](https://docs.codat.io/platform-api#/operations/set-connection-management-cors-settings).

<h3 id='generate-access-token'>Generate an access token</h2>

Use the [GET access token endpoint](https://docs.codat.io/platform-api#/operations/get-connection-management-access-token) to retrieve an access token for this customer's company.


