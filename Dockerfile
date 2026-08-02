FROM ubuntu:26.04

ENV DEBIAN_FRONTEND=noninteractive
ENV TEXMFHOME=/opt/texmf

RUN apt-get update \
 && apt-get install -y --no-install-recommends \
        ca-certificates \
        curl \
        git \
        perl \
        texlive-latex-base \
        texlive-xetex \
        xz-utils \
    \
 && tlmgr init-usertree \
 && tlmgr --usermode option repository https://ftp.math.utah.edu/pub/tex/historic/systems/texlive/2025/tlnet-final \
 && tlmgr --usermode install \
        enumitem \
        geometry \
        l3packages \
        noto \
        titlesec \
        ulem \
        zapfding \
    \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*
