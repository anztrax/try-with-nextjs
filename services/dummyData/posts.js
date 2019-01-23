const userProfile1 ={
  fullName : 'Christian Hanggra',
  title : 'Tech Enthusiast',
  imageUrl : '/static/images/christian-hanggarra-image.jpeg',
};
const userProfile2 = {
  fullName : 'Hantze Sudarma',
  title : 'Laboratory Coordinator',
  imageUrl : '/static/images/hantze-image.jpeg'
};
const userProfile3 = {
  fullName : 'Wirjadi Lorens',
  title : 'Founder of OKTAGON',
  imageUrl : '/static/images/wirjadi-lorens.jpeg'
};

const posts = [
  {
    name : userProfile3.fullName,
    title : userProfile3.title,
    imageUrl : userProfile3.imageUrl,
    postDate : '2019-01-22',
    postImageUrl : '/static/images/post1-image.jpg',
    postTitle: `Artificial Intelligence (AI), Dari Teknologi Abstrak Hingga Jadi 'Otak' Binis`,
    postSource : 'dialy.oktagon.co.id',
    postUrl : 'https://daily.oktagon.co.id/penggunaan-artificial-intelligence-yang-mempermudah-pekerjaan/',
    like : 1,
  },
  {
    name : userProfile1.fullName,
    title : userProfile1.title,
    imageUrl : userProfile1.imageUrl,
    postDate : '2019-01-22',
    postImageUrl : '/static/images/post1-image.jpg',
    postTitle: `Artificial Intelligence (AI), Dari Teknologi Abstrak Hingga Jadi 'Otak' Binis`,
    postSource : 'dialy.oktagon.co.id',
    postUrl : 'https://medium.com/s/story/nothing-can-stop-google-duckduckgo-is-trying-anyway-718eb7391423',
    like : 10,
  },
  {
    name : userProfile1.fullName,
    title : userProfile1.title,
    imageUrl : userProfile1.imageUrl,
    postDate : '2019-01-22',
    postImageUrl : '/static/images/post1-image.jpg',
    postTitle: `Artificial Intelligence (AI), Dari Teknologi Abstrak Hingga Jadi 'Otak' Binis`,
    postSource : 'dialy.oktagon.co.id',
    postUrl : 'https://medium.com/crowdbotics/how-to-build-a-serverless-backend-with-aws-lambda-and-nodejs-e0d1257086b4',
    like : 20,
  },
  {
    name : userProfile2.fullName,
    title : userProfile2.title,
    imageUrl : userProfile2.imageUrl,
    postDate : '2019-01-22',
    postImageUrl : '/static/images/post1-image.jpg',
    postTitle: `Artificial Intelligence (AI), Dari Teknologi Abstrak Hingga Jadi 'Otak' Binis`,
    postSource : 'dialy.oktagon.co.id',
    postUrl : 'https://medium.com/s/story/nothing-can-stop-google-duckduckgo-is-trying-anyway-718eb7391423',
    like : 20,
  },
];

export default posts
