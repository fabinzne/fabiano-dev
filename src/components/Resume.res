let rs = React.string

module Styles = {
  open CssJs

  let section = style(. [
    color(rgb(7, 102, 120)),
    display(flexBox),
    flexDirection(column),
    marginLeft(px(12)),
  ])

  let details = style(. [fontSize(rem(0.8)), marginTop(px(8))])

  let paragraph = style(. [margin2(~v=px(8), ~h=px(0))])

  let link = style(. [color(white), marginRight(px(24))])

  let icon = style(. [marginTop(px(32))])
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

@react.component
let make = (~profile: Data.profile) => {
  let age =
    ReasonDateFns.DateFns.differenceInYears(
      profile.birth |> Js.Date.fromString,
      Js.Date.make(),
    ) |> Js.Float.toString

  <section className={Styles.section}>
    <Title bg={CssJs.rgb(214, 93, 14)} id={profile.name}> {profile.name |> rs} </Title>
    <Caption> {profile.role |> rs} </Caption>
    <div className={Styles.details}> <Item prefix={String("Age: ")} sufix={String(age)} /> </div>
  </section>
}
