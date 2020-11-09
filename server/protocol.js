/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.BoardData = (function() {

    /**
     * Properties of a BoardData.
     * @exports IBoardData
     * @interface IBoardData
     * @property {Array.<BoardData.ITile>|null} [tiles] BoardData tiles
     * @property {Array.<BoardData.IExpandingTile>|null} [expTiles] BoardData expTiles
     * @property {Array.<BoardData.ILeaderBoardEntry>|null} [leaderBoard] BoardData leaderBoard
     */

    /**
     * Constructs a new BoardData.
     * @exports BoardData
     * @classdesc Represents a BoardData.
     * @implements IBoardData
     * @constructor
     * @param {IBoardData=} [properties] Properties to set
     */
    function BoardData(properties) {
        this.tiles = [];
        this.expTiles = [];
        this.leaderBoard = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BoardData tiles.
     * @member {Array.<BoardData.ITile>} tiles
     * @memberof BoardData
     * @instance
     */
    BoardData.prototype.tiles = $util.emptyArray;

    /**
     * BoardData expTiles.
     * @member {Array.<BoardData.IExpandingTile>} expTiles
     * @memberof BoardData
     * @instance
     */
    BoardData.prototype.expTiles = $util.emptyArray;

    /**
     * BoardData leaderBoard.
     * @member {Array.<BoardData.ILeaderBoardEntry>} leaderBoard
     * @memberof BoardData
     * @instance
     */
    BoardData.prototype.leaderBoard = $util.emptyArray;

    /**
     * Creates a new BoardData instance using the specified properties.
     * @function create
     * @memberof BoardData
     * @static
     * @param {IBoardData=} [properties] Properties to set
     * @returns {BoardData} BoardData instance
     */
    BoardData.create = function create(properties) {
        return new BoardData(properties);
    };

    /**
     * Encodes the specified BoardData message. Does not implicitly {@link BoardData.verify|verify} messages.
     * @function encode
     * @memberof BoardData
     * @static
     * @param {IBoardData} message BoardData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BoardData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.tiles != null && message.tiles.length)
            for (var i = 0; i < message.tiles.length; ++i)
                $root.BoardData.Tile.encode(message.tiles[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.expTiles != null && message.expTiles.length)
            for (var i = 0; i < message.expTiles.length; ++i)
                $root.BoardData.ExpandingTile.encode(message.expTiles[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.leaderBoard != null && message.leaderBoard.length)
            for (var i = 0; i < message.leaderBoard.length; ++i)
                $root.BoardData.LeaderBoardEntry.encode(message.leaderBoard[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified BoardData message, length delimited. Does not implicitly {@link BoardData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BoardData
     * @static
     * @param {IBoardData} message BoardData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BoardData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BoardData message from the specified reader or buffer.
     * @function decode
     * @memberof BoardData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BoardData} BoardData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BoardData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BoardData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.tiles && message.tiles.length))
                    message.tiles = [];
                message.tiles.push($root.BoardData.Tile.decode(reader, reader.uint32()));
                break;
            case 2:
                if (!(message.expTiles && message.expTiles.length))
                    message.expTiles = [];
                message.expTiles.push($root.BoardData.ExpandingTile.decode(reader, reader.uint32()));
                break;
            case 3:
                if (!(message.leaderBoard && message.leaderBoard.length))
                    message.leaderBoard = [];
                message.leaderBoard.push($root.BoardData.LeaderBoardEntry.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BoardData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BoardData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BoardData} BoardData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BoardData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BoardData message.
     * @function verify
     * @memberof BoardData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BoardData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.tiles != null && message.hasOwnProperty("tiles")) {
            if (!Array.isArray(message.tiles))
                return "tiles: array expected";
            for (var i = 0; i < message.tiles.length; ++i) {
                var error = $root.BoardData.Tile.verify(message.tiles[i]);
                if (error)
                    return "tiles." + error;
            }
        }
        if (message.expTiles != null && message.hasOwnProperty("expTiles")) {
            if (!Array.isArray(message.expTiles))
                return "expTiles: array expected";
            for (var i = 0; i < message.expTiles.length; ++i) {
                var error = $root.BoardData.ExpandingTile.verify(message.expTiles[i]);
                if (error)
                    return "expTiles." + error;
            }
        }
        if (message.leaderBoard != null && message.hasOwnProperty("leaderBoard")) {
            if (!Array.isArray(message.leaderBoard))
                return "leaderBoard: array expected";
            for (var i = 0; i < message.leaderBoard.length; ++i) {
                var error = $root.BoardData.LeaderBoardEntry.verify(message.leaderBoard[i]);
                if (error)
                    return "leaderBoard." + error;
            }
        }
        return null;
    };

    /**
     * Creates a BoardData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BoardData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BoardData} BoardData
     */
    BoardData.fromObject = function fromObject(object) {
        if (object instanceof $root.BoardData)
            return object;
        var message = new $root.BoardData();
        if (object.tiles) {
            if (!Array.isArray(object.tiles))
                throw TypeError(".BoardData.tiles: array expected");
            message.tiles = [];
            for (var i = 0; i < object.tiles.length; ++i) {
                if (typeof object.tiles[i] !== "object")
                    throw TypeError(".BoardData.tiles: object expected");
                message.tiles[i] = $root.BoardData.Tile.fromObject(object.tiles[i]);
            }
        }
        if (object.expTiles) {
            if (!Array.isArray(object.expTiles))
                throw TypeError(".BoardData.expTiles: array expected");
            message.expTiles = [];
            for (var i = 0; i < object.expTiles.length; ++i) {
                if (typeof object.expTiles[i] !== "object")
                    throw TypeError(".BoardData.expTiles: object expected");
                message.expTiles[i] = $root.BoardData.ExpandingTile.fromObject(object.expTiles[i]);
            }
        }
        if (object.leaderBoard) {
            if (!Array.isArray(object.leaderBoard))
                throw TypeError(".BoardData.leaderBoard: array expected");
            message.leaderBoard = [];
            for (var i = 0; i < object.leaderBoard.length; ++i) {
                if (typeof object.leaderBoard[i] !== "object")
                    throw TypeError(".BoardData.leaderBoard: object expected");
                message.leaderBoard[i] = $root.BoardData.LeaderBoardEntry.fromObject(object.leaderBoard[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a BoardData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BoardData
     * @static
     * @param {BoardData} message BoardData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BoardData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.tiles = [];
            object.expTiles = [];
            object.leaderBoard = [];
        }
        if (message.tiles && message.tiles.length) {
            object.tiles = [];
            for (var j = 0; j < message.tiles.length; ++j)
                object.tiles[j] = $root.BoardData.Tile.toObject(message.tiles[j], options);
        }
        if (message.expTiles && message.expTiles.length) {
            object.expTiles = [];
            for (var j = 0; j < message.expTiles.length; ++j)
                object.expTiles[j] = $root.BoardData.ExpandingTile.toObject(message.expTiles[j], options);
        }
        if (message.leaderBoard && message.leaderBoard.length) {
            object.leaderBoard = [];
            for (var j = 0; j < message.leaderBoard.length; ++j)
                object.leaderBoard[j] = $root.BoardData.LeaderBoardEntry.toObject(message.leaderBoard[j], options);
        }
        return object;
    };

    /**
     * Converts this BoardData to JSON.
     * @function toJSON
     * @memberof BoardData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BoardData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    BoardData.ExpandingTile = (function() {

        /**
         * Properties of an ExpandingTile.
         * @memberof BoardData
         * @interface IExpandingTile
         * @property {number} life ExpandingTile life
         * @property {ITilePos} to ExpandingTile to
         * @property {ITilePos} from ExpandingTile from
         * @property {number} id ExpandingTile id
         */

        /**
         * Constructs a new ExpandingTile.
         * @memberof BoardData
         * @classdesc Represents an ExpandingTile.
         * @implements IExpandingTile
         * @constructor
         * @param {BoardData.IExpandingTile=} [properties] Properties to set
         */
        function ExpandingTile(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExpandingTile life.
         * @member {number} life
         * @memberof BoardData.ExpandingTile
         * @instance
         */
        ExpandingTile.prototype.life = 0;

        /**
         * ExpandingTile to.
         * @member {ITilePos} to
         * @memberof BoardData.ExpandingTile
         * @instance
         */
        ExpandingTile.prototype.to = null;

        /**
         * ExpandingTile from.
         * @member {ITilePos} from
         * @memberof BoardData.ExpandingTile
         * @instance
         */
        ExpandingTile.prototype.from = null;

        /**
         * ExpandingTile id.
         * @member {number} id
         * @memberof BoardData.ExpandingTile
         * @instance
         */
        ExpandingTile.prototype.id = 0;

        /**
         * Creates a new ExpandingTile instance using the specified properties.
         * @function create
         * @memberof BoardData.ExpandingTile
         * @static
         * @param {BoardData.IExpandingTile=} [properties] Properties to set
         * @returns {BoardData.ExpandingTile} ExpandingTile instance
         */
        ExpandingTile.create = function create(properties) {
            return new ExpandingTile(properties);
        };

        /**
         * Encodes the specified ExpandingTile message. Does not implicitly {@link BoardData.ExpandingTile.verify|verify} messages.
         * @function encode
         * @memberof BoardData.ExpandingTile
         * @static
         * @param {BoardData.IExpandingTile} message ExpandingTile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExpandingTile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.life);
            $root.TilePos.encode(message.to, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            $root.TilePos.encode(message.from, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.id);
            return writer;
        };

        /**
         * Encodes the specified ExpandingTile message, length delimited. Does not implicitly {@link BoardData.ExpandingTile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BoardData.ExpandingTile
         * @static
         * @param {BoardData.IExpandingTile} message ExpandingTile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExpandingTile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExpandingTile message from the specified reader or buffer.
         * @function decode
         * @memberof BoardData.ExpandingTile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BoardData.ExpandingTile} ExpandingTile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExpandingTile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BoardData.ExpandingTile();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.life = reader.uint32();
                    break;
                case 2:
                    message.to = $root.TilePos.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.from = $root.TilePos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("life"))
                throw $util.ProtocolError("missing required 'life'", { instance: message });
            if (!message.hasOwnProperty("to"))
                throw $util.ProtocolError("missing required 'to'", { instance: message });
            if (!message.hasOwnProperty("from"))
                throw $util.ProtocolError("missing required 'from'", { instance: message });
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes an ExpandingTile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BoardData.ExpandingTile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BoardData.ExpandingTile} ExpandingTile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExpandingTile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExpandingTile message.
         * @function verify
         * @memberof BoardData.ExpandingTile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExpandingTile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.life))
                return "life: integer expected";
            {
                var error = $root.TilePos.verify(message.to);
                if (error)
                    return "to." + error;
            }
            {
                var error = $root.TilePos.verify(message.from);
                if (error)
                    return "from." + error;
            }
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            return null;
        };

        /**
         * Creates an ExpandingTile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BoardData.ExpandingTile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BoardData.ExpandingTile} ExpandingTile
         */
        ExpandingTile.fromObject = function fromObject(object) {
            if (object instanceof $root.BoardData.ExpandingTile)
                return object;
            var message = new $root.BoardData.ExpandingTile();
            if (object.life != null)
                message.life = object.life >>> 0;
            if (object.to != null) {
                if (typeof object.to !== "object")
                    throw TypeError(".BoardData.ExpandingTile.to: object expected");
                message.to = $root.TilePos.fromObject(object.to);
            }
            if (object.from != null) {
                if (typeof object.from !== "object")
                    throw TypeError(".BoardData.ExpandingTile.from: object expected");
                message.from = $root.TilePos.fromObject(object.from);
            }
            if (object.id != null)
                message.id = object.id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an ExpandingTile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BoardData.ExpandingTile
         * @static
         * @param {BoardData.ExpandingTile} message ExpandingTile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExpandingTile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.life = 0;
                object.to = null;
                object.from = null;
                object.id = 0;
            }
            if (message.life != null && message.hasOwnProperty("life"))
                object.life = message.life;
            if (message.to != null && message.hasOwnProperty("to"))
                object.to = $root.TilePos.toObject(message.to, options);
            if (message.from != null && message.hasOwnProperty("from"))
                object.from = $root.TilePos.toObject(message.from, options);
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this ExpandingTile to JSON.
         * @function toJSON
         * @memberof BoardData.ExpandingTile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExpandingTile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExpandingTile;
    })();

    BoardData.Tile = (function() {

        /**
         * Properties of a Tile.
         * @memberof BoardData
         * @interface ITile
         * @property {number} id Tile id
         * @property {number} status Tile status
         */

        /**
         * Constructs a new Tile.
         * @memberof BoardData
         * @classdesc Represents a Tile.
         * @implements ITile
         * @constructor
         * @param {BoardData.ITile=} [properties] Properties to set
         */
        function Tile(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Tile id.
         * @member {number} id
         * @memberof BoardData.Tile
         * @instance
         */
        Tile.prototype.id = 0;

        /**
         * Tile status.
         * @member {number} status
         * @memberof BoardData.Tile
         * @instance
         */
        Tile.prototype.status = 0;

        /**
         * Creates a new Tile instance using the specified properties.
         * @function create
         * @memberof BoardData.Tile
         * @static
         * @param {BoardData.ITile=} [properties] Properties to set
         * @returns {BoardData.Tile} Tile instance
         */
        Tile.create = function create(properties) {
            return new Tile(properties);
        };

        /**
         * Encodes the specified Tile message. Does not implicitly {@link BoardData.Tile.verify|verify} messages.
         * @function encode
         * @memberof BoardData.Tile
         * @static
         * @param {BoardData.ITile} message Tile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.status);
            return writer;
        };

        /**
         * Encodes the specified Tile message, length delimited. Does not implicitly {@link BoardData.Tile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BoardData.Tile
         * @static
         * @param {BoardData.ITile} message Tile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Tile message from the specified reader or buffer.
         * @function decode
         * @memberof BoardData.Tile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BoardData.Tile} Tile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BoardData.Tile();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.status = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes a Tile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BoardData.Tile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BoardData.Tile} Tile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Tile message.
         * @function verify
         * @memberof BoardData.Tile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Tile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            return null;
        };

        /**
         * Creates a Tile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BoardData.Tile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BoardData.Tile} Tile
         */
        Tile.fromObject = function fromObject(object) {
            if (object instanceof $root.BoardData.Tile)
                return object;
            var message = new $root.BoardData.Tile();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.status != null)
                message.status = object.status >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Tile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BoardData.Tile
         * @static
         * @param {BoardData.Tile} message Tile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Tile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.status = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this Tile to JSON.
         * @function toJSON
         * @memberof BoardData.Tile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Tile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Tile;
    })();

    BoardData.LeaderBoardEntry = (function() {

        /**
         * Properties of a LeaderBoardEntry.
         * @memberof BoardData
         * @interface ILeaderBoardEntry
         * @property {number} id LeaderBoardEntry id
         * @property {string} username LeaderBoardEntry username
         */

        /**
         * Constructs a new LeaderBoardEntry.
         * @memberof BoardData
         * @classdesc Represents a LeaderBoardEntry.
         * @implements ILeaderBoardEntry
         * @constructor
         * @param {BoardData.ILeaderBoardEntry=} [properties] Properties to set
         */
        function LeaderBoardEntry(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LeaderBoardEntry id.
         * @member {number} id
         * @memberof BoardData.LeaderBoardEntry
         * @instance
         */
        LeaderBoardEntry.prototype.id = 0;

        /**
         * LeaderBoardEntry username.
         * @member {string} username
         * @memberof BoardData.LeaderBoardEntry
         * @instance
         */
        LeaderBoardEntry.prototype.username = "";

        /**
         * Creates a new LeaderBoardEntry instance using the specified properties.
         * @function create
         * @memberof BoardData.LeaderBoardEntry
         * @static
         * @param {BoardData.ILeaderBoardEntry=} [properties] Properties to set
         * @returns {BoardData.LeaderBoardEntry} LeaderBoardEntry instance
         */
        LeaderBoardEntry.create = function create(properties) {
            return new LeaderBoardEntry(properties);
        };

        /**
         * Encodes the specified LeaderBoardEntry message. Does not implicitly {@link BoardData.LeaderBoardEntry.verify|verify} messages.
         * @function encode
         * @memberof BoardData.LeaderBoardEntry
         * @static
         * @param {BoardData.ILeaderBoardEntry} message LeaderBoardEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaderBoardEntry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified LeaderBoardEntry message, length delimited. Does not implicitly {@link BoardData.LeaderBoardEntry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BoardData.LeaderBoardEntry
         * @static
         * @param {BoardData.ILeaderBoardEntry} message LeaderBoardEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaderBoardEntry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LeaderBoardEntry message from the specified reader or buffer.
         * @function decode
         * @memberof BoardData.LeaderBoardEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BoardData.LeaderBoardEntry} LeaderBoardEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaderBoardEntry.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BoardData.LeaderBoardEntry();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.username = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("username"))
                throw $util.ProtocolError("missing required 'username'", { instance: message });
            return message;
        };

        /**
         * Decodes a LeaderBoardEntry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BoardData.LeaderBoardEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BoardData.LeaderBoardEntry} LeaderBoardEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaderBoardEntry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LeaderBoardEntry message.
         * @function verify
         * @memberof BoardData.LeaderBoardEntry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LeaderBoardEntry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isString(message.username))
                return "username: string expected";
            return null;
        };

        /**
         * Creates a LeaderBoardEntry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BoardData.LeaderBoardEntry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BoardData.LeaderBoardEntry} LeaderBoardEntry
         */
        LeaderBoardEntry.fromObject = function fromObject(object) {
            if (object instanceof $root.BoardData.LeaderBoardEntry)
                return object;
            var message = new $root.BoardData.LeaderBoardEntry();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        /**
         * Creates a plain object from a LeaderBoardEntry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BoardData.LeaderBoardEntry
         * @static
         * @param {BoardData.LeaderBoardEntry} message LeaderBoardEntry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LeaderBoardEntry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.username = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            return object;
        };

        /**
         * Converts this LeaderBoardEntry to JSON.
         * @function toJSON
         * @memberof BoardData.LeaderBoardEntry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LeaderBoardEntry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LeaderBoardEntry;
    })();

    return BoardData;
})();

$root.BoardUpdate = (function() {

    /**
     * Properties of a BoardUpdate.
     * @exports IBoardUpdate
     * @interface IBoardUpdate
     * @property {Array.<ITilePos>|null} [clicks] BoardUpdate clicks
     */

    /**
     * Constructs a new BoardUpdate.
     * @exports BoardUpdate
     * @classdesc Represents a BoardUpdate.
     * @implements IBoardUpdate
     * @constructor
     * @param {IBoardUpdate=} [properties] Properties to set
     */
    function BoardUpdate(properties) {
        this.clicks = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BoardUpdate clicks.
     * @member {Array.<ITilePos>} clicks
     * @memberof BoardUpdate
     * @instance
     */
    BoardUpdate.prototype.clicks = $util.emptyArray;

    /**
     * Creates a new BoardUpdate instance using the specified properties.
     * @function create
     * @memberof BoardUpdate
     * @static
     * @param {IBoardUpdate=} [properties] Properties to set
     * @returns {BoardUpdate} BoardUpdate instance
     */
    BoardUpdate.create = function create(properties) {
        return new BoardUpdate(properties);
    };

    /**
     * Encodes the specified BoardUpdate message. Does not implicitly {@link BoardUpdate.verify|verify} messages.
     * @function encode
     * @memberof BoardUpdate
     * @static
     * @param {IBoardUpdate} message BoardUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BoardUpdate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.clicks != null && message.clicks.length)
            for (var i = 0; i < message.clicks.length; ++i)
                $root.TilePos.encode(message.clicks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified BoardUpdate message, length delimited. Does not implicitly {@link BoardUpdate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BoardUpdate
     * @static
     * @param {IBoardUpdate} message BoardUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BoardUpdate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BoardUpdate message from the specified reader or buffer.
     * @function decode
     * @memberof BoardUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BoardUpdate} BoardUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BoardUpdate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BoardUpdate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.clicks && message.clicks.length))
                    message.clicks = [];
                message.clicks.push($root.TilePos.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BoardUpdate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BoardUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BoardUpdate} BoardUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BoardUpdate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BoardUpdate message.
     * @function verify
     * @memberof BoardUpdate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BoardUpdate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.clicks != null && message.hasOwnProperty("clicks")) {
            if (!Array.isArray(message.clicks))
                return "clicks: array expected";
            for (var i = 0; i < message.clicks.length; ++i) {
                var error = $root.TilePos.verify(message.clicks[i]);
                if (error)
                    return "clicks." + error;
            }
        }
        return null;
    };

    /**
     * Creates a BoardUpdate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BoardUpdate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BoardUpdate} BoardUpdate
     */
    BoardUpdate.fromObject = function fromObject(object) {
        if (object instanceof $root.BoardUpdate)
            return object;
        var message = new $root.BoardUpdate();
        if (object.clicks) {
            if (!Array.isArray(object.clicks))
                throw TypeError(".BoardUpdate.clicks: array expected");
            message.clicks = [];
            for (var i = 0; i < object.clicks.length; ++i) {
                if (typeof object.clicks[i] !== "object")
                    throw TypeError(".BoardUpdate.clicks: object expected");
                message.clicks[i] = $root.TilePos.fromObject(object.clicks[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a BoardUpdate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BoardUpdate
     * @static
     * @param {BoardUpdate} message BoardUpdate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BoardUpdate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.clicks = [];
        if (message.clicks && message.clicks.length) {
            object.clicks = [];
            for (var j = 0; j < message.clicks.length; ++j)
                object.clicks[j] = $root.TilePos.toObject(message.clicks[j], options);
        }
        return object;
    };

    /**
     * Converts this BoardUpdate to JSON.
     * @function toJSON
     * @memberof BoardUpdate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BoardUpdate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BoardUpdate;
})();

$root.LoginComplete = (function() {

    /**
     * Properties of a LoginComplete.
     * @exports ILoginComplete
     * @interface ILoginComplete
     * @property {ITilePos} tilePos LoginComplete tilePos
     * @property {number} id LoginComplete id
     */

    /**
     * Constructs a new LoginComplete.
     * @exports LoginComplete
     * @classdesc Represents a LoginComplete.
     * @implements ILoginComplete
     * @constructor
     * @param {ILoginComplete=} [properties] Properties to set
     */
    function LoginComplete(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LoginComplete tilePos.
     * @member {ITilePos} tilePos
     * @memberof LoginComplete
     * @instance
     */
    LoginComplete.prototype.tilePos = null;

    /**
     * LoginComplete id.
     * @member {number} id
     * @memberof LoginComplete
     * @instance
     */
    LoginComplete.prototype.id = 0;

    /**
     * Creates a new LoginComplete instance using the specified properties.
     * @function create
     * @memberof LoginComplete
     * @static
     * @param {ILoginComplete=} [properties] Properties to set
     * @returns {LoginComplete} LoginComplete instance
     */
    LoginComplete.create = function create(properties) {
        return new LoginComplete(properties);
    };

    /**
     * Encodes the specified LoginComplete message. Does not implicitly {@link LoginComplete.verify|verify} messages.
     * @function encode
     * @memberof LoginComplete
     * @static
     * @param {ILoginComplete} message LoginComplete message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginComplete.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        $root.TilePos.encode(message.tilePos, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.id);
        return writer;
    };

    /**
     * Encodes the specified LoginComplete message, length delimited. Does not implicitly {@link LoginComplete.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginComplete
     * @static
     * @param {ILoginComplete} message LoginComplete message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginComplete.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginComplete message from the specified reader or buffer.
     * @function decode
     * @memberof LoginComplete
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginComplete} LoginComplete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginComplete.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginComplete();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.tilePos = $root.TilePos.decode(reader, reader.uint32());
                break;
            case 2:
                message.id = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("tilePos"))
            throw $util.ProtocolError("missing required 'tilePos'", { instance: message });
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        return message;
    };

    /**
     * Decodes a LoginComplete message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LoginComplete
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginComplete} LoginComplete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginComplete.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LoginComplete message.
     * @function verify
     * @memberof LoginComplete
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LoginComplete.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        {
            var error = $root.TilePos.verify(message.tilePos);
            if (error)
                return "tilePos." + error;
        }
        if (!$util.isInteger(message.id))
            return "id: integer expected";
        return null;
    };

    /**
     * Creates a LoginComplete message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LoginComplete
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginComplete} LoginComplete
     */
    LoginComplete.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginComplete)
            return object;
        var message = new $root.LoginComplete();
        if (object.tilePos != null) {
            if (typeof object.tilePos !== "object")
                throw TypeError(".LoginComplete.tilePos: object expected");
            message.tilePos = $root.TilePos.fromObject(object.tilePos);
        }
        if (object.id != null)
            message.id = object.id >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LoginComplete message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoginComplete
     * @static
     * @param {LoginComplete} message LoginComplete
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LoginComplete.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.tilePos = null;
            object.id = 0;
        }
        if (message.tilePos != null && message.hasOwnProperty("tilePos"))
            object.tilePos = $root.TilePos.toObject(message.tilePos, options);
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this LoginComplete to JSON.
     * @function toJSON
     * @memberof LoginComplete
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginComplete.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LoginComplete;
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
     * @implements ITilePos
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
     * @member {number} x
     * @memberof TilePos
     * @instance
     */
    TilePos.prototype.x = 0;

    /**
     * TilePos y.
     * @member {number} y
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

$root.Login = (function() {

    /**
     * Properties of a Login.
     * @exports ILogin
     * @interface ILogin
     * @property {string} username Login username
     */

    /**
     * Constructs a new Login.
     * @exports Login
     * @classdesc Represents a Login.
     * @implements ILogin
     * @constructor
     * @param {ILogin=} [properties] Properties to set
     */
    function Login(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Login username.
     * @member {string} username
     * @memberof Login
     * @instance
     */
    Login.prototype.username = "";

    /**
     * Creates a new Login instance using the specified properties.
     * @function create
     * @memberof Login
     * @static
     * @param {ILogin=} [properties] Properties to set
     * @returns {Login} Login instance
     */
    Login.create = function create(properties) {
        return new Login(properties);
    };

    /**
     * Encodes the specified Login message. Does not implicitly {@link Login.verify|verify} messages.
     * @function encode
     * @memberof Login
     * @static
     * @param {ILogin} message Login message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Login.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
        return writer;
    };

    /**
     * Encodes the specified Login message, length delimited. Does not implicitly {@link Login.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Login
     * @static
     * @param {ILogin} message Login message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Login.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Login message from the specified reader or buffer.
     * @function decode
     * @memberof Login
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Login} Login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Login.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Login();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.username = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("username"))
            throw $util.ProtocolError("missing required 'username'", { instance: message });
        return message;
    };

    /**
     * Decodes a Login message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Login
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Login} Login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Login.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Login message.
     * @function verify
     * @memberof Login
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Login.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.username))
            return "username: string expected";
        return null;
    };

    /**
     * Creates a Login message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Login
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Login} Login
     */
    Login.fromObject = function fromObject(object) {
        if (object instanceof $root.Login)
            return object;
        var message = new $root.Login();
        if (object.username != null)
            message.username = String(object.username);
        return message;
    };

    /**
     * Creates a plain object from a Login message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Login
     * @static
     * @param {Login} message Login
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Login.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.username = "";
        if (message.username != null && message.hasOwnProperty("username"))
            object.username = message.username;
        return object;
    };

    /**
     * Converts this Login to JSON.
     * @function toJSON
     * @memberof Login
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Login.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Login;
})();

$root.Packet = (function() {

    /**
     * Properties of a Packet.
     * @exports IPacket
     * @interface IPacket
     * @property {Packet.Type} type Packet type
     * @property {Uint8Array|null} [data] Packet data
     */

    /**
     * Constructs a new Packet.
     * @exports Packet
     * @classdesc Represents a Packet.
     * @implements IPacket
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
     * @member {Packet.Type} type
     * @memberof Packet
     * @instance
     */
    Packet.prototype.type = 1;

    /**
     * Packet data.
     * @member {Uint8Array} data
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
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
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
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
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
     * @name Packet.Type
     * @enum {number}
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

module.exports = $root;
