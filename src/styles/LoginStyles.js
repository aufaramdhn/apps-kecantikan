import {StyleSheet} from 'react-native';
import COLORS from '../constant/Colors';

export const LoginStyles = StyleSheet.create({
  ContainerImageLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  textWelcome: {
    marginTop: 30,
    fontSize: 24,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  ImageProfile: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
  Input: {
    borderWidth: 2,
    width: '95%',
    marginHorizontal: 10,
    borderRadius: 10,
    borderColor: COLORS.black,
    paddingHorizontal: 5,
  },
  InputPassword: {
    borderWidth: 2,
    width: '95%',
    marginHorizontal: 10,
    borderRadius: 10,
    borderColor: COLORS.black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  TextForgotPass: {
    textDecorationLine: 'underline',
    color: '#4285F4',
    textAlign: 'right',
    alignSelf: 'flex-end',
    marginHorizontal: 8,
    marginVertical: 4,
  },
  TextRegis: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
});
