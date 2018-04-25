/***********************************************
 * STACKSTORM TO ELASTICSEARCH HELPER FUNCTIONS *
 ***********************************************/

const REG_DELIMITER = /[-_./]/g;
// Any data where the team cannot be determined will be
// assigned to this team. Administrators can assign the data
// to specific teams later.
const UNKNOWN_TEAM_NAME = 'medic';

/**
 * Makes a regex to allow fuzzy matching for team names as a prefix or suffix.
 * This allow us to match patterns like sre_cloudkit, sre-cloudkit, sre.cloudkit
 * Example regexs:
 *   icloud         =>   /(^icloud\.)|([-_.]icloud$)/
 *   sre-cloudkit   =>   /(^sre[-_.]cloudkit\.)|([-_.]sre[-_.]cloudkit$)/
 */
const makeTeamNameRegex = (teamName) => {
  const regTeamName = teamName.replace(REG_DELIMITER, REG_DELIMITER.source);
  const prefix = '^' + regTeamName + '\.'; // eslint-disable-line no-useless-escape
  const suffix = REG_DELIMITER.source + regTeamName + '$';
  const equal = '^' + regTeamName + '$';
  return new RegExp('(?:' + prefix + ')|(?:' + suffix + ')|(?:' + equal + ')');
};

/**
 * Loads all of the teams from the specified service. For each team, loops over
 * all of the data items and calls a predicate function. The predicate should
 * be able to take the information passed to it and determine if individual
 * items belong to a team. Any remaining items which did not "pass" the predicate
 * will be assigned to the UNKNOWN_TEAM_NAME defined above.
 */
const reduceDataWithTeamNames = (teamsService, data, predicate) => {
  data = [].concat(data); // make our own copy we can mutate
  return teamsService.find({ paginate: false }).then(teams =>
    // Create a list of teamNames sorted in reverse order.
    // This is crucial so that we match "icloud-foo" items before we match "icloud"
    teams.map(team => team.codeName).sort().reverse()
  ).then(teamNames =>
    teamNames.reduce((results, teamName) => {
      let count = data.length;
      if (count) {
        const REG_TEAMNAME = makeTeamNameRegex(teamName);
        while(count--) {
          if( predicate(data[count], REG_TEAMNAME) ) {
            // remove from data and place in results with teamName added
            const item = data.splice(count, 1)[0];
            results.push(Object.assign(item, { teamName }));
          }
        }
      }
      return results;
    }, []).concat(data.map(item =>
      // Assign remaining data items to special "unknown" team
      Object.assign(item, { teamName: UNKNOWN_TEAM_NAME })
    ))
  );
};

module.exports = {
  reduceDataWithTeamNames
};
