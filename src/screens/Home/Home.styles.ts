import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
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
  primaryButton: {
    height: 48,
    borderRadius: 6,
    backgroundColor: '#3478f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
