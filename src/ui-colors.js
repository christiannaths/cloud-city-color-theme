import config from './config.json';

const { colors } = config;

// uncomment at will
export default {
  'activityBar.background': colors.neutralSilver,
  'activityBar.border': colors.neutralMedium + '50',
  // 'activityBar.dropBackground': '',
  'activityBar.foreground': colors.neutralDark,
  // 'activityBar.inactiveForeground': '',
  // 'activityBarBadge.background': '',
  // 'activityBarBadge.foreground': '',
  // 'badge.background': '',
  // 'badge.foreground': '',
  // 'breadcrumb.activeSelectionForeground': '',
  // 'breadcrumb.focusForeground': '',
  // 'breadcrumb.foreground': '',
  // 'breadcrumbPicker.background': '',
  // 'button.background': '',
  // 'button.foreground': '',
  // 'button.hoverBackground': '',
  // 'debugExceptionWidget.background': '',
  // 'debugExceptionWidget.border': '',
  // 'debugToolBar.background': '',
  // 'debugToolBar.border': '',
  // 'diffEditor.border': '',
  // 'diffEditor.insertedTextBackground': '',
  // 'diffEditor.insertedTextBorder': '',
  // 'diffEditor.removedTextBackground': '',
  // 'diffEditor.removedTextBorder': '',
  // 'dropdown.background': '',
  // 'dropdown.border': '',
  // 'dropdown.foreground': '',
  // 'dropdown.listBackground': '',
  'editor.background': colors.white,
  'editor.findMatchBackground': colors.blue + '33',
  // 'editor.findMatchBorder': '',
  'editor.findMatchHighlightBackground': colors.black + '10',
  // 'editor.findMatchHighlightBorder': '',
  // 'editor.findRangeHighlightBackground': '',
  // 'editor.findRangeHighlightBorder': '',
  // 'editor.focusedStackFrameHighlightBackground': '',
  'editor.foreground': colors.neutralMedium,
  // 'editor.hoverHighlightBackground': '',
  // 'editor.inactiveSelectionBackground': '',
  'editor.lineHighlightBackground': colors.blue + '10',
  'editor.lineHighlightBorder': colors.white,
  // 'editor.rangeHighlightBackground': '',
  // 'editor.rangeHighlightBorder': '',
  'editor.selectionBackground': colors.yellow + '22',
  // 'editor.selectionForeground': '',
  // 'editor.selectionHighlightBackground': '',
  // 'editor.selectionHighlightBorder': '',
  // 'editor.snippetFinalTabstopHighlightBackground': '',
  // 'editor.snippetFinalTabstopHighlightBorder': ''
  // 'editor.snippetTabstopHighlightBackground': '',
  // 'editor.snippetTabstopHighlightBorder': '',
  // 'editor.stackFrameHighlightBackground': '',
  // 'editor.wordHighlightBackground': '',
  // 'editor.wordHighlightBorder': '',
  // 'editor.wordHighlightStrongBackground': '',
  // 'editor.wordHighlightStrongBorder': '',
  // 'editorBracketMatch.background': '',
  // 'editorBracketMatch.border': '',
  // 'editorCodeLens.foreground': '',
  // 'editorCursor.background': '',
  'editorCursor.foreground': colors.black,
  // 'editorError.border': '',
  // 'editorError.foreground': '',
  // 'editorGroup.border': '',
  // 'editorGroup.dropBackground': '',
  // 'editorGroup.emptyBackground': '',
  // 'editorGroup.focusedEmptyBorder': '',
  // 'editorGroupHeader.noTabsBackground': '',
  // 'editorGroupHeader.tabsBackground': '',
  // 'editorGroupHeader.tabsBorder': '',
  // 'editorGutter.addedBackground': '',
  // 'editorGutter.background': '',
  // 'editorGutter.deletedBackground': '',
  // 'editorGutter.modifiedBackground': '',
  // 'editorHint.border': '',
  // 'editorHint.foreground': '',
  // 'editorHoverWidget.background': '',
  // 'editorHoverWidget.border': '',
  // 'editorIndentGuide.activeBackground': '',
  // 'editorIndentGuide.background': '',
  // 'editorInfo.border': '',
  // 'editorInfo.foreground': '',
  'editorLineNumber.activeForeground': colors.purple,
  'editorLineNumber.foreground': colors.neutralSilver,
  // 'editorLink.activeForeground': '',
  // 'editorMarkerNavigation.background': '',
  // 'editorMarkerNavigationError.background': '',
  // 'editorMarkerNavigationInfo.background': '',
  // 'editorMarkerNavigationWarning.background': '',
  // 'editorOverviewRuler.addedForeground': '',
  // 'editorOverviewRuler.border': '',
  // 'editorOverviewRuler.bracketMatchForeground': '',
  // 'editorOverviewRuler.commonContentForeground': '',
  // 'editorOverviewRuler.currentContentForeground': '',
  // 'editorOverviewRuler.deletedForeground': '',
  // 'editorOverviewRuler.errorForeground': '',
  // 'editorOverviewRuler.findMatchForeground': '',
  // 'editorOverviewRuler.incomingContentForeground': '',
  // 'editorOverviewRuler.infoForeground': '',
  // 'editorOverviewRuler.modifiedForeground': '',
  // 'editorOverviewRuler.rangeHighlightForeground': '',
  // 'editorOverviewRuler.selectionHighlightForeground': '',
  // 'editorOverviewRuler.warningForeground': '',
  // 'editorOverviewRuler.wordHighlightForeground': '',
  // 'editorOverviewRuler.wordHighlightStrongForeground': '',
  // 'editorRuler.foreground': '',
  // 'editorSuggestWidget.background': '',
  // 'editorSuggestWidget.border': '',
  // 'editorSuggestWidget.foreground': '',
  // 'editorSuggestWidget.highlightForeground': '',
  // 'editorSuggestWidget.selectedBackground': '',
  // 'editorUnnecessaryCode.border': '',
  // 'editorUnnecessaryCode.opacity': '',
  // 'editorWarning.border': '',
  // 'editorWarning.foreground': '',
  // 'editorWhitespace.foreground': '',
  // 'editorWidget.background': '',
  // 'editorWidget.border': '',
  // 'editorWidget.resizeBorder': '',
  // 'extensionButton.prominentBackground': '',
  // 'extensionButton.prominentForeground': '',
  // 'extensionButton.prominentHoverBackground': '',
  // 'gitDecoration.addedResourceForeground': '',
  // 'gitDecoration.conflictingResourceForeground': '',
  // 'gitDecoration.deletedResourceForeground': '',
  // 'gitDecoration.ignoredResourceForeground': '',
  // 'gitDecoration.modifiedResourceForeground': '',
  // 'gitDecoration.submoduleResourceForeground': '',
  // 'gitDecoration.untrackedResourceForeground': '',
  // 'input.background': '',
  // 'input.border': '',
  // 'input.foreground': '',
  // 'input.placeholderForeground': '',
  // 'inputOption.activeBorder': '',
  // 'inputValidation.errorBackground': '',
  // 'inputValidation.errorBorder': '',
  // 'inputValidation.errorForeground': '',
  // 'inputValidation.infoBackground': '',
  // 'inputValidation.infoBorder': '',
  // 'inputValidation.infoForeground': '',
  // 'inputValidation.warningBackground': '',
  // 'inputValidation.warningBorder': '',
  // 'inputValidation.warningForeground': '',
  // 'list.activeSelectionBackground': '',
  // 'list.activeSelectionForeground': '',
  // 'list.dropBackground': '',
  // 'list.errorForeground': '',
  // 'list.focusBackground': '',
  // 'list.focusForeground': '',
  // 'list.highlightForeground': '',
  // 'list.hoverBackground': '',
  // 'list.hoverForeground': '',
  // 'list.inactiveFocusBackground': '',
  // 'list.inactiveSelectionBackground': '',
  // 'list.inactiveSelectionForeground': '',
  // 'list.invalidItemForeground': '',
  // 'list.warningForeground': '',
  // 'menu.background': '',
  // 'menu.foreground': '',
  // 'menu.selectionBackground': '',
  // 'menu.selectionBorder': '',
  // 'menu.selectionForeground': '',
  // 'menu.separatorBackground': '',
  // 'menubar.selectionBackground': '',
  // 'menubar.selectionBorder': '',
  // 'menubar.selectionForeground': '',
  // 'merge.border': '',
  // 'merge.commonContentBackground': '',
  // 'merge.commonHeaderBackground': '',
  // 'merge.currentContentBackground': '',
  // 'merge.currentHeaderBackground': '',
  // 'merge.incomingContentBackground': '',
  // 'merge.incomingHeaderBackground': '',
  // 'notification.background': '',
  // 'notification.buttonBackground': '',
  // 'notification.buttonForeground': '',
  // 'notification.buttonHoverBackground': '',
  // 'notification.errorBackground': '',
  // 'notification.errorForeground': '',
  // 'notification.foreground': '',
  // 'notification.infoBackground': '',
  // 'notification.infoForeground': '',
  // 'notification.warningBackground': '',
  // 'notification.warningForeground': '',
  // 'notificationCenter.border': '',
  // 'notificationCenterHeader.background': '',
  // 'notificationCenterHeader.foreground': '',
  // 'notificationLink.foreground': '',
  // 'notifications.background': '',
  // 'notifications.border': '',
  // 'notifications.foreground': '',
  // 'notificationToast.border': '',
  // 'panel.background': '',
  // 'panel.border': '',
  // 'panel.dropBackground': '',
  // 'panelTitle.activeBorder': '',
  // 'panelTitle.activeForeground': '',
  // 'panelTitle.inactiveForeground': '',
  // 'peekView.border': '',
  // 'peekViewEditor.background': '',
  // 'peekViewEditor.matchHighlightBackground': '',
  // 'peekViewEditor.matchHighlightBorder': '',
  // 'peekViewEditorGutter.background': '',
  // 'peekViewResult.background': '',
  // 'peekViewResult.fileForeground': '',
  // 'peekViewResult.lineForeground': '',
  // 'peekViewResult.matchHighlightBackground': '',
  // 'peekViewResult.selectionBackground': '',
  // 'peekViewResult.selectionForeground': '',
  // 'peekViewTitle.background': '',
  // 'peekViewTitleDescription.foreground': '',
  // 'peekViewTitleLabel.foreground': '',
  // 'pickerGroup.border': '',
  // 'pickerGroup.foreground': '',
  // 'progressBar.background': '',
  'scrollbar.shadow': colors.white,
  // 'scrollbarSlider.activeBackground': '',
  // 'scrollbarSlider.background': '',
  // 'scrollbarSlider.hoverBackground': '',
  // 'selection.background': '',
  // 'settings.checkboxBackground': '',
  // 'settings.checkboxBorder': '',
  // 'settings.checkboxForeground': '',
  // 'settings.dropdownBackground': '',
  // 'settings.dropdownBorder': '',
  // 'settings.dropdownForeground': '',
  // 'settings.dropdownListBorder': '',
  // 'settings.headerForeground': '',
  // 'settings.modifiedItemIndicator': '',
  // 'settings.numberInputBackground': '',
  // 'settings.numberInputBorder': '',
  // 'settings.numberInputForeground': '',
  // 'settings.textInputBackground': '',
  // 'settings.textInputBorder': '',
  // 'settings.textInputForeground': '',
  'sideBar.background': colors.neutralSilver,
  // 'sideBar.border': '',
  'sideBar.dropBackground': colors.neutralMedium,
  'sideBar.foreground': colors.black,
  // 'sideBarSectionHeader.background': '',
  // 'sideBarSectionHeader.border': '',
  // 'sideBarSectionHeader.foreground': '',
  // 'sideBarTitle.foreground': '',
  'statusBar.background': colors.neutralSilver,
  // 'statusBar.border': '',
  // 'statusBar.debuggingBackground': '',
  // 'statusBar.debuggingBorder': '',
  // 'statusBar.debuggingForeground': '',
  'statusBar.foreground': colors.black,
  // 'statusBar.noFolderBackground': '',
  // 'statusBar.noFolderBorder': '',
  // 'statusBar.noFolderForeground': '',
  // 'statusBarItem.activeBackground': '',
  // 'statusBarItem.hoverBackground': '',
  // 'statusBarItem.prominentBackground': '',
  // 'statusBarItem.prominentHoverBackground': '',
  'tab.activeBackground': colors.white,
  'tab.activeBorder': colors.white,
  'tab.activeBorderTop': colors.purple,
  'tab.activeForeground': colors.neutralDark,
  // 'tab.activeModifiedBorder': '',
  'tab.border': colors.neutralSilver,
  // 'tab.hoverBackground': '',
  // 'tab.hoverBorder': '',
  'tab.inactiveBackground': colors.neutralSilver,
  // 'tab.inactiveForeground': '',
  // 'tab.inactiveModifiedBorder': '',
  // 'tab.unfocusedActiveBorder': '',
  // 'tab.unfocusedActiveBorderTop': '',
  // 'tab.unfocusedActiveForeground': '',
  // 'tab.unfocusedActiveModifiedBorder': '',
  // 'tab.unfocusedHoverBackground': '',
  // 'tab.unfocusedHoverBorder': '',
  // 'tab.unfocusedInactiveForeground': '',
  // 'tab.unfocusedInactiveModifiedBorder': '',
  // 'terminal.ansiBlack': '',
  // 'terminal.ansiBlue': '',
  // 'terminal.ansiBrightBlack': '',
  // 'terminal.ansiBrightBlue': '',
  // 'terminal.ansiBrightCyan': '',
  // 'terminal.ansiBrightGreen': '',
  // 'terminal.ansiBrightMagenta': '',
  // 'terminal.ansiBrightRed': '',
  // 'terminal.ansiBrightWhite': '',
  // 'terminal.ansiBrightYellow': '',
  // 'terminal.ansiCyan': '',
  // 'terminal.ansiGreen': '',
  // 'terminal.ansiMagenta': '',
  // 'terminal.ansiRed': '',
  // 'terminal.ansiWhite': '',
  // 'terminal.ansiYellow': '',
  // 'terminal.background': '',
  // 'terminal.border': '',
  // 'terminal.foreground': '',
  // 'terminal.selectionBackground': '',
  // 'terminalCursor.background': '',
  // 'terminalCursor.foreground': '',
  // 'textBlockQuote.background': '',
  // 'textBlockQuote.border': '',
  // 'textCodeBlock.background': '',
  // 'textLink.activeForeground': '',
  // 'textLink.foreground': '',
  // 'textPreformat.foreground': '',
  // 'textSeparator.foreground': '',
  'titleBar.activeBackground': colors.neutralSilver,
  // 'titleBar.activeForeground': '',
  // 'titleBar.border': '',
  // 'titleBar.inactiveBackground': '',
  // 'titleBar.inactiveForeground': '',
  // 'walkThrough.embeddedEditorBackground': '',
  // 'welcomePage.buttonBackground': '',
  // 'welcomePage.buttonHoverBackground': '',
  // 'widget.shadow': '',
  // contrastActiveBorder: '',
  // contrastBorder: '',
  // descriptionForeground: '',
  // errorForeground: '',
  // focusBorder: '',
  foreground: colors.neutralMedium
};
