import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import PracticeTracker from "../components/PracticeTracker";
import Stopwatch from "../components/Stopwatch";
import useStopwatch from "../components/useStopwatch";

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  const handleSolve = () => {
    setSolved((s) => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lab Timer & Practice Tracker</Text>

      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      <Stopwatch seconds={seconds} isRunning={isRunning} />

      <View style={styles.buttons}>
        <Button title="Start" onPress={handleStart} />

        <View style={styles.space} />

        <Button title="Stop" onPress={handleStop} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  buttons: {
    width: "100%",
  },
  space: {
    height: 10,
  },
});
