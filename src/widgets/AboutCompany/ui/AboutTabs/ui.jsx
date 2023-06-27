import Button from '@shared/ui/Button/ui'
import { useState } from 'react'
import classNames from 'classnames'
import './AboutTabs.scss'

const AboutTabs = (props) => {
  const { items = [] } = props

  const defaultActiveTab = items.find(({ isActive }) => isActive) || items[0]
  const defaultActiveTabId = defaultActiveTab?.id || null

  const [activeTabId, setActiveTabId] = useState(defaultActiveTabId)

  const isEmpty = items.length === 0

  if (isEmpty) {
    return null
  }

  const { content } = items.find(({ id }) => activeTabId === id)

  return (
    <div className="about-tabs">
      <div className="about-tabs__aside">
        { items.map(({ id, title }) => {
          return (
            <div
              className={ classNames(
                'about-tabs__wrapper-button',
                { 'is-active': activeTabId === id }
              ) }
              key={ id }
            >
              <Button
                className="about-tabs__button button--line label"
                onClick={ () => setActiveTabId(id) }
              >
                { title }
              </Button>
            </div>
          )
        }) }
      </div>
      <div className="about-tabs__content">
        { content }
      </div>
    </div>
  )
}

export default AboutTabs