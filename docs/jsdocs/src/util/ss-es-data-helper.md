## Functions

<dl>
<dt><a href="#makeTeamNameRegex">makeTeamNameRegex()</a></dt>
<dd><p>Makes a regex to allow fuzzy matching for team names as a prefix or suffix.
This allow us to match patterns like sre_cloudkit, sre-cloudkit, sre.cloudkit
Example regexs:
  icloud         =&gt;   /(^icloud.)|([-<em>.]icloud$)/
  sre-cloudkit   =&gt;   /(^sre[-</em>.]cloudkit.)|([-<em>.]sre[-</em>.]cloudkit$)/</p>
</dd>
<dt><a href="#reduceDataWithTeamNames">reduceDataWithTeamNames()</a></dt>
<dd><p>Loads all of the teams from the specified service. For each team, loops over
all of the data items and calls a predicate function. The predicate should
be able to take the information passed to it and determine if individual
items belong to a team. Any remaining items which did not &quot;pass&quot; the predicate
will be assigned to the UNKNOWN_TEAM_NAME defined above.</p>
</dd>
</dl>

<a name="makeTeamNameRegex"></a>

## makeTeamNameRegex()
Makes a regex to allow fuzzy matching for team names as a prefix or suffix.
This allow us to match patterns like sre_cloudkit, sre-cloudkit, sre.cloudkit
Example regexs:
  icloud         =>   /(^icloud\.)|([-_.]icloud$)/
  sre-cloudkit   =>   /(^sre[-_.]cloudkit\.)|([-_.]sre[-_.]cloudkit$)/

**Kind**: global function  
<a name="reduceDataWithTeamNames"></a>

## reduceDataWithTeamNames()
Loads all of the teams from the specified service. For each team, loops over
all of the data items and calls a predicate function. The predicate should
be able to take the information passed to it and determine if individual
items belong to a team. Any remaining items which did not "pass" the predicate
will be assigned to the UNKNOWN_TEAM_NAME defined above.

**Kind**: global function  
