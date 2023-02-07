import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { School, Work } from '@mui/icons-material';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010-2012"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h4 className='vertical-timeline-element-title'>Britannia High School,</h4>
          <p style={{ color: "gray" }}>Padi, Chennai — <span style={{ color: "#3e497a" }}>89.20%</span></p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012-2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h4 className='vertical-timeline-element-title'>Vijayanta Higher Secondary School,</h4>
          <p style={{ color: "gray" }}>Avadi, Chennai — Bio Maths —<span style={{ color: "#3e497a" }}>91.41% </span></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014-2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h4 className='vertical-timeline-element-title'>SRM Institute of Science and Technology,</h4>
          <p style={{ color: "gray" }}>Potheri, Kattankulathur — B.Tech Civil —<span style={{ color: "#3e497a" }}> 8.21 CGPA</span></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h4 className='vertical-timeline-element-title'>GUVI <span style={{ color: "gray" }}>Zen Class</span></h4>
          <p style={{ color: "gray" }}>IIT Madras - <span style={{ color: "#3e497a" }}>FULL (MERN) STACK DEVELOPER</span></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018-2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<Work />}
        >
          <h4 className='vertical-timeline-element-title'>Vishal Builders, Creative Construction <span style={{ color: "gray" }}></span></h4>
          <p style={{ color: "gray" }}>Full-Time<span style={{ color: "#3e497a" }}> Site Supervisor</span></p>
        </VerticalTimelineElement>



      </VerticalTimeline>

      
    </div>
  )
}

export default Experience
