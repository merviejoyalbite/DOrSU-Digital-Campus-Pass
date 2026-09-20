import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import { StudentProfile } from './src/types/student';
import { StudentCard } from './src/components/StudentCard';
import { ScanCounter } from './src/components/ScanCounter';

const initialStudent: StudentProfile = {
  name: 'Mervie Joy C. Albite',
  idNumber: '2026-1234',
  program: 'BS in Information Technology (BSIT)',
  yearLevel: '3rd Year — Section C',
  avatarUrl: require('./assets/student.jpg'),
  campus: 'Main Campus (Guang-guang, Mati City)',
};

export default function App() {
  const [student] = useState<StudentProfile>(initialStudent);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [gateScans, setGateScans] = useState<number>(3);

  const handleScan = () => {
    setGateScans(prev => prev + 1);
  };

  const handleReset = () => {
    setGateScans(0);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            DOrSU Digital Campus Pass
          </Text>

          <Text style={styles.subtitle}>
            Student Verification System
          </Text>
        </View>

        <StudentCard
          student={student}
          isActive={isActive}
        />

        <ScanCounter
          count={gateScans}
          onScan={handleScan}
          onReset={handleReset}
        />

        <Text
          style={styles.statusButton}
          onPress={() => setIsActive(prev => !prev)}
        >
          {isActive
            ? 'Tap to Suspend Campus Pass'
            : 'Tap to Activate Campus Pass'}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  container: {
    padding: 16,
    gap: 16,
  },

  header: {
    backgroundColor: '#00758F',
    padding: 20,
    borderRadius: 14,
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: '#E0F2FE',
  },

  statusButton: {
    textAlign: 'center',
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#E2E8F0',
    fontWeight: '700',
    color: '#334155',
  },
});