import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  petNameSkeleton: {
    backgroundColor: '#e0e0e0',
    color: '#e0e0e0',
    fontSize: 24,
    fontWeight: '600',
    width: '100%',
    minWidth: 200,
    borderRadius: 8,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  petName: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    padding: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#3478f6',
  },
  content: {
    height: '100%',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
});
