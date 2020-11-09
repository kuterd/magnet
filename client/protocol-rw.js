/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Packet = (function() {

    /**
     * Properties of a Packet.
     * @exports IPacket
     * @interface IPacket
     * @property {Packet.Type} type Packet type
     * @property {Uint8Array} [data] Packet data
     */

    /**
     * Constructs a new Packet.
     * @exports Packet
     * @classdesc Represents a Packet.
     * @constructor
     * @param {IPacket=} [properties] Properties to set
     */
    function Packet(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Packet type.
     * @member {Packet.Type}type
     * @memberof Packet
     * @instance
     */
    Packet.prototype.type = 1;

    /**
     * Packet data.
     * @member {Uint8Array}data
     * @memberof Packet
     * @instance
     */
    Packet.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new Packet instance using the specified properties.
     * @function create
     * @memberof Packet
     * @static
     * @param {IPacket=} [properties] Properties to set
     * @returns {Packet} Packet instance
     */
    Packet.create = function create(properties) {
        return new Packet(properties);
    };

    /**
     * Encodes the specified Packet message. Does not implicitly {@link Packet.verify|verify} messages.
     * @function encode
     * @memberof Packet
     * @static
     * @param {IPacket} message Packet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Packet.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.data != null && message.hasOwnProperty("data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified Packet message, length delimited. Does not implicitly {@link Packet.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Packet
     * @static
     * @param {IPacket} message Packet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Packet.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Packet message from the specified reader or buffer.
     * @function decode
     * @memberof Packet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Packet} Packet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Packet.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Packet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: message });
        return message;
    };

    /**
     * Decodes a Packet message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Packet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Packet} Packet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Packet.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Packet message.
     * @function verify
     * @memberof Packet
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Packet.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        switch (message.type) {
        default:
            return "type: enum value expected";
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            break;
        }
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a Packet message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Packet
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Packet} Packet
     */
    Packet.fromObject = function fromObject(object) {
        if (object instanceof $root.Packet)
            return object;
        var message = new $root.Packet();
        switch (object.type) {
        case "LOGIN":
        case 1:
            message.type = 1;
            break;
        case "LOGIN_COMPLETE":
        case 2:
            message.type = 2;
            break;
        case "GAME_MOVE":
        case 3:
            message.type = 3;
            break;
        case "BOARD_DATA":
        case 4:
            message.type = 4;
            break;
        case "BOARD_UPDATE":
        case 5:
            message.type = 5;
            break;
        case "GAME_OVER":
        case 6:
            message.type = 6;
            break;
        }
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a Packet message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Packet
     * @static
     * @param {Packet} message Packet
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Packet.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "LOGIN" : 1;
            object.data = options.bytes === String ? "" : [];
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.Packet.Type[message.type] : message.type;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this Packet to JSON.
     * @function toJSON
     * @memberof Packet
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Packet.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Type enum.
     * @enum {string}
     * @property {number} LOGIN=1 LOGIN value
     * @property {number} LOGIN_COMPLETE=2 LOGIN_COMPLETE value
     * @property {number} GAME_MOVE=3 GAME_MOVE value
     * @property {number} BOARD_DATA=4 BOARD_DATA value
     * @property {number} BOARD_UPDATE=5 BOARD_UPDATE value
     * @property {number} GAME_OVER=6 GAME_OVER value
     */
    Packet.Type = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "LOGIN"] = 1;
        values[valuesById[2] = "LOGIN_COMPLETE"] = 2;
        values[valuesById[3] = "GAME_MOVE"] = 3;
        values[valuesById[4] = "BOARD_DATA"] = 4;
        values[valuesById[5] = "BOARD_UPDATE"] = 5;
        values[valuesById[6] = "GAME_OVER"] = 6;
        return values;
    })();

    return Packet;
})();

$root.TilePos = (function() {

    /**
     * Properties of a TilePos.
     * @exports ITilePos
     * @interface ITilePos
     * @property {number} x TilePos x
     * @property {number} y TilePos y
     */

    /**
     * Constructs a new TilePos.
     * @exports TilePos
     * @classdesc Represents a TilePos.
     * @constructor
     * @param {ITilePos=} [properties] Properties to set
     */
    function TilePos(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TilePos x.
     * @member {number}x
     * @memberof TilePos
     * @instance
     */
    TilePos.prototype.x = 0;

    /**
     * TilePos y.
     * @member {number}y
     * @memberof TilePos
     * @instance
     */
    TilePos.prototype.y = 0;

    /**
     * Creates a new TilePos instance using the specified properties.
     * @function create
     * @memberof TilePos
     * @static
     * @param {ITilePos=} [properties] Properties to set
     * @returns {TilePos} TilePos instance
     */
    TilePos.create = function create(properties) {
        return new TilePos(properties);
    };

    /**
     * Encodes the specified TilePos message. Does not implicitly {@link TilePos.verify|verify} messages.
     * @function encode
     * @memberof TilePos
     * @static
     * @param {ITilePos} message TilePos message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TilePos.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.x);
        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.y);
        return writer;
    };

    /**
     * Encodes the specified TilePos message, length delimited. Does not implicitly {@link TilePos.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TilePos
     * @static
     * @param {ITilePos} message TilePos message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TilePos.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TilePos message from the specified reader or buffer.
     * @function decode
     * @memberof TilePos
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TilePos} TilePos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TilePos.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TilePos();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.x = reader.uint32();
                break;
            case 2:
                message.y = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("x"))
            throw $util.ProtocolError("missing required 'x'", { instance: message });
        if (!message.hasOwnProperty("y"))
            throw $util.ProtocolError("missing required 'y'", { instance: message });
        return message;
    };

    /**
     * Decodes a TilePos message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TilePos
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TilePos} TilePos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TilePos.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TilePos message.
     * @function verify
     * @memberof TilePos
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TilePos.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.x))
            return "x: integer expected";
        if (!$util.isInteger(message.y))
            return "y: integer expected";
        return null;
    };

    /**
     * Creates a TilePos message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TilePos
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TilePos} TilePos
     */
    TilePos.fromObject = function fromObject(object) {
        if (object instanceof $root.TilePos)
            return object;
        var message = new $root.TilePos();
        if (object.x != null)
            message.x = object.x >>> 0;
        if (object.y != null)
            message.y = object.y >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a TilePos message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TilePos
     * @static
     * @param {TilePos} message TilePos
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TilePos.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.x = 0;
            object.y = 0;
        }
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = message.y;
        return object;
    };

    /**
     * Converts this TilePos to JSON.
     * @function toJSON
     * @memberof TilePos
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TilePos.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TilePos;
})();

module.exports = $root;
