.PHONY: dev-init dev-start deploy

dev-init:
	asdf install
	npm install -g npm@latest
	npm install
	echo 8091 > ~/.puma-dev/www.radiotopia

dev-start:
	npm start

deploy:
	git push origin main
	git push -f squarespace main:master
