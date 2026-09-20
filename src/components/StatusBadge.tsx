import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface StatusBadgeProps {
  isActive: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  isActive,
}) => {
  return (
    <View
      style={[
        styles.badge,
        isActive ? styles.activeBadge : styles.inactiveBadge,
      ]}
    >
      <Text
        style={[
          styles.text,
          isActive ? styles.activeText : styles.inactiveText,
        ]}
      >
        {isActive ? 'ACTIVE' : 'SUSPENDED'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 12,
  },

  activeBadge: {
    backgroundColor: '#DCFCE7',
  },

  inactiveBadge: {
    backgroundColor: '#FEE2E2',
  },

  text: {
    fontSize: 11,
    fontWeight: '800',
  },

  activeText: {
    color: '#166534',
  },

  inactiveText: {
    color: '#991B1B',
  },
});