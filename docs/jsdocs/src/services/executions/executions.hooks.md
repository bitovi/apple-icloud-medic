## Functions

<dl>
<dt><a href="#normalizeSearchQuery">normalizeSearchQuery()</a></dt>
<dd><p>Normalizes the search query. This allows the client to use a shorthand
for certain nested values. This is mostly done to achieve parity
with the StackStorm executions API.</p>
</dd>
<dt><a href="#flattenQuery">flattenQuery()</a></dt>
<dd><p>Elastic search will look up nested data like &#39;some.nested.field&#39;: [&#39;value&#39;].
&quot;safe: true&quot; will preserve arrays.
Arrays will look like this: &#39;some.nested.field&#39;: [&#39;value&#39;]
(instead of &#39;some.nested.field.0&#39;: &#39;value&#39;)</p>
</dd>
<dt><a href="#getAncestors">getAncestors()</a></dt>
<dd><p>Given an execution, returns an flat array of ancestor objects with
the top-most (root execution) object first and descending down.</p>
</dd>
<dt><a href="#belongsToTeam">belongsToTeam()</a></dt>
<dd><p>Predicate used to determine if an execution belongs to a team.</p>
</dd>
<dt><a href="#assignTeamName">assignTeamName()</a></dt>
<dd><p>Assigns a teamName property to each item in the list.
This will be used to put the data in the correct index.</p>
</dd>
<dt><a href="#expandParentIds">expandParentIds()</a></dt>
<dd><p>Expands all of the parent IDs onto a top-level property
for quick lookup. The order is intentional and reflects the
parent/child relationship: root -&gt; parent -&gt; child. This allows
us to look up deeply nested children using any of its ancestor IDs.</p>
</dd>
<dt><a href="#cacheHelpfulData">cacheHelpfulData()</a></dt>
<dd><p>Caches data from the request so that it is stripped from the
request data but still available in an &quot;after&quot; hook</p>
</dd>
</dl>

<a name="normalizeSearchQuery"></a>

## normalizeSearchQuery()
Normalizes the search query. This allows the client to use a shorthand
for certain nested values. This is mostly done to achieve parity
with the StackStorm executions API.

**Kind**: global function  
<a name="flattenQuery"></a>

## flattenQuery()
Elastic search will look up nested data like 'some.nested.field': ['value'].
"safe: true" will preserve arrays.
Arrays will look like this: 'some.nested.field': ['value']
(instead of 'some.nested.field.0': 'value')

**Kind**: global function  
<a name="getAncestors"></a>

## getAncestors()
Given an execution, returns an flat array of ancestor objects with
the top-most (root execution) object first and descending down.

**Kind**: global function  
<a name="belongsToTeam"></a>

## belongsToTeam()
Predicate used to determine if an execution belongs to a team.

**Kind**: global function  
<a name="assignTeamName"></a>

## assignTeamName()
Assigns a teamName property to each item in the list.
This will be used to put the data in the correct index.

**Kind**: global function  
<a name="expandParentIds"></a>

## expandParentIds()
Expands all of the parent IDs onto a top-level property
for quick lookup. The order is intentional and reflects the
parent/child relationship: root -> parent -> child. This allows
us to look up deeply nested children using any of its ancestor IDs.

**Kind**: global function  
<a name="cacheHelpfulData"></a>

## cacheHelpfulData()
Caches data from the request so that it is stripped from the
request data but still available in an "after" hook

**Kind**: global function  
