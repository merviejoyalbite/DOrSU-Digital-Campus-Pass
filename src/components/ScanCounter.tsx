import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

interface ScanCounterProps {
  count: number;
  onScan: () => void;
  onReset: () => void;
}

export const ScanCounter: React.FC<ScanCounterProps> = ({
  count,
  onScan,
  onReset,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Campus Gate Verification Log</Text>

    <View style={styles.counterDisplay}>
      <Text style={styles.label}>Today's Gate Entries:</Text>
      <Text style={styles.value}>{count}</Text>
    </View>

    <View style={styles.btnRow}>
      <Pressable style={styles.btnPrimary} onPress={onScan}>
        <Text style={styles.btnText}>+1 Scan at Gate</Text>
      </Pressable>

      <Pressable style={styles.btnSecondary} onPress={onReset}>
        <Text style={styles.btnSecText}>Reset Scans</Text>
      </Pressable>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  title: {
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 12,
  },

  counterDisplay: {
    alignItems: 'center',
    marginBottom: 14,
  },

  label: {
    fontSize: 12,
    color: '#64748B',
  },

  value: {
    fontSize: 32,
    fontWeight: '800',
    color: '#00758F',
  },

  btnRow: {
    flexDirection: 'row',
    gap: 10,
  },

  btnPrimary: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#00758F',
    alignItems: 'center',
  },

  btnSecondary: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#E2E8F0',
    alignItems: 'center',
  },

  btnText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  btnSecText: {
    color: '#334155',
    fontWeight: '700',
  },
});