(function propertiesbuilder(attr) {
    var props = {};

    props["password"] = attr[connectionHelper.attributePassword];
	props["useS3"] = "true";
	props["skip_parsing"] = "true";

	var server = attr[connectionHelper.attributeServer].split(";");
	props["endpoint"] = server[0];

	var adv_prop;
	for (var i=1; i<server.length; i++) {
		adv_prop = server[i].split("=");
		props[adv_prop[0]] = adv_prop[1];
	}

	var stream  = attr["IsolationLevel"];
    if (stream == "ReadUncommitted") {
        props["stream_results"] = "true";
    }

    return props;
})