import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainTitleSkeleton: {
    backgroundColor: '#e0e0e0',
    color: '#e0e0e0',
    fontSize: 24,
    fontWeight: '600',
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 16,
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
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 32,
    width: '100%',
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
  primaryButton: {
    padding: 16,
    borderRadius: 6,
    backgroundColor: '#3478f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginRight: 8,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    height: 100,
  },
});
