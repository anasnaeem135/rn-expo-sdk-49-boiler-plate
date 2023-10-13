import * as React from 'react'
import { Checkbox as PaperCheckbox } from 'react-native-paper'

export function Checkbox({ status, onPress, children }) {
  // const [checked, setChecked] = React.useState(false);

  return (
    <PaperCheckbox status={status ? 'checked' : 'unchecked'} onPress={onPress}>
      {children}
    </PaperCheckbox>
  )
}
