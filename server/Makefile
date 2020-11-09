PROTO_FILES = $(wildcard ../protobuf/*.proto)
PROTOBUFF_COMPILED = protocol.js


$(PROTOBUFF_COMPILED): $(PROTO_FILES)
	pbjs -t static-module -w commonjs -o $(PROTOBUFF_COMPILED) $(PROTO_FILES)


all: $(PROTOBUFF_COMPILED)
