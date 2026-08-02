FROM ubuntu:latest

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
 && apt-get install -y --no-install-recommends \
        ca-certificates \
        curl \
        fonts-noto \
        git \
        texlive-fonts-extra \
        texlive-fonts-recommended \
        texlive-plain-generic \
        texlive-xetex \
    \
 && fc-cache -f -v \
 && rm -rf /var/lib/apt/lists/*
