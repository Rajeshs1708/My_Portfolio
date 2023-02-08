import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { School, Work } from '@mui/icons-material'

function Experience () {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2010-2012'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<School />}
        >
          <figure className='text-start'>
            <blockquote className='blockquote'>
              <h4>Britannia High School</h4>
            </blockquote>
            <figcaption className='blockquote-footer'>89.20%</figcaption>
            <figcaption className='blockquote-footer'>Padi, Chennai</figcaption>
          </figure>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2012-2014'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<School />}
        >
          <figure className='text-start'>
            <blockquote className='blockquote'>
              <h4>Vijayanta Higher Secondary School</h4>
            </blockquote>
            <figcaption className='blockquote-footer'>
              91.41%(Bio Maths){' '}
            </figcaption>
            <figcaption className='blockquote-footer'>
              Avadi, Chennai
            </figcaption>
          </figure>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2014-2018'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<School />}
        >
          <figure className='text-start'>
            <blockquote className='blockquote'>
              <h4>SRM Institute of Science and Technology</h4>
            </blockquote>
            <figcaption className='blockquote-footer'>
              8.21 CGPA (B.Tech Civil)
            </figcaption>
            <figcaption className='blockquote-footer'>
              Potheri, Kattankulathur
            </figcaption>
          </figure>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2021-2022'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<School />}
        >
          <figure className='text-start'>
            <blockquote className='blockquote'>
              <h4>
                GUVI <span style={{ color: 'gray' }}>Zen Class</span>
              </h4>
            </blockquote>
            <figcaption className='blockquote-footer'>
              FULL (MERN) STACK DEVELOPER
            </figcaption>
            <figcaption className='blockquote-footer'>
              IIT Madras Incubated
            </figcaption>
          </figure>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2018-2021'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<Work />}
        >
          <figure className='text-start'>
            <blockquote className='blockquote'>
              <h4>Vishal Builders, Creative Construction</h4>
            </blockquote>
            <figcaption className='blockquote-footer'>
              Site Supervisor
            </figcaption>
            <figcaption className='blockquote-footer'>Full-Time</figcaption>
          </figure>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
