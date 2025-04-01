interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  homepage: string | null;
  fork: boolean;
  visibility: string;
}

export interface Project {
  title: string;
  description: string;
  github: string;
  demo?: string;
  stars: number;
  forks: number;
  language: string;
  topics: string[];
}

export async function fetchGitHubProjects(): Promise<Project[]> {
  try {
    const token = import.meta.env.GITHUB_TOKEN;

    if (!token) {
      throw new Error(
        "GitHub token is missing. Please check your environment variables."
      );
    }

    const response = await fetch(
      "https://api.github.com/users/fabinzne/repos",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "fabinzne",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`
      );
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter public repositories that are not forks
    const publicRepos = repos.filter(
      (repo) => !repo.fork && repo.visibility === "public"
    );

    const projects: Project[] = await Promise.all(
      publicRepos.map(async (repo) => {
        try {
          const readmeResponse = await fetch(
            `https://api.github.com/repos/fabinzne/${repo.name}/readme`,
            {
              headers: {
                Accept: "application/vnd.github.v3.raw",
                "User-Agent": "fabinzne",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          let description = "No description available";
          if (readmeResponse.ok) {
            const readmeContent = await readmeResponse.text();
            // Extract first paragraph as description
            const firstParagraph = readmeContent.split("\n\n")[0];
            description = firstParagraph.replace(/[#*`]/g, "").trim();
          }

          return {
            title: repo.name,
            description,
            github: repo.html_url,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language,
            demo: repo.homepage || undefined,
            topics: repo.topics || [],
          };
        } catch (error) {
          return {
            title: repo.name,
            description: "Error loading description",
            github: repo.html_url,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language,
            demo: repo.homepage || undefined,
            topics: repo.topics || [],
          };
        }
      })
    );

    return projects;
  } catch (error) {
    throw error;
  }
}
