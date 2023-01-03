up:
	docker compose up
.PHONY: up


down:
	docker compose down
.PHONY: down


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
