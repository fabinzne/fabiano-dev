module Styles = {
  open CssJs

  let title = style(. [
    fontSize(rem(3.0)),
    fontWeight(bold),
    lineHeight(#abs(1.25)),
    letterSpacing(px(1)),
    margin(px(0)),
    position(relative),
    zIndex(1),
  ])
}

@react.component
let make = (~children, ~id) => {
  <header> <h1 className={Styles.title} id> children </h1> </header>
}
