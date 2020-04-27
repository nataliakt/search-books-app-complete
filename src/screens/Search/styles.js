import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  header: {
    backgroundColor: '#008E76',
    paddingBottom: 12,
  },
  headerBar: {
    backgroundColor: '#00BFA5',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  headerBarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  search: {
    height: 40,
    marginTop: 12,
    marginHorizontal: 12,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderColor: '#747474',
  },
  searchInfo: {
    textAlign: 'center',
    marginTop: 8,
    color: '#fff'
  },
  empty: {
    marginTop: 12,
    alignSelf: 'center',
    color: '#292929'
  },
  list: {
    paddingVertical: 6,
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginVertical: 6,
    borderRadius: 4,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  cardImage: {
    width: 80,
    height: 114,
    marginRight: 12,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    color: '#292929',
    fontSize: 14,
    fontWeight: 'bold'
  },
  cardSubtitle: {
    color: '#292929',
    fontSize: 10,
    marginTop: 6,
  },
  cardDescription: {
    color: '#292929',
    fontSize: 14,
    marginTop: 8,
  },
})