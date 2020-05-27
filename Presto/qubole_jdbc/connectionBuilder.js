(function dsbuilder(attr)
{
    var urlBuilder = "jdbc:qubole://presto/" + attr[connectionHelper.attributeWarehouse] + "?";

    return [urlBuilder];
})