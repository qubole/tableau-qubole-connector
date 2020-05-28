(function dsbuilder(attr)
{
	var urlBuilder = "jdbc:qubole://presto/" + attr[connectionHelper.attributeWarehouse] + "?";
	var server = attr[connectionHelper.attributeServer].split(";");
	for (var i=1; i<server.length; i++) {
		urlBuilder = urlBuilder.concat(";",server[i]);
	}

	return [urlBuilder];
})
