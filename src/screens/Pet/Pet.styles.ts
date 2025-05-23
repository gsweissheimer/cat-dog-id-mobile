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
    minWidth: 200,
    borderRadius: 8,
    textAlign: 'center',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    elevation: 4,           
    shadowColor: '#000',    
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    paddingTop: 32,
    borderRadius: 32,
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
  },
  footer: {
    height: 100,
  },
});
