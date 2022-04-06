import {StyleSheet} from 'react-native';
import COLORS from '../constant/Colors';

export const NewStyles = StyleSheet.create({
  containerCard: {
    backgroundColor: '#fff',
    margin: 5,
    alignItems: 'center',
    borderRadius: 20,
    elevation: 5,
    marginBottom: 20,
  },
  image: {width: 165, height: 160, borderRadius: 20},
  textTitle: {fontSize: 18, marginLeft: 10, marginTop: 10, fontWeight: 'bold'},
  wrapPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center',
  },
  containerBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: COLORS.primary,
  },
});
