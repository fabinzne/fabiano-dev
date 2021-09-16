module Styles = {
  open CssJs

  let root = style(. [
    display(flexBox),
    alignItems(center),
    backgroundColor(rgb(13, 17, 23)),
    display(flexBox),
    justifyContent(center),
    minHeight(vh(100.0)),
    padding2(~v=px(0), ~h=px(16)),
  ])

  let container = style(. [
    display(flexBox),
    justifyContent(center),
    media(. "(max-width: 768px)", [flexDirection(column)]),
    width(#percent(100.0)),
  ])
}

@react.component
let make = (~profile: Data.profile) => {
  <div className={Styles.root}> <Image avatar={profile.avatar} /> </div>
}
