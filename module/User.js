let mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	_id: mongoose.Types.ObjectId,
	userid: 
	{ 
		type : String
	},
	name: 
	{ 
		type : String
	},
	reason: 
	{ 
		type : String
	}

});
module.exports = mongoose.model('User', UserSchema);
