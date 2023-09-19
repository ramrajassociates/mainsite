import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { HiOutlineLightBulb } from 'react-icons/hi';
function TimeLine(props) {
    const { className } = props;
  return (
      <div className={`${className}`}>
          <h1 className='text-center sm:text-3xl text-xl font-bold py-5'>Our History</h1>
          <VerticalTimeline>
              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#d1d5db', color: '#000000' }}
                  contentArrowStyle={{ borderRight: '7px solid  #d1d5db' }}
                  date="2019"
                  iconStyle={{ background: '#d1d5db', color: '#fff' }}
                  icon={<HiOutlineLightBulb className='cursor-pointer'/>}
              >
                    <h3 className="font-bold text-xl">Started Business</h3>
                    <p className='!font-thin '>
                    We partner with you to enable
                    your technology so you focus on
                    your organization's mission
                    leverage our talent.
                    </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#307fe2', color: '#000000' }}
                  contentArrowStyle={{ borderRight: '7px solid  #307fe2' }}
                  date="2020"
                  iconStyle={{ background: '#307fe2', color: '#fff' }}
                  icon={<HiOutlineLightBulb className='hover:text-yellow-300 cursor-pointer'/>}
              >
                    <h3 className="font-bold text-xl text-main">Structuring and Developing</h3>
                    <p className='!font-thin text-main '>
                    Structuring the organization to
                    meet the needs of everyone for
                    future.
                    </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#faca15', color: '#000000' }}
                  contentArrowStyle={{ borderRight: '7px solid  #faca15' }}
                  date="2021"
                  iconStyle={{ background: '#faca15', color: '#fff' }}
                  icon={<HiOutlineLightBulb className='cursor-pointer '/>}
              >
                    <h3 className="font-bold text-xl">Expanding to various fields.</h3>
                    <p className='!font-thin '>
                    Expanding our team from various
                    fields to gain vast knowledge of
                    different fields to face challenges
                    of tomorrow.
                    </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                contentStyle={{ background: '#d1d5db', color: '#000000' }}
                contentArrowStyle={{ borderRight: '7px solid  #d1d5db' }}
                  date="2022"
                  iconStyle={{ background: '#d1d5db', color: '#fff' }}
                  icon={<HiOutlineLightBulb className='hover:text-yellow-300 cursor-pointer'/>}
              >
                    <h3 className="font-bold text-xl">50+ Projects</h3>
                    <p className='!font-thin '>
                    We cross industries and provide
                    services to almost every business
                    either as a co-managed or
                    supplemental asset.
                    </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                contentStyle={{ background: '#307fe2', color: '#000000' }}
                contentArrowStyle={{ borderRight: '7px solid  #307fe2' }}
                  date="2023"
                  iconStyle={{ background: '#307fe2', color: '#fff' }}
                  icon={<HiOutlineLightBulb className='hover:text-yellow-300 cursor-pointer'/>}
              >
                    <h3 className="font-bold text-xl text-main">2023</h3>
                    <p className='!font-thin  text-main'>
                   Coming soon...
                    </p>
              </VerticalTimelineElement>
            
          </VerticalTimeline>
      </div>
  )
}

export default TimeLine