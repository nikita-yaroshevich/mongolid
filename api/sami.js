
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Mongolid" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Mongolid.html">Mongolid</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Mongolid_Connection" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Mongolid/Connection.html">Connection</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Mongolid_Connection_Connection" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Mongolid/Connection/Connection.html">Connection</a>                    </div>                </li>                            <li data-name="class:Mongolid_Connection_Pool" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Mongolid/Connection/Pool.html">Pool</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Mongolid_Container" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Mongolid/Container.html">Container</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Mongolid_Container_Ioc" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Mongolid/Container/Ioc.html">Ioc</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Mongolid_Cursor" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Mongolid/Cursor.html">Cursor</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Mongolid_Cursor_Cursor" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Mongolid/Cursor/Cursor.html">Cursor</a>                    </div>                </li>                            <li data-name="class:Mongolid_Cursor_EmbeddedCursor" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Mongolid/Cursor/EmbeddedCursor.html">EmbeddedCursor</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Mongolid_DataMapper" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Mongolid/DataMapper.html">DataMapper</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Mongolid_DataMapper_SchemaMapper" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Mongolid/DataMapper/SchemaMapper.html">SchemaMapper</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Mongolid_Event" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Mongolid/Event.html">Event</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Mongolid_Event_EventTriggerInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Mongolid/Event/EventTriggerInterface.html">EventTriggerInterface</a>                    </div>                </li>                            <li data-name="class:Mongolid_Event_EventTriggerService" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Mongolid/Event/EventTriggerService.html">EventTriggerService</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Mongolid_Model" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Mongolid/Model.html">Model</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Mongolid_Model_Attributes" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Mongolid/Model/Attributes.html">Attributes</a>                    </div>                </li>                            <li data-name="class:Mongolid_Model_DocumentEmbedder" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Mongolid/Model/DocumentEmbedder.html">DocumentEmbedder</a>                    </div>                </li>                            <li data-name="class:Mongolid_Model_Relations" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Mongolid/Model/Relations.html">Relations</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Mongolid_Util" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Mongolid/Util.html">Util</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Mongolid_Util_SequenceService" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Mongolid/Util/SequenceService.html">SequenceService</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Mongolid_ActiveRecord" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Mongolid/ActiveRecord.html">ActiveRecord</a>                    </div>                </li>                            <li data-name="class:Mongolid_DynamicSchema" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Mongolid/DynamicSchema.html">DynamicSchema</a>                    </div>                </li>                            <li data-name="class:Mongolid_Manager" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Mongolid/Manager.html">Manager</a>                    </div>                </li>                            <li data-name="class:Mongolid_Schema" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Mongolid/Schema.html">Schema</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Mongolid.html", "name": "Mongolid", "doc": "Namespace Mongolid"},{"type": "Namespace", "link": "Mongolid/Connection.html", "name": "Mongolid\\Connection", "doc": "Namespace Mongolid\\Connection"},{"type": "Namespace", "link": "Mongolid/Container.html", "name": "Mongolid\\Container", "doc": "Namespace Mongolid\\Container"},{"type": "Namespace", "link": "Mongolid/Cursor.html", "name": "Mongolid\\Cursor", "doc": "Namespace Mongolid\\Cursor"},{"type": "Namespace", "link": "Mongolid/DataMapper.html", "name": "Mongolid\\DataMapper", "doc": "Namespace Mongolid\\DataMapper"},{"type": "Namespace", "link": "Mongolid/Event.html", "name": "Mongolid\\Event", "doc": "Namespace Mongolid\\Event"},{"type": "Namespace", "link": "Mongolid/Model.html", "name": "Mongolid\\Model", "doc": "Namespace Mongolid\\Model"},{"type": "Namespace", "link": "Mongolid/Util.html", "name": "Mongolid\\Util", "doc": "Namespace Mongolid\\Util"},
            {"type": "Interface", "fromName": "Mongolid\\Event", "fromLink": "Mongolid/Event.html", "link": "Mongolid/Event/EventTriggerInterface.html", "name": "Mongolid\\Event\\EventTriggerInterface", "doc": "&quot;An intrface that should be implemented and injected in order to have events\ntriggered from Mongolid.&quot;"},
                                                        {"type": "Method", "fromName": "Mongolid\\Event\\EventTriggerInterface", "fromLink": "Mongolid/Event/EventTriggerInterface.html", "link": "Mongolid/Event/EventTriggerInterface.html#method_fire", "name": "Mongolid\\Event\\EventTriggerInterface::fire", "doc": "&quot;Triggers \/ Dispatchs a new event to the event handlers or listeners that\nare being used.&quot;"},
            
            
            {"type": "Class", "fromName": "Mongolid", "fromLink": "Mongolid.html", "link": "Mongolid/ActiveRecord.html", "name": "Mongolid\\ActiveRecord", "doc": "&quot;The Mongolid\\ActiveRecord base class will ensure to enable your entity to\nhave methods to interact with the database. It means that &#039;save&#039;, &#039;insert&#039;,\n&#039;update&#039;, &#039;where&#039;, &#039;first&#039; and &#039;all&#039; are available within every instance.&quot;"},
                                                        {"type": "Method", "fromName": "Mongolid\\ActiveRecord", "fromLink": "Mongolid/ActiveRecord.html", "link": "Mongolid/ActiveRecord.html#method_save", "name": "Mongolid\\ActiveRecord::save", "doc": "&quot;Saves this object into database&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\ActiveRecord", "fromLink": "Mongolid/ActiveRecord.html", "link": "Mongolid/ActiveRecord.html#method_insert", "name": "Mongolid\\ActiveRecord::insert", "doc": "&quot;Insert this object into database&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\ActiveRecord", "fromLink": "Mongolid/ActiveRecord.html", "link": "Mongolid/ActiveRecord.html#method_update", "name": "Mongolid\\ActiveRecord::update", "doc": "&quot;Updates this object in database&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\ActiveRecord", "fromLink": "Mongolid/ActiveRecord.html", "link": "Mongolid/ActiveRecord.html#method_delete", "name": "Mongolid\\ActiveRecord::delete", "doc": "&quot;Deletes this object in database&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\ActiveRecord", "fromLink": "Mongolid/ActiveRecord.html", "link": "Mongolid/ActiveRecord.html#method_where", "name": "Mongolid\\ActiveRecord::where", "doc": "&quot;Gets a cursor of this kind of entities that matches the query from the\ndatabase&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\ActiveRecord", "fromLink": "Mongolid/ActiveRecord.html", "link": "Mongolid/ActiveRecord.html#method_all", "name": "Mongolid\\ActiveRecord::all", "doc": "&quot;Gets a cursor of this kind of entities from the database&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\ActiveRecord", "fromLink": "Mongolid/ActiveRecord.html", "link": "Mongolid/ActiveRecord.html#method_first", "name": "Mongolid\\ActiveRecord::first", "doc": "&quot;Gets the first entity of this kind that matches the query&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\ActiveRecord", "fromLink": "Mongolid/ActiveRecord.html", "link": "Mongolid/ActiveRecord.html#method___call", "name": "Mongolid\\ActiveRecord::__call", "doc": "&quot;Handle dynamic method calls into the model.&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\ActiveRecord", "fromLink": "Mongolid/ActiveRecord.html", "link": "Mongolid/ActiveRecord.html#method_getDataMapper", "name": "Mongolid\\ActiveRecord::getDataMapper", "doc": "&quot;Returns a DataMapper configured with the Schema and collection described\nin this entity&quot;"},
            
            {"type": "Class", "fromName": "Mongolid\\Connection", "fromLink": "Mongolid/Connection.html", "link": "Mongolid/Connection/Connection.html", "name": "Mongolid\\Connection\\Connection", "doc": "&quot;Represents a single connection with the database&quot;"},
                                                        {"type": "Method", "fromName": "Mongolid\\Connection\\Connection", "fromLink": "Mongolid/Connection/Connection.html", "link": "Mongolid/Connection/Connection.html#method___construct", "name": "Mongolid\\Connection\\Connection::__construct", "doc": "&quot;Constructs a new Mongolid connection. It uses the same constructor\nparameters as the original MongoDB\\Client constructor&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Connection\\Connection", "fromLink": "Mongolid/Connection/Connection.html", "link": "Mongolid/Connection/Connection.html#method_getRawConnection", "name": "Mongolid\\Connection\\Connection::getRawConnection", "doc": "&quot;Getter for Client instance&quot;"},
            
            {"type": "Class", "fromName": "Mongolid\\Connection", "fromLink": "Mongolid/Connection.html", "link": "Mongolid/Connection/Pool.html", "name": "Mongolid\\Connection\\Pool", "doc": "&quot;Holds one or more connections and retrieve then as needed. It contains a\ncache of connections maintained so that the connections can be reused when\nfuture requests to the database are required.&quot;"},
                                                        {"type": "Method", "fromName": "Mongolid\\Connection\\Pool", "fromLink": "Mongolid/Connection/Pool.html", "link": "Mongolid/Connection/Pool.html#method___construct", "name": "Mongolid\\Connection\\Pool::__construct", "doc": "&quot;Contructs a connection pool&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Connection\\Pool", "fromLink": "Mongolid/Connection/Pool.html", "link": "Mongolid/Connection/Pool.html#method_getConnection", "name": "Mongolid\\Connection\\Pool::getConnection", "doc": "&quot;Gets a connection from the pool. It will cicle trought the existent\nconnections.&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Connection\\Pool", "fromLink": "Mongolid/Connection/Pool.html", "link": "Mongolid/Connection/Pool.html#method_addConnection", "name": "Mongolid\\Connection\\Pool::addConnection", "doc": "&quot;Adds a new connection to the pool&quot;"},
            
            {"type": "Class", "fromName": "Mongolid\\Container", "fromLink": "Mongolid/Container.html", "link": "Mongolid/Container/Ioc.html", "name": "Mongolid\\Container\\Ioc", "doc": "&quot;This class is a simple Facade for a Illuminate\\Container\\Container\nin order to use the Container as IOC at all classes.&quot;"},
                                                        {"type": "Method", "fromName": "Mongolid\\Container\\Ioc", "fromLink": "Mongolid/Container/Ioc.html", "link": "Mongolid/Container/Ioc.html#method_setContainer", "name": "Mongolid\\Container\\Ioc::setContainer", "doc": "&quot;Setter for static::$container.&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Container\\Ioc", "fromLink": "Mongolid/Container/Ioc.html", "link": "Mongolid/Container/Ioc.html#method___callStatic", "name": "Mongolid\\Container\\Ioc::__callStatic", "doc": "&quot;Handle dynamic, static calls to the object.&quot;"},
            
            {"type": "Class", "fromName": "Mongolid\\Cursor", "fromLink": "Mongolid/Cursor.html", "link": "Mongolid/Cursor/Cursor.html", "name": "Mongolid\\Cursor\\Cursor", "doc": "&quot;This class wraps the query execution and the actuall creation of the driver\ncursor. By doing this we can, call &#039;sort&#039;, &#039;skip&#039;, &#039;limit&#039; and others after\ncalling &#039;where&#039;. Because the mongodb library&#039;s MongoDB\\Cursor is much more\nlimited (in that regard) than the old driver MongoCursor.&quot;"},
                                                        {"type": "Method", "fromName": "Mongolid\\Cursor\\Cursor", "fromLink": "Mongolid/Cursor/Cursor.html", "link": "Mongolid/Cursor/Cursor.html#method___construct", "name": "Mongolid\\Cursor\\Cursor::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Cursor\\Cursor", "fromLink": "Mongolid/Cursor/Cursor.html", "link": "Mongolid/Cursor/Cursor.html#method_limit", "name": "Mongolid\\Cursor\\Cursor::limit", "doc": "&quot;Limits the number of results returned&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Cursor\\Cursor", "fromLink": "Mongolid/Cursor/Cursor.html", "link": "Mongolid/Cursor/Cursor.html#method_sort", "name": "Mongolid\\Cursor\\Cursor::sort", "doc": "&quot;Sorts the results by given fields&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Cursor\\Cursor", "fromLink": "Mongolid/Cursor/Cursor.html", "link": "Mongolid/Cursor/Cursor.html#method_skip", "name": "Mongolid\\Cursor\\Cursor::skip", "doc": "&quot;Skips a number of results&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Cursor\\Cursor", "fromLink": "Mongolid/Cursor/Cursor.html", "link": "Mongolid/Cursor/Cursor.html#method_count", "name": "Mongolid\\Cursor\\Cursor::count", "doc": "&quot;Counts the number of results for this cursor&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Cursor\\Cursor", "fromLink": "Mongolid/Cursor/Cursor.html", "link": "Mongolid/Cursor/Cursor.html#method_rewind", "name": "Mongolid\\Cursor\\Cursor::rewind", "doc": "&quot;Iterator interface rewind (used in foreach)&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Cursor\\Cursor", "fromLink": "Mongolid/Cursor/Cursor.html", "link": "Mongolid/Cursor/Cursor.html#method_current", "name": "Mongolid\\Cursor\\Cursor::current", "doc": "&quot;Iterator interface current. Return a model object\nwith cursor document. (used in foreach)&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Cursor\\Cursor", "fromLink": "Mongolid/Cursor/Cursor.html", "link": "Mongolid/Cursor/Cursor.html#method_first", "name": "Mongolid\\Cursor\\Cursor::first", "doc": "&quot;Returns the first element of the cursor&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Cursor\\Cursor", "fromLink": "Mongolid/Cursor/Cursor.html", "link": "Mongolid/Cursor/Cursor.html#method_key", "name": "Mongolid\\Cursor\\Cursor::key", "doc": "&quot;Iterator key method (used in foreach)&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Cursor\\Cursor", "fromLink": "Mongolid/Cursor/Cursor.html", "link": "Mongolid/Cursor/Cursor.html#method_next", "name": "Mongolid\\Cursor\\Cursor::next", "doc": "&quot;Iterator next method (used in foreach)&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Cursor\\Cursor", "fromLink": "Mongolid/Cursor/Cursor.html", "link": "Mongolid/Cursor/Cursor.html#method_valid", "name": "Mongolid\\Cursor\\Cursor::valid", "doc": "&quot;Iterator valid method (used in foreach)&quot;"},
            
            {"type": "Class", "fromName": "Mongolid\\Cursor", "fromLink": "Mongolid/Cursor.html", "link": "Mongolid/Cursor/EmbeddedCursor.html", "name": "Mongolid\\Cursor\\EmbeddedCursor", "doc": "&quot;This class wraps the query execution and the actuall creation of the driver\ncursor. By doing this we can, call &#039;sort&#039;, &#039;skip&#039;, &#039;limit&#039; and others after\ncalling &#039;where&#039;. Because the mongodb library&#039;s MongoDB\\Cursor is much more\nlimited (in that regard) than the old driver MongoCursor.&quot;"},
                                                        {"type": "Method", "fromName": "Mongolid\\Cursor\\EmbeddedCursor", "fromLink": "Mongolid/Cursor/EmbeddedCursor.html", "link": "Mongolid/Cursor/EmbeddedCursor.html#method___construct", "name": "Mongolid\\Cursor\\EmbeddedCursor::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Cursor\\EmbeddedCursor", "fromLink": "Mongolid/Cursor/EmbeddedCursor.html", "link": "Mongolid/Cursor/EmbeddedCursor.html#method_limit", "name": "Mongolid\\Cursor\\EmbeddedCursor::limit", "doc": "&quot;Limits the number of results returned&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Cursor\\EmbeddedCursor", "fromLink": "Mongolid/Cursor/EmbeddedCursor.html", "link": "Mongolid/Cursor/EmbeddedCursor.html#method_sort", "name": "Mongolid\\Cursor\\EmbeddedCursor::sort", "doc": "&quot;Sorts the results by given fields.&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Cursor\\EmbeddedCursor", "fromLink": "Mongolid/Cursor/EmbeddedCursor.html", "link": "Mongolid/Cursor/EmbeddedCursor.html#method_skip", "name": "Mongolid\\Cursor\\EmbeddedCursor::skip", "doc": "&quot;Skips a number of results&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Cursor\\EmbeddedCursor", "fromLink": "Mongolid/Cursor/EmbeddedCursor.html", "link": "Mongolid/Cursor/EmbeddedCursor.html#method_count", "name": "Mongolid\\Cursor\\EmbeddedCursor::count", "doc": "&quot;Counts the number of results for this cursor&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Cursor\\EmbeddedCursor", "fromLink": "Mongolid/Cursor/EmbeddedCursor.html", "link": "Mongolid/Cursor/EmbeddedCursor.html#method_rewind", "name": "Mongolid\\Cursor\\EmbeddedCursor::rewind", "doc": "&quot;Iterator interface rewind (used in foreach)&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Cursor\\EmbeddedCursor", "fromLink": "Mongolid/Cursor/EmbeddedCursor.html", "link": "Mongolid/Cursor/EmbeddedCursor.html#method_current", "name": "Mongolid\\Cursor\\EmbeddedCursor::current", "doc": "&quot;Iterator interface current. Return a model object\nwith cursor document. (used in foreach)&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Cursor\\EmbeddedCursor", "fromLink": "Mongolid/Cursor/EmbeddedCursor.html", "link": "Mongolid/Cursor/EmbeddedCursor.html#method_first", "name": "Mongolid\\Cursor\\EmbeddedCursor::first", "doc": "&quot;Returns the first element of the cursor&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Cursor\\EmbeddedCursor", "fromLink": "Mongolid/Cursor/EmbeddedCursor.html", "link": "Mongolid/Cursor/EmbeddedCursor.html#method_key", "name": "Mongolid\\Cursor\\EmbeddedCursor::key", "doc": "&quot;Iterator key method (used in foreach)&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Cursor\\EmbeddedCursor", "fromLink": "Mongolid/Cursor/EmbeddedCursor.html", "link": "Mongolid/Cursor/EmbeddedCursor.html#method_next", "name": "Mongolid\\Cursor\\EmbeddedCursor::next", "doc": "&quot;Iterator next method (used in foreach)&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Cursor\\EmbeddedCursor", "fromLink": "Mongolid/Cursor/EmbeddedCursor.html", "link": "Mongolid/Cursor/EmbeddedCursor.html#method_valid", "name": "Mongolid\\Cursor\\EmbeddedCursor::valid", "doc": "&quot;Iterator valid method (used in foreach)&quot;"},
            
            {"type": "Class", "fromName": "Mongolid\\DataMapper", "fromLink": "Mongolid/DataMapper.html", "link": "Mongolid/DataMapper/SchemaMapper.html", "name": "Mongolid\\DataMapper\\SchemaMapper", "doc": "&quot;The SchemaMapper will map an array of data to an Schema object. When\ninstantiating a SchemaMapper you should provide a Schema. When calling &#039;map&#039;\nthe Schema provided will be used to format the data to the correct format.&quot;"},
                                                        {"type": "Method", "fromName": "Mongolid\\DataMapper\\SchemaMapper", "fromLink": "Mongolid/DataMapper/SchemaMapper.html", "link": "Mongolid/DataMapper/SchemaMapper.html#method___construct", "name": "Mongolid\\DataMapper\\SchemaMapper::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\DataMapper\\SchemaMapper", "fromLink": "Mongolid/DataMapper/SchemaMapper.html", "link": "Mongolid/DataMapper/SchemaMapper.html#method_map", "name": "Mongolid\\DataMapper\\SchemaMapper::map", "doc": "&quot;Maps the input $data to the schema specified in the $schema property&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\DataMapper\\SchemaMapper", "fromLink": "Mongolid/DataMapper/SchemaMapper.html", "link": "Mongolid/DataMapper/SchemaMapper.html#method_parseField", "name": "Mongolid\\DataMapper\\SchemaMapper::parseField", "doc": "&quot;Parse a value based on a field yype of the schema&quot;"},
            
            {"type": "Class", "fromName": "Mongolid", "fromLink": "Mongolid.html", "link": "Mongolid/DynamicSchema.html", "name": "Mongolid\\DynamicSchema", "doc": "&quot;The DynamicSchema will accept additional fields that are not specified in\nthe $schema property. This is usefull if you doesn&#039;t have a clear idea of how\nthe document will look like&quot;"},
                    
            {"type": "Class", "fromName": "Mongolid\\Event", "fromLink": "Mongolid/Event.html", "link": "Mongolid/Event/EventTriggerInterface.html", "name": "Mongolid\\Event\\EventTriggerInterface", "doc": "&quot;An intrface that should be implemented and injected in order to have events\ntriggered from Mongolid.&quot;"},
                                                        {"type": "Method", "fromName": "Mongolid\\Event\\EventTriggerInterface", "fromLink": "Mongolid/Event/EventTriggerInterface.html", "link": "Mongolid/Event/EventTriggerInterface.html#method_fire", "name": "Mongolid\\Event\\EventTriggerInterface::fire", "doc": "&quot;Triggers \/ Dispatchs a new event to the event handlers or listeners that\nare being used.&quot;"},
            
            {"type": "Class", "fromName": "Mongolid\\Event", "fromLink": "Mongolid/Event.html", "link": "Mongolid/Event/EventTriggerService.html", "name": "Mongolid\\Event\\EventTriggerService", "doc": "&quot;Provides the service of event firing.&quot;"},
                                                        {"type": "Method", "fromName": "Mongolid\\Event\\EventTriggerService", "fromLink": "Mongolid/Event/EventTriggerService.html", "link": "Mongolid/Event/EventTriggerService.html#method_registerEventDispatcher", "name": "Mongolid\\Event\\EventTriggerService::registerEventDispatcher", "doc": "&quot;Registers a object that will have the responsability of firing events to\nthe rest of the application.&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Event\\EventTriggerService", "fromLink": "Mongolid/Event/EventTriggerService.html", "link": "Mongolid/Event/EventTriggerService.html#method_fire", "name": "Mongolid\\Event\\EventTriggerService::fire", "doc": "&quot;Triggers \/ Dispatchs a new event to the registered event handlers if\nthey have been registered.&quot;"},
            
            {"type": "Class", "fromName": "Mongolid", "fromLink": "Mongolid.html", "link": "Mongolid/Manager.html", "name": "Mongolid\\Manager", "doc": "&quot;Wraps the Mongolid initialization. The main purpose of the Manager is to make\nit easy to use without any framework.&quot;"},
                                                        {"type": "Method", "fromName": "Mongolid\\Manager", "fromLink": "Mongolid/Manager.html", "link": "Mongolid/Manager.html#method_addConnection", "name": "Mongolid\\Manager::addConnection", "doc": "&quot;Main entry point to openning a connection and start using Mongolid in\npure PHP. After adding a connection into the Manager you are ready to\npersist and query your models.&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Manager", "fromLink": "Mongolid/Manager.html", "link": "Mongolid/Manager.html#method_getConnection", "name": "Mongolid\\Manager::getConnection", "doc": "&quot;Get the raw MongoDB connection&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Manager", "fromLink": "Mongolid/Manager.html", "link": "Mongolid/Manager.html#method_setEventTrigger", "name": "Mongolid\\Manager::setEventTrigger", "doc": "&quot;Sets the event trigger for Mongolid events.&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Manager", "fromLink": "Mongolid/Manager.html", "link": "Mongolid/Manager.html#method_registerSchema", "name": "Mongolid\\Manager::registerSchema", "doc": "&quot;Allow document Schemas to be registered for later use&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Manager", "fromLink": "Mongolid/Manager.html", "link": "Mongolid/Manager.html#method_getMapper", "name": "Mongolid\\Manager::getMapper", "doc": "&quot;Retrieves a DataMapper for the given $entityClass. This can only be done\nif the Schema for that entity has been previously registered with\nregisterSchema() method.&quot;"},
            
            {"type": "Trait", "fromName": "Mongolid\\Model", "fromLink": "Mongolid/Model.html", "link": "Mongolid/Model/Attributes.html", "name": "Mongolid\\Model\\Attributes", "doc": "&quot;This trait adds attribute getter, setters and also a usefull\n&lt;code&gt;fill&lt;\/code&gt; method that can be used with $fillable and $guarded\nproperties to make sure that only the correct attributes\nwill be set.&quot;"},
                                                        {"type": "Method", "fromName": "Mongolid\\Model\\Attributes", "fromLink": "Mongolid/Model/Attributes.html", "link": "Mongolid/Model/Attributes.html#method_getAttribute", "name": "Mongolid\\Model\\Attributes::getAttribute", "doc": "&quot;Get an attribute from the model.&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Model\\Attributes", "fromLink": "Mongolid/Model/Attributes.html", "link": "Mongolid/Model/Attributes.html#method_getAttributes", "name": "Mongolid\\Model\\Attributes::getAttributes", "doc": "&quot;Get all attributes from the model.&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Model\\Attributes", "fromLink": "Mongolid/Model/Attributes.html", "link": "Mongolid/Model/Attributes.html#method_fill", "name": "Mongolid\\Model\\Attributes::fill", "doc": "&quot;Set the model attributes using an array&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Model\\Attributes", "fromLink": "Mongolid/Model/Attributes.html", "link": "Mongolid/Model/Attributes.html#method_cleanAttribute", "name": "Mongolid\\Model\\Attributes::cleanAttribute", "doc": "&quot;Set a given attribute on the model.&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Model\\Attributes", "fromLink": "Mongolid/Model/Attributes.html", "link": "Mongolid/Model/Attributes.html#method_setAttribute", "name": "Mongolid\\Model\\Attributes::setAttribute", "doc": "&quot;Set a given attribute on the model.&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Model\\Attributes", "fromLink": "Mongolid/Model/Attributes.html", "link": "Mongolid/Model/Attributes.html#method_toArray", "name": "Mongolid\\Model\\Attributes::toArray", "doc": "&quot;Returns the model instance as an Array.&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Model\\Attributes", "fromLink": "Mongolid/Model/Attributes.html", "link": "Mongolid/Model/Attributes.html#method___get", "name": "Mongolid\\Model\\Attributes::__get", "doc": "&quot;Dynamically retrieve attributes on the model.&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Model\\Attributes", "fromLink": "Mongolid/Model/Attributes.html", "link": "Mongolid/Model/Attributes.html#method___set", "name": "Mongolid\\Model\\Attributes::__set", "doc": "&quot;Dynamically set attributes on the model.&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Model\\Attributes", "fromLink": "Mongolid/Model/Attributes.html", "link": "Mongolid/Model/Attributes.html#method___isset", "name": "Mongolid\\Model\\Attributes::__isset", "doc": "&quot;Determine if an attribute exists on the model.&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Model\\Attributes", "fromLink": "Mongolid/Model/Attributes.html", "link": "Mongolid/Model/Attributes.html#method___unset", "name": "Mongolid\\Model\\Attributes::__unset", "doc": "&quot;Unset an attribute on the model.&quot;"},
            
            {"type": "Class", "fromName": "Mongolid\\Model", "fromLink": "Mongolid/Model.html", "link": "Mongolid/Model/DocumentEmbedder.html", "name": "Mongolid\\Model\\DocumentEmbedder", "doc": "&quot;Document embeder is a service that will embed documents within each other.&quot;"},
                                                        {"type": "Method", "fromName": "Mongolid\\Model\\DocumentEmbedder", "fromLink": "Mongolid/Model/DocumentEmbedder.html", "link": "Mongolid/Model/DocumentEmbedder.html#method_embed", "name": "Mongolid\\Model\\DocumentEmbedder::embed", "doc": "&quot;Embeds the given $entity into $field of $parent. This method will also\nconsider the _id of the $entity in order to update it if it is already\npresent in $field.&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Model\\DocumentEmbedder", "fromLink": "Mongolid/Model/DocumentEmbedder.html", "link": "Mongolid/Model/DocumentEmbedder.html#method_unembed", "name": "Mongolid\\Model\\DocumentEmbedder::unembed", "doc": "&quot;Removes the given $entity from $field of $parent. This method will\nconsider the _id of the $entity in order to remove it&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Model\\DocumentEmbedder", "fromLink": "Mongolid/Model/DocumentEmbedder.html", "link": "Mongolid/Model/DocumentEmbedder.html#method_attach", "name": "Mongolid\\Model\\DocumentEmbedder::attach", "doc": "&quot;Attach a new _id reference into $field of $parent&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Model\\DocumentEmbedder", "fromLink": "Mongolid/Model/DocumentEmbedder.html", "link": "Mongolid/Model/DocumentEmbedder.html#method_detach", "name": "Mongolid\\Model\\DocumentEmbedder::detach", "doc": "&quot;Removes an _id reference from $field of $parent&quot;"},
            
            {"type": "Trait", "fromName": "Mongolid\\Model", "fromLink": "Mongolid/Model.html", "link": "Mongolid/Model/Relations.html", "name": "Mongolid\\Model\\Relations", "doc": "&quot;It is supossed to be used in model classes in general&quot;"},
                                                        {"type": "Method", "fromName": "Mongolid\\Model\\Relations", "fromLink": "Mongolid/Model/Relations.html", "link": "Mongolid/Model/Relations.html#method_embed", "name": "Mongolid\\Model\\Relations::embed", "doc": "&quot;Embed a new document to an attribute. It will also generate an\n_id for the document if it&#039;s not present.&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Model\\Relations", "fromLink": "Mongolid/Model/Relations.html", "link": "Mongolid/Model/Relations.html#method_unembed", "name": "Mongolid\\Model\\Relations::unembed", "doc": "&quot;Removes an embedded document from the given field. It does that by using\nthe _id of the given $obj.&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Model\\Relations", "fromLink": "Mongolid/Model/Relations.html", "link": "Mongolid/Model/Relations.html#method_attach", "name": "Mongolid\\Model\\Relations::attach", "doc": "&quot;Attach document _id reference to an attribute. It will also generate an\n_id for the document if it&#039;s not present.&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Model\\Relations", "fromLink": "Mongolid/Model/Relations.html", "link": "Mongolid/Model/Relations.html#method_detach", "name": "Mongolid\\Model\\Relations::detach", "doc": "&quot;Removes a document _id reference from an attribute. It will remove the\n_id of the given $obj from inside the given $field.&quot;"},
            
            {"type": "Class", "fromName": "Mongolid", "fromLink": "Mongolid.html", "link": "Mongolid/Schema.html", "name": "Mongolid\\Schema", "doc": "&quot;A schema maps to a MongoDB collection and defines the shape of the documents\nwithin that collection.&quot;"},
                                                        {"type": "Method", "fromName": "Mongolid\\Schema", "fromLink": "Mongolid/Schema.html", "link": "Mongolid/Schema.html#method_objectId", "name": "Mongolid\\Schema::objectId", "doc": "&quot;Filters any field in the $fields that has it&#039;s value specified as a\n&#039;objectId&#039;. It will wraps the $value, if any, into a ObjectID object&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Schema", "fromLink": "Mongolid/Schema.html", "link": "Mongolid/Schema.html#method_sequence", "name": "Mongolid\\Schema::sequence", "doc": "&quot;Prepares the field to have a sequence. If $value is zero or not defined\na new auto-increment number will be \&quot;generated\&quot; for the collection of\nthe schema. The sequence generation is done by the SequenceService.&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Schema", "fromLink": "Mongolid/Schema.html", "link": "Mongolid/Schema.html#method_createdAtTimestamp", "name": "Mongolid\\Schema::createdAtTimestamp", "doc": "&quot;Prepares the field to be the datetime that the document has been created&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Schema", "fromLink": "Mongolid/Schema.html", "link": "Mongolid/Schema.html#method_updatedAtTimestamp", "name": "Mongolid\\Schema::updatedAtTimestamp", "doc": "&quot;Prepares the field to be now&quot;"},
            
            {"type": "Class", "fromName": "Mongolid\\Util", "fromLink": "Mongolid/Util.html", "link": "Mongolid/Util/SequenceService.html", "name": "Mongolid\\Util\\SequenceService", "doc": "&quot;Sequence service will manage and provide auto-increment sequences to be used\nby the models. It can be useful for objects which the _id must be an integer\nsequence.&quot;"},
                                                        {"type": "Method", "fromName": "Mongolid\\Util\\SequenceService", "fromLink": "Mongolid/Util/SequenceService.html", "link": "Mongolid/Util/SequenceService.html#method___construct", "name": "Mongolid\\Util\\SequenceService::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Mongolid\\Util\\SequenceService", "fromLink": "Mongolid/Util/SequenceService.html", "link": "Mongolid/Util/SequenceService.html#method_getNextValue", "name": "Mongolid\\Util\\SequenceService::getNextValue", "doc": "&quot;Get next value for the sequence&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


