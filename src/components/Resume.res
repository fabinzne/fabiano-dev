let rs = React.string

module Styles = {
  open CssJs

  let section = style(. [
    color(rgb(60, 56, 54)),
    display(flexBox),
    flexDirection(column),
    marginLeft(px(12)),
  ])

  let details = style(. [fontSize(rem(0.8)), marginTop(px(8))])

  let paragraph = style(. [margin2(~v=px(8), ~h=px(0))])

  let link = style(. [color(rgb(7, 102, 120)), marginRight(px(24))])

  let icon = style(. [marginTop(px(16))])
}

type itemType =
  | Component(React.element)
  | String(string)
  | None

module Item = {
  @react.component
  let make = (~prefix, ~sufix) => {
    <p className={Styles.paragraph}>
      {switch prefix {
      | Component(prefix) => prefix
      | String(prefix) => prefix |> rs
      | None => React.null
      }}
      {switch sufix {
      | Component(sufix) => sufix
      | String(sufix) => <span> {sufix |> rs} </span>
      | None => React.null
      }}
    </p>
  }
}

module Email = {
  @react.component
  let make = (~href) => {
    <a className={Styles.link} href={"mailto:" ++ href ++ "?Subject=Whats%20up!"} target="_top">
      {href |> rs}
    </a>
  }
}

module Link = {
  @react.component
  let make = (~href, ~children) => {
    <a className={Styles.link} href rel="noopener noreferrer" target="_blank"> children </a>
  }
}

@react.component
let make = (~profile: Data.profile) => {
  let age =
    ReasonDateFns.DateFns.differenceInYears(
      profile.birth |> Js.Date.fromString,
      Js.Date.make(),
    ) |> Js.Float.toString

  <section className={Styles.section}>
    <Title id={profile.name}> {profile.name |> rs} </Title>
    <Caption> {profile.role |> rs} </Caption>
    <div className={Styles.details}>
      <Item prefix={String("Age: ")} sufix={String(age)} />
      <Item prefix={String("Email: ")} sufix={Component(<Email href={profile.email} />)} />
      <Item prefix={String("Location: ")} sufix={String(profile.location)} />
      <Item
        prefix={None}
        sufix={Component(<Link href={profile.media.skillset}> {"SkillSet" |> rs} </Link>)}
      />
    </div>
    <div className={Styles.icon}>
      <Link href={profile.media.discord}> <Discord /> </Link>
      <Link href={profile.media.linkedin}> <Linkedin /> </Link>
      <Link href={profile.media.github}> <GitHub /> </Link>
      <Link href={profile.media.twitter}> <Twitter /> </Link>
    </div>
  </section>
}
