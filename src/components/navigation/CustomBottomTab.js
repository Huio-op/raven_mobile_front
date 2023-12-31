import { Image, Pressable, View, StyleSheet, Text } from 'react-native';
import { images } from '../../constants';
import { SPECIAL_ROUTES } from '../CustomTitle';

export default function CustomBottomTab({
  state: { index: activeIndex, routes },
  navigation,
  descriptors,
}) {
  return (
    <View style={{ backgroundColor: 'transparent', height: 25 }}>
      <Image source={images.background} style={styles.bottomTabBg}></Image>
      <View style={styles.tabBarContainer}>
        {routes
          .filter((route) => !SPECIAL_ROUTES.some((r) => r.key === route.name))
          .map((route, index) => {
            const active = index === activeIndex;
            const { options } = descriptors[route.key];

            return (
              <TabComponent
                key={route.key}
                active={active}
                options={options}
                onPress={(e) => {
                  if (route.name === 'Create') {
                    e.preventDefault();
                  } else {
                    navigation.navigate(route.name);
                  }
                }}
              />
            );
          })}
      </View>
    </View>
  );
}

const TabComponent = ({ active, options, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.navigationButton}>
      <View>{options.tabBarIcon ? options.tabBarIcon({ focused: active }) : <Text>?</Text>}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bottomTabBg: {
    width: '100%',
    objectFit: 'fill',
    position: 'absolute',
    bottom: -20,
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent',
    height: 90,
    top: -20,
  },
  navigationButton: {
    alignItems: 'center',
    height: 60,
    width: 60,
    marginTop: -5,
  },
});
