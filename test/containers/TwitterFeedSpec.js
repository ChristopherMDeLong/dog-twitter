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
    spyOn(TwitterFeed.prototype, 'handleSelectedTweet').and.callThrough();
    wrapper = mount(
      <TwitterFeed
        data={data}
      />
    )
  });


  it('should return true', () => {
    expect(true).toEqual(true);
  })

  it('should mount initially with selectedTweetId set to null', () =>{
    expect(wrapper.state()).toEqual({selectedTweetId: null });
  });

  it('should render a Tweet Componet', () =>{
    expect(wrapper.find(Tweet)).toBePresent();
  });

  it('should render the Tweet Component with specific props when it is not selected', ()=>{
    expect(wrapper.find(Tweet).props()).toEqual({
      id: 1,
      text: "This doesn't look like Kansas",
      name: 'Todo',
      userPhoto: 'http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg',
      handleClick: jasmine.any(Function),
      className: ""
    })
  })

  it('should render the Tweet Componet with specific props when it is selected', () =>{
    wrapper.setState({ selectedTweetId: 1 })
    expect(wrapper.find(Tweet).props()).toEqual({
      id: 1,
      text: "This doesn't look like Kansas",
      name: 'Todo',
      userPhoto: 'http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg',
      handleClick: jasmine.any(Function),
      className: "selected"
    })
  })

  describe('handleSelectedTweet', () =>{
    it('should be invoked when the onClick property of the Tweet component is called', () =>{
      wrapper.find(Tweet).props().handleClick();
      expect(TwitterFeed.prototype.handleSelectedTweet).toHaveBeenCalled();
    });

    it('should change the selectedTweetId property in the state to the id of the selected Tweet', () =>{
      wrapper.find(Tweet).props().handleClick();
      expect(wrapper.state()).toEqual({ selectedTweetId: 1 })
    });
  });
})
