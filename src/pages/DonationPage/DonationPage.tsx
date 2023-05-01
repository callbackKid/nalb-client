import './DonationPage.css'

export const DonationPage = () => {
  return (
    <div className="donation-page">
      <div className="youmoneyContainer">
        <h1>Поддержать проект можно переводом на наш яндекс кошелек</h1>
        <iframe
          title="donate-us"
          src="https://yoomoney.ru/quickpay/shop-widget?writer=buyer&targets=&targets-hint=%D0%9D%D0%B0%20%D0%BA%D0%BE%D1%80%D0%BC%20%D0%B4%D0%BB%D1%8F%20%D0%9F%D0%B5%D0%BD%D0%BD%D0%B8&default-sum=500&button-text=14&payment-type-choice=on&mail=on&hint=&successURL=&quickpay=shop&account=4100117555631477&"
          width="420"
          height="220"
          allowTransparency
          frameBorder="0"
        ></iframe>
      </div>
      <div>
        <h1>Если у вас иностранная карта, то можно сделать перевод paypal</h1>
      </div>
      <h1>Отчет можно посмотреть по ссылке</h1>
    </div>
  )
}
