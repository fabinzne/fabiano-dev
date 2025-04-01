import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("BlogPost", () => {
  it("contains required elements", () => {
    const postContent = fs.readFileSync(
      path.resolve(__dirname, "./[slug].astro"),
      "utf-8"
    );

    expect(postContent).toContain("getStaticPaths");
    expect(postContent).toContain("getCollection");
    expect(postContent).toContain("const { post } = Astro.props");
    expect(postContent).toContain("const { Content } = await post.render()");
    expect(postContent).toContain('article class="markdown-content"');
  });
});
