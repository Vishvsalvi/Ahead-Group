"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import "swiper/css";

const descriptionAndIcons = [
  {
    title: "Tiny Minds, Big Dreams: Pre-Primary School",
    description:
      "Give your child the best start in life with Ahead Group's Pre-Primary School. Our curriculum is designed to help your child develop their social, emotional, and cognitive skills, preparing them for the next step in their educational journey.",
    icon: "/Images/school.png",
  },
  {
    title: " Primary Education Beyond Boundaries: Primary School",
    description:
      "Experience education that goes beyond the classroom at Ahead Group's Primary School. Our dynamic approach to learning encourages curiosity and critical thinking, preparing students not just for exams but for the challenges of the ever-evolving world.",
    icon: "/Images/education.png",
  },
  {
    title: " Kick into Confidence: Taekwondo Classes",
    description:
      "Step into the world of confidence and discipline with Ahead Group's Taekwondo classes. Our experienced instructors blend the art of self-defense with character development, empowering you to kick your way to both physical and mental strength.",
    icon: "/Images/taekwondo.png",
  },
  {
    title: "Conquer Nature, Conquer Yourself: Adventure Camps/Treks",
    description:
      "Explore the great outdoors with Ahead Group's Adventure Camps and Treks. Our experienced instructors will guide you through the wilderness, helping you develop your physical and mental strength as you conquer nature and yourself.",
    icon: "/Images/hiking.png",
  },
  {
    title: "Develop, Thrive, Succeed: Holistic Development Programs",
    description:
      "Join Ahead Group's holistic development programs to unlock your full potential. From fostering creativity to building leadership skills, our programs go beyond academics, shaping well-rounded individuals ready to thrive in a competitive world.",
    icon: "/Images/leader.png",
  },
  {
    title: "Community Connection: Where Journeys Unite",
    description:
      "Become part of the Ahead Group community, a vibrant space where individuals connect, grow, and celebrate achievements. Whether it's through martial arts, education, adventure, or personal development, our community is a supportive network fostering lasting connections.",
    icon: "/Images/community.png",
  },
];

const images = ["./Images/Image4.jpg", "/Images/SliderImages/Slide1.jpg", "Images/SliderImages/Slide2.jpg", "Images/Advent_9.jpg"];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16 bg-[#FFFFF2]">
      <div>
        {/* // 50% on small screens and 33% on larger screens. */}

        <Carousel
          opts={{
            align: "start",
            loop: true,
            items: 1, // Set the number of items to display to 1
          }}
          className="mx-16" // Set the height to 75% of the screen
        >
          <CarouselContent className="rounded-md" >
            {images.map((item, index) => (
              <CarouselItem key={index} className="md:w-1/1 lg:w-1/1 rounded-md">
                <img
                  alt={index}
                  src={item}
                  // style={{ width: "100%", objectFit: "cover" }}
                  className="w-full h-[28rem] md:h-[23rem] lg:h-[35rem] xl:h-[42rem] object-cover rounded-md"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <section className="mt-5 ">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-[#e3282c]  text-3xl font-bold sm:text-4xl">
              What is Ahead Group ?
            </h2>

            <p className="mt-4 text-[#572d27]">
              Ahead Group is a group of enthusiastic people who come together
              and share their great ideas, thoughts and views. Ahead Group
              spreads the importance of health, education, adventure and sports
              development and accordingly conducts activities for the same.
              Plans and projects are designed to empower youth with knowledge
              and skills that will help them to make wise life choices.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {descriptionAndIcons.map((item, index) => (
              <div
                key={index}
                className="bg-[#fffff2] border border-gray flex items-start gap-4 transition-all duration-300 ease-in-out hover:shadow-md rounded-md py-4 px-4"
              >
                <span className="shrink-0 rounded-lg p-4">
                  <img alt={item.icon} src={item.icon} className="h-12" />
                </span>

                <div>
                  <h2 className="text-lg font-bold text-[#572d27] ">
                    {item.title}
                  </h2>

                  <p className="mt-1 text-sm text-[#572d27]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark:bg-gray-900">

        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-bold text-center text-[#e3282c] capitalize lg:text-4xl dark:text-white">
            Our Directors Vision
          </h1>

          <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">

            <div className=" hover:shadow-md shadow-sm p-6 bg-[#572d27] rounded-lg dark:bg-gray-800 md:p-8">
              <p className="leading-loose text-white ">
                “As the Director of Ahead Group, my vision is to pioneer a paradigm shift in the adventure sports and camps industry. I aspire to create an organization that transcends conventional boundaries, providing not just experiences but transformative journeys for individuals and families alike. Through innovation, inclusivity, and a relentless commitment to safety, I envision Ahead Group as the catalyst for fostering a global community of adventure enthusiasts.”
              </p>

              <div className="flex items-center mt-6">
                <div className="mx-4">
                  <h1 className="font-semibold text-white">Paresh Raut</h1>
                  <span className="text-sm text-white dark:text-gray-300">
                    Director at Ahead Group
                  </span>
                </div>
              </div>
            </div>

            <div className="shadow-sm  hover:shadow-md p-6 bg-white rounded-lg dark:bg-gray-800 md:p-8">
              <p className="leading-loose text-[#572d27] dark:text-gray-300">
                “As a Director at Ahead Group, my vision revolves around cultivating an environment where adventure becomes a way of life. I am dedicated to establishing Ahead Group as the epitome of family-friendly adventure, where individuals of all ages discover the joy of pushing their boundaries in a secure and welcoming setting. Our vision extends beyond thrilling activities; it encompasses building a tight-knit community that shares stories around campfires and forms bonds that withstand the test of time.”
              </p>

              <div className="flex items-center mt-6">
                <div className="mx-4">
                  <h1 className="font-semibold text-[#e3282c]">Prakash Ghadi</h1>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                  Director at Ahead Group
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
