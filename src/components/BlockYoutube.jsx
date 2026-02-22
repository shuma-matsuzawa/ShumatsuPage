import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlockYoutubeApp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: searchQuery,
          key: 'AIzaSyADYtifNqdC_Nx1AEsuWTlBln3N8RdhrqU',
        },
      });

      const videos = response.data.items.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
      }));

      setSearchResults(videos);
    } catch (error) {
      console.error('検索エラー:', error);
    }
  };

  const handleVideoClick = (videoId) => {
    setSelectedVideoId(videoId);
  };

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      // YTプレーヤーの初期化などの処理
    };
  }, []);

  useEffect(() => {
    if (selectedVideoId) {
      const player = new window.YT.Player('youtube-player', {
        height: '360',
        width: '640',
        videoId: selectedVideoId,
      });
    }
  }, [selectedVideoId]);

  return (
    <div className='contain'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={searchQuery}
          onChange={handleInputChange}
          placeholder='検索クエリを入力してください'
        />
        <button type='submit'>検索</button>
      </form>

      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id} onClick={() => handleVideoClick(result.id)}>
              {result.title}
            </li>
          ))}
        </ul>
      )}

      <div id='youtube-player'></div>
    </div>
  );
};

export default BlockYoutubeApp;


