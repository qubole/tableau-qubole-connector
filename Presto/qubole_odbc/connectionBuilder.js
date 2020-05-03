(function dsbuilder(attr)
{
    var params = {};
    var server = attr[connectionHelper.attributeServer].split(';');
    
    params["DSI"] = "presto"
    params["CATALOG"] = attr[connectionHelper.attributeDatabase];
    params["ENDPOINT"] = server[0];
    params["APITOKEN"] = attr[connectionHelper.attributePassword];
    params["CLUSTER_LABEL"] = attr[connectionHelper.attributeWarehouse];                       
    params["BUCKET_REGION"] = server[1];
    params["USE_S3"] = "true";

    if (server.length == 2 && server[1] != "") 
    {
        params["VIRTUAL_HOST_STYLE"] = "false";
    };

    var stream  = attr["IsolationLevel"];

    if (stream == "ReadUncommitted") 
    {
        params["STREAM_RESULTS"] = "true";
    };

    var formattedParams = [];

    formattedParams.push(connectionHelper.formatKeyValuePair(driverLocator.keywordDriver, driverLocator.locateDriver(attr)));

    for (var key in params)
    {
        formattedParams.push(connectionHelper.formatKeyValuePair(key, params[key]));
    }
    
    return formattedParams;
})
