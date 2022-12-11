import type { UserConfig } from "../src/utils/types";

const defineConfig = (config: Partial<UserConfig>) => config;

export default defineConfig({
  async getNextVersion() {
    return "1.0.0"; // TODO
  },

  getReleaseBranch() {
    return "main";
  },

  getPullRequestBranch({ version }) {
    return `next-release/${version}`;
  },

  async getReleaseDescription({ exec }) {
    return exec("cat /app/CHANGELOG.md").stdout;
  },

  async beforePrepare({ exec, nextVersion }) {
    await exec(
      "wget https://dl.gitea.io/changelog-tool/main/changelog-main-linux-amd64 -q -O /app/changelog"
    );

    await exec("chmod +x /app/changelog");

    await exec("git checkout origin/main CHANGELOG.md");

    await exec(
      `/app/changelog generate -m=${nextVersion} >> /app/CHANGELOG.md`
    );

    await exec('echo "" >> CHANGELOG.md'); // Add a new line
    await exec(`cat /app/CHANGELOG.md >> CHANGELOG.md`);

    await exec("git status");
  },
});
