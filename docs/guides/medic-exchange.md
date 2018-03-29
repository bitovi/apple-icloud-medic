# Medic Exchange

## Creating a Medic Exchange Pack

* https://github.pie.apple.com/medic-exchange
* Create a new Repository
  * Name the repo with underscore casing (ex: `my_awesome_pack`)
    * Do not use dashes in repo names (i.e. **NOT** `my-awesome-pack`)
  * Add a meaningful description for the pack
  * Create Repository
* Locally, create a new git repository for `my_awesome_pack`
  * `mkdir my_awesome_pack`
  * `cd my_awesome_pack`
  * `git init`
* Add the git url as the git repo's origin
  * `git remote add origin git@github.pie.apple.com:medic-exchange/my_awesome_pack.git`
* Add a `pack.yaml` file
  * **Ensure the name of the pack matches the github repo name** (again, **no dashes**)

```yml
---
ref: my_awesome_pack
name: my_awesome_pack
description: my_awesome_pack description
keywords:
    - medic
    - icloud
    - medic-exchange
    - my_awesome_pack
version: 0.1.0
author: medic-dev
email: medic-dev@group.apple.com
```

- Add empty `requirements.txt` file
  - [More info](https://docs.stackstorm.com/packs.html#under-the-hood-pack-basics)
- Add actions, aliases, rules, etc. as necessary
  - [More info](https://docs.stackstorm.com/reference/packs.html)
- Push initial commit
  - `git add .`
  - `git commit -m "initial commit"`
  - `git push -u origin master`
- Any further changes should be made in a separate branch
  - i.e. **NOT** master
  - `git checkout -b my-awesome-branch`
  - dashes are okay in branch names


### Branches

* All repos should be configured with a `dev` branch as the default
    * The `dev` branch is the default branch to be installed onto Medic's UAT environment.
    * The `master` branch is the default branch to be installed onto Medic's Production environment
* `master` should be protected and should require the following
    * Select `Protect this branch`
    * Select `Require pull request reviews before merging` under `Protect this branch`
    * Select `Include administrators`
    * Save

> **Note** Packs' `dev` branches should never be installed onto Medic's Production environment.

#### Merging to Master

When a pack has been thoroughly tested in UAT environment and is ready for Production deployment, create a PR from `dev` to `master` and assign it to a Medic Admin for review.

**Important** Ensure you update the pack's `pack.yaml` version appropriately in the PR.

> **Note** If you're not sure who a Medic Admin is, ask in the `medic` room in HipChat.

#### Production Installation

Once your PR is approved, merge the PR, and request Production Installation from a Medic Admin.

> **Note** This will be an automated process in the future.

#### Tagging

**After** the pack's PR has been merged into master, create a tag for the version that was just merged into master.

For example, if the `pack.yaml` in `master` now shows:
```
version: 0.1.5
```

Then do:
```
git tag 0.1.5 && git push --tags
```

> **Note:**  There will be an automated process for new tags to install the `master` branch onto Production Medic - hence, the desired changes **must** be in master **prior** to tagging.


### Hooks & Services

All medic-exchange repos should be configured with the following webhook:

* **Payload URL:** 
```
https://medic-admin.apple.com/api/v1/webhooks/medic_github?st2-api-key=YjRhMGVmZWEzYTQzZThhMGFiNTQ3YzAyM2ExZTRiY2VhOTE5YWRlMDZjMWYzOWU4MTdhNzIzNmFmMjhiMDNlMA
```
* **Content type:** `application/json`
* **Let me select individual events** Select at least the followng
    * Commit comment
    * Issues
    * Pull request review
    * Push
    * Create
    * Issue comment
    * Pull request
    * Release
* `Add webhook`

### Collaborators & teams

* Add `medic-dev` as a team, and give the team [at least] write access
* Add `micloud` as a collaborator, and give the user write access.


## Install a pack from medic-exchange (Medic Admin Only)

- Log onto the Admin Interface
    - [UAT](https://medic-admin-uat.apple.com)
    - [Prod](https://medic-admin.apple.com)
- Go to Actions
    - [UAT](https://medic-admin-uat.apple.com/#/actions)
    - [Prod](https://medic-admin.apple.com/#/actions)
- Open `MEDIC_GITHUB` and click on `medic_exchange_pack_install`
- Input the pack name into the `pack` parameter (i.e. `my_awesome_pack`)
- Click **Run**
- Follow the progress in the History page
    - [UAT](https://medic-admin-uat.apple.com/#/history)
    - [Prod](https://medic-admin.apple.com/#/history)
- When the execution completes, refresh the Actions page, and your pack should be available.
    - [UAT](https://medic-admin-uat.apple.com/#/actions) 
    - [Prod](https://medic-admin.apple.com/#/actions) 


## Making changes to medic-exchange packs

### Local

- Check out a new branch
  - i.e. **NOT** `master` or `dev`
  - `git checkout -b my-awesome-branch`
  - dashes are okay in branch names
  - Make changes as necessary
  - When ready, push new branch, and create a PR for review
  - Once the PR is reviewed and merged, follow the steps in `Install a pack from medic-exchange` above to include update Medic with the changes.

> For more information on pack development, see the [Medic Docker Guide](https://github.pie.apple.com/icloud-automation-sre/medic/blob/master/docs/guides/docker.md)

## Help

If there are any issues, contact Medic support in one of the following ways:

- Create a radar under `iCloud-SRE | Medic`
- Request assistance in the `medic` room in HipChat
