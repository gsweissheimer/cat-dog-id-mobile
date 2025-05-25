import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  eventContainer: {
    padding: 16,
    borderRadius: 6,
    marginTop: 8,
    marginRight: 8,
    width: '100%',
    maxWidth: 300,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  }
});