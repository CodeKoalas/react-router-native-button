# React Router Native Button

```
import RouterButton from 'react-router-native-button';

<RouterButton
  to="/settings"
  title="Settings"
  color="#841584"
  accessibilityLabel="Click to navigate to settings"
/>
```

```
<RouterButton
  to={{
    pathname: '/courses',
    search: '?sort=name',
    hash: '#the-hash',
    state: { fromDashboard: true }
  title="Courses"
  color="#841584"
  accessibilityLabel="Click to navigate to settings"
/>
```

## Install

```
npm install -g react-router-native-button
```

## Props

```
accessibilityLabel?: ?string 

Text to display for blindness accessibility features
```

```
color?: ?string 

Color of the text (iOS), or background color of the button (Android)
```

```
disabled?: ?boolean 

If true, disable all interactions for this component.
```

```
onPress: () => any 

Handler to be called when the user taps the button
```

```
testID?: ?string 

Used to locate this view in end-to-end tests.
```

```
title: string 

Text to display inside the button
```

```
to: ?string

The pathname or location to link to.
```

```
to: ?object

The location to link to.
```

```
replace: ?boolean

When true, clicking the button will replace the current entry in the history stack instead of adding a new one.
```

## Credits

[React Native](https://github.com/facebook/react-native) for the Button code

[React Router](https://github.com/ReactTraining/react-router) for the Link code that's used here
