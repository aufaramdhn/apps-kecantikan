import {StyleSheet} from 'react-native';
import COLORS from '../constant/Colors';

export const CartStyles = StyleSheet.create({
  ContainerHeader: {
    borderBottomWidth: 1,
    borderColor: COLORS.grey,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.lightgrey,
  },
  ContainerCart: {
    flex: 1,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.grey,
  },
  ContainerBtnAddSub: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: 20,
    marginTop: 10,
  },
  BtnAddSub: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'space-between',
    width: '25%',
  },
  ContainerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.grey,
  },
});
