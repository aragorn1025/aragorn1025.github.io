FROM ubuntu:26.04

ENV DEBIAN_FRONTEND=noninteractive
ENV PATH="/usr/local/texlive/current/bin/x86_64-linux:/usr/local/texlive/current/bin/aarch64-linux:${PATH}"

RUN apt-get update \
 && apt-get install -y --no-install-recommends \
        ca-certificates \
        fontconfig \
        git \
        perl \
        wget \
 && rm -rf /var/lib/apt/lists/* \
 && mkdir -p /tmp/install-tl \
 && wget https://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz -O /tmp/install-tl-unx.tar.gz \
 && tar -xzf /tmp/install-tl-unx.tar.gz -C /tmp/install-tl --strip-components=1 \
 && printf '%s\n' \
        "selected_scheme scheme-infraonly" \
        "TEXDIR /usr/local/texlive/current" \
        "TEXMFLOCAL /usr/local/texlive/texmf-local" \
        "TEXMFSYSVAR /usr/local/texlive/current/texmf-var" \
        "TEXMFSYSCONFIG /usr/local/texlive/current/texmf-config" \
        "option_doc 0" \
        "option_src 0" \
    > /tmp/install-tl/texlive.profile \
 && perl /tmp/install-tl/install-tl -profile /tmp/install-tl/texlive.profile --no-interaction \
 && rm -rf /tmp/* \
 && tlmgr install \
        enumitem \
        etoolbox \
        fontspec \
        geometry \
        hyperref \
        l3packages \
        noto \
        titlesec \
        ulem \
        xetex \
        xkeyval \
    ;
