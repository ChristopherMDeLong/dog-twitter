import Tweet from '../../src/components/Tweet';

describe('Tweet', () => {
  let id,
      handleClick,
      text,
      name,
      userPhoto,
      className,
      wrapper;

  beforeEach(() => {
    handleClick = jasmine.createSpy('handleClick spy');
    wrapper = mount(
      <Tweet
        id={2}
        handleClick={handleClick}
        name="BestDog"
        text="I do not like the cone of shame"
        userPhoto="http://fakedogurl.com/bestdog"
        className=""
      />
    );
  });

  it('should render a div tag', () =>{
    expect(wrapper.find('div')).toBePresent();
  });

  it('should render a div tag with the props', () =>{
    expect(wrapper.find('div').prop('className')).toEqual('tweet-box ');
    expect(wrapper.find('div').prop('onClick')).toEqual(handleClick);
  });

  it('should render an img tag', () => {
	  expect(wrapper.find('img')).toBePresent();
	});

	it('should render an img tag with the specific props', () => {
	  expect(wrapper.find('img').prop('src')).toEqual("http://fakedogurl.com/bestdog")
	});

	it('should render a span tag', () => {
	  expect(wrapper.find('span')).toBePresent();
	});

	it('should render a span tag with the text property value', () => {
	  expect(wrapper.find('span').text()).toBe("BestDog")
	});

	it('should render a p tag', () => {
	  expect(wrapper.find('p')).toBePresent();
	});

	it('should render a p tag with the text property value', () => {
	  expect(wrapper.find('p').text()).toBe("I do not like the cone of shame")
	});

	it('should invoke the onClick function from props when clicked', () => {
	  wrapper.simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });
})
