## Functions

<dl>
<dt><a href="#registerRoutes">registerRoutes(route, defaults)</a> ⇒ <code>Void</code></dt>
<dd><p>Builds and registers all client routes.</p>
<p>Client routes should be configured <em>after</em> required default data has been
loaded for the app. This could include the current user, localStorge data,
and any other root-level data required by individual routes.</p>
</dd>
<dt><a href="#makeUrlFromRoute">makeUrlFromRoute(template, context)</a> ⇒ <code>String</code></dt>
<dd><p>Replaces route template <code>{params}</code> with values from the context.</p>
</dd>
<dt><a href="#buildNavItems">buildNavItems(context)</a> ⇒ <code>Array</code></dt>
<dd><p>Build an array of navigation items based on the route config. Each
nav item consists of the following properties:</p>
<ul>
<li><code>text</code>: the display text</li>
<li><code>route</code>: the parameterized route template</li>
<li><code>url</code>: the &quot;resolved&quot; route template - a usable URL</li>
</ul>
</dd>
</dl>

<a name="registerRoutes"></a>

## registerRoutes(route, defaults) ⇒ <code>Void</code>
Builds and registers all client routes.

Client routes should be configured *after* required default data has been
loaded for the app. This could include the current user, localStorge data,
and any other root-level data required by individual routes.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| route | <code>Object</code> | A reference to can-route |
| defaults | <code>Object</code> | Dictionary of default values |

<a name="makeUrlFromRoute"></a>

## makeUrlFromRoute(template, context) ⇒ <code>String</code>
Replaces route template `{params}` with values from the context.

**Kind**: global function  
**Returns**: <code>String</code> - URL with all route params replace with values.  

| Param | Type | Description |
| --- | --- | --- |
| template | <code>String</code> | The parameterized route template (ex: /foo/{bar}) |
| context | <code>Object</code> | An object with values to fill the route template |

<a name="buildNavItems"></a>

## buildNavItems(context) ⇒ <code>Array</code>
Build an array of navigation items based on the route config. Each
nav item consists of the following properties:

- `text`: the display text
- `route`: the parameterized route template
- `url`: the "resolved" route template - a usable URL

**Kind**: global function  
**Returns**: <code>Array</code> - Nav items  

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Object</code> | Dictionary used to resolve route templates into URLs (eg. app state) |

