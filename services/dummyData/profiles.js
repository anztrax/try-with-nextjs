import influencers from './influencers';
import recentPersons from './recentPersons';

const userProfiles = {
  'id001' : {
    fullName : 'Christian Hanggra',
    title : 'Tech Enthusiast',
    viewedProfile : 80,
    connections : 1133,
    recentPersons
  },
  'id002' : {
    fullName : 'Hantze Sudarma',
    title : 'Laboratory Coordinator',
    connections : 510,
    followers : 1151,
    placeImageUrl : '/static/images/binus-logo.png',
    experiences : [
      {
        title : 'Lab Coordinator',
        place : 'Binus International University',
        startDate : 'sept 2015',
        endDate : null,
        summaryDetail : `
          <div>Fx Mall</div>
          
          <div>Responsibility : </div>
          <ul>
            <li>Manage All of lab's activity in Binus International University</li>
            <li>Assign Teaching Assistant (TA) to help lecturer</li>
            <li>Create Training and event for the TA</li>
            <li>Prepare student to compete in the various competition</li>
            <li>create, update and renew the syllabus course in Computer Science Binus International</li>
          </ul>
        `
      }
    ],
    educations: [
      {
        placeImageUrl : '/static/images/binus-logo.png',
        title : 'Magister Teknik Informatika (MTI)',
        major : 'Computer Science',
        GPA : '3,5',
        startYear : '2011',
        endYear : '2013',
        activitiesAndSocieties : [
          'Articifial Intelligence',
          'Database System',
          'System Engineering',
          'Disaster Recovery Management',
          'Network System'
        ],
        extras : ''
      },
      {
        placeImageUrl : '/static/images/binus-logo.png',
        title: `Bachelor's degree`,
        major : 'Information Technology',
        GPA : '3,5',
        startYear : '2007',
        endYear : '2011',
        activitiesAndSocieties : [
          'Articifial Intelligence',
          'Database System',
          'System Engineering',
          'Disaster Recovery Management',
          'Network System'
        ],
        extras : 'Learn how to a programmer, system analyst and project manager'
      },
    ],
    volunteerExperience : [
      {
        title : 'Lecturer',
        companyName : 'PT. Lautan Luas',
        startDate : 'June 2013',
        endDate : 'July 2013',
        companyImageUrl : '/static/images/lautan-luas-logo.png',
      }
    ],
    accomplishments : {
      courses : [
        {
          title:  'Algorithm and Programming',
        },
        {
          title: 'Database System',
        },
        {
          title: 'Enterprise Application',
        },
        {
          title: 'Object Oriented Programming',
        },
        {
          title: 'Program Design Method',
        },
        {
          title: 'Web Programming'
        }
      ],
      honorsAndAwards : [
        {
          title : 'Expert Indonesia',
        },
        {
          title : 'Expert Indonesia'
        },
        {
          title: 'Expert Indonesia',
        },
        {
          title : 'Secretary of Brick Laying Competition'
        },
        {
          title : 'Best Research Interest Group Topics'
        }
      ]
    },
    interests : [
      influencers['id001'],
      influencers['id002'],
      influencers['id003'],
      influencers['id004'],
      influencers['id005'],
      influencers['id006']
    ],
    recentPersons
  },
};

export default userProfiles;