# Contributing

When contributing to this repository, please first discuss the change you wish to make via radar,
email, or any other method with the owners of this repository before making a change.

## Development Process
- Refer to the README.md to get your development environment setup.
- Use a feature branch workflow
    - The branch name convention is `radarID-feature-name`. Example: `36138805-project-new`.
    - Branch off the `develop` branch, not `master`.
- Commit message conventions:
    - Use the present tense ("Add feature" not "Added feature")
    - Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
    - Limit the first line to 72 characters or less
    - Reference radars and pull requests

## Pull Request Process
1. Create PR from your branch to the develop branch.
    - Ensure you have a reference to all the Radars as well as a short description of the features that are implemented.
2. You may merge the Pull Request into the `develop` branch once you have the sign-off of two other developers.

### A Note on PR Approval
  - Ensure your PR gets approved ASAP by going through the code review process below on your own before submitting a PR.
  - PRs will be rejected if submitted without a story (UI only), JSDocs and relevant tests for each component, page, model, and service.

## Code Review Process
This process is required before approving any major PRs into the development branch.
1. Pull down code
2. Check storybook: `npm run storybook`
    - Report any errors in PR review.
    - Make the following exist and show up properly:
      - Component and Page story
      - Component VM docs
      - Model docs
      - Backend Service docs
3. Check app: `npm run develop`
    - Report any errors in PR review.
    - Make sure all relevant pieces work in-app.
4. Check Tests and eslint: `npm run test`
    - Report any errors in PR review.
    - Ensure tests are relevant.
5. Check design (if relevant)
    - Check against mockup and report any major discrepencies in the PR.
6. Ensure code style and architectual decisions follow best practices.


