import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";
import Image from "next/image";
import { Linkedin } from "react-feather";
import { cx } from "@/lib/utils";

const About: NextPage = () => {
  const iconProps = { className: "w-4 h-4" };

  return (
    <>
      <Page
        title="About Spark Study"
        description="Discover the vision, team, and mission behind Spark Study, your partner in transforming education."
      >
        <Prose>
          <p>
            Founded in early 2023, Spark Study represents a collaborative vision for the future of education, brought to life by a diverse team deeply rooted in the fields of technology, language, and academic excellence. With most of our founders hailing from Canada, and a significant part of our team comprising native French speakers from Quebec, our identity is a mosaic of cultures and languages, including the unique overseas perspective of our Chief Operating Officer, who is the former National Vice President of the NZISA (New Zealand International Students Association).
          </p>
          <p>
            At Spark Study, we are driven by the conviction that education can be transformed through innovation and technology. Our mission is to enhance the learning experience for students around the globe, particularly focusing on language learners and international students. We understand the challenges and complexities of education regulation and are dedicated to navigating these with our partners to provide more accessible, supportive, and effective educational environments.
          </p>
          <p>
            Our approach is rooted in the belief that by lowering the workload and strain on educators, we can foster an atmosphere of excellence and care. The core of our company beats with a passion for supporting students in their educational journey, ensuring they receive the care and resources they need to thrive in this new day and age. From AI-driven tools that assist in mental health support and pastoral care to digital tutors and teachers that provide enhanced learning outside the classroom, we are at the forefront of educational and institutional innovation.
          </p>
          <p>
            As we look to the future, we are excited about the possibilities that lie ahead. With a commitment to breaking down language barriers, enhancing student and faculty satisfaction, and even reducing dropout rates, Spark Study is poised to make a significant impact on the educational landscape. Join us as we embark on this journey to redefine what is possible in education, together.
          </p>
        </Prose>
      </Page>
      <div className="mt-12">
      <Page
        title="Core team"
        description="Excelling in many diverse areas, our team is excited to helping your institution spark new futures."
      >
        <Prose>
        <span className="flex justify-center space-x-4">
          <span className="flex-column w-80 h-60">
          <span className="flex inline-block align-text-bottom">
          <Image
            className="rounded-md"
            src="/avatar.png"
            width={48}
            height={48}
            alt="https://blog.spark.study/about"
            priority
          />
          </span>
          <b>Jordan Trowell</b>
          <p style={{fontSize:'10pt'}}>Head of Technology & CEO</p>
          </span>
          <span className="flex-column w-80 h-60">
          <Image
            className="rounded-md"
            src="/avatar.png"
            width={48}
            height={48}
            alt="https://blog.spark.study/about"
            priority
          />
          <b>Vaelyn Luo</b>
          <p style={{fontSize:'10pt'}}>Chief of Operations & CLO</p>
          </span>
        </span>
        <span className="flex justify-center space-x-4">
          <span className="flex-column w-80 h-60">
          <Image
            className="rounded-md"
            src="/avatar.png"
            width={48}
            height={48}
            alt="https://blog.spark.study/about"
            priority
          />
          <b>Alex Gauthier</b>
          <p style={{fontSize:'10pt'}}>Chief Marketing Officer</p>
          </span>
          <span className="flex-column w-80 h-60">
          <Image
            className="rounded-md"
            src="/avatar.png"
            width={48}
            height={48}
            alt="https://blog.spark.study/about"
            priority
          />
          <b>Emile Gauthier</b>
          <p style={{fontSize:'10pt'}}>Chief Networking Officer</p>
          </span>
        </span>
        </Prose>
      </Page>
      </div>
    </>
  );
};

export default About;
