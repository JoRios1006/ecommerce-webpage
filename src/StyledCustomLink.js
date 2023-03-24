import React from "react"
import CustomLink from "./CustomLink"

const StyledCustomLink =
  (style) => (props) => {
      return (
          <div className={style}>
              <CustomLink {...props}>
                  {props.children}
              </CustomLink>
          </div>
      )
  }
export default StyledCustomLink
