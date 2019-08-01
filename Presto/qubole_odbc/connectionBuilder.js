(function dsbuilder(attr)
{
    var params = {};
    var server = attr[connectionHelper.attributeServer].split(';');
    
    // It is hard coded, there are other options to
    // take care Hive, Spark.
    params["DSI"] = "presto"
    // Database name in UI is mapped to Catalog in presto.
    params["CATALOG"] = attr["dbname"];
    // Server is in UI is mapped to EndPoint.
    // It could take any one of the values (us, in, api)
    // Drop down would be best here.
    params["ENDPOINT"] = server[0];
    // Either can be treated as a password or bare string.
    // Need to look into the aspects of security on reconnection.
    // Service in UI is mapped to API. 
    params["APITOKEN"] = attr["service"];
    // Warehouse in UI is mapped to cluster label.
    params["CLUSTER_LABEL"] = attr["warehouse"];     
    //params["BUCKET_REGION"] = "ap-south-1";                                                  
    params["BUCKET_REGION"] = server[1];
    // use_s3 feature enabled in odbc-2.0.0
    params["USE_S3"] = "true";

    var stream  = attr["IsolationLevel"];

    if (stream == "ReadUncommitted") {
        
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
