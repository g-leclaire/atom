// This is loaded by atom-environment.coffee. See
// https://atom.io/docs/api/latest/Config for more information about config
// schemas.
const configSchema = {
  core: {
    type: 'object',
    properties: {
      
    }
  }
}

if (['win32', 'linux'].includes(process.platform)) {
  configSchema.core.properties.autoHideMenuBar = {
    type: 'boolean',
    default: false,
    description: 'Automatically hide the menu bar and toggle it by pressing Alt. This is only supported on Windows & Linux.'
  }
}

if (process.platform === 'darwin') {
  configSchema.core.properties.titleBar = {
    type: 'string',
    default: 'native',
    enum: ['native', 'custom', 'custom-inset', 'hidden'],
    description: 'Experimental: A `custom` title bar adapts to theme colors. Choosing `custom-inset` adds a bit more padding. The title bar can also be completely `hidden`.<br>Note: Switching to a custom or hidden title bar will compromise some functionality.<br>This setting will require a relaunch of Atom to take effect.'
  }
}

module.exports = configSchema
