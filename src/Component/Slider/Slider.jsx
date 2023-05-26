import styled from 'styled-components';
import Detail from './Detail';
import video from '../../Video/homevideo.mp4'
const VideoSlidesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 83vh;
  padding-top: 6px;
  overflow: hidden;
`;

const VideoSlide = styled.div`
   width: 100%;
   height: 100%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
 
`;

const VideoSlides = () => {
  return (
    <VideoSlidesContainer>
        <VideoSlide>
          <Video src={video} autoPlay muted loop/>
        </VideoSlide>
      <Detail />
    </VideoSlidesContainer>
  );
};

export default VideoSlides;
