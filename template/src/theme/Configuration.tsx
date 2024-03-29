import {Colors, Typography, Spacings, Incubator} from 'react-native-ui-lib';

export const loadDemoConfigurations = () => {
  Typography.loadTypographies({
    h1: {...Typography.text40},
    h2: {...Typography.text50},
    h3: {...Typography.text70M},
    body: Typography.text70,
    bodySmall: Typography.text80,
  });

  Spacings.loadSpacings({
    page: Spacings.s5,
  });

  /* Dark Mode Schemes */
  Colors.loadSchemes({
    light: {
      screenBG: Colors.white,
      textColor: Colors.grey10,
      moonOrSun: Colors.yellow30,
      mountainForeground: Colors.green30,
      mountainBackground: Colors.green50,
    },
    dark: {
      screenBG: Colors.grey10,
      textColor: Colors.white,
      moonOrSun: Colors.grey80,
      mountainForeground: Colors.violet10,
      mountainBackground: Colors.violet20,
    },
  });

  /* Components */
  Incubator.TextField.defaultProps = {
    ...Incubator.TextField.defaultProps,
    preset: 'default',
  };
};
