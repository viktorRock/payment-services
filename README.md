# Payment Services

Payment endpoints for webapps

## Pre requisites
1. A PagSeguro Account
1. A Google Cloud Account

## How to use it on the Cloud ?
1. Enter [Google cloud shell](https://cloud.google.com/shell/docs/quickstart?hl=pt-br)
1.  Clone repository on your google cloud App Engine (flex environemnt for NodeJS)
    * ```git clone https://github.com/viktorRock/OrdersPlat.git```
1.  Set Environemnt Vars into app.yaml file, after enter [Google cloud shell](https://cloud.google.com/shell/docs/quickstart?hl=pt-br)
   
    1. GOOGLE_SPREADSHEET_SCOPE - Usually ```'https://www.googleapis.com/auth/spreadsheets'``` but it can be one of these ones [here](https://developers.google.com/sheets/api/guides/authorizing)
    1. Pagseguro keys and auth info
        1. PAGSEG_URL - 
            * Production - ```"https://ws.pagseguro.uol.com.br/v2/checkout"```
            * test enviroment - ```"https://ws.sandbox.pagseguro.uol.com.br/v2/checkout"```
        1. PAGSEG_CLIENT_TOKEN - API token you received from PagSeguro
        1. PAGSEG_CLIENT_EMAIL - Your e-mail from the PagSegure Sign Up
        1. name and config_id: - You get it after in the [Google tutorial](https://cloud.google.com/endpoints/docs/deploy-an-api) after running ```gcloud service-management deploy openapi.yaml```
        * Example
        ```
            runtime: nodejs
            env: flex
            endpoints_api_service:
              # The following values are to be replaced by information from the output of
              # 'gcloud service-management deploy openapi.yaml' command.
              name: echo-api.endpoints.XXXXXXX-YYYYYYY.cloud.goog
              config_id: 2017-MM-DDzz

            env_variables:
                PAGSEG_CLIENT_EMAIL: 'pvmathiassilva@gmail.com'
                PAGSEG_CLIENT_TOKEN: 'EX1DAE21468965315HDFAF589GS3689008'
                PAGSEG_URL: 'https://ws.pagseguro.uol.com.br/v2/checkout'
        ```

    1. Deploying on Google Cloud Endpoints - [Tutorial](https://cloud.google.com/endpoints/docs/deploy-an-api)
