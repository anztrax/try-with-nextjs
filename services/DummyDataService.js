import userProfiles from './dummyData/profiles';

class DummyDataService {
  constructor(){

  }
  getProfileData = (profileId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const profileData = userProfiles[profileId];
        resolve(profileData);
      }, 1000);
    });
  };

  getRecentPersons = (profileId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const { recentPersons } = userProfiles[profileId];
        resolve(recentPersons);
      }, 1000);
    });
  };
}

export default DummyDataService;