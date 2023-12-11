import { Button, Timeline } from "flowbite-react";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function ProgressSteps({ content }) {
  let i = 1;
  return (
    <Timeline>
      {content.map((contentItem, key) => {
        return (
          <Timeline.Item key={key}>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>Step {i++}</Timeline.Time>
              {/* <Timeline.Title className='text-gray-200'>
                        {contentItem.title}
                      </Timeline.Title> */}
              <Timeline.Body className="flex flex-col sm:flex-row md:space-x-2 space-y-4 items-center mt-9">
                <div className="rounded-full object-cover w-48 h-48">
                  {" "}
                  <Image
                    src={contentItem.imageUrl}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover rounded-full"
                  ></Image>
                </div>
                <div className="sm:w-1/2 flex flex-col space-y-3 text-main">
                  <p className="text-4xl font-bold">{contentItem.title}</p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: contentItem.description,
                    }}
                  ></p>
                </div>
              </Timeline.Body>
              {/* <Button color="gray">
                        <p>
                          Learn More
                        </p>
                        <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                      </Button> */}
            </Timeline.Content>
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
}
