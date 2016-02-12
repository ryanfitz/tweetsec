default: test

BIN_DIR=node_modules/.bin

clean:
	@rm -rf dist
lint:
	@$(BIN_DIR)/eslint lib test
test: lint
	@$(BIN_DIR)/nyc --cache -s \
	$(BIN_DIR)/ava
test-cov: test
	@$(BIN_DIR)/nyc check-coverage --lines 95 --functions 95 --branches 95
	@$(BIN_DIR)/nyc report
coveralls:
	@$(BIN_DIR)/nyc report --reporter=text-lcov | $(BIN_DIR)/coveralls
build: clean lint
	@$(BIN_DIR)/babel lib -d dist

.PHONY: test test-cov
