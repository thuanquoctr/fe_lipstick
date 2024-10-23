import Card from "../components/Card";
import Carousel from "../layouts/Carousel";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <Carousel />
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-3 col-xs-12">
          <Card />
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12">
          <Card />
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12">
          <Card />
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12">
          <Card />
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12">
          <Card />
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12">
          <Card />
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12">
          <Card />
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12">
          <Card />
        </div>
      </div>
    </div>
  );
};
export default Home;
