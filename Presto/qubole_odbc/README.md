**Walk through the following steps to include the plugin in the Tableau(above 2019.1).**

1) Create a directory `connector` in root directory.place the plugin in the created directory:

   $ ls /connector/qubole_odbc/

   connection-dialog.tcd

   connectionBuilder.js connectionResolver.tdr  manifest.xml

2) Run Tableau in CLI with plugin location,(MAC):

   $/Applications/Tableau\ Desktop\ 2019.1.app/Contents/MacOS/Tableau -DConnectPluginsPath=/connector/


3) You can disable `VIRTUAL_HOST_STYLE` url for s3 by mentioning bucket region 
   in the `EndPoint;BucketRegion` field.
