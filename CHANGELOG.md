# Changelog

## [1.0.0](https://github.com/anbraten/test-ready-release-go/releases/tag/1.0.0) - 2023-07-21

### ❤️ Thanks to all contributors! ❤️

@anbraten

### 💥 Breaking changes

- Awesome change: 2023-07-11-19-03-49 [[#55](https://github.com/anbraten/test-ready-release-go/pull/55)]

### 🐛 Bug Fixes

- Awesome change: 2023-07-11-19-05-35 [[#56](https://github.com/anbraten/test-ready-release-go/pull/56)]

### 📈 Enhancement

- Create README.md [[#3](https://github.com/anbraten/test-ready-release-go/pull/3)]
- Create README.md [[#3](https://github.com/anbraten/test-ready-release-go/pull/3)]

### Misc

- :cat: [[#2](https://github.com/anbraten/test-ready-release-go/pull/2)]
- :cat: [[#2](https://github.com/anbraten/test-ready-release-go/pull/2)]

## [0.15.10](https://github.com/woodpecker-ci/woodpecker/releases/tag/v0.15.10) - 2023-07-09

* SECURITY
  * Fix agent auth (#1952) (#1953)
  * Return after error (#1875) (#1876)
  * Update github.com/docker/distribution (#175

## [0.15.9](https://github.com/woodpecker-ci/woodpecker/releases/tag/v0.15.9) - 2023-05-11

* SECURITY
  * Backport securitycheck and bump deps where needed (#1745)

## [0.15.8](https://github.com/woodpecker-ci/woodpecker/releases/tag/0.15.8) - 2023-04-29

* BUGFIXES
  * Use codeberg.org/6543/go-yaml2json (#1719)
  * Fix faulty hardlink in release tarball (#1669) (#1671)
  * Persist `DepStatus` of tasks (#1610) (#1625)

## [0.15.7](https://github.com/woodpecker-ci/woodpecker/releases/tag/v0.15.7) - 2023-03-14

* SECURITY
  * Update dependencies golang/x libs (#1612) (#1621)
* BUGFIXES
  * Docker backend should not close 'engine.Tail' result (#1616) (#1620)
  * Force pure Go resolver onto server (#1502) (#1503)
* ENHANCEMENTS
  * SanitizeParamKey "-" to "_" for plugin settings (#1511)
* MISC
  * Bump xgo and go to v1.19.5 (#1538) (#1547)
  * Pin official default clone image (#1526) (#1534)

## [0.15.6](https://github.com/woodpecker-ci/woodpecker/releases/tag/v0.15.6) - 2022-12-23

* SECURITY
  * Update golang.org/x/net (#1494)
  * [**BREAKING**] Disable metrics access if no token is set (#1469) (#1470)
  * Update dep moby (#1263) (#1264)
* BUGFIXES
  * Update json schema for cli lint to cover valid cases (#1384)
  * Add pipeline.step.when.branch string-array type to schema.json (#1380)
  * Display system CA error only if there is an error (#870) (#1286)
* ENHANCEMENTS
  * Bump Frontend Deps and remove unused (#1404)

## [0.15.5](https://github.com/woodpecker-ci/woodpecker/releases/tag/v0.15.5) - 2022-10-13

* BUGFIXES
  * Change build message column type to text (#1252) (#1253)
* ENHANCEMENTS
  * Bump DefaultCloneImage version to v1.6.0 (#1254)
  * On Repo update, keep old "Clone" if update would empty it (#1170) (#1195)

## [0.15.4](https://github.com/woodpecker-ci/woodpecker/releases/tag/v0.15.4) - 2022-09-06

* BUGFIXES
  * Extract commit message from branch creation (#1150) (#1153)
  * Respect WOODPECKER_GITEA_SKIP_VERIFY (#1152) (#1151)
  * update golang.org/x/crypto (#1124)
  * Implement Refresher for GitLab (#1031) (#1120)
  * Make returned proc list to be returned always in correct order (#1060) (#1065)
  * Update type of 'log_data' from blob to longblob (#1050) (#1052)
  * Make ListItem component more accessible by using a button tag when clickable (#1044) (#1046)
* MISC
  * Update base images (#1024) (#1025)

## [0.15.3](https://github.com/woodpecker-ci/woodpecker/releases/tag/v0.15.3) - 2022-06-16

* SECURITY
  * Update github.com/containerd/containerd (#978) (#980)
* BUGFIXES
  * Return to page after clicking login at navbar (#975) (#976)

## [0.15.2](https://github.com/woodpecker-ci/woodpecker/releases/tag/v0.15.2) - 2022-06-14

* BUGFIXES
  * Fix uppercase from_secrets (#842) (#925)
  * Fix key/val format for dind env vars (#889) (#890)
  * Update helm chart releasing (#882) (#888)
* DOCUMENTATION
  * Fix run_on references with runs_on in docs (#965)

## [0.15.1](https://github.com/woodpecker-ci/woodpecker/releases/tag/v0.15.1) - 2022-04-13

* SECURITY
  * Escape html / xml in log view (#879) (#880)
* FEATURES
  * Build multiarch images for server (#821) (#822)
* BUGFIXES
  * Branch list enhancements (#808) (#809)
  * Get Netrc machine from clone url (#800) (#803)

## [v0.15.0](https://github.com/woodpecker-ci/woodpecker/releases/tag/v0.15.0) - 2022-02-24

* BREAKING
  * Change paths to use woodpecker instead of drone (#494)
  * Move plugin config to root.pipeline.[step].settings (#464)
  * Replace debug with log-level flag (#440)
  * Change prometheus metrics from `drone_*` to `woodpecker_*` (#439)
  * Replace DRONE_ with CI_ variables in pipeline steps (#427)
  * Enable pull_request hook by default on repository activation (#420)
  * Remote Gitea drop basic auth support (#365)
  * Change pipeline config path resolution (#299)
  * Remove push, tag and deployment webhook filters (#281)
  * Clean up config environment variables for server and agent (#218)
* SECURITY
  * Add linter bidichk to prevent malicious utf8 chars (#516)
* FEATURES
  * Show changed files of pipeline in UI (#650)
  * Show yml config of pipeline in UI (#649)
  * Multiarch build for cli and agent docker images (#634), (#622)
  * Get secrets in settings (#604)
  * Add multi-pipeline support to exec & lint (#568)
  * Add repo branches endpoint (#481)
  * Add repo permission endpoint (#436)
  * Add web-config endpoint (#433)
  * Replace www-path with www-proxy option for development (#248)
* BUGFIXES
  * Make gRPC error "too many keepalive pings" only show up in trace logs (#787)
  * WOODPECKER_ENVIRONMENT: ignore items only containing a key and no value (#781)
  * Fix pipeline timestamps (#730)
  * Remove "panic()" as much as possible from code (#682)
  * Send decline events back to UI (#680)
  * Notice all changed files of all related commits for gitea push webhooks (#675)
  * Use global branch filter only on events containing branch info (#659)
  * API GetRepos() return empty list if no active repos exist (#658)
  * Skip nested GitLab repositories during sync (#656), (#652)
  * Build proc tree function should not depend on sorted procs list (#647)
  * Fix sqlite migration on column drop of abnormal schemas (#629)
  * Fix gRPC incompatibility in helm chart (#627)
  * Fix new pipeline not published to UI if protected repo mode enabled (#619)
  * Dont panic, report error back (#582)
  * Improve status updates (#561)
  * Let normal repo admins change timeout to lower values (#543)
  * Fix registry delete (#532)
  * Fix overflowing commit messages (#528)
  * Fix passing of netrc credentials to clone step (#492)
  * Fix various typos (#416)
  * Append trailing slash to default GH API URL (#411)
  * Fix filter pipeline config files (#279)
* ENHANCEMENTS
  * Return better error if repo was deleted/renamed (#780)
  * Add support to set default clone image via environment variable (#769)
  * Add flag to always authenticate when cloning public repositories from locked down / private only forges (#760)
  * UI: show date time on hover over time items (#756)
  * Add repo-link to badge markdown in UI (#753)
  * Allow specifying dind container in values (#750)
  * Add page to view all projects of a user / group (#741)
  * Let non required migration tasks fail and continue (#729)
  * Improve pipeline compiler (#699)
  * Support ChangedFiles for GitHub & Gitlab PRs and pushes and Gitea pushes (#697)
  * Remove unused flags / options (#693)
  * Automatically determine platform of agent (#690)
  * Build ref link point to commit not compare if only one commit was pushed (#673)
  * Hide multi line secrets from log (#671)
  * Do not exclude repo owner from gated rule (#641)
  * Add field for image list in Secrets Repo Settings (Web UI) (#638)
  * Use Woodpecker theme colors on Safari Tab Bar / Header Bar (#632)
  * Add "woodpeckerci/plugin-docker-buildx" to privileged plugins (#623)
  * Use gitlab generic webhooks instead of drone-ci-service (#620)
  * Calculate build number on creation (#615)
  * Hide gin routes logging on non-debug starts (#603)
  * Let remove be a remove (#593)
  * Add flag to set oauth redirect host in dev mode (#586)
  * Add log-level option to cli (#584)
  * Improve favicons (#576)
  * Show icon and index of a pull request in pipelines triggered by pull requests (#575)
  * Improve secrets tab (#574)
  * Use monospace font for build logs (#527)
  * Show environ in every BuildProc (#526)
  * Drop error only on purpose or else report back or log (#514)
  * Migrate database backend to Xorm (#474)
  * Add backend selection for agent (#463)
  * Switch default git plugin (#449)
  * Add log level API (#444)
  * Move entirely to zerolog (#426)
  * Pass context.Context down (#371)
  * Extend Logging & Report to WebHook Caller back if pulls are disabled (#369)
  * If config is no file assume its a folder (#354)
  * Rename cmd agent and server folders and binaries (#330)
  * Release Helm charts (#302)
  * Add flag for specific grpc server addr (#295)
  * Add option to charts, to pass in topology pod constraints (#262)
  * Use server-host as source for public links and warn if it is set to localhost (#251)
  * Rewrite of UI (#245)
* REFACTOR
  * Remove github.com/kr/pretty in favor of assert.EqualValues() (#564)
  * Simplify web router code (#541)
  * Server obtain remote from glob config not from context (#540)
  * Serve index.html directly without template (#539)
  * Add linter revive, unused, ineffassign, varcheck, structcheck, staticcheck, whitespace, misspell (#550), (#551), (#554), (#538), (#537), (#535), (#531), (#530)
  * Rename struct field and add new types into server/model's (#523)
  * Update database in one transaction on syncing user repositories (#513)
  * Format code with 'simplify' flag and check via CI (#509)
  * Use Goblin Assert as intended (#501)
  * Embedding libcompose types for yaml parsing (#495)
  * Use std method to get SystemCertPool (#488)
  * Upgrade urfave/cli to v2 (#483)
  * Remove some wrapper and make code more readable (#478)
  * More logging and refactor (#457)
  * Simplify routes (#437)
  * Move api-routes to separate file (#434)
  * Rename drone-go to woodpecker-go (#390)
  * Remove ghodss/yaml (#384)
  * Move model/ to server/model/ (#366)
  * Use moby definitions for docker pipeline backend (#364)
  * Rewrite Gitlab Remote (#358)
  * Update Generated Proto Code (#351)
  * Remove legacy/unused code + misc cleanups (#331)
  * CLI use version from version/version.go (#329)
  * Move cli/drone/ to cli/ (#329)
  * Cleanup Code (#348)
  * Move cncd/pipeline/pipeline/ to pipeline/ (#347)
  * Move cncd/{logging,pubsub,queue}/ to server/{logging,pubsub,queue}/ (#346)
  * Move remote/ to server/remote/ (#344)
  * Move plugins/ to server/plugins/ (#343)
  * Move store/ to server/store/ (#341)
  * Move router/ to server/router/ (#339)
  * Create agent/ package for backend agnostic logic (#338)
  * Reorganize into server/{api,grpc,shared} packages (#337)
* TESTING
  * Add tests framework for storage migration (#630)
  * Add more golangci-lint linters & sort them (#499) (#502)
  * Compile on pull too (#287)
* DOCUMENTATION
  * Add note about Gitlab & Gitea internal connections to docs (#711)
  * Add registries docs (#679)
  * Add documentation of all agent configuration options (#667)
  * Add `repo` to `when` block (#642)
  * Add development docs (#610)
  * Clarify Docs on Docker for new users in intro (#606)
  * Update Documentation (fix diffs and add settings) (#569)
  * Add notice of supported YAML versions in docs (#556)
  * Update Agent and Pipeline syntax documentation (#506)
  * Update docs about selecting agent based on platform (#470)
  * Add plugin marketplace (for official plugins) (#451)
  * Add search to docs (#448)
  * Add image migration docs (#406)
  * Add security policy (#396)
  * Explain open registration setting (#361)
  * Add json schema and cli lint command (#342)
  * Improve docs deployment (#333)
  * Improve plugin docs (#313)
  * Add Support section to README (#310)
  * Community Guide (#296)
  * Migrate docs framework to Docusaurus (#282)
  * Use woodpecker env variable instead of drone in docker-compose (#264)
* MISC
  * Add support for building in docker (#759)
  * Compile for more platforms on release (#703)
  * Build agent for multiple platforms (arm, arm64, amd64, linux, windows, darwin) (#408)
  * Release deb, rpm bundles (#405)
  * Release cli images (#404)
  * Publish alpine container (#398)
  * Migrate go-docker to docker/docker (#363)
  * Use go's vendoring (#284)

## [v0.14.4](https://github.com/woodpecker-ci/woodpecker/releases/tag/v0.14.4) - 2022-01-31

* BUGFIXES
  * Docker Images use golang image for ca-certificates (#608)

## [v0.14.3](https://github.com/woodpecker-ci/woodpecker/releases/tag/v0.14.3) - 2021-10-30

* BUGFIXES
  * Add flag for not fetching permissions (FlatPermissions) (#491)
  * Gitea use default branch (#480) (#482)
  * Fix repo access (#476) (#477)
* ENHANCEMENTS
  * Use go embed for web files and remove httptreemux (#382) (#489)

## [v0.14.2](https://github.com/woodpecker-ci/woodpecker/releases/tag/v0.14.2) - 2021-10-19

* BUGFIXES
  * Fix sanitizePath (#326) (aa4fa9aab3)
  * Fix json tag for `Pos` at struct `Line` (#422) (#424)
  * Fix channel buffer used with signal.Notify (#421) (#423)
* ENHANCEMENTS
  * Support recursive glob for path conditions (#327) (#412)
* TESTING
  * Add TestPipelineName to procBuilder_test.go (#461) (#455)

## [v0.14.1](https://github.com/woodpecker-ci/woodpecker/releases/tag/v0.14.1) - 2021-09-21

* SECURITY
  * Migrate jwt token lib (#332)
* BUGFIXES
  * Increase allowed length for user token in db (#328)
  * Fix cli matrix filter (#311)
  * Fix ignore pushes to tags for gitea (#289)
  * Fix use custom config path to sanitize build names (#280)

## [v0.14.0](https://github.com/woodpecker-ci/woodpecker/releases/tag/v0.14.0) - 2021-08-01

* FEATURES
  * Add OAuth2 Support for Gitea Remote (#226)
  * Add support for path-prefix condition (#174)
* BUGFIXES
  * Allow multi pipeline file to be named .drone.yml (#250)
  * Fix release-server make target by build server with correct option (#237)
  * Fix Gitea unable to login on 0.12.0+ with error "cannot authenticate user. 403 Forbidden" (#221)
* ENHANCEMENTS
  * Update / Remove drone dependencies (#236)
  * Add support to gitea remote for path-prefix condition (#235)
  * Enable go vet for ci (#230)
  * Enforce code format (#228)
  * Add multi-pipeline to Gitea (#225)
  * Move flag definitions into extra files (#215)
  * Remove unused code in server (#213)
  * Docs URL configuration (#206)
  * Filter main branch (#205)
  * Fix multi pipeline bug when a pipeline depends on two other pipelines (#201)
  * Using configured server URL instead of obtained from request (#175)
* DOCUMENTATION
  * Switch in docs to new docker hub image repo (#227)
  * Use WOODPECKER_ env vars in docs (#211)
  * Also show WOODPECKER_HOST and WOODPECKER_SERVER_HOST environment variables in log messages (#208)
  * Move woodpecker to dedicated organisation on github (#202)
* MISC
  * Add chart for installing woodpecker server and agent (#199)

## [0.0.2](https://github.com/anbraten/test-ready-release-go/releases/tag/0.0.2) - 2023-07-11

### 📈 Enhancement

- Create README.md [[#3](https://github.com/anbraten/test-ready-release-go/pull/3)]
- Create README.md [[#3](https://github.com/anbraten/test-ready-release-go/pull/3)]

### Misc

- Awesome change: 2023-07-11-19-03-49 [[#55](https://github.com/anbraten/test-ready-release-go/pull/55)]
- :tada: init ([7f38698](https://github.com/anbraten/test-ready-release-go/commit/7f386982f65e8c6edd9134f4ab959f4450b5dc51))
- :shark: ([a8b86fd](https://github.com/anbraten/test-ready-release-go/commit/a8b86fd495f4aeb34000ff9d5a54c44b05f5dcff))
- add new line ([d3ed41b](https://github.com/anbraten/test-ready-release-go/commit/d3ed41b10582e69af4561bcd9ed80ce4bceb5cea))
- add to changelog ([684bd26](https://github.com/anbraten/test-ready-release-go/commit/684bd26c3162457b570bd5dd91dc4779b188597d))
- test ([4b5d82b](https://github.com/anbraten/test-ready-release-go/commit/4b5d82b110ab6bbf123ee8b4cb4a5777335c69f7))
- Merge branch 'main' of github.com:anbraten/test-ready-release-go ([482be42](https://github.com/anbraten/test-ready-release-go/commit/482be42537c3c05550cdb39bc73ba0fb321ec32b))
- test ([98eaa35](https://github.com/anbraten/test-ready-release-go/commit/98eaa356a0416405e5b0c3f27fff0c7ef756a938))
- update config ([b3ebbe0](https://github.com/anbraten/test-ready-release-go/commit/b3ebbe007e4810277b6900c037be3e5d3c010b2c))
- Create CHANGELOG.md ([bdd428b](https://github.com/anbraten/test-ready-release-go/commit/bdd428b746b6313acba402e04ed33c036725099f))
- update release-config.ts ([d4e4b70](https://github.com/anbraten/test-ready-release-go/commit/d4e4b70ef39830d5fb91ec8af8d8dfbed4bd24ce))
- adjust config ([34b3d2d](https://github.com/anbraten/test-ready-release-go/commit/34b3d2dc9773b7219e720facdc2f7da2b0444c89))
- Update release-config.ts ([9e2c2bc](https://github.com/anbraten/test-ready-release-go/commit/9e2c2bc9febc8231f5513a997651253e34a64b4b))
- quiet wget ([e460c59](https://github.com/anbraten/test-ready-release-go/commit/e460c5905ce9bd249f5e09e2594940a72a558ec4))
- :letter: ([0cfd2e3](https://github.com/anbraten/test-ready-release-go/commit/0cfd2e34bdb4e55acee2af209169cbe095191e57))
- reset changelog ([36bcec5](https://github.com/anbraten/test-ready-release-go/commit/36bcec58657d24c28287a5bc6691762d0ee47471))
- :tiger: ([803eb08](https://github.com/anbraten/test-ready-release-go/commit/803eb089bf6be1a5f680d0dfa9a15f308a16a8db))
- Merge nice ([435fe3a](https://github.com/anbraten/test-ready-release-go/commit/435fe3a6b4f1bc436d6379693fd935191e5679b5))
- :tada: ([022e8d1](https://github.com/anbraten/test-ready-release-go/commit/022e8d167fe9349d6bc0ec1d05474c894e3b1cff))
- Merge branch 'next-release/1.0.0' of github.com:anbraten/test-ready-release-go into next-release/1.0.0 ([63f0778](https://github.com/anbraten/test-ready-release-go/commit/63f077831beac40e229bc40775dc78e3315f2b83))
- Merge remote-tracking branch 'origin/main' into next-release/1.0.0 ([393f23c](https://github.com/anbraten/test-ready-release-go/commit/393f23c79d978dd78cf7d8dc3f290ef47d17e837))
- Merge branch 'next-release/1.0.0' of https://github.com/anbraten/test-ready-release-go into next-release/1.0.0 ([1793761](https://github.com/anbraten/test-ready-release-go/commit/179376149cfbbe941b3be6aa037bc28693dc2752))
- :chicken: ([0bbc9de](https://github.com/anbraten/test-ready-release-go/commit/0bbc9de7473194e457229a33f930f92ad5a0c9e9))
- "Release 1.0.0" ([a1c6c51](https://github.com/anbraten/test-ready-release-go/commit/a1c6c510b3ade0b86985f0e231ee99253cf54677))
- "Release 1.0.0" ([fb4a95d](https://github.com/anbraten/test-ready-release-go/commit/fb4a95d7ae1dad0a6fc8a8fe2ae3f97387ad9c89))
- "Release 1.0.0" ([e15ea73](https://github.com/anbraten/test-ready-release-go/commit/e15ea73695b3e53141de88fccb7b4dc75070daf7))
- Merge branch 'next-release/1.0.0' of https://github.com/anbraten/test-ready-release-go into next-release/1.0.0 ([6244f9c](https://github.com/anbraten/test-ready-release-go/commit/6244f9c374185a7bb2bbdab25a67fa2d07a173ad))
- :shark: ([82b20a6](https://github.com/anbraten/test-ready-release-go/commit/82b20a6b8e6dec564d410cb2e09670f390662056))
- :cat: [[#2](https://github.com/anbraten/test-ready-release-go/pull/2)]
- :cat: [[#2](https://github.com/anbraten/test-ready-release-go/pull/2)]
- "Release 1.0.0" ([9ae4cd1](https://github.com/anbraten/test-ready-release-go/commit/9ae4cd1fc24ee4af8c93bc55981675ee6acb7ae9))
- :dog: ([d74d6b6](https://github.com/anbraten/test-ready-release-go/commit/d74d6b660bb1a6993f6257809a57586a3d23d3aa))
- :snake: ([883ecdb](https://github.com/anbraten/test-ready-release-go/commit/883ecdb939cc8c5d3fe5ca559787551eb9217b98))
- :rocket: ([d061155](https://github.com/anbraten/test-ready-release-go/commit/d0611556ddd3912c8e5a1df9f18901022a16f989))
- "Release 1.0.0" ([55c6e5f](https://github.com/anbraten/test-ready-release-go/commit/55c6e5f5c54f06d3e6525739d8e81b7aad2c7e5a))
- :rocket: ([13c3715](https://github.com/anbraten/test-ready-release-go/commit/13c37157af66d2d54fb06c5abb569ac0af4e5ce7))
- :tada: ([5549e6c](https://github.com/anbraten/test-ready-release-go/commit/5549e6c014159d81130e4644a8728a44eb08316e))
- "Release 1.0.0" ([3fd5af1](https://github.com/anbraten/test-ready-release-go/commit/3fd5af1ddeb9fe21b23ce503ad0cc8d15f5bcaa3))
- "Release 1.0.0" ([0133410](https://github.com/anbraten/test-ready-release-go/commit/01334105f2beee9ee0979c281172b590c4b26a2a))