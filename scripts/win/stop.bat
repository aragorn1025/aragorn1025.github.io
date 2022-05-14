@set NAME=aragorn1025.github.io
@set IMAGE_NAME=aragorn1025.github.io

@docker stop %NAME%
@docker rm %NAME%
@docker rmi %IMAGE_NAME%