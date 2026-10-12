import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>My Tasks</Text>

      <View>
        <Text>Buy groceries</Text>
        <Text>Done</Text>
      </View>

      <View>
        <Text>Walk the dog</Text>
        <Text>In Progress</Text>
      </View>

      <View>
        <Text>Read a book</Text>
        <Text>Pending</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
