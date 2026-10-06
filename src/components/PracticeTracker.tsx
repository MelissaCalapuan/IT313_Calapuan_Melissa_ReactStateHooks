import { Button, StyleSheet, Text, View } from "react-native";

type PracticeTrackerProps = {
  solved: number;
  onSolve: () => void;
  onReset: () => void;
};

export default function PracticeTracker({
  solved,
  onSolve,
  onReset,
}: PracticeTrackerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Practice Tracker</Text>

      <Text style={styles.solved}>Solved: {solved}</Text>

      <Button title="Solve +1" onPress={onSolve} />

      <View style={styles.space} />

      <Button title="Reset" onPress={onReset} />

      {solved >= 5 && <Text style={styles.greatJob}>Great job!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  solved: {
    fontSize: 20,
    marginBottom: 15,
  },
  space: {
    height: 10,
  },
  greatJob: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },
});
