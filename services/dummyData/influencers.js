const influencerType = {
  COMPANY : 'COMPANY',
  PERSON : 'PERSON'
};

const influencers = {
  'id001' : {
    name : 'Rakuten',
    imageUrl : '/static/images/rakuten-logo.png',
    type: influencerType.COMPANY,
    followers : 65003
  },
  'id002' : {
    name : 'QNB Group',
    imageUrl : '/static/images/qnb-logo.png',
    type: influencerType.COMPANY,
    followers : 87140
  },
  'id003' : {
    name : 'Bill Gates',
    type : influencerType.PERSON,
    imageUrl: '/static/images/billgates-logo.png',
    description : 'Co-Chair, Bill & Melinda Gates Foundations, ex CEO of microsoft',
    followers : 16436169
  },
  'id004' : {
    name : 'Bina Nusantara University',
    type: influencerType.COMPANY,
    imageUrl : '/static/images/bina-nusantara-logo.png',
    followers : 9264
  },
  'id005' : {
    name : 'Universitas Bina Nusantara (Binus University)',
    type: influencerType.COMPANY,
    imageUrl : '/static/images/bina-nusantara-logo.png',
    followers : 47277,
  },
  'id006' : {
    name : 'Universitas Bina Nusantara (Binus University)',
    type: influencerType.COMPANY,
    imageUrl : '/static/images/bina-nusantara-logo.png',
    followers : 59416,
  }
};

export default influencers;