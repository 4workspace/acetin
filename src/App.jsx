import './App.css'

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="topbarInner">
          <a className="brand" href="#top">
            <span className="brandDot" aria-hidden="true" />
            <span className="brandText">Ahmet Çetin</span>
          </a>
          <nav className="nav">
            <a href="#hakkimda">Hakkımda</a>
            <a href="#deneyim">Deneyim</a>
            <a href="#egitim">Eğitim</a>
            <a href="#yetenekler">Yetenekler</a>
            <a href="#iletisim">İletişim</a>
          </nav>
        </div>
      </header>

      <main className="container" id="top">
        <section className="hero">
          <div className="heroLeft">
            <div className="avatar" aria-hidden="true">
              AÇ
            </div>
            <div className="heroText">
              <h1 className="name">Ahmet Çetin</h1>
              <p className="title">Gömülü Yazılım Mühendisi</p>
              <p className="summary">
                Elektrik-Elektronik Mühendisliği mezunu ve 3+ yıllık deneyime sahip Gömülü
                Yazılım Mühendisi. Medikal, savunma ve endüstriyel ürünler için gömülü
                sistemler geliştirme konusunda deneyimli. C/C++, STM32, ESP32, bootloader ve
                sürücü geliştirme ile donanım-yazılım entegrasyonu konularında yetkin. Qt/QML,
                Nextion, seri protokoller (I2C, SPI, USART, RS485) ve Linux tabanlı geliştirme
                ve GitHub kullanımıyla deneyimli. İleri teknoloji sektörlerindeki yenilikçi
                projelere katkı sağlamaya istekli.
              </p>
              <div className="ctaRow">
                <a className="btn" href="#iletisim">İletişime geç</a>
                <a
                  className="btnSecondary"
                  href="https://linkedin.com/in/acetin7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <aside className="heroCard" aria-label="Kısa bilgiler">
            <div className="kv">
              <div className="k">Konum</div>
              <div className="v">Ankara</div>
            </div>
            <div className="kv">
              <div className="k">E-posta</div>
              <div className="v">
                <a href="mailto:ahmetcetin.eem@gmail.com">ahmetcetin.eem@gmail.com</a>
              </div>
            </div>
            <div className="kv">
              <div className="k">Telefon</div>
              <div className="v">
                <a href="tel:+905423467818">+90 542 346 7818</a>
              </div>
            </div>
            <div className="kv">
              <div className="k">LinkedIn</div>
              <div className="v">
                <a href="https://linkedin.com/in/acetin7/" target="_blank" rel="noreferrer">
                  linkedin.com/in/acetin7/
                </a>
              </div>
            </div>
          </aside>
        </section>

        <section className="section" id="hakkimda">
          <h2>Hakkımda</h2>
          <div className="cards">
            <div className="card">
              <h3>Odak Alanları</h3>
              <ul>
                <li>Gömülü yazılım (C/C++)</li>
                <li>RTOS / FreeRTOS</li>
                <li>Sürücü & bootloader geliştirme</li>
                <li>Seri haberleşme (I2C, SPI, UART/USART, RS485)</li>
                <li>Linux tabanlı uygulama geliştirme (Qt/QML)</li>
              </ul>
            </div>
            <div className="card">
              <h3>Çalışma Yaklaşımı</h3>
              <ul>
                <li>Donanım-yazılım entegrasyonunda hızlı problem çözme</li>
                <li>Okunabilir, test edilebilir kod ve sürdürülebilir mimari</li>
                <li>Git ile versiyon kontrol ve ekip içi iş akışları</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="deneyim">
          <h2>İş Deneyimi</h2>
          <div className="timeline">
            <article className="item">
              <header className="itemHeader">
                <div>
                  <h3>Gömülü Yazılım Mühendisi</h3>
                  <p className="muted">KTŞ LTD | Ankara</p>
                </div>
                <p className="muted">Ağustos 2024 - Ağustos 2025</p>
              </header>
              <ul>
                <li>Linux ortamında Qt/QML ile frontend ve C++ ile backend geliştirme</li>
                <li>Çeşitli ARM mimarileri için Qt uygulamalarının çapraz derlenmesi</li>
                <li>Firebase kullanarak bulut entegrasyonlu gömülü uygulamalar geliştirilmesi</li>
                <li>ESP32 tabanlı sistemler için seri haberleşme ve gömülü yazılım geliştirilmesi</li>
                <li>Nextion ekranları için HMI arayüzleri tasarlanması</li>
              </ul>
              <p className="tags">
                <span>C</span>
                <span>C++</span>
                <span>Qt</span>
                <span>QML</span>
                <span>ESP32</span>
                <span>Firebase</span>
                <span>Linux</span>
                <span>Git</span>
                <span>Nextion</span>
                <span>ARM cross-compile</span>
                <span>Node.js</span>
              </p>
            </article>

            <article className="item">
              <header className="itemHeader">
                <div>
                  <h3>Gömülü Yazılım Mühendisi</h3>
                  <p className="muted">Protedi Protez Ortez Ltd Şti | Ankara</p>
                </div>
                <p className="muted">Ocak 2024 - Ağustos 2024</p>
              </header>
              <ul>
                <li>Medikal cihazlar için gömülü yazılım geliştirme</li>
                <li>ARM Cortex ailesinden M0, M4, M33 gibi mikroişlemciler için yazılım geliştirme</li>
                <li>ADC, PWM, Timer, DMA, Encoder gibi çevre birimleriyle geliştirme</li>
                <li>I2C, UART, SPI haberleşme protokollerinin kullanımı</li>
                <li>Bootloader ile sistem yazılımının Bluetooth üzerinden güncellenmesi</li>
              </ul>
              <p className="tags">
                <span>ARM</span>
                <span>ADC</span>
                <span>PWM</span>
                <span>Timer</span>
                <span>DMA</span>
                <span>Encoder</span>
                <span>I2C</span>
                <span>UART</span>
                <span>SPI</span>
                <span>Bluetooth</span>
                <span>Bootloader</span>
              </p>
            </article>

            <article className="item">
              <header className="itemHeader">
                <div>
                  <h3>Gömülü Yazılım Mühendisi</h3>
                  <p className="muted">Arlentus Control | Ankara</p>
                </div>
                <p className="muted">Nisan 2023 - Aralık 2023</p>
              </header>
              <ul>
                <li>RF veri kontrol birimleri, RF alıcı birimleri ve RF uzak IO birimlerinin gömülü yazılımını geliştirmek</li>
                <li>Hata ayıklamakla ilgili hataları çözmek</li>
                <li>Mevcut yazılımlarda revizyon yapmak</li>
              </ul>
              <p className="tags">
                <span>PIC24</span>
                <span>CC1350</span>
                <span>ADC/DAC</span>
                <span>PWM</span>
                <span>RS485</span>
                <span>C</span>
                <span>MicroC</span>
              </p>
            </article>

            <article className="item">
              <header className="itemHeader">
                <div>
                  <h3>Elektronik ARGE Mühendisi</h3>
                  <p className="muted">DMA Savunma Sanayi ve Yazılım Ltd. | Ankara</p>
                </div>
                <p className="muted">Ekim 2022 - Nisan 2023</p>
              </header>
              <ul>
                <li>Savunma sanayi projelerine yönelik donanım ve gömülü yazılım geliştirilmesi</li>
                <li>Ürün ve sistem geliştirme</li>
              </ul>
              <p className="tags">
                <span>Taşınabilir güç sistemleri</span>
                <span>Lityum pil</span>
                <span>Donanım tasarımı</span>
              </p>
            </article>

            <article className="item">
              <header className="itemHeader">
                <div>
                  <h3>Elektronik ARGE Mühendisi</h3>
                  <p className="muted">Yuratek Inc. | Ankara</p>
                </div>
                <p className="muted">Temmuz 2021 - Aralık 2021</p>
              </header>
              <ul>
                <li>Donanım tasarımı</li>
                <li>PWM ile motor kontrolü</li>
                <li>Bilimsel makaleleri araştırmak</li>
              </ul>
              <p className="tags">
                <span>PWM</span>
                <span>DAC</span>
                <span>Gömülü</span>
                <span>SPI</span>
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="egitim">
          <h2>Eğitim</h2>
          <div className="cards">
            <div className="card">
              <h3>Erciyes Üniversitesi</h3>
              <p className="muted">Elektrik Elektronik Mühendisliği</p>
              <p className="muted">2016 - 2020</p>
            </div>
            <div className="card">
              <h3>Udemy Sertifikaları</h3>
              <ul>
                <li>STM32F4 ile Arm programlama</li>
                <li>Arm adm C programlama</li>
                <li>Microcontroller Driver Development</li>
                <li>Mastering Microcontrollers and Embedded Driver Development</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="yetenekler">
          <h2>Yetenekler</h2>
          <div className="skillsGrid">
            <div className="skillGroup">
              <h3>Programlama</h3>
              <div className="pills">
                <span>C</span>
                <span>C++</span>
              </div>
            </div>
            <div className="skillGroup">
              <h3>Mikrodenetleyiciler</h3>
              <div className="pills">
                <span>STM32</span>
                <span>ESP32</span>
                <span>PIC</span>
                <span>ATmega</span>
              </div>
            </div>
            <div className="skillGroup">
              <h3>Gömülü</h3>
              <div className="pills">
                <span>FreeRTOS</span>
                <span>Bootloader</span>
                <span>Sürücü geliştirme</span>
              </div>
            </div>
            <div className="skillGroup">
              <h3>UI / Araçlar</h3>
              <div className="pills">
                <span>Qt</span>
                <span>QML</span>
                <span>Nextion</span>
                <span>Linux</span>
                <span>Git</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="iletisim">
          <h2>İletişim</h2>
          <div className="cards">
            <div className="card">
              <h3>İletişim Bilgileri</h3>
              <div className="contactList">
                <div className="contactRow">
                  <span className="contactKey">Telefon</span>
                  <a className="contactVal" href="tel:+905423467818">
                    +90 542 346 7818
                  </a>
                </div>
                <div className="contactRow">
                  <span className="contactKey">E-posta</span>
                  <a className="contactVal" href="mailto:ahmetcetin.eem@gmail.com">
                    ahmetcetin.eem@gmail.com
                  </a>
                </div>
                <div className="contactRow">
                  <span className="contactKey">LinkedIn</span>
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
                  <span className="contactKey">Konum</span>
                  <span className="contactVal">Ankara</span>
                </div>
              </div>
            </div>
            <div className="card">
              <h3>Referanslar</h3>
              <p className="muted">
                İstenildiğinde çalışmış olduğum firmalarda yöneticilerimin ve müdürlerimin
                numaraları verilebilir.
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
