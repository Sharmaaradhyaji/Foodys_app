import React, { useEffect, useState, useRef } from 'react';
import {
  Animated,
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
} from 'react-native';
import { brand } from '../../globals/globals';
import { homeText } from '../../globals/constants/constants';
import { styles } from './splashStyles';

const SPLASH_STATES = {
  LOADING: 'loading',
  READY: 'ready',
  FADING_OUT: 'fading_out',
  HIDDEN: 'hidden',
} as const;

type SplashState = (typeof SPLASH_STATES)[keyof typeof SPLASH_STATES];

const Splash: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1.8)).current;
  const [splashState, setSplashState] = useState<SplashState>(SPLASH_STATES.LOADING);

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start(() => setSplashState(SPLASH_STATES.READY));

    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start(() => setSplashState(SPLASH_STATES.HIDDEN));
    }, 4000);

    return () => clearTimeout(timer);
  }, [scaleAnim, fadeAnim]);

  if (splashState === SPLASH_STATES.HIDDEN) return null;

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        styles.container,
        { opacity: fadeAnim },
      ]}
    >
      <StatusBar barStyle="light-content" backgroundColor={brand.primary} translucent />
      <View style={styles.content}>
        <Animated.View style={[styles.logoContainer, { transform: [{ scale: scaleAnim }] }]}>
          <View style={styles.logo}>
            <Image source={require('../../assets/images/image.png')} />
          </View>
          <Text style={styles.appName}>Foody's</Text>
          <Text style={styles.otherHeading}>{homeText.Heading2}</Text>
          <View style={styles.loadingContainer}>
            <LoadingDots />
          </View>
        </Animated.View>
      </View>
    </Animated.View>
  );
};

const LoadingDots: React.FC = () => {
  const dot1Anim = useRef(new Animated.Value(0)).current;
  const dot2Anim = useRef(new Animated.Value(0)).current;
  const dot3Anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const createDotAnimation = (animValue: Animated.Value, delay: number) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(animValue, {
            toValue: 1,
            duration: 400,
            delay,
            useNativeDriver: true,
          }),
          Animated.timing(animValue, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }),
        ])
      );

    const animations = [
      createDotAnimation(dot1Anim, 0),
      createDotAnimation(dot2Anim, 150),
      createDotAnimation(dot3Anim, 300),
    ];

    animations.forEach(anim => anim.start());
    return () => animations.forEach(anim => anim.stop());
  }, [dot1Anim, dot2Anim, dot3Anim]);

  return (
    <View style={styles.dotsContainer}>
      <Animated.View style={[styles.dot, { opacity: dot1Anim }]} />
      <Animated.View style={[styles.dot, { opacity: dot2Anim }]} />
      <Animated.View style={[styles.dot, { opacity: dot3Anim }]} />
    </View>
  );
};

export default Splash;
