import { Text } from "react-native";
export default function TextContent({ text, fontSize, font }) {
  return <Text style={{ fontSize: fontSize, fontFamily: font }}>{text}</Text>;
}
