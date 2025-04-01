import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("Layout", () => {
  it("contains required elements", () => {
    const layoutContent = fs.readFileSync(
      path.resolve(__dirname, "./Layout.astro"),
      "utf-8"
    );

    expect(layoutContent).toContain("interface Props {");
    expect(layoutContent).toContain("title: string;");
    expect(layoutContent).toContain("currentTab?: string;");
    expect(layoutContent).toContain('class="tab-button"');
    expect(layoutContent).toContain('href="/blog"');
    expect(layoutContent).toContain('href="/projects"');
  });
});
