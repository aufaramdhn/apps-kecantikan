import {StyleSheet} from 'react-native';
import COLORS from '../constant/Colors';

export const PaymentStyles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: COLORS.white},
  ContainerListBank: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingRight: 10,
    borderColor: COLORS.grey,
    marginLeft: 40,
    justifyContent: 'center',
  },
  ContainerListBank1: {
    width: '95%',
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ImageBank: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 5,
  },
  ContainerListMetode: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 10,
    borderColor: COLORS.grey,
  },
  ContainerListMetode1: {
    width: '95%',
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ImageMetode: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    marginRight: 5,
  },
  ContainerPayment: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 10,
    borderColor: COLORS.grey,
  },
  ContainerPayment1: {
    width: '95%',
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ImagePayment: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    marginRight: 5,
  },
});
