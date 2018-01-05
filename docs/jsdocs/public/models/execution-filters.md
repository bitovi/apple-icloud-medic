<a name="SINGLETON"></a>

## SINGLETON
This model is different from others in that it isn't really a "RESTful"
object, but rather just a map of values. There is no creating,
updating, or deleting anything, and data does not even have an ID.
This is simply a dictionary loaded from an external source. As such
we keep a singleton reference and return it whenever data is fetched.

**Kind**: global constant  
