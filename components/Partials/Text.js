import { Text } from "react-native";
export default function TextContent({ text, fontSize, font, color }) {
  return (
    <Text
      style={{
        fontSize: fontSize,
        fontFamily: font,
        color: color ? color : "black",
      }}
    >
      {text}
    </Text>
  );
}
