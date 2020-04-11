import React from "react"
import { UncontrolledTooltip } from "reactstrap"
import {
  Phone,
  Globe,
  ChevronDown,
  Heart,
  Smartphone,
} from "@styled-icons/feather"

export const renderIcon = icon => {
  switch (icon) {
    case "online":
      icon = (
        <>
          <Globe size="1rem" id={icon} />
          <UncontrolledTooltip target={icon}>Order Online</UncontrolledTooltip>
        </>
      )
      break
    case "chevron-down":
      icon = (
        <>
          <ChevronDown size="1rem" id={icon} />
        </>
      )
      break
    case "heart":
      icon = (
        <>
          <Heart size="1rem" id={icon} />
          <UncontrolledTooltip target={icon}>
            Employee Relief Fund
          </UncontrolledTooltip>
        </>
      )
      break
    case "phone":
      icon = (
        <>
          <Phone size="1rem" id={icon} />
          <UncontrolledTooltip target={icon}>
            Order by Phone
          </UncontrolledTooltip>
        </>
      )
      break

    case "app":
      icon = (
        <>
          <Smartphone size="1rem" id={icon} />
          <UncontrolledTooltip target={icon}>Order by App</UncontrolledTooltip>
        </>
      )
      break
    default:
      icon = null
  }

  return icon
}
