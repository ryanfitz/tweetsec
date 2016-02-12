default: test

BIN_DIR=node_modules/.bin

ZIP_FILENAME = tweetsec-lambda.zip

clean:
	@rm -rf dist tmp
lint:
	@$(BIN_DIR)/eslint lib test
test: lint
	@$(BIN_DIR)/nyc --cache -s $(BIN_DIR)/ava
test-cov: test
	@$(BIN_DIR)/nyc report
	@$(BIN_DIR)/nyc check-coverage --lines 95 --functions 95 --branches 95
coveralls:
	@$(BIN_DIR)/nyc report --reporter=text-lcov | $(BIN_DIR)/coveralls
build: clean lint
	@$(BIN_DIR)/babel lib -d dist
deploy: build
	@mkdir -p tmp
	@zip -q -r tmp/$(ZIP_FILENAME) dist/ node_modules/
	@terraform apply terraform/

.PHONY: test test-cov
