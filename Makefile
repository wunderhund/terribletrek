INTERACTIVE := $(shell [ -t 0 ] && echo -it)

ARCH := linux/amd64
DOCKER_TAG := terribletrek
DOCKER_ARGS := -v $(shell pwd):/app $(INTERACTIVE)
DOCKER_ARGS_DEV := $(DOCKER_ARGS) -p 8080:8080
BASH := docker run $(DOCKER_ARGS) $(DOCKER_TAG) /bin/bash
BASH_DEV := docker run $(DOCKER_ARGS_DEV) $(DOCKER_TAG) /bin/bash

.PHONY: init
init:
	docker build -t $(DOCKER_TAG) .
	$(BASH) -c 'npm install'

.PHONY: dev
dev: clean
	$(BASH_DEV) -c 'npm run start'

.PHONY: build
build: clean
	$(BASH) -c 'npm run build'

.PHONY: shell
shell:
	$(BASH_DEV)

.PHONY: clean
clean:
	$(BASH) -c 'rm -rf public'

.PHONY: test
test:
	$(BASH) -c 'npm run test'
