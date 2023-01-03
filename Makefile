HOME_PATH=~
GIT_SSH_KEY_FILE=id_ed25519


up:
	docker compose up
.PHONY: up


down:
	docker compose down
.PHONY: down


prepare:
	docker compose exec web-server mkdir -p /root/.ssh
	docker compose cp $(HOME_PATH)/.gitconfig  web-server:/root/
	docker compose cp $(HOME_PATH)/.ssh/$(GIT_SSH_KEY_FILE) web-server:/root/.ssh/
	docker compose cp $(HOME_PATH)/.ssh/known_hosts web-server:/root/.ssh/
	docker compose cp $(HOME_PATH)/.ssh/known_hosts.old web-server:/root/.ssh/
	docker compose exec web-server chmod 400 /root/.ssh/$(GIT_SSH_KEY_FILE)
.PHONY: prepare


deploy:
	docker compose exec web-server npm run deploy
.PHONY: deploy


exec:
	docker compose exec -it web-server sh
.PHONY: exec


clean:
	docker compose down --rmi all
.PHONY: clean


prune: clean
	docker system prune -f -a --volumes
.PHONY: prune
