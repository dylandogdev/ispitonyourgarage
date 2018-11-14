import React, { Component } from 'react';
import {
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import {
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Post from "./Post";

const items = [
  {
    src: 'https://s2-ssl.dmcdn.net/sjnXI/x1080-OfE.jpg',
    altText: 'Tilda Swinton in Suspiria (2018)',
    caption: 'Tilda Swinton casts a spell in the new remake of the art-horror classic Suspiria. Read our review!',
    postId: 34
  },
  {
    src: 'https://www.news-24.it/wp-content/uploads/2018/10/Suspiria-Speciale-Giallo-allitaliana.jpg',
    altText: 'Suzy Banyon played by Jessica Harper in Suspiria (1977)',
    caption: 'Read our review of the 1977 classic Suspiria before you see the remake!',
    postId: 55
  },
  {
    src: 'https://musicart.xboxlive.com/6/cfb00cfa-0000-0000-0000-000000000009/504/image.jpg?w=1920&h=1080',
    altText: 'Tilda Swinton and Tom Hiddleston in Only Lovers Left Alive',
    caption: 'Spooky Action at a Distance: Tilda Swinton and Tom Hiddleston share an age-old romance in the spooky hangout movie Only Lovers Left Alive',
    postId: 52
  }
];

class SplashCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
        <Link to={`/post/${item.postId}`}>
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption}  />
        </Link>
        <Container>
          <HashRouter>
            <div>
              <Route path="/post/:postId" component={Post}/>
            </div>
          </HashRouter>
        </Container>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default SplashCarousel;
