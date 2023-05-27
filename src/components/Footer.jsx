import React from 'react'
import TwitterIcon from "../Images/2021 Twitter logo - blue.png";
import YoutubeIcon from "../Images/YoutubeIcon.png";
import GmailIcon from "../Images/GmailIcon.png";
import GithubIcon from "../Images/GithubIcon.png";

const Footer = () => {
  return (
    <footer >
      <div class="container" className='contacts'>
            <div  class="row text-center">
            <div class="title">Contact me</div>

            <div className="Icons" class="col-md-3">  
            <a href="https://twitter.com/shumatsu_23">
                <img src={TwitterIcon} className="twitterIcon" />
            </a>
            </div>

            <div className="Icons" class="col-md-3">
            <a href="https://www.youtube.com/@shumatsu1123">
                <img src={YoutubeIcon} className="youtubeIcon" style={{width: '120px'}} />
            </a>
            </div>

            <div className="Icons" class="col-md-3">
            <a href="mailto:shumatsu.23@gmail.com ? subject=お問い合わせ&amp;body=メッセージ内容">
                <img src={GmailIcon} className="gmailIcon" style={{width: '120px'}} />
            </a>
            </div>

            <div className="Icons" class="col-md-3">
              <a href="https://github.com/shuma-matsuzawa">
                <img src={GithubIcon} className="githubIcon" style={{width: '120px'}} />
                </a>
            </div>
            
            </div>
        </div>
    </footer>
  )
}

export default Footer