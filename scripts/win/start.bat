@set NAME=aragorn1025.github.io
@set PORT=80
@set IMAGE_NAME=aragorn1025.github.io
@set PATH_HOST=%~dp0..\..
@set PATH_CONTAINER=/home/node/app

@echo %PATH_HOST%

@docker build -t %IMAGE_NAME% -f "%PATH_HOST%\scripts\Dockerfile" "%PATH_HOST%"
@docker run -dit ^
    -v "%PATH_HOST%/public":%PATH_CONTAINER%/public ^
    -v "%PATH_HOST%/src":%PATH_CONTAINER%/src ^
    -v "%PATH_HOST%/package.json":%PATH_CONTAINER%/package.json ^
    -v "%PATH_HOST%/package-lock.json":%PATH_CONTAINER%/package-lock.json ^
    -v "%PATH_HOST%/.eslintrc.json":%PATH_CONTAINER%/.eslintrc.json ^
    -p %PORT%:3000 --name %NAME% %IMAGE_NAME%
