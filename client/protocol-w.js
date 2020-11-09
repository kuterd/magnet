/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

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
     * @member {string}username
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

module.exports = $root;
