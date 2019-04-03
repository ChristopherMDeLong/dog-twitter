import TwitterFeed from '../../src/containers/TwitterFeed';
import Tweet from '../../src/components/Tweet';

describe('TwitterFeed', () => {
  let wrapper;
  let data = [{
    id: 1,
    text: "This doesn't look like Kansas",
    user: {
       name: 'Todo',
       profile_image_url: 'http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg'
    }
  }]

  beforeEach(() => {
    wrapper = mount(
      <TwitterFeed
        data={data}
      />
    )
  });


  it('should return true', () => {
    expect(true).toEqual(true);
  })

})
