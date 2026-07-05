import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const rootIndex = readFileSync("index.html", "utf8");
const publicIndex = readFileSync("public/index.html", "utf8");

function getAssetVersions(html, label) {
  const css = html.match(/styles\.css\?v=([^"]+)/)?.[1];
  const js = html.match(/script\.js\?v=([^"]+)/)?.[1];
  if (!css || !js) {
    throw new Error(`${label}: styles.css/script.js must include ?v=... cache busters.`);
  }
  if (css !== js) {
    throw new Error(`${label}: CSS and JS asset versions differ (${css} vs ${js}).`);
  }
  return css;
}

function git(args, options = {}) {
  return execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], ...options });
}

function hasDiff(paths) {
  try {
    git(["diff", "--quiet", "HEAD", "--", ...paths], { stdio: "ignore" });
    return false;
  } catch {
    return true;
  }
}

const rootVersion = getAssetVersions(rootIndex, "index.html");
const publicVersion = getAssetVersions(publicIndex, "public/index.html");

if (rootVersion !== publicVersion) {
  throw new Error(`Root/public asset versions differ (${rootVersion} vs ${publicVersion}).`);
}

if (rootIndex !== publicIndex) {
  throw new Error("index.html and public/index.html are not in sync.");
}

const assetChanged = hasDiff(["styles.css", "script.js", "public/styles.css", "public/script.js"]);
if (assetChanged) {
  let previousIndex = "";
  try {
    previousIndex = git(["show", "HEAD:index.html"]);
  } catch {
    previousIndex = "";
  }
  const previousVersion = previousIndex ? getAssetVersions(previousIndex, "HEAD:index.html") : "";
  if (previousVersion && previousVersion === rootVersion) {
    throw new Error(`CSS/JS changed but asset version stayed at ${rootVersion}. Bump ?v=... before publishing.`);
  }
}

console.log(`Release check OK. asset version: ${rootVersion}`);
