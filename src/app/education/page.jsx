export default function Education() {
  const images = [
    {
      src: "/Images/Img1.JPG",
      alt: "Image 1",
    },
    {
      src: "/Images/Img7.JPG",
      alt: "Image 7",
    },
    {
      src: "/Images/Img3.JPG",
      alt: "Image 3",
    },
    {
      src: "/Images/Img4.JPG",
      alt: "Image 4",
    },
    {
      src: "/Images/Img5.JPG",
      alt: "Image 5",
    },
    {
      src: "/Images/Img6.JPG",
      alt: "Image 6",
    },
  ];

  const contentWithImage = [
    {
      title: "Recognized by reputed institutions",
      description:
        "Appreciations from reputed high schools and international schools in the Vasai-Virar area.",
      imageSrc: "/Images/educate.png",
    },
    {
      title: "Educational environment and co-curricular activities",
      description:
        "We provide a safe and secure environment for our students to learn and grow. Our students are encouraged to participate in various co-curricular activities like dance, music, art, and craft.",
      imageSrc: "/Images/educate.png",
    },
    {
      title: "Technology in the classroom",
      description:
        "We have a smart classroom with a projector and a computer. We use technology to enhance our students' learning experience.",
      imageSrc: "/Images/elearning.png",
    },
    {
      title: "Highly qualified and experienced teachers",
      description:
        "Our teachers are highly qualified and experienced. They are trained in the latest teaching methodologies and techniques.",
      imageSrc: "/Images/teacher.png",
    },
    {
      title: "Picnic and field trips",
      description:
        "We organize picnics and field trips for our students to give them a chance to explore the world around them.",
      imageSrc: "/Images/camping.png",
    },
    {
      title: "Annual day for students",
      description:
        "We organize an annual day for our students to showcase their talents and skills.",
      imageSrc: "/Images/flags.png",
    },
  ];

  return (
    <div className="bg-[#FFFFF2]" >
      {/* Preschool heading */}
      <section className="overflow-hidden bg-[#FFFFF2] sm:grid sm:grid-cols-2 pt-16 ">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-[#e3282c] md:text-3xl">
              The First Step to Success: Discover Pre-Primary Education that
              Makes a Difference
            </h2>

            <p className="hidden text-[#572d27] md:mt-4 md:block">
              More than just academics, we nurture the whole child. Play is at
              the heart of our pre-primary experience, providing opportunities
              for collaboration, problem-solving, and developing a strong sense
              of self. We foster a warm and inclusive community where every
              child feels valued and supported, building a foundation for
              empathy, resilience, and a lifelong love of learning.
            </p>
          </div>
        </div>

        <img
        
          width={500}
          height={500}
          alt="Student"
          src="/Images/Hero.webp"
          className="h-56 w-full rounded-sm object-cover sm:h-full"
        />
      </section>

      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-[#e3282c]">
              APEX Pre-Primary School
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#572d27]">
              We believe in the power of play-based learning to help children
              develop social, emotional, and cognitive skills. Through hands-on
              activities, creative expression, and positive reinforcement, we
              watch our little learners blossom.
            </p>
          </div>

          {contentWithImage.map((content, index) => {
            const { title, description, imageSrc } = content;
            const isImageLeft = index % 2;
            return isImageLeft ? (
              <div
                key={index}
                className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
              >
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
                  <img alt={index} src={imageSrc}/>
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-[#e3282c] text-xl title-font font-medium mb-2">
                    {title}
                  </h2>
                  <p className="text-[#02111B] leading-relaxed text-base">{description}</p>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
              >
                <div className="flex-grow sm:text-left  text-center mt-6 sm:mt-0">
                  <h2 className="text-[#e3282c] text-xl title-font font-medium mb-2">
                    {title}
                  </h2>
                  <p className="text-[#02111B] leading-relaxed text-base">{description}</p>
                </div>
                <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
                  <img alt={index} src={imageSrc}/>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-10 mx-10 bg-[#FFFFF2]">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#e3282c] sm:text-4xl">
              Picture Gallery
            </h2>
          </div>
        </div>

        <hr />

        <div className="mx-10 grid  grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 bg-[#FFFFF2]">
          {images.map((image, index) => (
            <div key={index} className="bg-[#FFFFF2] " >
              <img
                className="rounded-sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}

          <div></div>
        </div>
      </section>

    </div>
  );
}
