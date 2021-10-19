type media = {
  linkedin: string,
  github: string,
  discord: string,
  twitter: string,
  skillset: string,
}

type profile = {
  name: string,
  avatar: string,
  email: string,
  birth: string,
  location: string,
  role: string,
  media: media,
}

type raw = {profile: profile}

let raw = {
  profile: {
    avatar: "https://avatars.githubusercontent.com/u/50997688?v=4",
    name: "Fabiano Luiz",
    email: "hello@fabianoluiz.dev",
    birth: "1999-09-20",
    role: "Software Engineer",
    location: "Belo Horizonte - MG",
    media: {
      linkedin: "https://www.linkedin.com/in/fabiano-luiz-531318182/",
      github: "https://github.com/fabinzne",
      twitter: "https://twitter.com/fabinzne",
      discord: "https://discordapp.com/users/325447369942368256",
      skillset: "https://notch-lamp-2b4.notion.site/SkillSet-9636364c1b824dd8a81713d1aba08448",
    },
  },
}
