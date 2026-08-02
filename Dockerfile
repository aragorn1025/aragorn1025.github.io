FROM ubuntu:26.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
 && apt-get install -y --no-install-recommends \
        ca-certificates \
        curl \
        git \
        perl \
        texlive-latex-base \
        texlive-xetex \
    \
 && tlmgr init-usertree \
 && tlmgr install \
        l3packages \
        geometry \
        titlesec \
        ulem \
        enumitem \
        noto \
    \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*
