import {StyleSheet} from 'react-native';
import COLORS from '../constant/Colors';

export const TrackStyle = StyleSheet.create({
  containerImg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    marginVertical: 30,
    padding: 25,
    elevation: 5,
  },
  containerTrack: {
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    marginBottom: 20,
    elevation: 5,
  },
  containerMap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textMap: {
    width: '18%',
    paddingBottom: 20,
    borderRightWidth: 3,
    borderColor: COLORS.grey,
  },
  textDesc: {
    width: '60%',
    paddingBottom: 20,
    marginLeft: 20,
    color: COLORS.primary,
  },
});
