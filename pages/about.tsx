import { useState } from 'react';
import Image from 'next/image';
import { Page } from '@/components/Page';
import { Prose } from '@/components/Prose';


const teamMembers = [
  {
    name: "Jordan Trowell",
    title: "Managing Director & Head of Technology",
    profilePicture: "/team/1.PNG",
    bio: "Highly ambitious and knowledgable software engineer, Jordan is a visionary with a knack for presenting technology-driven solutions that are elegant, helpful and user-friendly. From teaching himself animation when he was twelve to starting up his first agency when he was seventeen, he has a proven track record of being empathetic to customer needs and building the solutions that they want. \n\n Inspired by the challenges he overcame during his education journey, Jordan co-founded Spark Study to make learning accessible to everyone and at all levels. \n\n At Spark Study, Jordan leads the team as well as our product, branding and development."
  },
  {
    name: "Vaelyn Luo",
    title: "Head of Regulatory & Business Operations",
    profilePicture: "/team/2.PNG",
    bio: "Vaelyn has spent close to a decade in the tertiary education sector in Oceania. She was part of the establishment team at the New Zealand International Students’ Association, lobbying successfully for improved wellbeing of international students in Australia and New Zealand, with their Australian counterpart. She managed multi-million-dollar tertiary education funding projects for the Crown, before starting her own management consultancy and subsequently, Spark Study. \n\n She currently helms Spark Study’s business operations, including corporate and regulatory matters. Her expertise helps us navigate the complexities of the education sector. She has a background in software development and law, a rare but highly useful combination. "
  },
  {
    name: "Alex Gauthier",
    title: "Head of Marketing",
    profilePicture: "/team/3.PNG",
    bio: "Self-driven hustlers with his twin brother, Emile Gauthier, the Gauthier brothers are Spark Engine’s sales and marketing power engines. \n\n Alex directs our marketing strategy and manages our social media platforms to enhance our presence. He is also the first point of contact with educators and industry stakeholders. Well-versed in French and English, Alex connects seamlessly with our stakeholders in North America. \n\n His insights into digital marketing and commitment to our vision makes him a pivotal part of our team."},
  {
    name: "Emile Gauthier",
    title: "Head of Networking",
    profilePicture: "/team/4.PNG",
    bio: "Prior to Spark Study, Emile and his twin brother, Alex Gauthier, founded their sales and marketing start-up in the Web3 space. Growing their Web3 community platform from zero to thousands of followers from scratch, they are gurus in organic engagement. \n\n Working in tandem with Alex, Emile provides useful customer insights and research into education and technology. His network within the education and tech communities supports our mission of bringing innovation to the sector."},
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width:'100%' }}>
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
            Spark Study was founded in 2023 by a team of young professionals who are deeply
            passionate about transforming the education sector for future generations of students.
          </p>
          <p>
            At Spark Study, we are driven by the conviction that education must be transformed
            through innovation and technology to improve the learning experience of our digital-native
            students. Our mission is to enhance the student experience around the globe, particularly
            focusing on removing barriers for accessing student support, optimizing course offerings,
            teaching and assessment.
          </p>
          <p>
            From AI-driven tools that assist in mental health support and pastoral care to digital tutors
            and teachers that provide enhanced learning outside the classroom, we are at the forefront
            of educational and institutional innovation. We empower institutions with the tools they
            need to scale, whilst lowering the strain on educators. Together, we can help institutions
            foster an atmosphere of excellence and care.
          </p>
          <p>
            Each member of our team has a unique education background that fuels our passion behind
            Spark Study. Our team comprises of native French speakers from Quebec (Canada), first in
            the family to enter higher education, migrant and international students. Our identity is a
            mosaic of cultures and languages, as well as tertiary education perspectives from Australia
            to North America.
          </p>
          <p>
            Significantly, we also have tertiary education background, spanning from international
            student advocacy to the management of multi-million-dollar tertiary education funding
            projects. We understand the challenges and complexities of education regulation and are
            dedicated to navigating these with our partners to provide more accessible, supportive, and
            effective educational environments.
          </p>
          <p>
            As we look to the future, we are excited about the possibilities that lie ahead. The global
            pandemic has disrupted the education sector, but at the same time, it has also provided the
            sector a renewed sense of urgency to adopt digital teaching platforms to enrich learning.
            The momentum for innovation is growing. Together, we can make significant impact on the
            education landscape.
          </p>
          <p>
          <b>
            There is no better time than now.
          </b>
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
            <p style={{whiteSpace:'pre-line'}}>{selectedMember.bio}</p>
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
