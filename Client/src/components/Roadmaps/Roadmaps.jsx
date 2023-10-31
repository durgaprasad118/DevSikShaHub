import { Button, Timeline } from 'flowbite-react';
import { HiCalendar,HiArrowNarrowRight } from 'react-icons/hi';

export default function VerticalTimeline() {
  return (
    <Timeline className='mt-32 ml-10'>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title>
            Web Development
          </Timeline.Title>
          <Timeline.Body>
            <p>
              Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
              E-commerce & Marketing pages.
            </p>
          </Timeline.Body>
          <Button color="gray">
            <p>
              Learn More
            </p>
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title>
           Devops
          </Timeline.Title>
          <Timeline.Body>
            <p>
              All of the pages and components are first designed in Figma and we keep a parity between the two versions even
              as we update the project.
            </p>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>
            April 2022
          </Timeline.Time>
          <Timeline.Title>
            E-Commerce UI code in Tailwind CSS
          </Timeline.Title>
          <Timeline.Body>
            <p>
              Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
            </p>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  )
}


