ENTRY_POINT = ./src/main.js
JS_FILES =  $(wildcard ./src/*.js)

RESULT_FILE = client.js
RESULT_FILE_MIN = $(patsubst %.js, %.min.js, $(RESULT_FILE))


PROTOBUFF_READ = boardUpdate.proto boardData.proto tilePos.proto loginComplete.proto 
PROTOBUFF_WRITE = login.proto 
PROTOBUFF_RW = packet.proto tilePos.proto 

protobuff_transform = $(addprefix ../protobuf/, $(1))

pro_test = $(addsuffix proto, $(1))


PROTOBUFF_READ_R = $(call protobuff_transform, $(PROTOBUFF_READ))
PROTOBUFF_WRITE_R = $(call protobuff_transform, $(PROTOBUFF_WRITE))
PROTOBUFF_RW_R = $(call protobuff_transform, $(PROTOBUFF_RW))

PROTOBUFF_READ_COMPILED = protocol-r.js
PROTOBUFF_WRITE_COMPILED = protocol-w.js
PROTOBUFF_RW_COMPILED = protocol-rw.js
PROTOBUFF_COMPILED = protocol.js

all: $(JS_FILES) $(PROTOBUFF_COMPILED)
	browserify $(ENTRY_POINT) -o $(RESULT_FILE) -p bundle-collapser/plugin
	uglifyjs $(RESULT_FILE) -mc -o $(RESULT_FILE_MIN)


$(PROTOBUFF_READ_COMPILED): $(PROTOBUFF_READ_R)
	pbjs -t static-module -w commonjs -o $(PROTOBUFF_READ_COMPILED) $(PROTOBUFF_READ_R) --no-encode
$(PROTOBUFF_WRITE_COMPILED): $(PROTOBUFF_WRITE_R)
	pbjs -t static-module -w commonjs -o $(PROTOBUFF_WRITE_COMPILED) $(PROTOBUFF_WRITE_R) --no-decode
$(PROTOBUFF_RW_COMPILED): $(PROTOBUFF_RW_R) 
	pbjs -t static-module -w commonjs -o $(PROTOBUFF_RW_COMPILED) $(PROTOBUFF_RW_R)

$(PROTOBUFF_COMPILED): $(PROTOBUFF_READ_COMPILED) $(PROTOBUFF_WRITE_COMPILED) $(PROTOBUFF_RW_COMPILED)
	-cat $(PROTOBUFF_READ_COMPILED) $(PROTOBUFF_WRITE_COMPILED) $(PROTOBUFF_RW_COMPILED) > $(PROTOBUFF_COMPILED) 2> /dev/null
	
echo_all:
	echo $(call protobuff_transform, test)

