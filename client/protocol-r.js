/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.BoardUpdate = (function() {

    /**
     * Properties of a BoardUpdate.
     * @exports IBoardUpdate
     * @interface IBoardUpdate
     * @property {Array.<ITilePos>} [clicks] BoardUpdate clicks
     */

    /**
     * Constructs a new BoardUpdate.
     * @exports BoardUpdate
     * @classdesc Represents a BoardUpdate.
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
     * @member {Array.<ITilePos>}clicks
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

$root.BoardData = (function() {

    /**
     * Properties of a BoardData.
     * @exports IBoardData
     * @interface IBoardData
     * @property {Array.<BoardData.ITile>} [tiles] BoardData tiles
     * @property {Array.<BoardData.IExpandingTile>} [expTiles] BoardData expTiles
     * @property {Array.<BoardData.ILeaderBoardEntry>} [leaderBoard] BoardData leaderBoard
     */

    /**
     * Constructs a new BoardData.
     * @exports BoardData
     * @classdesc Represents a BoardData.
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
     * @member {Array.<BoardData.ITile>}tiles
     * @memberof BoardData
     * @instance
     */
    BoardData.prototype.tiles = $util.emptyArray;

    /**
     * BoardData expTiles.
     * @member {Array.<BoardData.IExpandingTile>}expTiles
     * @memberof BoardData
     * @instance
     */
    BoardData.prototype.expTiles = $util.emptyArray;

    /**
     * BoardData leaderBoard.
     * @member {Array.<BoardData.ILeaderBoardEntry>}leaderBoard
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
                error = $root.BoardData.ExpandingTile.verify(message.expTiles[i]);
                if (error)
                    return "expTiles." + error;
            }
        }
        if (message.leaderBoard != null && message.hasOwnProperty("leaderBoard")) {
            if (!Array.isArray(message.leaderBoard))
                return "leaderBoard: array expected";
            for (var i = 0; i < message.leaderBoard.length; ++i) {
                error = $root.BoardData.LeaderBoardEntry.verify(message.leaderBoard[i]);
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
         * @member {number}life
         * @memberof BoardData.ExpandingTile
         * @instance
         */
        ExpandingTile.prototype.life = 0;

        /**
         * ExpandingTile to.
         * @member {ITilePos}to
         * @memberof BoardData.ExpandingTile
         * @instance
         */
        ExpandingTile.prototype.to = null;

        /**
         * ExpandingTile from.
         * @member {ITilePos}from
         * @memberof BoardData.ExpandingTile
         * @instance
         */
        ExpandingTile.prototype.from = null;

        /**
         * ExpandingTile id.
         * @member {number}id
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
            var error = $root.TilePos.verify(message.to);
            if (error)
                return "to." + error;
            error = $root.TilePos.verify(message.from);
            if (error)
                return "from." + error;
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
         * @member {number}id
         * @memberof BoardData.Tile
         * @instance
         */
        Tile.prototype.id = 0;

        /**
         * Tile status.
         * @member {number}status
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
         * @member {number}id
         * @memberof BoardData.LeaderBoardEntry
         * @instance
         */
        LeaderBoardEntry.prototype.id = 0;

        /**
         * LeaderBoardEntry username.
         * @member {string}username
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
     * @member {ITilePos}tilePos
     * @memberof LoginComplete
     * @instance
     */
    LoginComplete.prototype.tilePos = null;

    /**
     * LoginComplete id.
     * @member {number}id
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
        var error = $root.TilePos.verify(message.tilePos);
        if (error)
            return "tilePos." + error;
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

module.exports = $root;
