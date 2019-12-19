(function dsbuilder(attr)
{
    var urlBuilder = "jdbc:qubole://presto/" + attr[connectionHelper.attributeWarehouse] + "?";
    var params = {};
	
	var server = attr[connectionHelper.attributeServer].split(";");
    
    params["catalog_name"] = attr[connectionHelper.attributeDatabase];
	params["endpoint"] = server[0];
	params["password"] = attr["service"];	
    params["useS3"] = "true";
    params["skip_parsing"] = "true";                                                  
	
    var stream  = attr["IsolationLevel"];

    if (stream == "ReadUncommitted") {
        params["stream_results"] = "true";
    }

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
