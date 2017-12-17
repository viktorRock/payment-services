export ENDPOINTS_HOST=https://payment-services.appspot.com
export ENDPOINTS_KEY=AIzaSyDgvPbx-xkIJ9ymMjFCCGWMVb0oPZAdFC4
export PAGSEG_CLIENT_EMAIL=pvmathiassilva@gmail.com
export PAGSEG_CLIENT_TOKEN=E0170E27CBBB495FA1F5FB1F64902066
export PAGSEG_URL=https://ws.pagseguro.uol.com.br/v2/checkout

sudo apt install ruby ruby-dev
sudo gem install travis
sudo travis login --pro
sudo travis encrypt-file credentials.tar.gz --add