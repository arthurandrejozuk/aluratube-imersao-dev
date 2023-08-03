import styles from './Timeline.module.scss';
import styled from 'styled-components';

const BackgroundTimeline = styled.div`
    
    background-color: ${({ theme }) => theme.backgroundLevel1};
    h2{
        color: ${({ theme }) => theme.textColorBase}
    }
    span{
        color: ${({ theme }) => theme.textColorBase}
    }
`

export function Timeline({searchValue, ...props}) {

    
    const playlistName = Object.keys(props.playlist);
    
    return(
        <BackgroundTimeline key={playlistName}  className={styles.timeline__container}>
            {playlistName.map((item) =>{
                const videos = props.playlist[item];
                return(
                    <section className={styles.timeline}>
                        <h2>{item}</h2>
                        <div className={styles.timeline__videos}>
                            {videos.filter((video)=>{
                                const titleNormalize = video.title.toLowerCase();
                                const searchValueNormalize = searchValue.toLowerCase();
                                return titleNormalize.includes(searchValueNormalize)
                            }).map(video => {
                                const regex = /v=([a-zA-Z0-9-_]{11})/
                                const enderecoDoVideo = video.url;
                                const match = enderecoDoVideo.match(regex)
                                console.log(match);
                                return(
                                    <a key={enderecoDoVideo} className={styles.timeline__videos__vid} href={`/video?videoId=${match[1]}`}>
                                        <img src={video.thumb} alt="" />
                                        <span>{video.title}</span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </BackgroundTimeline>
    )
}

 
  
