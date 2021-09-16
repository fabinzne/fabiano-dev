module Styles = {
  open CssJs

  let container = style(. [
    alignItems(center),
    display(flexBox),
    justifyContent(center),
    marginRight(px(12)),
    media(. "(max-width: 768px)", [marginRight(px(0))]),
  ])

  let image = style(. [
    border(px(6), solid, rgb(214, 93, 14)),
    borderRadius(#percent(25.0)),
    height(px(256)),
    width(px(256)),
  ])
}

@react.component
let make = (~avatar: string) => {
  Js.log(avatar)

  <section className={Styles.container}>
    <img alt="Avatar" src={avatar} className={Styles.image} />
  </section>
}
