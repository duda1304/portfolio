import { defineConfig } from "astro/config";
import process from "node:process";
import tailwindcss from "@tailwindcss/vite";

const githubRepository = process.env.GITHUB_REPOSITORY;
const githubOwner = process.env.GITHUB_REPOSITORY_OWNER;
const githubRepo = githubRepository?.split("/")[1];
const isGitHubPagesUserSite = githubOwner && githubRepo === `${githubOwner}.github.io`;

export default defineConfig({
  site: githubOwner ? `https://${githubOwner}.github.io` : undefined,
  base: githubRepo && !isGitHubPagesUserSite ? `/${githubRepo}` : undefined,
  vite: {
    plugins: [tailwindcss()],
  },
});
