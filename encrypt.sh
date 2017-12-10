tar -czf credentials.tar.gz client-secret.json api_key.py
sudo travis encrypt-file credentials.tar.gz --add
git add credentials.tar.gz.enc .travis.yml
git add --all
git commit -m "Adds encrypted Travis"
git push