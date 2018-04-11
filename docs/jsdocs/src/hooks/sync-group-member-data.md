## Members

<dl>
<dt><a href="#idProp">idProp</a></dt>
<dd><p>The property which references DS user IDs</p>
</dd>
<dt><a href="#createNewAssociations">createNewAssociations</a></dt>
<dd><p>Whether or not new member data should be created</p>
</dd>
<dt><a href="#deleteOrphanedAssociations">deleteOrphanedAssociations</a></dt>
<dd><p>Whether or not orphaned member data should be deleted</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#syncGroupMemberData">syncGroupMemberData()</a></dt>
<dd><p>This is intended to be use as an &quot;after&quot; hook for services whose
data contains a reference to Directory Services users:</p>
<ul>
<li>team-members</li>
<li>project-contributors</li>
</ul>
<p>This module loads all members for a Directory Services group
and syncs it with medic data stores. It is expected that the
medic data store has a single column for storing a reference
to the Directory Serives User ID. Once the data is sync&#39;d, the
user object is expanded onto the <code>hook.result</code> data.</p>
<ul>
<li>Any new members are created.</li>
<li>Any orphaned members are deleted.</li>
</ul>
</dd>
</dl>

<a name="idProp"></a>

## idProp
The property which references DS user IDs

**Kind**: global variable  
<a name="createNewAssociations"></a>

## createNewAssociations
Whether or not new member data should be created

**Kind**: global variable  
<a name="deleteOrphanedAssociations"></a>

## deleteOrphanedAssociations
Whether or not orphaned member data should be deleted

**Kind**: global variable  
<a name="syncGroupMemberData"></a>

## syncGroupMemberData()
This is intended to be use as an "after" hook for services whose
data contains a reference to Directory Services users:

 - team-members
 - project-contributors

This module loads all members for a Directory Services group
and syncs it with medic data stores. It is expected that the
medic data store has a single column for storing a reference
to the Directory Serives User ID. Once the data is sync'd, the
user object is expanded onto the `hook.result` data.

 - Any new members are created.
 - Any orphaned members are deleted.

**Kind**: global function  
