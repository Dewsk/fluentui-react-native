import * as React from 'react';
import { View, Picker, Switch } from 'react-native';
import { FocusZone, Button, Text, FocusZoneDirection, Checkbox } from '@fluentui/react-native';
import { Test, TestSection, PlatformStatus } from '../Test';
import { FOCUSZONE_TESTPAGE } from './consts';
import { focusZoneTestStyles, stackStyleFocusZone } from './styles';
import { commonTestStyles } from '../Common/styles';
import { Stack } from '@fluentui-react-native/stack';

const DirectionalFocusZone: React.FunctionComponent = () => {
  return (
    <View>
      <Button content="Outside FocusZone" />
      <Text variant="headerSemibold">FocusZone with Bidirectional arrow key navigation</Text>
      <FocusZone focusZoneDirection="bidirectional">
        <Checkbox label="Option A" />
        <Checkbox label="Option B" />
        <Checkbox label="Option C" />
        <Checkbox label="Option D" />
      </FocusZone>
      <Button content="Outside FocusZone" />
      <Text variant="headerSemibold">FocusZone with Vertical arrow key navigation</Text>
      <FocusZone focusZoneDirection="vertical">
        <Checkbox label="Option A" />
        <Checkbox label="Option B" />
        <Checkbox label="Option C" />
        <Checkbox label="Option D" />
      </FocusZone>
      <Button content="Outside FocusZone" />
      <Text variant="headerSemibold">FocusZone with Horizontal arrow key navigation</Text>
      <FocusZone focusZoneDirection="horizontal">
        <Checkbox label="Option A" />
        <Checkbox label="Option B" />
        <Checkbox label="Option C" />
        <Checkbox label="Option D" />
      </FocusZone>
      <Button content="Outside FocusZone" />
      <Text variant="headerSemibold">FocusZone with No arrow key navigation</Text>
      <FocusZone focusZoneDirection="none">
        <Checkbox label="Option A" />
        <Checkbox label="Option B" />
        <Checkbox label="Option C" />
        <Checkbox label="Option D" />
      </FocusZone>
      <Button content="Outside FocusZone" />
      <Text variant="headerSemibold">FocusZone with no props set</Text>
      <FocusZone>
        <Checkbox label="Option A" />
        <Checkbox label="Option B" />
        <Checkbox label="Option C" />
        <Checkbox label="Option D" />
      </FocusZone>
      <Button content="Outside FocusZone" />
    </View>
  );
};

const CommonUsageFocusZone: React.FunctionComponent = () => {
  return (
    <View>
      <Button content="Outside FocusZone" />
      <Text variant="headerSemibold">FocusZone with Circular Navigation</Text>
      <FocusZone isCircularNavigation={true}>
        <Checkbox label="Option A" />
        <Checkbox label="Option B" />
        <Checkbox label="Option C" />
        <Checkbox label="Option D" />
      </FocusZone>
      <Button content="Outside FocusZone" />
      <Text variant="headerSemibold">Disabled FocusZone</Text>
      <FocusZone disabled={true}>
        <Checkbox label="Option A" />
        <Checkbox label="Option B" />
        <Checkbox label="Option C" />
        <Checkbox label="Option D" />
      </FocusZone>
      <Button content="Outside FocusZone" />
    </View>
  );
};

const Navigation2DFocusZone: React.FunctionComponent = () => {
  const buttonRefs = [];
  const [defaultTabbableElementIndex, setDefaultTabbableElementIndex] = React.useState<number>(5);
  const onClick = React.useCallback(
    (i: number) => {
      setDefaultTabbableElementIndex(i);
    },
    [setDefaultTabbableElementIndex],
  );

  for (let i = 0; i <= 9; i++) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = React.useRef<View>(null);
    buttonRefs.push(i == 0 ? undefined : ref);
  }

  return (
    <View>
      <View>
        <Button content="Outside FocusZone" />
        <Button content="Clear default tabble element" onClick={() => onClick(0)} />
      </View>
      <FocusZone use2DNavigation={true} defaultTabbableElement={buttonRefs[defaultTabbableElementIndex]} isCircularNavigation={true}>
        <View style={focusZoneTestStyles.focusZoneContainer}>
          <View style={focusZoneTestStyles.focusZoneViewStyle}>
            <Button content="#1" style={focusZoneTestStyles.focusZoneButton} componentRef={buttonRefs[1]} onClick={() => onClick(1)} />
            <Button content="#2" style={focusZoneTestStyles.focusZoneButton} componentRef={buttonRefs[2]} onClick={() => onClick(2)} />
            <Button content="#3" style={focusZoneTestStyles.focusZoneButton} componentRef={buttonRefs[3]} onClick={() => onClick(3)} />
          </View>
          <View style={focusZoneTestStyles.focusZoneViewStyle}>
            <Button content="#4" style={focusZoneTestStyles.focusZoneButton} componentRef={buttonRefs[4]} onClick={() => onClick(4)} />
            <Button content="#5" style={focusZoneTestStyles.focusZoneButton} componentRef={buttonRefs[5]} onClick={() => onClick(5)} />
            <Button content="#6" style={focusZoneTestStyles.focusZoneButton} componentRef={buttonRefs[6]} onClick={() => onClick(6)} />
          </View>
          <View style={focusZoneTestStyles.focusZoneViewStyle}>
            <Button content="#7" style={focusZoneTestStyles.focusZoneButton} componentRef={buttonRefs[7]} onClick={() => onClick(7)} />
            <Button content="#8" style={focusZoneTestStyles.focusZoneButton} componentRef={buttonRefs[8]} onClick={() => onClick(8)} />
            <Button content="#9" style={focusZoneTestStyles.focusZoneButton} componentRef={buttonRefs[9]} onClick={() => onClick(9)} />
          </View>
        </View>
      </FocusZone>
      <View>
        <Button content="Outside FocusZone" />
      </View>
    </View>
  );
};

interface ISwitchWithLabelProps {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

function SwitchWithLabel(props: ISwitchWithLabelProps): React.ReactElement {
  const { label, value, onValueChange } = props;
  return (
    <View style={commonTestStyles.switch}>
      <Text>{label}</Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
}

const focusZoneDirectionStrings = ['Bidirectional', 'Horizontal', 'Vertical', 'None'];

const CustomizableFocusZone: React.FunctionComponent = () => {
  const [is2DNav, set2dNav] = React.useState(false);
  const [isDisabled, setDisabled] = React.useState(false);
  const [isCircularNav, setIsCircularNav] = React.useState(false);

  const [isFocusZoneDirection, setFocusZoneDirection] = React.useState<FocusZoneDirection>('bidirectional');

  return (
    <View style={commonTestStyles.root}>
      <Stack style={stackStyleFocusZone}>
        <View style={commonTestStyles.settings}>
          <SwitchWithLabel label="2D Navigation" value={is2DNav} onValueChange={set2dNav} />
          <SwitchWithLabel label="Disabled" value={isDisabled} onValueChange={setDisabled} />
          <SwitchWithLabel label="Circular Navigation" value={isCircularNav} onValueChange={setIsCircularNav} />
          <Picker
            prompt="Direction"
            style={commonTestStyles.header}
            selectedValue="Bidirectional"
            onValueChange={(direction) => {
              switch (direction) {
                case 'Bidirectional':
                  setFocusZoneDirection('bidirectional');
                  break;
                case 'Horizontal':
                  setFocusZoneDirection('horizontal');
                  break;
                case 'Vertical':
                  setFocusZoneDirection('vertical');
                  break;
                case 'None':
                  setFocusZoneDirection('none');
                  break;
              }
            }}
          >
            {focusZoneDirectionStrings.map((direction, index) => (
              <Picker.Item label={direction} key={index} value={direction} />
            ))}
          </Picker>
        </View>

        <View>
          <Button content="Outside FocusZone" />
        </View>
        <FocusZone
          disabled={isDisabled}
          use2DNavigation={is2DNav}
          focusZoneDirection={isFocusZoneDirection}
          isCircularNavigation={isCircularNav}
        >
          <View style={focusZoneTestStyles.focusZoneContainer}>
            <View style={focusZoneTestStyles.focusZoneViewStyle}>
              <Button content="#1" style={focusZoneTestStyles.focusZoneButton} />
              <Button content="#2" style={focusZoneTestStyles.focusZoneButton} />
              <Button content="#3" style={focusZoneTestStyles.focusZoneButton} />
            </View>
            <View style={focusZoneTestStyles.focusZoneViewStyle}>
              <Button content="#4" style={focusZoneTestStyles.focusZoneButton} />
              <Button content="#5" style={focusZoneTestStyles.focusZoneButton} />
              <Button content="#6" style={focusZoneTestStyles.focusZoneButton} />
            </View>
            <View style={focusZoneTestStyles.focusZoneViewStyle}>
              <Button content="#7" style={focusZoneTestStyles.focusZoneButton} />
              <Button content="#8" style={focusZoneTestStyles.focusZoneButton} />
              <Button content="#9" style={focusZoneTestStyles.focusZoneButton} />
            </View>
          </View>
        </FocusZone>
        <View>
          <Button content="Outside FocusZone" />
        </View>
      </Stack>
    </View>
  );
};

const focusZoneSections: TestSection[] = [
  {
    name: 'Directional FocusZone Usage',
    testID: FOCUSZONE_TESTPAGE,
    component: DirectionalFocusZone,
  },
  {
    name: 'Common FocusZone Usage',
    component: CommonUsageFocusZone,
  },
  {
    name: '2D Navigation with Default Tabbable Element (#5) FocusZone Usage',
    component: Navigation2DFocusZone,
  },
  {
    name: 'Customizable FocusZone',
    component: CustomizableFocusZone,
  },
];

export const FocusZoneTest: React.FunctionComponent = () => {
  const status: PlatformStatus = {
    win32Status: 'Beta',
    uwpStatus: 'Experimental',
    iosStatus: 'Experimental',
    macosStatus: 'Experimental',
    androidStatus: 'Backlog',
  };

  const description = 'No description.';

  return <Test name="FocusZone Test" description={description} sections={focusZoneSections} status={status}></Test>;
};
