import * as React from 'react'
// import Svg, { Path } from 'react-native-svg'
import { Image, StyleSheet } from 'react-native'
import Svg, { SvgProps, Circle, Path, Rect } from 'react-native-svg'

export const IconHome = (props: any) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.579 16.135h5.815"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M2.9 13.713c0-5.631.614-5.238 3.919-8.303C8.265 4.246 10.515 2 12.458 2c1.942 0 4.237 2.235 5.696 3.41 3.305 3.065 3.918 2.672 3.918 8.303C22.072 22 20.113 22 12.486 22 4.859 22 2.9 22 2.9 13.713Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export const IconChat = (props: any) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="M19.821 19.07c-3.056 3.056-7.581 3.717-11.285 2.004-.546-.22-.995-.398-1.42-.398-1.188.007-2.665 1.158-3.433.391-.767-.768.384-2.246.384-3.44 0-.427-.17-.867-.39-1.415C1.962 12.51 2.623 7.982 5.68 4.927c3.902-3.903 10.24-3.903 14.141 0 3.909 3.908 3.902 10.241 0 14.143Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.69 12.413h.008M12.68 12.413h.01M8.671 12.413h.01"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export const IconVideo = (props: any) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="M16.797 15.538c.08 1.832-1.398 3.382-3.302 3.46-.14.005-6.98-.008-6.98-.008-1.895.144-3.554-1.218-3.703-3.044-.012-.136-.009-7.474-.009-7.474-.084-1.834 1.393-3.387 3.299-3.468.142-.007 6.972.006 6.972.006 1.904-.142 3.568 1.23 3.716 3.064.01.132.007 7.464.007 7.464Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m16.8 9.98 3.293-2.695c.816-.668 2.04-.086 2.039.967L22.12 15.6c-.001 1.053-1.226 1.63-2.04.962l-3.28-2.695"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export const IconVoice = (props: any) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.75 22v-3.161"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M12.75 14.848v0a4.07 4.07 0 0 1-4.062-4.08V6.081C8.688 3.827 10.506 2 12.75 2c2.243 0 4.061 1.827 4.061 4.08v4.688c0 2.254-1.818 4.08-4.06 4.08Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.75 10.8c0 4.44-3.582 8.038-8 8.038-4.42 0-8-3.599-8-8.037M14.819 6.756h1.99M13.82 10.094h2.99"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export const IconGroup = (props: any) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.888 10.897a2.875 2.875 0 0 0 2.472-2.841 2.875 2.875 0 0 0-2.406-2.836M19.729 14.25c1.35.202 2.294.675 2.294 1.65 0 .671-.445 1.107-1.163 1.381"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M11.887 14.664c-3.214 0-5.96.487-5.96 2.432 0 1.944 2.729 2.445 5.96 2.445 3.214 0 5.958-.482 5.958-2.428s-2.727-2.45-5.958-2.45ZM11.887 11.888a3.819 3.819 0 1 0-3.82-3.82 3.804 3.804 0 0 0 3.792 3.82h.028Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.885 10.897a2.875 2.875 0 0 1-2.472-2.841A2.875 2.875 0 0 1 5.819 5.22M4.044 14.25c-1.351.202-2.294.675-2.294 1.65 0 .671.444 1.107 1.162 1.381"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export const IconGroupSm = (props: any) => (
  <Svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.944 5.448a1.438 1.438 0 0 0 1.236-1.42c0-.714-.52-1.306-1.203-1.418M9.864 7.125c.676.101 1.147.338 1.147.825 0 .336-.222.554-.58.69"
      stroke="#fff"
      strokeWidth={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M5.943 7.332c-1.607 0-2.98.243-2.98 1.216 0 .972 1.365 1.222 2.98 1.222 1.607 0 2.98-.24 2.98-1.214 0-.973-1.364-1.224-2.98-1.224ZM5.943 5.944a1.91 1.91 0 1 0-1.909-1.91 1.902 1.902 0 0 0 1.895 1.91h.014Z"
      stroke="#fff"
      strokeWidth={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.942 5.448a1.437 1.437 0 0 1-1.236-1.42c0-.714.52-1.306 1.203-1.418M2.022 7.125c-.675.101-1.147.338-1.147.825 0 .336.222.554.581.69"
      stroke="#fff"
      strokeWidth={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export const IconSearch = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle
      cx={11.767}
      cy={11.767}
      r={8.989}
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.018 18.485 21.542 22"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export const IconBell = (props: any) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="M12 17.848c5.64 0 8.248-.724 8.5-3.627 0-2.902-1.819-2.716-1.819-6.276C18.681 5.165 16.045 2 12 2S5.319 5.164 5.319 7.945c0 3.56-1.819 3.374-1.819 6.275.253 2.915 2.862 3.628 8.5 3.628Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.389 20.857c-1.364 1.515-3.492 1.533-4.87 0"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export const IconAdd = (props: any) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.33 2.5h9.33c3.4 0 5.34 1.92 5.34 5.33v9.34c0 3.39-1.93 5.33-5.33 5.33H7.33C3.92 22.5 2 20.56 2 17.17V7.83C2 4.42 3.92 2.5 7.33 2.5Zm5.49 10.83h2.84c.46-.01.83-.38.83-.84 0-.46-.37-.83-.83-.83h-2.84V8.84c0-.46-.37-.83-.83-.83-.46 0-.83.37-.83.83v2.82H8.33c-.22 0-.43.09-.59.24a.866.866 0 0 0-.24.59c0 .46.37.83.83.84h2.83v2.83c0 .46.37.83.83.83.46 0 .83-.37.83-.83v-2.83Z"
      fill="#CAFF53"
    />
  </Svg>
)

export const IconShare = (props: any) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.167 2.502a2.498 2.498 0 1 1-1.79 4.241l-4.548 2.6a2.502 2.502 0 0 1 0 1.314l4.548 2.6a2.498 2.498 0 1 1-.622 1.087l-4.547-2.6a2.498 2.498 0 1 1 0-3.487l4.548-2.6a2.5 2.5 0 0 1 2.41-3.155Z"
      fill="#fff"
    />
  </Svg>
)
export const IconHeart = (props: any) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="M2.872 11.598c-1.073-3.35.18-7.179 3.698-8.312a6.007 6.007 0 0 1 5.43.912c1.455-1.125 3.572-1.505 5.42-.912 3.517 1.133 4.779 4.962 3.707 8.312-1.67 5.31-9.127 9.4-9.127 9.4s-7.402-4.028-9.128-9.4Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export const IconCommentSm = (props: any) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.333 8.01c0-3.512 2.807-6.677 6.68-6.677 3.787 0 6.654 3.105 6.654 6.657 0 4.12-3.36 6.677-6.667 6.677-1.093 0-2.307-.294-3.28-.868-.34-.207-.627-.36-.993-.24l-1.347.4c-.34.107-.647-.16-.547-.52l.447-1.496a.699.699 0 0 0-.047-.601c-.573-1.055-.9-2.21-.9-3.332Zm5.8 0c0 .474.38.855.854.861a.856.856 0 0 0 0-1.709.85.85 0 0 0-.854.848Zm3.074.007c0 .467.38.854.853.854a.856.856 0 0 0 0-1.709.851.851 0 0 0-.853.855Zm-5.294.854a.86.86 0 0 1-.853-.854c0-.474.38-.855.853-.855.474 0 .854.38.854.855a.86.86 0 0 1-.854.854Z"
      fill="#fff"
      opacity={0.48}
    />
  </Svg>
)
export const IconSend = (props: any) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m13.194 6.812-4.77 4.82L3 8.24c-.778-.486-.616-1.667.263-1.924l12.88-3.772c.805-.236 1.55.517 1.312 1.324l-3.81 12.871c-.262.88-1.436 1.038-1.917.257l-3.306-5.362"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export const IconSendFill = (props: any) => (
  <Svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M24.722 3.298a2.197 2.197 0 0 0-2.194-.572L4.236 8.045a2.18 2.18 0 0 0-1.572 1.728c-.161.854.403 1.937 1.14 2.39l5.719 3.515c.586.36 1.343.27 1.829-.22l6.549-6.59a.834.834 0 0 1 1.205 0c.33.332.33.87 0 1.213l-6.56 6.591a1.504 1.504 0 0 0-.22 1.84l3.495 5.776a2.171 2.171 0 0 0 1.887 1.076c.09 0 .193 0 .284-.012a2.215 2.215 0 0 0 1.853-1.578l5.423-18.269a2.232 2.232 0 0 0-.546-2.207"
      fill="#000"
    />
  </Svg>
)
export const IconLocation = (props: any) => (
  <Svg
    width={12}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="M7.25 5.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0Z"
      stroke="#fff"
      strokeWidth={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M6 11c-.6 0-3.75-2.55-3.75-5.218C2.25 3.693 3.929 2 6 2 8.07 2 9.75 3.693 9.75 5.782 9.75 8.449 6.599 11 6 11Z"
      stroke="#fff"
      strokeWidth={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export const IconMore = (props: any) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.25 10a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm5 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM15 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
      fill="#fff"
    />
  </Svg>
)
export const IconPlus = (props: any) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={18} height={18} rx={9} fill="#000" />
    <Path
      d="M8.898 5.007 9 5a.75.75 0 0 1 .743.648l.007.102v2.499l2.5.001a.75.75 0 0 1 .743.648L13 9a.75.75 0 0 1-.648.743l-.102.007-2.5-.001v2.501a.75.75 0 0 1-.648.743L9 13a.75.75 0 0 1-.743-.648l-.007-.102V9.749l-2.5.001a.75.75 0 0 1-.743-.648L5 9a.75.75 0 0 1 .648-.743l.102-.007 2.5-.001V5.75a.75.75 0 0 1 .648-.743L9 5l-.102.007Z"
      fill="#fff"
    />
  </Svg>
)
export const IconCreate = (props: any) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.883 3.007 12 3a1 1 0 0 1 .993.883L13 4v7h7a1 1 0 0 1 .993.883L21 12a1 1 0 0 1-.883.993L20 13h-7v7a1 1 0 0 1-.883.993L12 21a1 1 0 0 1-.993-.883L11 20v-7H4a1 1 0 0 1-.993-.883L3 12a1 1 0 0 1 .883-.993L4 11h7V4a1 1 0 0 1 .883-.993L12 3l-.117.007Z"
      fill="#212121"
    />
  </Svg>
)

export const UserIcon = (props: any) => (
  <Image source={props.source} style={{ ...styles.userIcon, ...props.style }} />
)

const styles = StyleSheet.create({
  userIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 50,
    height: 24,
    width: 24
  }
})
