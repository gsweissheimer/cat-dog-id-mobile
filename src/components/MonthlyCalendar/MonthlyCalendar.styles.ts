import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 12,
  },
  navButton: {
    padding: 8,
  },
  navText: {
    fontSize: 14,
    color: '#3478f6',
  },
  monthText: {
    fontSize: 16,
    fontWeight: '600',
  },
  dayNamesRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  dayNameCell: {
    flex: 1,
    paddingVertical: 6,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 32,
  },
  dayNameText: {
    fontSize: 12,
    fontWeight: '500',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: `${100 / 7}%`,
    minHeight: 60,
    borderWidth: 0.5,
    borderColor: '#eee',
    padding: 4,
  },
  dayOutside: {
    backgroundColor: '#f9f9f9',
  },
  dateText: {
    fontSize: 14,
    fontWeight: '600',
  },
  dateOutside: {
    color: '#bbb',
  },
  eventList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  eventBadge: {
    backgroundColor: '#3478f6',
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginTop: 2,
    maxWidth: '50%',
  },
  eventText: {
    fontSize: 10,
    color: '#fff',
  },
});
