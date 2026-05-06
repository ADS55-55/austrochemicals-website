import fs from "fs";
import path from "path";

const VIDEO_EXT = /\.(mp4|webm|mov|m4v)$/i;

/** First match: preferred names, then any video file in `public/video`. */
export function getHeroVideoPublicPath(): string | null {
  try {
    const dir = path.join(process.cwd(), "public", "video");
    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) return null;

    const preferred = [
      "hero.mp4",
      "hero.webm",
      "main.mp4",
      "video.mp4",
      "austro.mp4",
    ];
    for (const name of preferred) {
      const p = path.join(dir, name);
      if (fs.existsSync(p) && fs.statSync(p).isFile()) return `/video/${name}`;
    }

    const files = fs.readdirSync(dir);
    const found = files.find((f) => VIDEO_EXT.test(f));
    return found ? `/video/${found}` : null;
  } catch {
    return null;
  }
}
