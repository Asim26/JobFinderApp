import React, {useRef, useState} from 'react';
import Wrapper from '../../../../shared/components/wrapper';
import {FlatList, View} from 'react-native';
import styles from './styles';
import images from '../../../../assets/images/images';
import Header from '../../../../shared/components/header/header';
import {ScreenTitle} from '../../../../shared/utils/ScreenTitle';
import RowItem from '../../../../shared/components/rowItem';
import {navigationRef} from '../../../../shared/services/NavService';

const Settings = () => {
  const [settings, setSettings] = useState([
    {
      id: 0,
      title: 'New Post',
      subtitle: 'If any new post update',
      image: images.notification,
      value: false,
    },
    {
      id: 1,
      title: 'Got Hired',
      subtitle: 'If you get hired at any company',
      image: images.lock,
      value: false,
    },
    {
      id: 2,
      title: 'Get Rejected',
      subtitle: 'If you rejected by any company',
      image: images.help,
      value: false,
    },
    {
      id: 3,
      title: 'Message',
      subtitle: 'Got any new message',
      image: images.help,
      value: false,
    },
    {
      id: 4,
      title: 'Call',
      subtitle: 'Have a call',
      image: images.help,
      value: false,
    },
    {
      id: 5,
      title: 'Dark Mode',
      subtitle: 'Enable dark theme',
      image: images.help,
      value: false,
    },
  ]);

  const renderSettingsItem = (item: any) => {
    return (
      <RowItem
        title={item.title}
        subtitle={item.subtitle}
        borderBottom
        isSwitch
        onSwitch={value => {
          onSwitch(item, value);
        }}
        switchValue={item.value}
      />
    );
  };
  const onSwitch = (item, value) => {
    setSettings(
      settings.map((elem: any) => {
        if (elem.id === item.id) {
          return {
            ...elem,
            value: value,
          };
        } else return elem;
      }),
    );
  };

  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header
            leftIconPath={images.arrowBack}
            onLeftIconPress={() => {
              navigationRef.current.goBack();
            }}
            title={ScreenTitle.NOTIFICATION_SETTINGS}
          />
        </View>
        <View style={styles.contentContainer}>
          <FlatList
            data={settings}
            renderItem={({item}) => renderSettingsItem(item)}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default Settings;
