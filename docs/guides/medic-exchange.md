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
* `master` should be protected and should require the following
    * Select `Protect this branch`
    * Select `Require pull request reviews before merging` under `Protect this branch`
    * Select `Include administrators`
    * Save

### Hooks & Services

All medic-exchange repos should be configured with the following webhook:

* **Payload URL:** https://sre-tools.apple.com/api/v1/webhooks/medic_github?st2-api-key=NTZiNDUwMmMyNjM5ODkyYzU5ZjVmMzVkMjUzNGI5NGIxNTYzZTNhODNlZWFkNjJlODhiNjhmYmVhZmI3NzFkMA
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

> **Note** `micloud` is part of the `medic-dev` team, but for some reason that is not enough to allow the `micloud` user to create pull requests.  More investigation is needed.



## Install a pack from medic-exchange

- Log onto the [admin interface](https://medic.apple.com)
- Go to [Actions](https://medic.apple.com/#/actions)
- Open `MEDIC_GITHUB` and click on `medic_exchange_pack_install`
- Input the pack name into the `pack` parameter (i.e. `my_awesome_pack`)
- Click **Run**
- Follow the progress in the [hisory page](https://medic.apple.com/#/history)
- When the execution completes, refresh the [Actions](https://medic.apple.com/#/actions) page, and your pack should be available.


## Making changes to medic-exchange packs

### Local

- Check out a new branch
  - i.e. **NOT** master
  - `git checkout -b my-awesome-branch`
  - dashes are okay in branch names
  - Make changes as necessary
  - When ready, push new branch, and create a PR for review
  - Once the PR is reviewed and merged, follow the steps in `Install a pack from medic-exchange` above to include update Medic with the changes.

### Via the Workflow designer (admin only)

> **Note** This method is experimental and is subject to change.  For [Docker Development](https://github.pie.apple.com/icloud-automation-sre/medic/blob/master/docs/guides/docker.md), use the `Local` strategy described above.

- For UI created mistral workflows, click on the workflow/action from the [Actions](https://medic.apple.com/#/actions) page
- Click **Edit**
- Make necessary changes
- When the changes are ready to be saved in GitHub (be sure the changes are 'saved' in the database by clicking the down arrow from the top menu above the work surface)
- Go to the [Actions](https://medic.apple.com/#/actions) page
- Open `MEDIC_GITHUB` and click on `medic_exchange_pack_create_pr`
- Input the pack name in the `pack` input field (i.e. `my_awesome_pack`)
- Optionally include `branch_name`, `commit_message`, `pr_title`, and `pr_body` parameters
- Click **Run**
- This will create a PR in the packs repository in medic-exchange for review.
- Once the PR is reviewed and merged, follow the steps in `Install a pack from medic-exchange` above to include update the pack's file system with the changes.

## Help

If there are any issues, contact Medic support in one of the following ways:

- Create a radar under `iCloud-SRE | Medic`
- Request assistance in the `medic` room in HipChat
