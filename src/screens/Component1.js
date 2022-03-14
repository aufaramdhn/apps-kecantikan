import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import RemixIcon from 'react-native-remix-icon';

const Component1 = () => {
  const [status, setStatus] = useState('1');

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/login.png')}
        rezizeMode="cover"
        style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.containerNav}>
          <TouchableOpacity onPress={() => setStatus('1')}>
            {status === '1' ? (
              <>
                <Text style={{color: '#fff', fontSize: 14}}>Version</Text>
                <View
                  style={{
                    marginTop: 5,
                    borderWidth: 2,
                    marginHorizontal: -10,
                    borderColor: '#fff',
                  }}
                />
              </>
            ) : (
              <Text style={{color: '#c7c7c7', fontSize: 14}}>Version</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStatus('2')}>
            {status === '2' ? (
              <>
                <Text style={{color: '#fff', fontSize: 14}}>Last Update</Text>
                <View
                  style={{
                    marginTop: 5,
                    borderWidth: 2,
                    marginHorizontal: 8,
                    borderColor: '#fff',
                  }}
                />
              </>
            ) : (
              <Text style={{color: '#c7c7c7', fontSize: 14}}>Last Update</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStatus('')}>
            {status === '' ? (
              <>
                <Text style={{color: '#fff', fontSize: 14}}>Next Update</Text>
                <View
                  style={{
                    marginTop: 5,
                    borderWidth: 2,
                    marginHorizontal: 8,
                    borderColor: '#fff',
                  }}
                />
              </>
            ) : (
              <Text style={{color: '#c7c7c7', fontSize: 14}}>Next Update</Text>
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 5,
          }}>
          {status === '1' ? (
            <View
              style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#fff', fontSize: 28, fontWeight: 'bold'}}>
                BetterJob
              </Text>
              <Text style={{color: '#fff', fontSize: 13}}>Version 2.11.41</Text>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                }}
                style={styles.logo}
              />
              <Text style={{color: '#c7c7c7', fontSize: 13}}>
                Copyright© Dewarangga | All Copyright Reserved
              </Text>
              <TouchableOpacity>
                <Text style={{color: '#c7c7c7', fontSize: 14, marginTop: 5}}>
                  Cek Update
                </Text>
              </TouchableOpacity>
            </View>
          ) : status === '2' ? (
            <View style={{flex: 4, paddingHorizontal: 20}}>
              <View style={styles.containerCardUpdate}>
                <View style={{alignItems: 'center', marginVertical: 30}}>
                  <Text style={{color: '#000B49', fontSize: 13}}>
                    www.betterjob.id
                  </Text>
                  <Text style={{color: '#1d1d1d', fontSize: 12}}>
                    by Dewarangga
                  </Text>
                  <Text style={{color: '#1d1d1d', fontSize: 12}}>
                    HRIS application, simple and flexible.
                  </Text>
                </View>
              </View>
            </View>
          ) : (
            <View style={{flex: 4, paddingHorizontal: 20}}>
              <View style={styles.containerCardUpdate}>
                <View style={{alignItems: 'center', marginVertical: 30}}>
                  <Text style={{color: '#000B49', fontSize: 13}}>
                    www.betterjob.id
                  </Text>
                  <Text style={{color: '#1d1d1d', fontSize: 12}}>
                    by Dewarangga
                  </Text>
                  <Text style={{color: '#1d1d1d', fontSize: 12}}>
                    HRIS application, simple and flexible.
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <RemixIcon name="ri-arrow-left-line" color="#fff" size="22" />
            <Text style={{color: '#c7c7c7', fontSize: 16}}>Back</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Component1;

const styles = StyleSheet.create({
  containerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  containerCardUpdate: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    opacity: 0.5,
    alignItems: 'center',
    borderRadius: 10,
  },
  logo: {
    width: 125,
    height: 125,
    borderRadius: 125 / 2,
    marginVertical: 20,
  },

  // active: {
  //   color: '#fff',
  //   fontSize: 14,
  //   borderBottomWidth: 5,
  //   paddingHorizontal: 10,
  //   paddingBottom: 5,
  //   borderColor: '#fff',
  // },
});
