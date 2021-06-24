import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, Linking, ScrollView} from 'react-native';

export default function DetailScreen(props) {
  const detail = props.route.params.detail;
  console.log(detail);

  const loadInBrowser = () => {
    Linking.openURL(detail.company_url).catch(err =>
      console.error("Couldn't load page", err),
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Company</Text>
      <View style={styles.header}>
        <Image style={styles.companyLogo} source={{uri: detail.company_logo}} />
        <View style={styles.desc}>
          <Text style={styles.titleDesc}>{detail.company}</Text>
          <Text style={styles.locDesc}>{detail.location}</Text>
          <Text style={styles.urlDesc} onPress={() => loadInBrowser()}>
            Go To Website
          </Text>
        </View>
      </View>
      <Text style={styles.title}>Job Specification</Text>
      <View style={styles.specification}>
        <View style={styles.itemSpec}>
          <Text style={styles.titleSpec}>Title</Text>
          <Text style={styles.specDesc}>{detail.title}</Text>
        </View>
        <View style={styles.itemSpec}>
          <Text style={styles.titleSpec}>Fulltime</Text>
          <Text style={styles.specDesc}>{detail.type == 'Full Time' ? 'Yes' : 'No'}</Text>
        </View>
        <Text style={styles.titleSpec}>Description</Text>
        <ScrollView style={styles.itemSpec}>
          <Text style={styles.specDesc}>{detail.description}</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  companyLogo: {
    width: 100,
    height: 100,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
  },
  desc: {
    justifyContent: 'space-around',
    marginLeft: 10,
    flex:1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
  },
  titleDesc: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  locDesc: {
    fontWeight: '600',
  },
  urlDesc: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  itemSpec:{
      marginVertical:10
  },
  titleSpec:{
      color:'grey',
      fontSize:16,
      fontWeight:'500'
  },
  specDesc:{
      fontWeight:'500'
  }
});
