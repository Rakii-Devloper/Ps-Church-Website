// src/pages/ApiPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://test.create.diagnal.com/data/';

const ApiPage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}videos.json`);
        setVideos(response.data);
      } catch (err) {
        setError('Error fetching videos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <div>Loading videos...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Videos</h1>
      {videos.map((video, index) => (
        <div key={index}>
          {/* Assuming video object has a title and url */}
          <h2>{video.title}</h2>
          <VideoPlayer videoUrl={video.url} />
        </div>
      ))}
    </div>
  );
};

export default ApiPage;
