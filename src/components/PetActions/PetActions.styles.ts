import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100%',
    marginBottom: 32,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  primaryButton: {
    padding: 16,
    borderRadius: 6,
    backgroundColor: '#3478f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});