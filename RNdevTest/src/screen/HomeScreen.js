import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
  const [filterDropDown, setFilterDropDown] = useState(false);
  const [switchFulltime, setSwitchFulltime] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>JOB LIST</Text>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Icon name="magnify" size={24} />
          <TextInput placeholder="Search" />
        </View>
        <Icon
          onPress={() => setFilterDropDown(!filterDropDown)}
          name={filterDropDown ? 'chevron-up' : 'chevron-down'}
          size={35}
        />
      </View>
      {filterDropDown === true && (
        <View style={styles.filterContainer}>
          <View style={styles.filterItem}>
            <Text>Fulltime</Text>
            <Icon
              onPress={() => setSwitchFulltime(!switchFulltime)}
              name={switchFulltime ? 'toggle-switch-off' : 'toggle-switch'}
              size={50}
              color={switchFulltime ? 'grey' : 'green'}
            />
          </View>
          <View style={styles.filterItem}>
            <Text>Location</Text>
            <TextInput
              style={styles.inputLocation}
              placeholder="input location"
            />
          </View>
          <TouchableOpacity style={styles.applyFilter}>
            <Text>Apply Filter</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  searchBar: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    width: '90%',
  },
  filterContainer: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputLocation: {
    borderWidth: 1,
    borderColor: 'black',
    width: '60%',
    padding: 8,
  },
  applyFilter: {
    backgroundColor: '#aaa',
    width: '30%',
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 12,
    alignSelf: 'flex-end',
  },
});
