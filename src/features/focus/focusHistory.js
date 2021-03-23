import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';

const HistoryItem = ({ item, index }) => {
  console.log(item.status);
  return (
    <Text
      styles={[
        styles.historyItem,
        { color: `${item.status}` > 1 ? 'red' : 'green' },
      ]}>
      {item.subject}
    </Text>
  );
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };
  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things we've focused on</Text>
            <FlatList
              style={{ flex: 0.5 }}
              contentContainerStyle={{ flex: 0.5, alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
              keyExtractor={(item) => item.key}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title='Clear'
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: {
    fontSize: fontSizes.lg,
  },
  title: {
    color: 'white',
    fontSize: fontSizes.lg,
    textAlign: 'center',
    paddingBottom: 10,
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md,
  },
});
