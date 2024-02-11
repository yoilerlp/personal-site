'use client'
import Icon from './Icon'
import { Colors } from '@/util/theme/colors'
type ThemeToggleButtonProps = {
  isDark?: boolean
  toggleTheme?: () => void
}

export default function ThemeToggleButton({
  isDark,
  toggleTheme,
}: ThemeToggleButtonProps) {
  return (
    <div className='toggle-component' onClick={() => toggleTheme?.()}>
      <div className='toggle-box'>
        <Icon
          iconName='Moon'
          color={isDark ? Colors.primary : 'transparent'}
          size={28}
        />
      </div>
      <div className={`indicator ${isDark ? 'is-dark' : 'is-light'}`} />
      <div className='toggle-box'>
        <Icon
          iconName='Sun'
          color={isDark ? 'transparent' : Colors.primary}
          size={28}
        />
      </div>
    </div>
  )
}
