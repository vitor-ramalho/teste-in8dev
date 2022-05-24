const mongoose = require('mongoose');

const URL = "mongodb+srv://admin:admin@erp-admin.jxm4f.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URL);

module.exports = mongoose;