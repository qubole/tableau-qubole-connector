(function dsbuilder(attr)
{
    var urlBuilder = "jdbc:qubole://hive/" + attr[connectionHelper.attributeWarehouse] + "?";
    var params = {};
	
	var server = attr[connectionHelper.attributeServer].split(";");
    
	params["endpoint"] = server[0];
	params["password"] = attr["service"];	
    params["useS3"] = "true";
    params["skip_parsing"] = "true";                                                  

    var formattedParams = [];

    for (var key in params)
    {
        formattedParams.push(connectionHelper.formatKeyValuePair(key, params[key]));
    }

    urlBuilder += formattedParams.join(";");

	for (var i=1; i<server.length; i++) {
		urlBuilder = urlBuilder.concat(";",server[i]);
	}

    return [urlBuilder];
})
