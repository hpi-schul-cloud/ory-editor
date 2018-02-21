// @flow
import React, { PureComponent } from 'react'
import Avatar from 'material-ui/Avatar'
import draggable from '../Draggable'
import ListItem from 'material-ui/List/ListItem'
import { Plugin } from 'ory-editor-core'

class Item extends PureComponent {
  props: { plugin: Plugin, insert: any }

  render() {
    const { plugin, insert } = this.props
    if (!plugin.IconComponent && !plugin.text) {
      // logger.warn('Plugin text or plugin icon missing', plugin)
      return null
    }

    const Draggable = draggable(plugin.name)

    // not using css modules here because they don't work with svg icons
    return (
      <Draggable insert={insert} className="ory-toolbar-item-wrapper">
        <ListItem
          leftAvatar={<Avatar icon={plugin.IconComponent} />}
          primaryText={plugin.text}
          secondaryText={plugin.description}
          secondaryTextLines={2}
          disabled
          className="ory-toolbar-item"
        />
      </Draggable>
    )
  }
}

export default Item
