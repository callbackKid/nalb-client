import Card from '../../../components/Card/Card'
import './AboutUs.css'

export const AboutUs = () => {
  return (
    <div className="about-us">
      <h2 className="title">Мы — волонтерское объединение</h2>
      <div className="cards-container">
        {/* <div className="card">
          <div className="image-container">
            <img src="/home.svg" alt="поиск дома" />
          </div>
          <div className="text-container">
            <p className="text">
              Организовываем и курируем поездки в муниципальный приют «Печатники» для волонтеров
            </p>
          </div>
        </div> */}

        <Card 
          img = '/home.svg' 
          text = 'Организовываем и курируем поездки в муниципальный приют «Печатники» для волонтеров'
          description = 'поиск дома'
        />

        <Card 
          img = '/event.svg' 
          text = 'Проводим веселые мероприятия для сбора средств в помощь нашим подопечным'
          description = 'мероприятия'
        />

        <Card 
          img = '/notes.svg' 
          text = 'Стараемся находить полезные материалы для будущих обладателей мохнатых друзей'
          description = 'полезные материалы'
        />
        {/* <div className="card">
          <div className="image-container">
            <img src="/event.svg" alt="мероприятия" />
          </div>

          <div className="text-container">
            <p className="text">
              Проводим веселые мероприятия для сбора средств в помощь нашим подопечным
            </p>
          </div>
        </div> 
        <div className="card">
          <div className="image-container">
            <img src="/notes.svg" alt="полезные материалы" />
          </div>

          <div className="text-container">
            <p className="text">
              Стараемся находить полезные материалы для будущих обладателей мохнатых друзей
            </p>
          </div>
        </div>*/}
      </div>
    </div>
  )
}
