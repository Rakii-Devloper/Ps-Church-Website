import React from 'react';

// Facebook SDK script
const loadFacebookSDK = () => {
  const script = document.createElement('script');
  script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
};

const VideoPage = () => {
  React.useEffect(() => {
    loadFacebookSDK();
  }, []);

  return (
    <div className="relative w-full h-full">
      <img className="absolute inset-0 object-cover w-full h-full" src="./src/assets/bg1.jpg" alt="Background" />
      <div className="flex items-center justify-center h-full">
        <div className="container mx-auto h-full w-full">
          <div className="fb-video" 
               data-href="https://www.facebook.com/quanygodson/videos/910309257161283/" 
               data-width="1080" 
               data-show-text="false">
            <div className="fb-xfbml-parse-ignore">
              <blockquote cite="https://www.facebook.com/quanygodson/videos/910309257161283">
                <a href="https://www.facebook.com/quanygodson/videos/910309257161283/">Facebook Live</a>
                <p>facebook live.</p>
                Posted by <a href="https://www.facebook.com/quanygodson/">Facebook</a> Every Sunday 9am
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
