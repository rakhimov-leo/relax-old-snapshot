import styles from './Footer.module.css'

export default function Footer() {
  const phone = '1533 - 3759'
  const businessHours = '월 ~ 금 (공휴일제외) 9:00 AM ~ 6:00 PM'
  const representative = '윤형구'

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <img src="/logo.png" alt="내일은편하게 모바일" className={styles.logo} />
          <div className={styles.company}>
            <p>(주)케이플러스&nbsp;&nbsp;&nbsp;&nbsp;대표:{representative}&nbsp;&nbsp;&nbsp;&nbsp;사업자등록번호:562-88-01669&nbsp;&nbsp;&nbsp;&nbsp;통신판매업신고번호 : 제2021-전북익산-0392호</p>
            <p>대표전화: {phone}&nbsp;&nbsp;&nbsp;&nbsp;{businessHours}</p>
            <p>내일은편하게 : 전북특별자치도 익산시 동서로 134, 3층 케이플러스</p>
            <p>개인정보보호책임자 : {representative}</p>
            <p>ⓒ 케이플러스 Corp.</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.socials}>
            <a href="#" aria-label="Instagram" className={styles.social}>
              <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.socialIcon}>
                <rect x="6.2" y="6.2" width="11.6" height="11.6" rx="3.6" ry="3.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="16.2" cy="7.9" r="1" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="Youtube" className={styles.social}>
              <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.socialIcon}>
                <rect x="4.8" y="7.2" width="14.4" height="9.6" rx="2.8" ry="2.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <polygon points="11,10 15,12 11,14" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className={styles.social}>
              <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.socialIcon}>
                <path d="M13.3 19v-5.6h1.9l0.4-2.3h-2.3v-1.5c0-0.7 0.3-1.1 1.1-1.1h1.2V6.4h-1.8c-2 0-3.2 1.2-3.2 3.4v1.3H8.8v2.3h1.8V19h2.7Z" fill="currentColor" />
              </svg>
            </a>
          </div>
          <div className={styles.phoneRow}>
            <p className={styles.phoneLabel}>대표전화:</p>
            <p className={styles.phone}>{phone}</p>
          </div>
          <p className={styles.hours}>{businessHours}</p>
        </div>
      </div>
    </footer>
  )
}
