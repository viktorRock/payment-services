# Payment Services

Payment endpoints for webapps

## Pre requisites
1. A PagSeguro Account
1. A Google Cloud Account

## How to use it ?

1.  Clone repository on your google cloud App Engine (flex environemnt for NodeJS)
1.  Set the environment variables
    1. GOOGLE_SPREADSHEET_SCOPE - Usually ```'https://www.googleapis.com/auth/spreadsheets'``` but it can be one of these ones [here](https://developers.google.com/sheets/api/guides/authorizing)
    1. Pagseguro keys and auth info
        1. PAGSEG_URL - 
            *. Production - 
            *. test enviroment - ```"https://ws.sandbox.pagseguro.uol.com.br/v2/checkout"```
        1. PAGSEG_JS - 
            *. Sandbox Env. - ```"https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.lightbox.js"```
        1. PAGSEG_CLIENT_TOKEN - API token you received from PagSeguro
        1. PAGSEG_CLIENT_EMAIL - Your e-mail from the PagSegure Sign Up
        
