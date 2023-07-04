import Button from '@shared/ui/Button/ui'
import {useState} from 'react'
import classNames from 'classnames'
import {CSSTransition, SwitchTransition} from 'react-transition-group'
import useToggle from '@shared/hooks/useToggle'
import './AboutTabs.scss'

const AboutTabs = (props) => {
  const { items = [] } = props
  const defaultActiveTab = items.find(({ isActive }) => isActive) || items[0]
  const defaultActiveTabId = defaultActiveTab?.id || null
  const [activeTabId, setActiveTabId] = useState(defaultActiveTabId)

  const {
    value: animation,
    toggleState: toggleAnimation,
  } = useToggle(defaultActiveTabId)

  const isEmpty = items.length === 0
  if (isEmpty) {
    return null
  }

  const { content } = items.find(({ id }) => activeTabId === id)

  return (
    <div className="about-tabs">
      <div className="about-tabs__aside">
        {items.map(({ id, title }) => {
          return (
            <div
              className={classNames(
                'about-tabs__wrapper-button',
                { 'is-active': activeTabId === id }
              )}
              key={id}
            >
              <Button
                className="about-tabs__button button--line label"
                onClick={() => {
                  setActiveTabId(id)
                  toggleAnimation()
                }}
              >
                {title}
              </Button>
            </div>
          )
        })}
      </div>
      <SwitchTransition
        mode="out-in"
      >
        <CSSTransition
          timeout={300}
          key={animation}
          classNames="about-tabs"
        >
          <div className="about-tabs__content">
            {content}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

export default AboutTabs