import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, backgroundImgUrl, imgUrl }) => {

  const cardStyle = {
    backgroundImage: `url(${backgroundImgUrl})`,
    backgroundSize: 'cover',
    height: '300px',
    color: 'white',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={cardStyle}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
