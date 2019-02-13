/* eslint no-use-before-define: ["error", { "variables": false }] */

import PropTypes from 'prop-types';
import React from 'react';
import { Image, StyleSheet, View, ViewPropTypes } from 'react-native';
import Lightbox from 'react-native-lightbox';

export default function MessageImage({
  containerStyle,
  lightboxProps,
  imageProps,
  imageStyle,
  currentMessage,
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Lightbox
        springConfig={{ tension: 900000, friction: 900000 }}
        activeProps={{
          style: styles.imageActive,
        }}
        renderHeader={close => (
          <TouchableOpacity onPress={close}>
            <Text style={styles.closeButton}>×</Text>
          </TouchableOpacity>
        )}
        {...lightboxProps}
      >
        <Image
          {...imageProps}
          style={[styles.image, imageStyle]}
          source={{ uri: currentMessage.image }}
        />
      </Lightbox>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
    resizeMode: 'cover',
  },
  imageActive: {
    flex: 1,
    resizeMode: 'contain',
  },
  closeButton: {
    fontSize: 35,
    color: 'white',
    lineHeight: 60,
    width: 60,
    textAlign: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1.5,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    paddingVertical: 10,
    paddingHorizontal: 10
  }
});

MessageImage.defaultProps = {
  currentMessage: {
    image: null,
  },
  containerStyle: {},
  imageStyle: {},
  imageProps: {},
  lightboxProps: {},
};

MessageImage.propTypes = {
  currentMessage: PropTypes.object,
  containerStyle: ViewPropTypes.style,
  imageStyle: Image.propTypes.style,
  imageProps: PropTypes.object,
  lightboxProps: PropTypes.object,
};
