# Design / Development Processes

This document outlines processes for Designers, Developers, and QA Testers for the Medic UI project.

## Roles and Responsibilities

### Design
- Conduct interviews, surveys, or other techniques to gain feedback from App users for UX enhancements
- Build UI components from scratch and by extending from a components library
- Keep Live Style Guide up-to-date
- Coordinate with Dev team to add/update styles and functionality to components

### Dev
- Gather technical requirements for requested / planned components and features and document via issue tracker.
- Participate in Architecture planning for Components and Features
- Architect Data Models for Components and Features
- Implement Components from scratch, by extending a component library, or by ‘dynamicizing’ Designer-Built Components
- Coordinate with Design team to add/update styles and functionality to components
- Write useful tests and clean documentation for components and services
- Maintain app build script(s) and ensure app builds for every Pull Request
- Coordinate Application deployments

### QA
- Learn application requirements and write critical path and full test suites
- Test and close stories/issues that are ready for QA
- Open bugs with the appropriate documentation for stories that don’t pass QA testing
- Add/update relevant test cases to the test suites that can be used in the future for testing the application before a release
- Reproduce newly created bugs and add documentation as necessary
- Create a smoke test list that can be used after deployment
- Smoke test the application when necessary
- Do a full QA of the application before minor/major releases

### Everyone
- Participate in a daily standup call during US Pacific time work hours
- Keep assigned issues up to date by logging time and associated issues, adding new or changed information via comments, and setting the appropriate state and assignee as necessary.


## Dev Practices

### Scrum

#### Format

- What you did yesterday, update percent complete
- What are you doing today
- Any road blocks

#### Details

- We will adhere to a **two week sprint** cycle
- **Sprint Planning Meeting** will be held on the first day of the sprint
    - Product Owner is responsible for prioritizing User Stories / Radars
    - Team members are responsible for what is feasible within the Srpint (estimation based on similar work in the past)
    - Operations bugs impacting users are highest priority (i.e. blocking radars should be done ahead of new features)

### Radar

- iCloud-SRE | Medic
- Every task > 3 hr should be tracked via radar
- **Please provide Efforts (in days)**
    - Current total estimate - Estimate for person days to complete feature (based on 6 hours of development in a day)
    - Percent Complete - Status of task completed. **(Updated Daily)**
- Radar State
    - Analyze | Screen - Initial state for new bugs. Product Owner / Project Manager / Team Lead to change Priority, Milestone, and Next Assignee.
    - Analyze | Investigate - Set by Screener, then assigned to a person to investigate the issue
    - Analyze | Fix - Set by analyzer, then assigned to a person to fix the issue
    - Analyze | Review - After a fix is defined, sent to another person to review the fix
    - Integrate - Bug is ready for deployment
    - Verify - Bug is ready for verification in environment

## Design / Dev Handoff

This section outlines how features and updates progress from concept through implementation from the perspective of Designers and Developers.

### Use Cases

#### New Feature

1. Initial meeting with designer, stakeholder, dev, and users (when possible) to gather requirements and document them via Radar.
    - What problem are we solving?
    - Who are the users?
    - What are the use cases?
    - etc
1. Designer creates initial sketches and wireframes
1. Designer meets with stakeholder and users to review wireframes and test with users
1. Changes are made to wireframes based on stakeholder and user feedback
    - Iterate 2 & 3 until sign-off
1. Wireframes are signed off by stakeholder
    - **Confirmation must be captured via Radar**
1. Designer converts wireframes into hi-fidelity mockups
1. Designer meets with stakeholder and users to reviews mockups and test with users
1. Changes are made to mockups based on stakeholder and user feedback
    - Iterate 7 & 8 until sign-off
1. Designs are signed off by stakeholder (no more style changes after this)
    - **Confirmation must be captured via Radar**
1. Designer creates styled component(s) based on mockups
    - Typically, this is done via a new modlet in the `public/components/` folder or via a modification to or a new theme for a styled component in `public/semantic-ui`
    - New components should be automatically added to the Live Style Guide
    - Designer ensures relevant details around component(s) are added to the Live Style Guide
1. Designer creates PR for styled component(s) and hands branch off to a dev
1. Dev extends styled component(s) to add app-specific logic and functionality
2. Dev hands branch back to designer for style touchups
1. Designer makes last minute style tweaks, then notifies developers that the PR is ready for review
1. Second dev reviews code
1. First dev makes changes based on code review
    - Iterate 15 & 16 until approval
1. Second dev approves code review
1. Dev merges code
    - Either dev can merge, but ideally the primary developer of a feature will do the merge so the merge activity will be associated appropriately.


#### Update Feature

1. Stakeholder requests update to existing feature's design
    - UI/UX
    - **Not** functionality only - there is a slightly different process if design changes aren't necessary.
1. Meeting with designer, stakeholder, dev, and users (as appropriate) to gather requirements and document them via Radar.
1. Designer modifies styled component(s) based on requirements
    - Designer should ensure that any manual updates to the Live Styles Guide are made appropriately
1. Designer creates PR for review
1. **If dev is necessary**
    - Dev adds or modifies functionality
1. Dev reviews code
    - Stakeholders may review feature branch as well
1. Designer makes changes based on review feedback
    - Iterate 6 & 7 until approval
1. Dev approves code review
    - Stakeholders may approve feature as well

> **Note:** If dev changes are necessary as well, a second developer should be involved in the review process.
1. Dev merges code

