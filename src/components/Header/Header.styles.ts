import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 56,
    backgroundColor: '#fff',
    elevation: 4,           
    shadowColor: '#000',    
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  backButton: {
    padding: 8,
  },
  backText: {
    fontSize: 16,
    color: '#3478f6',
  },
  backPlaceholder: {
    width: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  rightPlaceholder: {
    minWidth: 40,
  },
  leftPlaceholder: {
    width: 40,
  },
});