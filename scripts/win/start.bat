@set NAME=aragorn1025.github.io
@set PORT=80
@set IMAGE_NAME=aragorn1025.github.io
@set PATH_HOST=%~dp0..\..
@set PATH_CONTAINER=/home/node/app

@docker build -t %IMAGE_NAME% -f "%PATH_HOST%\scripts\Dockerfile" "%PATH_HOST%"
@docker run -dit ^
    -v "%PATH_HOST%\public":%PATH_CONTAINER%/public ^
    -v "%PATH_HOST%\src":%PATH_CONTAINER%/src ^
    -v "%PATH_HOST%\package.json":%PATH_CONTAINER%/package.json ^
    -v "%PATH_HOST%\package-lock.json":%PATH_CONTAINER%/package-lock.json ^
    -v "%PATH_HOST%\.eslintrc.json":%PATH_CONTAINER%/.eslintrc.json ^
    -v "%PATH_HOST%\.git":%PATH_CONTAINER%/.git ^
    -v "%PATH_HOST%\.gitignore":%PATH_CONTAINER%/.gitignore ^
    -v "%PATH_HOST%\.prettierrc":%PATH_CONTAINER%/.prettierrc ^
    -p %PORT%:3000 --name %NAME% %IMAGE_NAME%
@docker cp "%HOMEDRIVE%%HOMEPATH%/.gitconfig" %NAME%:/root/.gitconfig
@docker exec %NAME% mkdir /root/.ssh
@docker cp "%HOMEDRIVE%%HOMEPATH%/.ssh/id_rsa" %NAME%:/root/.ssh/id_rsa
@docker cp "%HOMEDRIVE%%HOMEPATH%/.ssh/known_hosts" %NAME%:/root/.ssh/known_hosts
@docker exec %NAME% chmod 400 /root/.ssh/id_rsa
