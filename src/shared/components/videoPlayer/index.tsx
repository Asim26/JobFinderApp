import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import images from '../../../assets/images/images';
import {RF} from '../../theme/responsive';
import Button from '../button/button';
import styles from './styles';
import VideoPlayerControl from 'react-native-video-controls';

interface VideoPlayer {
  url: any;
  modalVisible: any;
  onPressClose: any;
}

const VideoPlayer = (props: VideoPlayer) => {
  const [modalVisible, setModalVisible] = useState(false);

  const videoRef = useRef();
  useEffect(() => {
    setModalVisible(props.modalVisible);
  }, [props.modalVisible]);

  console.log("video url ===>>>",props?.url)

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            height: RF(500),
            width: '90%',
            borderRadius: RF(10),
            // justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <View style={styles.mainContainer}>
            <Pressable
              onPress={props.onPressClose}
              style={styles.cancelIconContainer}>
              <Image source={images.cancel} style={styles.cancelIcon} />
            </Pressable>

            <View style={styles.imageRowContainer}>
              {props?.url?.video ? (
                <VideoPlayerControl
                  ref={videoRef}
                  disableFullscreen
                  disableBack
                  disableVolume
                  source={{
                    uri: props?.url?.video,
                  }}
                  style={[styles.backgroundVideo]}
                />
              ) : (
                <Image source={{uri: props?.url.image}} style={styles.image} />
              )}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default VideoPlayer;
