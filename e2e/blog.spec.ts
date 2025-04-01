import { test, expect } from "@playwright/test";

test.describe("Blog", () => {
  test("should display blog posts on the index page", async ({ page }) => {
    await page.goto("/blog");

    // Check if blog posts are displayed
    await expect(
      page.getByRole("heading", {
        name: "Why Astro is Awesome for Personal Websites",
      })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Getting Started with Astro" })
    ).toBeVisible();
  });

  test("should navigate to individual blog posts", async ({ page }) => {
    await page.goto("/blog");

    // Click on the first blog post
    await page
      .getByRole("link", { name: "Why Astro is Awesome for Personal Websites" })
      .click();

    // Check if we're on the correct page
    await expect(page).toHaveURL(/\/blog\/astro-is-awesome/);
    await expect(
      page.getByRole("heading", {
        name: "Why Astro is Awesome for Personal Websites",
      })
    ).toBeVisible();
  });

  test("should display post navigation", async ({ page }) => {
    await page.goto("/blog/astro-is-awesome");

    // Check if navigation links are present
    await expect(
      page.getByRole("link", { name: /Previous Post/ })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: /Next Post/ })).toBeVisible();
  });

  test("should display post metadata", async ({ page }) => {
    await page.goto("/blog/astro-is-awesome");

    // Check if post metadata is displayed
    await expect(page.getByText("January 15, 2024")).toBeVisible();
    await expect(page.getByText("by Fabiano")).toBeVisible();
  });
});
