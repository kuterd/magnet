module.exports = function(protocol) {
	return {
		makePacket: function(type, data) {
			return protocol.Packet.encode({type: type, data:data}).finish();
		}
	};
};
