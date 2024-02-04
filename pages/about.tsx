import { useState } from 'react';
import Image from 'next/image';
import { Page } from '@/components/Page';
import { Prose } from '@/components/Prose';


const teamMembers = [
  {
    name: "Jordan Trowell",
    title: "Managing Director & Head of Technology",
    profilePicture: "/team/1.PNG",
    bio: "Jordan leads our technology vision and has been instrumental in shaping the product. With a background in software engineering and a passion for educational tech, he's driven by the challenge of making learning accessible to everyone."
  },
  {
    name: "Vaelyn Luo",
    title: "Head of Regulatory & Business Operations",
    profilePicture: "/team/2.PNG",
    bio: "Vaelyn oversees operations, ensuring our projects align with our mission. Her expertise in law and commitment to operational excellence help us navigate the complexities of the educational sector."
  },
  {
    name: "Alex Gauthier",
    title: "Head of Marketing",
    profilePicture: "/team/3.PNG",
    bio: "Alex directs our marketing strategy, enhancing our presence and engagement with educators and institutions worldwide. His insights into digital marketing and commitment to our vision make him a pivotal part of our team."
  },
  {
    name: "Emile Gauthier",
    title: "Head of Networking",
    profilePicture: "/team/4.PNG",
    bio: "Emile's expertise in building partnerships has been key to our growth. His network within the educational and tech communities supports our mission of bringing innovative solutions to educators and students alike."
  },
];


const About = () => {
  const [selectedMemberIndex, setSelectedMemberIndex] = useState<number | null>(null);

  const handleSelectMember = (index: number) => {
    setSelectedMemberIndex(index);
  };

  const handleNextMember = () => {
    setSelectedMemberIndex(prevIndex => prevIndex !== null ? (prevIndex + 1) % teamMembers.length : 0);
  };

  // Ensure selectedMemberIndex is valid before rendering the bio
  const isValidIndex = selectedMemberIndex !== null && selectedMemberIndex >= 0 && selectedMemberIndex < teamMembers.length;
  const selectedMember = isValidIndex ? teamMembers[selectedMemberIndex] : null;


  return (
    <>
    {selectedMemberIndex === null ? (
        <>
        <Page
          title="About Spark Study"
          description="Discover the vision, team, and mission behind Spark Study, your partner in transforming education."
        >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          src="/shield.png"
          width={300}
          height={300}
          alt="Spark Study AI for education"
          priority
        />
        </div>
        <Prose>
          <p>
            Founded in early 2023, Spark Study represents a collaborative vision for the future of education, brought to life by a diverse team deeply rooted in the fields of technology, language, and academic excellence. With most of our founders hailing from Canada, and a significant part of our team comprising native French speakers from Quebec, our identity is a mosaic of cultures and languages, including the unique overseas perspective of our Head of Regulatory & Business Operations, the former National Vice President of the NZISA (New Zealand International Students Association).
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
            <div className="flex justify-center space-x-4">
              <div className="flex flex-col items-left w-80 h-60 pl-8">
                <div className="flex items-center">
                  <Image
                    className="rounded-md"
                    src="/team/1.PNG"
                    width={74}
                    height={74}
                    alt="Jordan Trowell"
                    priority
                  />
                  <button onClick={() => handleSelectMember(0)} className="ml-4 py-2 px-4 rounded opacity-60 hover:opacity-100 transition-opacity duration-150">
                    Bio →
                  </button>
                </div>
                <b>Jordan Trowell</b>
                <p style={{fontSize:'10pt'}}>Managing Director & Head of Technology</p>
              </div>
              <div className="flex flex-col items-left w-80 h-60 pl-8">
                <div className="flex items-center">
                  <Image
                    className="rounded-md"
                    src="/team/2.PNG"
                    width={74}
                    height={74}
                    alt="Vaelyn Luo"
                    priority
                  />
                  <button onClick={() => handleSelectMember(1)} className="ml-4 py-2 px-4 rounded opacity-60 hover:opacity-100 transition-opacity duration-150">
                    Bio →
                  </button>
                </div>
                <b>Vaelyn Luo</b>
                <p style={{fontSize:'10pt'}}>Head of Regulatory & Business Operations</p>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-8">
              <div className="flex flex-col items-left w-80 h-60 pl-8">
                <div className="flex items-center">
                  <Image
                    className="rounded-md"
                    src="/team/3.PNG"
                    width={74}
                    height={74}
                    alt="Alex Gauthier"
                    priority
                  />
                  <button onClick={() => handleSelectMember(2)} className="ml-4 py-2 px-4 rounded opacity-60 hover:opacity-100 transition-opacity duration-150">
                    Bio →
                  </button>
                </div>
                <b>Alex Gauthier</b>
                <p style={{fontSize:'10pt'}}>Head of Marketing</p>
              </div>
              <div className="flex flex-col items-left w-80 h-60 pl-8">
                <div className="flex items-center">
                  <Image
                    className="rounded-md"
                    src="/team/4.PNG"
                    width={74}
                    height={74}
                    alt="Emile Gauthier"
                    priority
                  />
                  <button onClick={() => handleSelectMember(3)} className="ml-4 py-2 px-4 rounded opacity-60 hover:opacity-100 transition-opacity duration-150">
                    Bio →
                  </button>
                </div>
                <b>Emile Gauthier</b>
                <p style={{fontSize:'10pt'}}>Head of Networking</p>
              </div>
            </div>
          </Prose>
        </Page>
        </div>
      </>
    ) : isValidIndex && selectedMember ? (
    <div className="mt-12">
      <Page
        title={`${selectedMember.name}'s Bio`}
        description={`Learn more about ${selectedMember.name}, a key member of our team.`}
      >
        <Prose>
          <div className="text-center">
            <Image
              className="rounded-md inline-block"
              src={selectedMember.profilePicture}
              width={128}
              height={128}
              alt={selectedMember.name}
              priority
            />
            <div><b>{selectedMember.name}</b></div>
            <p style={{ fontSize: '12pt' }}>{selectedMember.title}</p>
            <p>{selectedMember.bio}</p>
            <div className="flex justify-around mt-4">
              <button onClick={() => setSelectedMemberIndex(null)} className="inline-block bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600">
                ← Back
              </button>
              <button onClick={handleNextMember} className="inline-block bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                Next Member →
              </button>
            </div>
          </div>
        </Prose>
      </Page>
    </div>
  ) : (
    <>
    </>
  )}
    </>
  );
};

export default About;
