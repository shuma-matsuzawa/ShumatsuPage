import React from "react";
// import image1 from "../../Images/bg1.jpg";
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import profileImage from "../Images/MyIcon.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="contain text-center">
      <h1>しゅうまつ/Shumatsu</h1>

      <img src={profileImage} className="profileImage" />

      <p>
        しゅうまつといいます。趣味でプログラミングの勉強をしています。イラストなどのクリエイティブの勉強もしています。理学部で、物理を主に学んでいます。
      </p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              私が作った作品一覧です（随時更新予定）
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-sharp fa-play fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">Youtube管理アプリ</h4>
              <p class="text-muted">
                YouTubeを使いすぎないよう管理できるwebアプリを開発中...
                <Link to="/BlockYoutubeApp">アプリへ</Link>
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">レスポンシブサイト</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">None</h4>
              <p class="text-muted">
                今後追加予定
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">None</h4>
              <p class="text-muted">
                今後追加予定
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">None</h4>
              <p class="text-muted">
                今後追加予定
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">None</h4>
              <p class="text-muted">
                今後追加予定
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div class="text-center"> 
      <h1 class="title">スキル</h1>
          <div class="row text-center">

            <div class="col-md-6 services" >
              <img src={reactImage} className="skills" />
              <h4>React</h4>
              <p>Reactが少し理解できます</p>
            </div>

            <div class="col-md-6 services" >
              <img src={jsImage} className="skills"/>
              <h4>HTML/CSS/JavaScript</h4>
              <p>HTML/CSS/JavaScriptが少し理解できます</p>
            </div>

        <button type="button" class="btn btn-primary">
            スキル一覧
          </button>

          </div>
        </div>
      </section>
      <section class="my-career">
        <div className="career">
          私の経歴
        </div>
      </section>
    </div>
  );
};

export default HomePage;