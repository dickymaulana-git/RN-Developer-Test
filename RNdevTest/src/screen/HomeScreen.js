import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
import {
  actionGetRecruitmentData,
} from '../redux/action/action';

export default function HomeScreen(props) {
  const [filterDropDown, setFilterDropDown] = useState(false);
  const [switchFulltime, setSwitchFulltime] = useState(false);
  const [location, setLocation] = useState('')
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const {recruitment} = useSelector(state => state.allReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetRecruitmentData());
  }, []);

  const searchResultHandler = () => {
    setSearchResult(recruitment.filter(e => e.title.includes(search)));
  };

  const applyResultHandler = () => {
    if (location.length > 0){
      setSearchResult(recruitment.filter(e => e.type.includes(location)));
    }
  };
  console.log('sr', searchResult);
  console.log('sr', location);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>JOB LIST</Text>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Icon name="magnify" size={24} />
          <TextInput
            placeholder="Search"
            value={search}
            onChangeText={setSearch}
            onSubmitEditing={() => searchResultHandler()}
            style={{marginLeft: 10, width: '90%', maxWidth: '90%'}}
          />
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
              value={location}
              onChangeText={setLocation}
            />
          </View>
          <TouchableOpacity onPress={()=>{
            applyResultHandler()
            setFilterDropDown(!filterDropDown)
            }} style={styles.applyFilter}>
            <Text>Apply Filter</Text>
          </TouchableOpacity>
        </View>
      )}
      {searchResult?.length > 0 ? (
        <View>
          <Text>Search Result</Text>
          <FlatList
            data={searchResult}
            renderItem={({item}) => {
              return (
                <View style={styles.recruitmentContainer}>
                  <Image
                    style={styles.companyLogo}
                    source={{uri: item.company_logo}}
                  />
                  <View style={styles.dataDesc}>
                    <Text style={styles.dataTitle}>{item.title}</Text>
                    <Text style={styles.dataDescText}>{item.company}</Text>
                    <Text style={styles.dataDescText}>{item.location}</Text>
                  </View>
                  <Icon
                    onPress={() => {
                      props.navigation.navigate('Detail', {detail: item});
                    }}
                    style={styles.detailIcon}
                    name="chevron-right"
                    size={30}
                  />
                </View>
              );
            }}
          />
        </View>
      ) : (
        <FlatList
          data={recruitment}
          renderItem={({item}) => {
            return (
              <View style={styles.recruitmentContainer}>
                <Image
                  style={styles.companyLogo}
                  source={{uri: item.company_logo}}
                />
                <View style={styles.dataDesc}>
                  <Text style={styles.dataTitle}>{item.title}</Text>
                  <Text style={styles.dataDescText}>{item.company}</Text>
                  <Text style={styles.dataDescText}>{item.location}</Text>
                </View>
                <Icon
                  onPress={() => {
                    props.navigation.navigate('Detail', {detail: item});
                  }}
                  style={styles.detailIcon}
                  name="chevron-right"
                  size={30}
                />
              </View>
            );
          }}
        />
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
  recruitmentContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 4,
  },
  companyLogo: {
    width: '25%',
    height: 100,
    resizeMode: 'contain',
  },
  dataDesc: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 4,
  },
  detailIcon: {
    alignSelf: 'center',
  },
  dataTitle: {
    fontWeight: 'bold',
  },
  dataDescText: {
    color: 'grey',
  },
});
