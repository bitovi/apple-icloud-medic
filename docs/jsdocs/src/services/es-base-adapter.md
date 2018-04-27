<a name="ESBaseAdapter"></a>

## ESBaseAdapter
This adapter should be used when communicating with Elasticsearch.
Every team will have its own index in elasticsearch.
This "super" service creates an instance of the feathers-elasticsearch Service
for each team. Whenever a request comes in, the request data should contain
information about the team to which the data belongs. It is the
responsiblity of individual services to decorate the data with teamName
wherever possible (see the "executions" service and hooks).

**Kind**: global class  
<a name="ESBaseAdapter+callMethodForIndex"></a>

### esBaseAdapter.callMethodForIndex()
Every team will have its own index, so we must create an instance of
the feathers-elasticsearch service for each index.

**Kind**: instance method of [<code>ESBaseAdapter</code>](#ESBaseAdapter)  
