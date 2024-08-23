import { useEffect, useState } from 'react';
// import { Switch } from '@headlessui/react';
// import { SunIcon } from '@heroicons/react/24/solid';
import { FiSun as SunIcon } from 'react-icons/fi';
import { useLocalStorage } from 'usehooks-ts';
import Switch from '../ui/Switch';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function ThemeSwitch() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  const [enabled, setEnabled] = useState(theme == 'light');

  const handleThemeChange = (enabled: boolean) => {
    setTheme(enabled ? 'light' : 'dark');
    setEnabled(enabled);
  };

  return (
    <Switch
      checked={enabled}
      onChange={handleThemeChange}
      className={classNames(
        enabled ? 'bg-gray-400' : 'bg-yellow-600',
        'inline-flex relative flex-shrink-0 w-11 h-6 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out cursor-pointer'
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'inline-block relative w-5 h-5 bg-white rounded-full ring-0 shadow transition duration-200 ease-in-out transform pointer-events-none'
        )}
      >
        <span
          className={classNames(
            enabled
              ? 'opacity-0 duration-100 ease-out'
              : 'opacity-100 duration-200 ease-in',
            'flex absolute inset-0 justify-center items-center w-full h-full transition-opacity'
          )}
          aria-hidden="true"
        >
          <SunIcon className="w-3 h-3 text-gray-400" />
        </span>
        <span
          className={classNames(
            enabled
              ? 'opacity-100 duration-200 ease-in'
              : 'opacity-0 duration-100 ease-out',
            'flex absolute inset-0 justify-center items-center w-full h-full transition-opacity'
          )}
          aria-hidden="true"
        >
          <SunIcon className="w-3 h-3 text-yellow-600" />
        </span>
      </span>
    </Switch>
  );
}

export default ThemeSwitch;
