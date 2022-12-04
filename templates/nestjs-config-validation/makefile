IMAGE_PREFIX=bit-indexer/conformance-tests-

.PHONY: test
test: ## Run tests
	npx eslint .

.PHONY: build-validate-image
build-validate-image:
	docker build . -f ./src/scripts/ci/Dockerfile -t $(IMAGE_PREFIX)validate

.PHONY: lint
lint: build-validate-image
	docker run --rm $(IMAGE_PREFIX)validate