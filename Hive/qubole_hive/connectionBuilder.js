(function dsbuilder(attr)
{
    var urlBuilder = "jdbc:qubole://hive/" + attr[connectionHelper.attributeWarehouse] + "?";

    return [urlBuilder];
})