import './DonationPage.css';

export const DonationPage = () => {
  return (
    <div className='donation-page'>
      <iframe
        title='donate-us'
        src='https://yoomoney.ru/quickpay/shop-widget?writer=buyer&targets=&targets-hint=%D0%9D%D0%B0%20%D0%BA%D0%BE%D1%80%D0%BC%20%D0%B4%D0%BB%D1%8F%20%D0%9F%D0%B5%D0%BD%D0%BD%D0%B8&default-sum=500&button-text=14&payment-type-choice=on&mail=on&hint=&successURL=&quickpay=shop&account=4100117555631477&'
        width='423'
        height='227'
        frameBorder='0'
        // allowTransparency
        scrolling='no'
      ></iframe>
    </div>
  );
};
