import { useEffect, useMemo, useState } from 'react'
import './App.css'
import profilePhoto from './assets/ben.jpeg'

function FlagTR(props) {
  return (
    <svg viewBox="0 0 48 32" width="28" height="18" role="img" aria-label="Türkçe" {...props}>
      <rect width="48" height="32" rx="4" fill="#E30A17" />
      <circle cx="19" cy="16" r="8" fill="#fff" />
      <circle cx="21.5" cy="16" r="6.5" fill="#E30A17" />
      <path
        d="M33.1 11.4l1.2 3.6 3.8 0-3.1 2.2 1.2 3.6-3.1-2.2-3.1 2.2 1.2-3.6-3.1-2.2 3.8 0z"
        fill="#fff"
      />
    </svg>
  )
}

function FlagEN(props) {
  return (
    <svg viewBox="0 0 48 32" width="28" height="18" role="img" aria-label="English" {...props}>
      <rect width="48" height="32" rx="4" fill="#012169" />
      <path d="M0 0l48 32M48 0L0 32" stroke="#fff" strokeWidth="6" />
      <path d="M0 0l48 32M48 0L0 32" stroke="#C8102E" strokeWidth="3" />
      <path d="M24 0v32M0 16h48" stroke="#fff" strokeWidth="10" />
      <path d="M24 0v32M0 16h48" stroke="#C8102E" strokeWidth="6" />
    </svg>
  )
}

function App() {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    document.documentElement.lang = lang === 'tr' ? 'tr' : 'en'
  }, [lang])

  const t = useMemo(() => {
    const dict = {
      en: {
        nav: { about: 'About', experience: 'Experience', education: 'Education', skills: 'Skills', contact: 'Contact' },
        hero: {
          name: 'Ahmet Çetin',
          role: 'Embedded Software Engineer',
          summary:
            'Embedded Software Engineer with 3+ years of experience and a B.Sc. in Electrical & Electronics Engineering. Experienced in embedded systems for medical, defense, and industrial products. Skilled in C/C++, STM32, ESP32, bootloader and driver development, and hardware-software integration. Proficient with Qt/QML, Nextion, serial protocols (I2C, SPI, USART, RS485), Linux-based development, and GitHub. Eager to contribute to innovative, high-tech projects.',
          ctaPrimary: 'Contact',
          ctaSecondary: 'LinkedIn',
        },
        quick: { location: 'Location', email: 'Email', phone: 'Phone', linkedin: 'LinkedIn', shortInfo: 'Quick info' },
        sections: {
          about: {
            title: 'About',
            focusTitle: 'Focus Areas',
            approachTitle: 'Working Style',
            focus: [
              'Embedded software (C/C++)',
              'RTOS / FreeRTOS',
              'Driver & bootloader development',
              'Serial communication (I2C, SPI, UART/USART, RS485)',
              'Linux-based app development (Qt/QML)',
            ],
            approach: [
              'Fast problem-solving in hardware-software integration',
              'Readable, testable code and maintainable architecture',
              'Git-based workflows and collaboration',
            ],
          },
          experience: {
            title: 'Work Experience',
            items: [
              {
                role: 'Embedded Software Engineer',
                org: 'KTŞ LTD | Ankara',
                date: 'Aug 2024 - Aug 2025',
                bullets: [
                  'Frontend with Qt/QML and backend with C++ on Linux',
                  'Cross-compiling Qt apps for various ARM architectures',
                  'Embedded apps with cloud integration using Firebase',
                  'Serial communication and firmware development for ESP32-based systems',
                  'Designing HMI interfaces for Nextion displays',
                ],
                tags: ['C', 'C++', 'Qt', 'QML', 'ESP32', 'Firebase', 'Linux', 'Git', 'Nextion', 'ARM cross-compile', 'Node.js'],
              },
              {
                role: 'Embedded Software Engineer',
                org: 'Protedi Protez Ortez Ltd Şti | Ankara',
                date: 'Jan 2024 - Aug 2024',
                bullets: [
                  'Embedded software for medical devices',
                  'Firmware for ARM Cortex MCUs such as M0, M4, M33',
                  'Development with peripherals: ADC, PWM, Timer, DMA, Encoder',
                  'Using I2C, UART, SPI communication protocols',
                  'Firmware update over Bluetooth with a bootloader',
                ],
                tags: ['ARM', 'ADC', 'PWM', 'Timer', 'DMA', 'Encoder', 'I2C', 'UART', 'SPI', 'Bluetooth', 'Bootloader'],
              },
              {
                role: 'Embedded Software Engineer',
                org: 'Arlentus Control | Ankara',
                date: 'Apr 2023 - Dec 2023',
                bullets: [
                  'Developing embedded software for RF control units, RF receiver units, and RF remote IO units',
                  'Debugging and resolving issues',
                  'Maintaining and revising existing software',
                ],
                tags: ['PIC24', 'CC1350', 'ADC/DAC', 'PWM', 'RS485', 'C', 'MicroC'],
              },
              {
                role: 'Electronics R&D Engineer',
                org: 'DMA Defense Industry & Software Ltd. | Ankara',
                date: 'Oct 2022 - Apr 2023',
                bullets: ['Developing hardware and embedded software for defense projects', 'Product and system development'],
                tags: ['Portable power systems', 'Lithium battery', 'Hardware design'],
              },
              {
                role: 'Electronics R&D Engineer',
                org: 'Yuratek Inc. | Ankara',
                date: 'Jul 2021 - Dec 2021',
                bullets: ['Hardware design', 'Motor control using PWM', 'Reviewing scientific papers'],
                tags: ['PWM', 'DAC', 'Embedded', 'SPI'],
              },
            ],
          },
          education: {
            title: 'Education',
            uni: {
              name: 'Erciyes University',
              dept: 'Electrical & Electronics Engineering',
              date: '2016 - 2020',
            },
            certs: {
              title: 'Udemy Certificates',
              items: [
                'ARM programming with STM32F4',
                'ARM & C programming',
                'Microcontroller Driver Development',
                'Mastering Microcontrollers and Embedded Driver Development',
              ],
            },
          },
          skills: {
            title: 'Skills',
            groups: [
              { title: 'Programming', items: ['C', 'C++'] },
              { title: 'Microcontrollers', items: ['STM32', 'ESP32', 'PIC', 'ATmega'] },
              { title: 'Embedded', items: ['FreeRTOS', 'Bootloader', 'Driver development'] },
              { title: 'UI / Tools', items: ['Qt', 'QML', 'Nextion', 'Linux', 'Git'] },
            ],
          },
          contact: {
            title: 'Contact',
            infoTitle: 'Contact Details',
            refsTitle: 'References',
            refsText: 'Available upon request.',
            fields: { phone: 'Phone', email: 'Email', linkedin: 'LinkedIn', location: 'Location' },
          },
        },
      },
      tr: {
        nav: { about: 'Hakkımda', experience: 'Deneyim', education: 'Eğitim', skills: 'Yetenekler', contact: 'İletişim' },
        hero: {
          name: 'Ahmet Çetin',
          role: 'Gömülü Yazılım Mühendisi',
          summary:
            'Elektrik-Elektronik Mühendisliği mezunu ve 3+ yıllık deneyime sahip Gömülü Yazılım Mühendisi. Medikal, savunma ve endüstriyel ürünler için gömülü sistemler geliştirme konusunda deneyimli. C/C++, STM32, ESP32, bootloader ve sürücü geliştirme ile donanım-yazılım entegrasyonu konularında yetkin. Qt/QML, Nextion, seri protokoller (I2C, SPI, USART, RS485) ve Linux tabanlı geliştirme ve GitHub kullanımıyla deneyimli. İleri teknoloji sektörlerindeki yenilikçi projelere katkı sağlamaya istekli.',
          ctaPrimary: 'İletişime geç',
          ctaSecondary: 'LinkedIn',
        },
        quick: { location: 'Konum', email: 'E-posta', phone: 'Telefon', linkedin: 'LinkedIn', shortInfo: 'Kısa bilgiler' },
        sections: {
          about: {
            title: 'Hakkımda',
            focusTitle: 'Odak Alanları',
            approachTitle: 'Çalışma Yaklaşımı',
            focus: [
              'Gömülü yazılım (C/C++)',
              'RTOS / FreeRTOS',
              'Sürücü & bootloader geliştirme',
              'Seri haberleşme (I2C, SPI, UART/USART, RS485)',
              'Linux tabanlı uygulama geliştirme (Qt/QML)',
            ],
            approach: [
              'Donanım-yazılım entegrasyonunda hızlı problem çözme',
              'Okunabilir, test edilebilir kod ve sürdürülebilir mimari',
              'Git ile versiyon kontrol ve ekip içi iş akışları',
            ],
          },
          experience: {
            title: 'İş Deneyimi',
            items: [
              {
                role: 'Gömülü Yazılım Mühendisi',
                org: 'KTŞ LTD | Ankara',
                date: 'Ağustos 2024 - Ağustos 2025',
                bullets: [
                  'Linux ortamında Qt/QML ile frontend ve C++ ile backend geliştirme',
                  'Çeşitli ARM mimarileri için Qt uygulamalarının çapraz derlenmesi',
                  'Firebase kullanarak bulut entegrasyonlu gömülü uygulamalar geliştirilmesi',
                  'ESP32 tabanlı sistemler için seri haberleşme ve gömülü yazılım geliştirilmesi',
                  'Nextion ekranları için HMI arayüzleri tasarlanması',
                ],
                tags: ['C', 'C++', 'Qt', 'QML', 'ESP32', 'Firebase', 'Linux', 'Git', 'Nextion', 'ARM için çapraz derleme', 'Node.js'],
              },
              {
                role: 'Gömülü Yazılım Mühendisi',
                org: 'Protedi Protez Ortez Ltd Şti | Ankara',
                date: 'Ocak 2024 - Ağustos 2024',
                bullets: [
                  'Medikal cihazlar için gömülü yazılım geliştirme',
                  'ARM Cortex ailesinden M0, M4, M33 gibi mikroişlemciler için yazılım geliştirme',
                  'ADC, PWM, Timer, DMA, Encoder gibi çevre birimleriyle geliştirme',
                  'I2C, UART, SPI haberleşme protokollerinin kullanımı',
                  'Bootloader ile sistem yazılımının Bluetooth üzerinden güncellenmesi',
                ],
                tags: ['ARM', 'ADC', 'PWM', 'Timer', 'DMA', 'Encoder', 'I2C', 'UART', 'SPI', 'Bluetooth', 'Bootloader'],
              },
              {
                role: 'Gömülü Yazılım Mühendisi',
                org: 'Arlentus Control | Ankara',
                date: 'Nisan 2023 - Aralık 2023',
                bullets: [
                  'RF veri kontrol birimleri, RF alıcı birimleri ve RF uzak IO birimlerinin gömülü yazılımını geliştirmek',
                  'Hata ayıklamakla ilgili hataları çözmek',
                  'Mevcut yazılımlarda revizyon yapmak',
                ],
                tags: ['PIC24', 'CC1350', 'ADC/DAC', 'PWM', 'RS485', 'C', 'MicroC'],
              },
              {
                role: 'Elektronik ARGE Mühendisi',
                org: 'DMA Savunma Sanayi ve Yazılım Ltd. | Ankara',
                date: 'Ekim 2022 - Nisan 2023',
                bullets: ['Savunma sanayi projelerine yönelik donanım ve gömülü yazılım geliştirilmesi', 'Ürün ve sistem geliştirme'],
                tags: ['Taşınabilir güç sistemleri', 'Lityum pil', 'Donanım tasarımı'],
              },
              {
                role: 'Elektronik ARGE Mühendisi',
                org: 'Yuratek Inc. | Ankara',
                date: 'Temmuz 2021 - Aralık 2021',
                bullets: ['Donanım tasarımı', 'PWM ile motor kontrolü', 'Bilimsel makaleleri araştırmak'],
                tags: ['PWM', 'DAC', 'Gömülü', 'SPI'],
              },
            ],
          },
          education: {
            title: 'Eğitim',
            uni: { name: 'Erciyes Üniversitesi', dept: 'Elektrik Elektronik Mühendisliği', date: '2016 - 2020' },
            certs: {
              title: 'Udemy Sertifikaları',
              items: [
                'STM32F4 ile Arm programlama',
                'Arm adm C programlama',
                'Microcontroller Driver Development',
                'Mastering Microcontrollers and Embedded Driver Development',
              ],
            },
          },
          skills: {
            title: 'Yetenekler',
            groups: [
              { title: 'Programlama', items: ['C', 'C++'] },
              { title: 'Mikrodenetleyiciler', items: ['STM32', 'ESP32', 'PIC', 'ATmega'] },
              { title: 'Gömülü', items: ['FreeRTOS', 'Bootloader', 'Sürücü geliştirme'] },
              { title: 'UI / Araçlar', items: ['Qt', 'QML', 'Nextion', 'Linux', 'Git'] },
            ],
          },
          contact: {
            title: 'İletişim',
            infoTitle: 'İletişim Bilgileri',
            refsTitle: 'Referanslar',
            refsText: 'İstenildiğinde çalışmış olduğum firmalarda yöneticilerimin ve müdürlerimin numaraları verilebilir.',
            fields: { phone: 'Telefon', email: 'E-posta', linkedin: 'LinkedIn', location: 'Konum' },
          },
        },
      },
    }
    return dict[lang] ?? dict.en
  }, [lang])

  return (
    <div className="page">
      <header className="topbar">
        <div className="topbarInner">
          <a className="brand" href="#top">
            <span className="brandDot" aria-hidden="true" />
            <span className="brandText">{t.hero.name}</span>
          </a>
          <div className="topbarRight">
            <nav className="nav">
              <a href="#hakkimda">{t.nav.about}</a>
              <a href="#deneyim">{t.nav.experience}</a>
              <a href="#egitim">{t.nav.education}</a>
              <a href="#yetenekler">{t.nav.skills}</a>
              <a href="#iletisim">{t.nav.contact}</a>
            </nav>
            <div className="lang">
              <button
                type="button"
                className={`langBtn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                title="English"
              >
                <FlagEN />
              </button>
              <button
                type="button"
                className={`langBtn ${lang === 'tr' ? 'active' : ''}`}
                onClick={() => setLang('tr')}
                aria-pressed={lang === 'tr'}
                title="Türkçe"
              >
                <FlagTR />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container" id="top">
        <section className="hero">
          <div className="heroLeft">
            <div className="avatar" aria-hidden="true">
              <img className="avatarImg" src={profilePhoto} alt="Ahmet Çetin" loading="eager" />
            </div>
            <div className="heroText">
              <h1 className="name">{t.hero.name}</h1>
              <p className="title">{t.hero.role}</p>
              <p className="summary">{t.hero.summary}</p>
              <div className="ctaRow">
                <a className="btn" href="#iletisim">{t.hero.ctaPrimary}</a>
                <a
                  className="btnSecondary"
                  href="https://linkedin.com/in/acetin7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>
          </div>

          <aside className="heroCard" aria-label={t.quick.shortInfo}>
            <div className="kv">
              <div className="k">{t.quick.location}</div>
              <div className="v">Ankara</div>
            </div>
            <div className="kv">
              <div className="k">{t.quick.email}</div>
              <div className="v">
                <a href="mailto:ahmetcetin.eem@gmail.com">ahmetcetin.eem@gmail.com</a>
              </div>
            </div>
            <div className="kv">
              <div className="k">{t.quick.phone}</div>
              <div className="v">
                <a href="tel:+905423467818">+90 542 346 7818</a>
              </div>
            </div>
            <div className="kv">
              <div className="k">{t.quick.linkedin}</div>
              <div className="v">
                <a href="https://linkedin.com/in/acetin7/" target="_blank" rel="noreferrer">
                  linkedin.com/in/acetin7/
                </a>
              </div>
            </div>
          </aside>
        </section>

        <section className="section" id="hakkimda">
          <h2>{t.sections.about.title}</h2>
          <div className="cards">
            <div className="card">
              <h3>{t.sections.about.focusTitle}</h3>
              <ul>
                {t.sections.about.focus.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>{t.sections.about.approachTitle}</h3>
              <ul>
                {t.sections.about.approach.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="deneyim">
          <h2>{t.sections.experience.title}</h2>
          <div className="timeline">
            {t.sections.experience.items.map((it) => (
              <article className="item" key={`${it.role}-${it.org}-${it.date}`}>
                <header className="itemHeader">
                  <div>
                    <h3>{it.role}</h3>
                    <p className="muted">{it.org}</p>
                  </div>
                  <p className="muted">{it.date}</p>
                </header>
                <ul>
                  {it.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <p className="tags">
                  {it.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="egitim">
          <h2>{t.sections.education.title}</h2>
          <div className="cards">
            <div className="card">
              <h3>{t.sections.education.uni.name}</h3>
              <p className="muted">{t.sections.education.uni.dept}</p>
              <p className="muted">{t.sections.education.uni.date}</p>
            </div>
            <div className="card">
              <h3>{t.sections.education.certs.title}</h3>
              <ul>
                {t.sections.education.certs.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="yetenekler">
          <h2>{t.sections.skills.title}</h2>
          <div className="skillsGrid">
            {t.sections.skills.groups.map((g) => (
              <div className="skillGroup" key={g.title}>
                <h3>{g.title}</h3>
                <div className="pills">
                  {g.items.map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="iletisim">
          <h2>{t.sections.contact.title}</h2>
          <div className="cards">
            <div className="card">
              <h3>{t.sections.contact.infoTitle}</h3>
              <div className="contactList">
                <div className="contactRow">
                  <span className="contactKey">{t.sections.contact.fields.phone}</span>
                  <a className="contactVal" href="tel:+905423467818">
                    +90 542 346 7818
                  </a>
                </div>
                <div className="contactRow">
                  <span className="contactKey">{t.sections.contact.fields.email}</span>
                  <a className="contactVal" href="mailto:ahmetcetin.eem@gmail.com">
                    ahmetcetin.eem@gmail.com
                  </a>
                </div>
                <div className="contactRow">
                  <span className="contactKey">{t.sections.contact.fields.linkedin}</span>
                  <a
                    className="contactVal"
                    href="https://linkedin.com/in/acetin7/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/acetin7/
                  </a>
                </div>
                <div className="contactRow">
                  <span className="contactKey">{t.sections.contact.fields.location}</span>
                  <span className="contactVal">Ankara</span>
                </div>
              </div>
            </div>
            <div className="card">
              <h3>{t.sections.contact.refsTitle}</h3>
              <p className="muted">
                {t.sections.contact.refsText}
              </p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p className="muted">© {new Date().getFullYear()} Ahmet Çetin</p>
        </footer>
      </main>
    </div>
  )
}

export default App
