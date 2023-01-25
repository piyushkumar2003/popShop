import React from 'react'
import styled from 'styled-components'

const FormatPrice = ({price}) => {
  return ( Intl.NumberFormat("en-IN",
  {style:"currency",
  currency:"INR",
  maximumFractionDigits:2,
}).format(price/100))
}

export default FormatPrice