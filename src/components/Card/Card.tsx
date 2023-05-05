import './Card.css'
interface ICardProps {
	img: string
	text: string
	description: string,
}
export default function Card({img, text, description}: ICardProps):JSX.Element {
  return (
	<div className="card">
    	<div className="image-container">
        	<img src = {img} alt={description} />
    	</div>

        <div className="text-container">
            <p className="text">
            	{text}
            </p>
        </div>
    </div>

  )
}
