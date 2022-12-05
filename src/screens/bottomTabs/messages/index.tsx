import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import Wrapper from '../../../shared/components/wrapper';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import images from '../../../assets/images/images';
import colors from '../../../assets/colors/colors';
import {RF} from '../../../shared/theme/responsive';
import Input from '../../../shared/components/input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import MessageItem from '../../../shared/components/messageItem';
import {navigate, navigationRef} from '../../../shared/services/NavService';
import {Routes} from '../../../shared/utils/routes';
import Button from '../../../shared/components/button/button';
import {FONTS} from '../../../assets/fonts';
import io from 'socket.io-client';
import {useIsFocused} from '@react-navigation/native';
import Header from '../../../shared/components/header/header';

const Message = () => {
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 0,
      name: 'Charlie George',
      message: 'Nice to talk to you!',
      image: images.userImage,
      selected: true,
    },
    {
      id: 1,
      name: 'Paityn Saris',
      message: 'Just a few kilometers away',
      image: images.userImage,
      selected: false,
    },
    {
      id: 3,
      name: 'Hanna Kenter',
      message: 'will be there...',
      image: images.userImage,
      selected: false,
    },
    {
      id: 4,
      name: 'Paityn Saris',
      message: 'Just a few kilometers away',
      image: images.userImage,
      selected: false,
    },
    {
      id: 5,
      name: 'Charlie George',
      message: 'Nice to talk to you!',
      image: images.userImage,
      selected: false,
    },
    {
      id: 6,
      name: 'Paityn Saris',
      message: 'Just a few kilometers away',
      image: images.userImage,
      selected: false,
    },
  ]);
  const inputRef = useRef();

  const focus = useIsFocused();
  useLayoutEffect(() => {}, []);

  const renderMessages = () => {
    return messages.map((item: any) => {
      return (
        <MessageItem
          onPress={() => {}}
          name={item.name}
          message={item.message}
          userImage={item.image}
          onPress={() => {
            navigate(Routes.CONVERSATION);
          }}
          unread={true}
        />
      );
    });
  };

  return (
    <Wrapper noPaddingBottom>
      <View style={styles.container}>
        <View style={styles.firstRow}>
          <Header
            title={'Messages'}
            leftIconPath={images.arrowBack}
            onLeftIconPress={() => {
              navigationRef.current.goBack();
            }}
            rightIconOnePath={images.search}
            titleLogosize={RF(20)}
            rightIconSize={RF(20)}
          />
        </View>
        <View style={styles.contentContainer}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            {messages ? <>{renderMessages()}</> : <></>}
          </KeyboardAwareScrollView>
        </View>
      </View>
    </Wrapper>
  );
};

export default Message;
