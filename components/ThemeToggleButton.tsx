'use client'

import useCurrentTheme from '@/hooks/useCurrentTheme'
import Icon from './Icon'
import { Colors } from '@/util/theme/colors'

export default function ThemeToggleButton() {
  const { toggleTheme, theme } = useCurrentTheme()
  return (
    <div className='toggle-component' onClick={toggleTheme}>
      <input type='checkbox' className='toggle-input' />
      <div className='toggle-box'>
        <Icon
          iconName='Moon'
          color={theme === 'dark' ? Colors.primary : 'transparent'}
          size={28}
        />
      </div>
      <div className={`indicator ${theme === 'dark' ? 'dark' : ''}`}></div>
      <div className='toggle-box'>
        <Icon
          iconName='Sun'
          color={theme === 'dark' ? 'transparent' : Colors.primary}
          size={28}
        />
      </div>
    </div>
  )
}
