import { View, TouchableOpacity, type ViewStyle, type StyleProp } from "react-native"
import type React from "react"
import { globalStyles } from "../styles/globalStyles"

interface Props {
  children: React.ReactNode
  justify?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly"
  onPress?: () => void
  styles?: StyleProp<ViewStyle>
}

const RowComponent = (props: Props) => {
  const { children, justify, onPress, styles } = props
  const localStyle = [
    globalStyles.row,
    {
      justifyContent: justify ?? "center",
    },
    styles,
  ]

  return onPress ? (
    <TouchableOpacity style={localStyle} onPress={onPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={localStyle}>{children}</View>
  )
}

export default RowComponent
