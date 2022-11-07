import { Text, TextProps } from '../Themed'

export function RegularText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: 'SF-Pro-Rounded-Regular' }]}
    />
  )
}
export function MediumText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        { fontFamily: 'SF-Pro-Rounded-Medium', fontWeight: '500' }
      ]}
    />
  )
}
export function SemiboldText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: 'SF-Pro-Rounded-Semibold' }]}
    />
  )
}
export function BoldText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: 'SF-Pro-Rounded-Bold' }]}
    />
  )
}
export function HeavyText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: 'SF-Pro-Rounded-Heavy' }]}
    />
  )
}
