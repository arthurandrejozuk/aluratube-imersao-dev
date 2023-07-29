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

function Timeline({searchValue, ...props}) {

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
                                return(
                                    <a key={video.url} className={styles.timeline__videos__vid} href={video.url}>
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

export default Timeline;