import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import OnBoard from './OnBoard/OnBoard';

const HomeScreen = ({navigation}) => {
  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;
  const dummyData = [
    {
      id: 1,
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tower_Bridge_from_Shad_Thames.jpg/1200px-Tower_Bridge_from_Shad_Thames.jpg',
      title: 'London Bridge',
      location: 'London, UK',
      rating: '4.2',
    },
    {
      id: 2,
      imgUrl:
        'https://media.cntraveller.com/photos/63f370b64ab3000103fb66b8/master/w_1600%2Cc_limit/%2520Portobello%2520Road%2520Market-GettyImages-1046968880.jpeg',
      title: 'Notting Hill',
      location: 'Notting Hill, London',
      rating: '4.1',
    },
    {
      id: 3,
      imgUrl:
        'https://media.cntraveller.com/photos/63f370b4e0d4844814858225/master/w_1600%2Cc_limit/British%2520Museum-2E04KNC.jpeg',
      title: 'British Museum',
      location: 'Great Russell Street, London',
      rating: '4.5',
    },
    {
      id: 4,
      imgUrl:
        'https://media.cntraveller.com/photos/63f370b4003a451163030e92/master/w_1600%2Cc_limit/Buckingham%2520Palace-F4TMN1.jpeg',
      title: 'Buckingham',
      location: 'Buckingham Palace, London',
      rating: '4.5',
    },
    {
      id: 5,
      imgUrl:
        'https://media.cntraveller.com/photos/63f370c5e0d4844814858229/master/w_1600%2Cc_limit/Hampton%2520Court%2520Palace-JGN5F4.jpeg',
      title: 'Hampton Court',
      location: 'Molesey, East Molesey',
      rating: '4.0',
    },
  ];

  //   Flatlist Items Style

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          height: 384,
          width: 268,
          borderRadius: 24,
          shadowOffset: {height: 0, width: 0},
          shadowOpacity: 0.1,
          shadowRadius: 2,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
          marginTop: 30,
        }}
        onPress={() => navigation.navigate('Detail')}>
        <Image
          style={{height: 286, width: 240, borderRadius: 20}}
          source={{uri: item.imgUrl}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 10,
            gap: 60,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.title}</Text>
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Image
              style={{height: 16, width: 16}}
              source={require('../assets/Star.png')}
            />

            <Text style={{fontSize: 15}}>{item.rating}</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <Image
            style={{height: 16, width: 16}}
            source={require('../assets/Location.png')}
          />

          <Text style={{fontSize: 15}}>{item.location}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* LogoArea */}

      <View style={styles.logoContainer}>
        <TouchableOpacity style={styles.logoBtn}>
          <Image
            style={styles.logoImg}
            source={{
              uri: 'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg',
            }}
          />
          <Text style={{color: '#1B1E28', fontSize: 16, fontWeight: 'bold'}}>
            James
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bellBtn}>
          <Image
            style={styles.bellIcon}
            source={require('../assets/Menu/Notifications.png')}
          />
        </TouchableOpacity>
      </View>

      {/* MainTitle */}

      <View style={{paddingLeft: 20, paddingTop: 20}}>
        <Text style={{fontSize: 38}}>Explore the</Text>
        <Text style={{fontWeight: 'bold', fontSize: 38, color: '#FF7029'}}>
          Beautiful world!
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: '400'}}>Best Destination</Text>
        <TouchableOpacity>
          <Text style={{fontSize: 14, color: '#FF7029'}}>View all</Text>
        </TouchableOpacity>
      </View>

      {/* Destination List */}

      <View>
        <FlatList
          data={dummyData}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>

      {/* Footer */}

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image
            style={styles.footerIcon}
            source={require('../assets/Footer/homeIcon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Calender');
          }}>
          <Image
            style={styles.footerIcon}
            source={require('../assets/Footer/calenderIcon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <Image
            style={{height: 70, width: 85}}
            source={require('../assets/Footer/SearchIcon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Message');
          }}>
          <Image
            style={styles.footerIcon}
            source={require('../assets/Footer/messageIcon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Image
            style={styles.footerIcon}
            source={require('../assets/Footer/profileIcon.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  logoImg: {
    height: 37,
    width: 37,
    borderRadius: 100,
  },
  logoBtn: {
    backgroundColor: '#F7F7F9',
    height: 44,
    width: 118,
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bellBtn: {
    backgroundColor: '#F7F7F9',
    height: 44,
    width: 44,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellIcon: {
    height: 24,
    width: 24,
  },
  footer: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    height: 70,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  footerIcon: {
    height: 60,
    width: 75,
  },
});
