import type { UserConfig } from "../src/utils/types";

const defineConfig = (config: Partial<UserConfig>) => config;

export default defineConfig({
  getNextVersion: async () => {
    console.log("nextVersion", "1.0.0");
    return "1.0.0"; // TODO
  },

  getReleaseBranch: () => "main",

  getPullRequestBranch: ({ version }) => `next-release/${version}`,

  beforePrepare: async ({ exec, nextVersion }) => {
    await exec(
      "wget https://dl.gitea.io/changelog-tool/main/changelog-main-linux-amd64 -q -O changelog"
    );

    await exec("chmod +x changelog");

    await exec(`./changelog generate -m=${nextVersion} > CHANGELOG.md`);

    await exec(`./changelog contributors -m=${nextVersion} >> CHANGELOG.md`);

    await exec(`rm changelog`);

    console.log("lets go");
  },
  afterPrepare: async () => true,
  beforeRelease: async () => true,
  afterRelease: async () => true,
});
