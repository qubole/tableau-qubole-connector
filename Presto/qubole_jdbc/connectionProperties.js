(function propertiesbuilder(attr) {
    var props = {};

    var server = attr[connectionHelper.attributeServer].split(";");

    props["catalog_name"] = attr[connectionHelper.attributeDatabase];
    props["endpoint"] = server[0];
    props["password"] = attr[connectionHelper.attributePassword];	
    props["useS3"] = "true";
    props["skip_parsing"] = "true"; 

    var stream  = attr["IsolationLevel"];

    if (stream == "ReadUncommitted") {
        props["stream_results"] = "true";
    }

   return props
})