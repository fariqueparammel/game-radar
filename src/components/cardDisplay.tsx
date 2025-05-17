import RedeemButton from "./redeemButton";
interface CardDisplayProps {
  gameName: string;
  gameDescription: string;
  src: string;
  alt: string;
  validTill: string;
  gameUrl: string;
}
export default function CardDisplay({
  gameName,
  gameDescription,
  src,
  alt,
  validTill,
  gameUrl,
}: CardDisplayProps) {
  return (
    <div className="card mb-3 mx-auto  ">
      <img src={src} className="card-img-top  " alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{gameName}</h5>
        <p className="card-text">{gameDescription}</p>
        <div className="d-flex justify-content-between align-items-center">
          <p className="card-text mb-0">
            <small className="text-body-secondary">{validTill}</small>
          </p>
          <RedeemButton gameUrl={gameUrl} />
        </div>
      </div>
    </div>
  );
}
