var azureMobileApps = require('azure-mobile-apps');
var table = azureMobileApps.table();

table.columns = {
    "name" : "string",
    "secondName" : "string"
}
module.exports = table;