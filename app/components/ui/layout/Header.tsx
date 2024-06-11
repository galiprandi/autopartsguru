import { Breadcrumb } from '../Breadcrumb'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <h2>Auto Parts</h2>
          </li>
        </ul>
        <ul>
          <li>
            <Breadcrumb />
          </li>
        </ul>
      </nav>
    </header>
  )
}
