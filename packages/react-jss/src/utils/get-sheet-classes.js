// @flow

import type {StyleSheet} from 'jss'
import type {DynamicRules} from '../types'
import {getMetaForSheet} from './sheets-meta'

const getSheetClasses = (sheet: StyleSheet, dynamicRules: ?DynamicRules) => {
  if (!dynamicRules) {
    return sheet.classes
  }

  const classes = {}
  const meta = getMetaForSheet(sheet)

  if (!meta) {
    return sheet.classes
  }

  for (const key in meta.styles) {
    classes[key] = sheet.classes[key]

    if (key in dynamicRules) {
      classes[key] += ` ${sheet.classes[dynamicRules[key].key]}`
    }
  }

  return classes
}

export {getSheetClasses}
