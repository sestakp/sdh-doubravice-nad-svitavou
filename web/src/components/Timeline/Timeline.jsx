
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent, Timeline as TL } from '@material-ui/lab';


const Timeline = (props) => {

    
    return (
        
        <TL style={{padding: "100px"}}>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    Založení sboru
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>1888</TimelineContent>
            </TimelineItem>


            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    Založení mladých hasičů
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>1978</TimelineContent>
            </TimelineItem>

            
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    Otevření nové hasičské zbrojnice
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    {/*<TimelineConnector />*/}
                </TimelineSeparator>
                <TimelineContent>1991</TimelineContent>
            </TimelineItem>


        
        </TL>
    )
}

export default Timeline;